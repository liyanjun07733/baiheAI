export async function GET() {
  return Response.json({ error: "Sandbox endpoint disabled" }, { status: 404 });
}
