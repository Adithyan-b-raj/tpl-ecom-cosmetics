import { getConsultationLeads } from './_store.js';

export async function onRequest(context) {
  const leads = getConsultationLeads();
  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    module: 'Consultation Inquiries & Leads',
    total_leads: leads.length,
    leads
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
