import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function parsePaddleSignature(header: string) {
  const parts = header.split(";");
  const timestamp = parts
    .map((part) => part.split("="))
    .find(([key]) => key === "ts")?.[1];

  const signatures = parts
    .map((part) => part.split("="))
    .filter(([key]) => key === "h1")
    .map(([, value]) => value)
    .filter(Boolean);

  return { timestamp, signatures };
}

function timingSafeHexEqual(a: string, b: string) {
  try {
    const aBuffer = Buffer.from(a, "hex");
    const bBuffer = Buffer.from(b, "hex");
    if (aBuffer.length !== bBuffer.length) return false;
    return crypto.timingSafeEqual(aBuffer, bBuffer);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("Missing PADDLE_WEBHOOK_SECRET");
    return Response.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signatureHeader = request.headers.get("paddle-signature") || "";

  const { timestamp, signatures } = parsePaddleSignature(signatureHeader);
  if (!timestamp || signatures.length === 0) {
    return Response.json({ error: "Missing Paddle signature" }, { status: 401 });
  }

  const timestampNumber = Number(timestamp);
  if (!Number.isFinite(timestampNumber)) {
    return Response.json({ error: "Invalid timestamp" }, { status: 401 });
  }

  // Reject very old events to reduce replay risk while allowing normal network/server delay.
  const ageSeconds = Math.abs(Math.floor(Date.now() / 1000) - timestampNumber);
  if (ageSeconds > 300) {
    return Response.json({ error: "Expired webhook" }, { status: 401 });
  }

  const signedPayload = `${timestamp}:${rawBody}`;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(signedPayload, "utf8")
    .digest("hex");

  const valid = signatures.some((signature) =>
    timingSafeHexEqual(expected, signature)
  );

  if (!valid) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: {
    event_type?: string;
    data?: {
      id?: string;
      status?: string;
      customer_id?: string | null;
    };
  };

  try {
    event = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // We currently use the webhook as the trusted server-side confirmation/log.
  // The actual download endpoint independently verifies the transaction with Paddle API.
  if (event.event_type === "transaction.completed") {
    console.log("Paddle transaction completed:", event.data?.id);
  }

  return Response.json({ received: true });
}

export async function GET() {
  return Response.json({
    ok: true,
    endpoint: "BaiheAI Paddle webhook",
  });
}
