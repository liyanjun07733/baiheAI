import { SERVER_PRODUCTS } from "../_products.generated";

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

async function getVerifiedTransaction(transactionId: string) {
  const apiKey = process.env.PADDLE_API_KEY;

  if (!apiKey) {
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
      response: Response.json({ error: "Order not found" }, { status: 404 }),
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
  const hasRefundOrDispute =
    amountIsPositive(breakdown?.refund) ||
    amountIsPositive(breakdown?.chargeback);

  if (hasRefundOrDispute) {
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

  const purchasedPriceIds = new Set(
    (transaction.items || [])
      .filter((item) => (item.quantity ?? 0) > 0)
      .map((item) => item.price?.id)
      .filter((value): value is string => Boolean(value))
  );

  const purchasedProducts = SERVER_PRODUCTS.filter((product) =>
    purchasedPriceIds.has(product.priceId)
  );

  if (purchasedProducts.length === 0) {
    return {
      ok: false as const,
      response: Response.json(
        { error: "This order does not contain a registered BaiheAI product" },
        { status: 403 }
      ),
    };
  }

  return { ok: true as const, transaction, purchasedProducts };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const transactionId = url.searchParams.get("transaction_id")?.trim() || "";
  const mode = url.searchParams.get("mode") || "download";
  const productSlug = url.searchParams.get("product")?.trim() || "";

  if (!/^txn_[a-z0-9]+$/i.test(transactionId)) {
    return Response.json(
      { error: "Missing or invalid transaction ID" },
      { status: 400 }
    );
  }

  const verification = await getVerifiedTransaction(transactionId);
  if (!verification.ok) return verification.response;

  if (mode === "status") {
    return Response.json({
      ready: true,
      transaction_id: transactionId,
      products: verification.purchasedProducts.map((product) => ({
        slug: product.slug,
        code: product.code,
        name: product.name,
        version: product.version,
        fileName: product.fileName,
        pagePath: product.pagePath,
        downloadUrl: `/api/paddle/download?transaction_id=${encodeURIComponent(
          transactionId
        )}&product=${encodeURIComponent(product.slug)}`,
      })),
    });
  }

  let product = productSlug
    ? verification.purchasedProducts.find((item) => item.slug === productSlug)
    : verification.purchasedProducts.length === 1
      ? verification.purchasedProducts[0]
      : undefined;

  if (!product) {
    return Response.json(
      {
        error:
          verification.purchasedProducts.length > 1
            ? "Multiple products are available. Specify the product parameter."
            : "Requested product is not included in this order",
      },
      { status: 400 }
    );
  }

  const fileBytes = new Uint8Array(Buffer.from(product.base64, "base64"));

  return new Response(fileBytes, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${product.fileName.replace(/"/g, "")}"`,
      "Content-Length": String(fileBytes.byteLength),
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
