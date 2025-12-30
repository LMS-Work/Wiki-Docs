export async function onRequest() {
  return new Response(
    JSON.stringify({ ok: true, ts: new Date().toISOString() }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
      },
    },
  );
}
