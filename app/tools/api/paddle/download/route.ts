import {
  QC01_PACKAGE_BASE64,
  QC01_PACKAGE_FILENAME,
} from "../_qc01Package";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type PaddleAdjustment = {
  id?: string;
  action?: string;
  status?: string;
  type?: string;
};

type PaddleTransaction = {
  id?: string;
  status?: string;
  items?: Array<{
    quantity?: number;
    price?: {
      id?: string;
    };
  }>;
  adjustments?: PaddleAdjustment[];
};

function hasBlockingAdjustment(adjustments?: PaddleAdjustment[]) {
  if (!Array.isArray(adjustments)) return false;

  return adjustments.some((adjustment) => {
    const action = adjustment.action || "";
    const status = adjustment.status || "";

    const blocksByAction =
      action === "refund" ||
      action === "chargeback" ||
      action === "chargeback_warning";

    const isActive =
      status === "pending_approval" ||
      status === "approved";

    return blocksByAction && isActive;
  });
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

  // Include Paddle adjustments so refunded / disputed orders
  // cannot keep downloading the paid product.
  const paddleResponse = await fetch(
    `https://api.paddle.com/transactions/${encodeURIComponent(
      transactionId
    )}?include=adjustments`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!paddleResponse.ok) {
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

  // Block refunded, refund-pending, or disputed transactions.
  if (hasBlockingAdjustment(transaction.adjustments)) {
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
