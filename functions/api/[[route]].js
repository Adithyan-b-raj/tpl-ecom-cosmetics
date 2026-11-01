export async function onRequest() {
  return new Response(JSON.stringify({ service: 'tpl-ecom-cosmetics', status: 'ok', items: [{"id":"COS-6101","name":"Divya Menon (Kochi)","phone":"919847011223","detail":"3-Step Glow Routine (Cleanser + Kumkumadi Serum + SPF 50) • Batch #B26-09","status":"DISPATCHED","amount":"₹2,376"},{"id":"COS-6102","name":"Nandini Rao (Bangalore)","phone":"919447022334","detail":"Mysore Sandalwood EDP + Bakuchiol Cream • Gift Wrapped","status":"PACKED","amount":"₹3,940"},{"id":"COS-6103","name":"Boutique Counter POS #19","phone":"919895033445","detail":"2x Rosemary Scalp Elixir • In-Store Skin Consult","status":"POS PAID","amount":"₹2,300"}] }), {
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120' }
  });
}
