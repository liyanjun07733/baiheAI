import {
  QC01_PACKAGE_BASE64,
  QC01_PACKAGE_FILENAME,
} from "../_qc01Package";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PaddleTransaction = {
  id?: string;
  status?: string;
  items?: Array<{
    quantity?: number;
    price?: {
      id?: string;
    };
  }>;
  adjustments_totals?: {
    breakdown?: {
      credit?: string;
      refund?: string;
      chargeback?: string;
    };
  };
};

function amountIsPositive(value?: string) {
  if (!value) return false;
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0;
}

async function verifyTransaction(transactionId: string) {
  const apiKey = process.env.PADDLE_API_KEY;
  const expectedPriceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;

  if (!apiKey || !expectedPriceId) {
    return {
      ok: false as const,
      response: Response.json(
        { error: "Download service is not configured" },
        { status: 500 }
      ),
    };
  }

  const paddleResponse = await fetch(
    `https://api.paddle.com/transactions/${encodeURIComponent(
      transactionId
    )}?include=adjustments_totals`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!paddleResponse.ok) {
    const body = await paddleResponse.text().catch(() => "");
    console.error("Paddle transaction lookup failed:", paddleResponse.status, body);

    return {
      ok: false as const,
      response: Response.json(
        { error: "Unable to verify this order" },
        { status: paddleResponse.status === 404 ? 404 : 502 }
      ),
    };
  }

  const payload = (await paddleResponse.json()) as {
    data?: PaddleTransaction;
  };

  const transaction = payload.data;

  if (!transaction || transaction.id !== transactionId) {
    return {
      ok: false as const,
      response: Response.json(
        { error: "Order not found" },
        { status: 404 }
      ),
    };
  }

  if (transaction.status !== "completed") {
    return {
      ok: false as const,
      response: Response.json(
        {
          error: "Payment is still being confirmed",
          status: transaction.status || "unknown",
        },
        { status: 409 }
      ),
    };
  }

  const breakdown = transaction.adjustments_totals?.breakdown;

  const hasRefund =
    amountIsPositive(breakdown?.refund) ||
    amountIsPositive(breakdown?.chargeback);

  if (hasRefund) {
    return {
      ok: false as const,
      response: Response.json(
        {
          error:
            "This order has been refunded or disputed. Product download is no longer available.",
        },
        { status: 403 }
      ),
    };
  }

  const hasExpectedProduct =
    Array.isArray(transaction.items) &&
    transaction.items.some(
      (item) =>
        item.price?.id === expectedPriceId &&
        (item.quantity ?? 0) > 0
    );

  if (!hasExpectedProduct) {
    return {
      ok: false as const,
      response: Response.json(
        { error: "This order does not include QC-01 Professional Edition" },
        { status: 403 }
      ),
    };
  }

  return { ok: true as const, transaction };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const transactionId = url.searchParams.get("transaction_id")?.trim() || "";
  const mode = url.searchParams.get("mode") || "download";

  if (!/^txn_[a-z0-9]+$/i.test(transactionId)) {
    return Response.json(
      { error: "Missing or invalid transaction ID" },
      { status: 400 }
    );
  }

  const verification = await verifyTransaction(transactionId);
  if (!verification.ok) return verification.response;

  if (mode === "status") {
    return Response.json({
      ready: true,
      transaction_id: transactionId,
      product: "QC-01 Professional Edition",
    });
  }

  const fileBytes = new Uint8Array(
    Buffer.from(QC01_PACKAGE_BASE64, "base64")
  );

  return new Response(fileBytes, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${QC01_PACKAGE_FILENAME}"`,
      "Content-Length": String(fileBytes.byteLength),
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
