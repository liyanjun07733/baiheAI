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
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const transactionId = url.searchParams.get("transaction_id")?.trim() || "";

  if (!/^txn_[a-z0-9]+$/i.test(transactionId)) {
    return Response.json(
      { error: "Missing or invalid transaction ID" },
      { status: 400 }
    );
  }

  const apiKey = process.env.PADDLE_API_KEY;
  const expectedPriceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;

  if (!apiKey || !expectedPriceId) {
    console.error("Missing Paddle server configuration");
    return Response.json(
      { error: "Download service is not configured" },
      { status: 500 }
    );
  }

  const paddleResponse = await fetch(
    `https://api.paddle.com/transactions/${encodeURIComponent(transactionId)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!paddleResponse.ok) {
    console.error(
      "Paddle transaction lookup failed:",
      paddleResponse.status,
      await paddleResponse.text()
    );
    return Response.json(
      { error: "Unable to verify this order" },
      { status: paddleResponse.status === 404 ? 404 : 502 }
    );
  }

  const payload = (await paddleResponse.json()) as {
    data?: PaddleTransaction;
  };
  const transaction = payload.data;

  if (!transaction || transaction.id !== transactionId) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  // Do not release the product until Paddle says the transaction is completed.
  if (transaction.status !== "completed") {
    return Response.json(
      {
        error: "Payment is still being confirmed",
        status: transaction.status || "unknown",
      },
      { status: 409 }
    );
  }

  // Ensure the completed transaction is for the QC-01 Professional price.
  const hasExpectedProduct = Array.isArray(transaction.items)
    && transaction.items.some(
      (item) =>
        item.price?.id === expectedPriceId &&
        (item.quantity ?? 0) > 0
    );

  if (!hasExpectedProduct) {
    return Response.json(
      { error: "This order does not include QC-01 Professional Edition" },
      { status: 403 }
    );
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
