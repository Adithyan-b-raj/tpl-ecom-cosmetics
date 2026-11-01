import { getCatalog, getProductById } from './_store.js';

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const productId = url.searchParams.get('id');

  if (productId) {
    const product = getProductById(productId);
    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify(product), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=120'
      }
    });
  }

  const catalog = getCatalog();
  return new Response(JSON.stringify({
    service: 'tpl-ecom-cosmetics',
    status: 'ok',
    total_formulations: catalog.length,
    catalog
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=120'
    }
  });
}
