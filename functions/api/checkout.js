import { processCheckout, getOrders } from './_store.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'POST') {
    try {
      const payload = await request.json();
      const result = processCheckout(payload);
      return new Response(JSON.stringify(result), {
        status: result.status || 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'CHECKOUT_FAILED', message: err.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // GET: Return recent apothecary orders
  const orders = getOrders();
  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    module: 'Apothecary Orders & POS Dispense Ledger',
    total_orders: orders.length,
    orders
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
