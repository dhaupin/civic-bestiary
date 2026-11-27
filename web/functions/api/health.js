// Pages Function: GET /api/health - the house "prove the Functions wire works"
// canary. Static JSON, no secrets: if this 404s in production, the Functions
// directory is not being picked up and the Cloudflare build settings are wrong.
export async function onRequestGet(context) {
  return Response.json(
    {
      ok: true,
      name: context.env.SITE_NAME || 'civic-bestiary',
      service: 'landing',
      ts: new Date().toISOString(),
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
