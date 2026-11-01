import { getCatalog, getBatchLots, getConsultationLeads, getOrders } from './_store.js';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api\/?/, '');

  if (path === 'health' || path === '') {
    const catalog = getCatalog();
    const lots = getBatchLots();
    const leads = getConsultationLeads();
    const orders = getOrders();

    return new Response(JSON.stringify({
      service: 'tpl-ecom-cosmetics',
      status: 'ok',
      archetype: 'apothecary-minimalist',
      version: '2026.11',
      counts: {
        products: catalog.length,
        batch_lots: lots.length,
        consultation_leads: leads.length,
        orders: orders.length
      },
      endpoints: [
        '/api/products',
        '/api/quiz',
        '/api/batch',
        '/api/bundle',
        '/api/checkout',
        '/api/leads'
      ]
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=30, s-maxage=60'
      }
    });
  }

  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    error: 'ROUTE_NOT_FOUND',
    path
  }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}
