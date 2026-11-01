import { processSkinQuiz } from './_store.js';

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'POST') {
    try {
      const payload = await request.json();
      const result = processSkinQuiz(payload);
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'INVALID_QUIZ_PAYLOAD', message: err.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  // GET: Return quiz structure & diagnostics metadata
  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    module: 'Skin Diagnostic Engine v2',
    steps: [
      {
        step: 1,
        title: 'Skin Type Baseline',
        options: ['Sensitive / Reactive', 'Oily / Combination', 'Dry / Barrier-Impaired', 'Mature / Photo-Damaged']
      },
      {
        step: 2,
        title: 'Primary Cutaneous Concern',
        options: ['Barrier Repair', 'Blemish & Texture', 'Deep Hydration', 'Fine Lines & Elasticity']
      },
      {
        step: 3,
        title: 'Texture Sensory Preference',
        options: ['Lightweight Viscous Gel', 'Biomimetic Rich Cream', 'Silky Botanical Oil', 'Jelly Emulsion']
      }
    ]
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
