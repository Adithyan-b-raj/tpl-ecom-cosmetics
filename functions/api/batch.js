import { getBatchLots, toggleBatchQuarantine, updateBatchStock } from './_store.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'POST') {
    try {
      const payload = await request.json();
      const { action, batchId, quantity } = payload;

      if (action === 'toggle_quarantine') {
        const updated = toggleBatchQuarantine(batchId);
        return new Response(JSON.stringify({ success: true, batch: updated, lots: getBatchLots() }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      if (action === 'update_stock') {
        const updated = updateBatchStock(batchId, quantity);
        return new Response(JSON.stringify({ success: true, batch: updated, lots: getBatchLots() }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ error: 'UNKNOWN_ACTION' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'INVALID_BATCH_PAYLOAD', message: err.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  const lots = getBatchLots();
  const activeCount = lots.filter(l => l.computed_status === 'active').length;
  const warningCount = lots.filter(l => l.computed_status === 'near_expiry').length;
  const quarantineCount = lots.filter(l => l.computed_status === 'quarantined').length;
  const expiredCount = lots.filter(l => l.computed_status === 'expired').length;

  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    module: 'Formulation Batch & Expiry Tracker',
    summary: {
      total_lots: lots.length,
      active_fresh: activeCount,
      near_expiry: warningCount,
      quarantined: quarantineCount,
      expired: expiredCount
    },
    lots
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
