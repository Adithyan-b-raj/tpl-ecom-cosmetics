import { calculateBundle } from './_store.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'POST') {
    try {
      const payload = await request.json();
      const itemIds = payload.items || [];
      const result = calculateBundle(itemIds);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'INVALID_BUNDLE_PAYLOAD', message: err.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // GET: Default 3-Piece Regimen calculation
  const defaultRoutine = ['PRD-CLN-01', 'PRD-TRT-02', 'PRD-MST-03'];
  const calc = calculateBundle(defaultRoutine);
  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    module: '3-Piece Apothecary Routine Bundle Engine',
    routineDiscountRate: 15,
    description: 'Select 1 Cleanse + 1 Treat + 1 Moisturize to automatically activate the 15% Apothecary Routine Discount.',
    example: calc
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
