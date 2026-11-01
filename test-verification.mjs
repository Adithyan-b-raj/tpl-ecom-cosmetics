/**
 * Automated Verification Test Suite for Ticket 5.2
 * Repository: tpl-ecom-cosmetics
 * Movement C: Quiet Apothecary Minimalism (Aesop / Le Labo / Byredo / The Ordinary)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    testsFailed++;
  }
}

async function runTests() {
  console.log('=== 1. SCHEMA & SEED VERIFICATION ===');
  const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
  const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');

  // Verify relational tables
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS products'), 'schema.sql defines products table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS product_inci'), 'schema.sql defines product_inci table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS fragrance_pyramids'), 'schema.sql defines fragrance_pyramids table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS batch_lots'), 'schema.sql defines batch_lots table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS consultation_leads'), 'schema.sql defines consultation_leads table');
  assert(schemaSql.includes('CREATE TABLE IF NOT EXISTS orders'), 'schema.sql defines orders table');

  // Verify 5 required apothecary items in seed
  assert(seedSql.includes('Botanical Barrier Defense Cleanser (Centella & Oat)'), 'seed.sql seeds Botanical Barrier Defense Cleanser');
  assert(seedSql.includes('10% Niacinamide + Zinc Cellular Serum'), 'seed.sql seeds 10% Niacinamide + Zinc Cellular Serum');
  assert(seedSql.includes('Ceramide Biomimetic Restorative Cream'), 'seed.sql seeds Ceramide Biomimetic Restorative Cream');
  assert(seedSql.includes('No. 07 Santal & Smoked Bergamot Eau de Parfum'), 'seed.sql seeds No. 07 Santal & Smoked Bergamot EDP');
  assert(seedSql.includes('Cold-Pressed Bakuchiol Night Elixir'), 'seed.sql seeds Cold-Pressed Bakuchiol Night Elixir');

  // Verify INCI & Fragrance pyramid notes
  assert(seedSql.includes('Centella Asiatica Extract'), 'seed.sql has full INCI breakdown with scientific nomenclature');
  assert(seedSql.includes('Santalum Spicatum Wood Oil'), 'seed.sql has sandalwood INCI extraction entry');
  assert(seedSql.includes('Smoked Calabrian Bergamot'), 'seed.sql has Olfactory Fragrance Pyramid Top Notes');
  assert(seedSql.includes('Nile Papyrus Reed'), 'seed.sql has Olfactory Fragrance Pyramid Heart Notes');
  assert(seedSql.includes('Australian Album Sandalwood'), 'seed.sql has Olfactory Fragrance Pyramid Base Notes');

  // Verify realistic batch lots & PAO
  assert(seedSql.includes('LOT-2026-A12'), 'seed.sql seeds batch LOT-2026-A12');
  assert(seedSql.includes('LOT-2025-C08'), 'seed.sql seeds batch LOT-2025-C08');
  assert(seedSql.includes('12') && seedSql.includes('6'), 'seed.sql specifies realistic PAO values (12M, 6M)');

  console.log('\n=== 2. CLOUDFLARE FUNCTIONS API & STORE VERIFICATION ===');
  const storeModule = await import('./functions/api/_store.js');

  // Test Product Catalog with attached INCI and fragrance pyramids
  const catalog = storeModule.getCatalog();
  assert(catalog.length === 5, 'Catalog returns exactly 5 apothecary formulations');
  
  const cleanser = catalog.find(p => p.id === 'PRD-CLN-01');
  assert(cleanser && cleanser.inci_ledger && cleanser.inci_ledger.length >= 5, 'Cleanser has complete INCI cosmetic ledger attached');

  const perfume = catalog.find(p => p.id === 'PRD-PRF-04');
  assert(perfume && perfume.fragrance_pyramid && perfume.fragrance_pyramid.top.length > 0, 'No. 07 perfume has 3-tier olfactory fragrance pyramid');

  // Test 3-Piece Routine Bundle Calculation (15% apothecary discount)
  const bundleEligible = storeModule.calculateBundle(['PRD-CLN-01', 'PRD-TRT-02', 'PRD-MST-03']);
  assert(bundleEligible.isEligible === true, '3 items qualify for routine bundle');
  assert(bundleEligible.discountRate === 15, 'Routine bundle applies 15% discount');
  const expectedSubtotal = 1850 + 2450 + 2850; // 7150
  const expectedDiscount = Math.round(7150 * 0.15); // 1073
  const expectedTotal = 7150 - 1073; // 6077
  assert(bundleEligible.subtotal === expectedSubtotal, `Bundle subtotal is ₹${expectedSubtotal}`);
  assert(bundleEligible.discount === expectedDiscount, `Bundle discount is ₹${expectedDiscount}`);
  assert(bundleEligible.total === expectedTotal, `Bundle total is ₹${expectedTotal}`);

  // Test 2-piece incomplete bundle
  const bundleIneligible = storeModule.calculateBundle(['PRD-CLN-01', 'PRD-TRT-02']);
  assert(bundleIneligible.isEligible === false && bundleIneligible.discount === 0, '2 items do not trigger 15% discount');

  // Test Skin Diagnostic Quiz Engine
  const quizResult = storeModule.processSkinQuiz({
    name: 'Dr. Tara Varma',
    phone: '919847112233',
    skinType: 'Sensitive / Reactive',
    concern: 'Barrier Repair',
    texture: 'Biomimetic Rich Cream'
  });
  assert(quizResult.success === true, 'Skin quiz returns successful prescription');
  assert(quizResult.routine.step1.id === 'PRD-CLN-01', 'Prescribes Botanical Cleanser for Step 1 Cleanse');
  assert(quizResult.routine.step2.id === 'PRD-TRT-02', 'Prescribes Niacinamide Cellular Serum for Step 2 Treat');
  assert(quizResult.routine.step3.id === 'PRD-MST-03', 'Prescribes Ceramide Biomimetic Cream for Step 3 Moisturize');
  assert(quizResult.pricing.total === 6077, 'Prescribed routine total applies 15% discount (₹6,077)');
  assert(quizResult.whatsappFollowUpUrl.includes('wa.me/919847112233'), 'Generates tailored WhatsApp consultation link');

  // Test Aging / Fine Lines Quiz Flow -> Bakuchiol Elixir prescription
  const matureQuiz = storeModule.processSkinQuiz({
    name: 'Ananya',
    phone: '919447223344',
    skinType: 'Mature / Photo-Damaged',
    concern: 'Fine Lines & Elasticity',
    texture: 'Silky Botanical Oil'
  });
  assert(matureQuiz.routine.step2.id === 'PRD-ELX-05', 'Prescribes Bakuchiol Night Elixir for fine lines/mature skin');

  // Test Batch Lot Expiry Alerts and Velocity Forecasting
  const lots = storeModule.getBatchLots();
  assert(lots.length >= 6, 'Batch tracker monitors at least 6 batches');
  const freshLot = lots.find(l => l.batch_number === 'LOT-2026-A12');
  assert(freshLot && freshLot.computed_status === 'active' && freshLot.status_badge.includes('🟢'), 'LOT-2026-A12 computed as 🟢 Fresh');
  const nearExpLot = lots.find(l => l.batch_number === 'LOT-2025-C08');
  assert(nearExpLot && nearExpLot.computed_status === 'near_expiry' && nearExpLot.status_badge.includes('🟡'), 'LOT-2025-C08 computed as 🟡 Near Expiry (<90 days)');
  const quarLot = lots.find(l => l.batch_number === 'LOT-2025-Q99');
  assert(quarLot && quarLot.computed_status === 'quarantined' && quarLot.status_badge.includes('🔴'), 'LOT-2025-Q99 computed as 🔴 Quarantined');

  // Test Quarantine Toggle
  const toggledBatch = storeModule.toggleBatchQuarantine('LOT-2026-A12');
  assert(toggledBatch.computed_status === 'quarantined', 'Quarantine toggle: successfully quarantined batch LOT-2026-A12');
  const releasedBatch = storeModule.toggleBatchQuarantine('LOT-2026-A12');
  assert(releasedBatch.computed_status === 'active', 'Quarantine toggle: successfully released batch back to active');

  // Test Checkout & Cashfree UPI QR Simulation
  const checkoutResult = storeModule.processCheckout({
    channel: 'online',
    customer: { name: 'Meera Nair', phone: '919846001122' },
    items: [
      { id: 'PRD-CLN-01', qty: 1 },
      { id: 'PRD-TRT-02', qty: 1 },
      { id: 'PRD-MST-03', qty: 1 }
    ]
  });
  assert(checkoutResult.success === true, 'Checkout: successful apothecary order placement');
  assert(checkoutResult.totalAmount === 6077, 'Checkout: 15% routine discount applied to 3-piece order');
  assert(checkoutResult.cashfreeSimulation.upiQrString.includes('upi://pay'), 'Checkout: Cashfree UPI simulated string generated');
  assert(checkoutResult.batchLotsAssigned.length > 0, 'Checkout: assigned active cleanroom batch lots to order');

  // Test Functions API Route Handlers directly
  const productsFn = await import('./functions/api/products.js');
  const prodRes = await productsFn.onRequest({ request: new Request('http://localhost/api/products') });
  const prodData = await prodRes.json();
  assert(prodRes.status === 200 && prodData.catalog.length === 5, 'functions/api/products.js returns 200 with catalog');

  const quizFn = await import('./functions/api/quiz.js');
  const quizGetRes = await quizFn.onRequest({ request: new Request('http://localhost/api/quiz') });
  const quizGetData = await quizGetRes.json();
  assert(quizGetRes.status === 200 && quizGetData.steps.length === 3, 'functions/api/quiz.js GET returns 3 quiz diagnostic steps');

  const quizPostRes = await quizFn.onRequest({
    request: new Request('http://localhost/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Nandini', phone: '919876543210', skinType: 'Oily', concern: 'Blemish & Texture', texture: 'Lightweight' })
    })
  });
  const quizPostData = await quizPostRes.json();
  assert(quizPostRes.status === 200 && quizPostData.success === true, 'functions/api/quiz.js POST processes diagnostic prescription');

  const batchFn = await import('./functions/api/batch.js');
  const batchRes = await batchFn.onRequest({ request: new Request('http://localhost/api/batch') });
  const batchData = await batchRes.json();
  assert(batchRes.status === 200 && batchData.lots.length >= 6, 'functions/api/batch.js GET returns monitored batch lots');

  const bundleFn = await import('./functions/api/bundle.js');
  const bundleRes = await bundleFn.onRequest({
    request: new Request('http://localhost/api/bundle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: ['PRD-CLN-01', 'PRD-TRT-02', 'PRD-MST-03'] })
    })
  });
  const bundleData = await bundleRes.json();
  assert(bundleRes.status === 200 && bundleData.discountRate === 15, 'functions/api/bundle.js POST applies 15% discount');

  const wildcardFn = await import('./functions/api/[[route]].js');
  const healthRes = await wildcardFn.onRequest({ request: new Request('http://localhost/api/health') });
  const healthData = await healthRes.json();
  assert(healthRes.status === 200 && healthData.status === 'ok' && healthData.archetype === 'apothecary-minimalist', 'functions/api/[[route]].js handles health check');

  console.log('\n=== 3. HTML ARCHETYPE & DOM VERIFICATION ===');
  const indexHtml = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
  const adminHtml = fs.readFileSync(path.join(__dirname, 'public', 'admin.html'), 'utf-8');

  // Verify public/index.html
  assert(indexHtml.includes('data-layout-archetype="apothecary-minimalist"'), 'index.html has data-layout-archetype="apothecary-minimalist"');
  assert(indexHtml.includes('class="apothecary-rail"'), 'index.html implements Fixed Left Vertical Rail Navigation Topology');
  assert(indexHtml.includes('id="quizDrawer"'), 'index.html contains 3-Step Skin Diagnostic Quiz Drawer');
  assert(indexHtml.includes('id="inciModal"'), 'index.html contains Full INCI Cosmetic Ingredient Ledger Modal');
  assert(indexHtml.includes('class="pyramid-container"'), 'index.html contains Olfactory Fragrance Notes Pyramid Visualizer');
  assert(indexHtml.includes('id="bundleDrawer"'), 'index.html contains Interactive 3-Piece Routine Bundle Drawer');
  assert(indexHtml.includes('id="cartDrawer"'), 'index.html contains Sticky Express Cart Drawer');
  assert(indexHtml.includes('id="upiQrSection"'), 'index.html contains Cashfree UPI QR Code Simulation');
  assert(indexHtml.includes('data-wl-brand'), 'index.html has [data-wl-brand]');
  assert(indexHtml.includes('data-wl-tagline'), 'index.html has [data-wl-tagline]');
  assert(indexHtml.includes('id="floatingWaBtn"'), 'index.html has #floatingWaBtn Concierge link');

  // Verify public/admin.html
  assert(adminHtml.includes('data-layout-archetype="batch-lot-admin"'), 'admin.html has data-layout-archetype="batch-lot-admin"');
  assert(adminHtml.includes('id="batchLotTableBody"'), 'admin.html contains Batch Lot & Expiry Date Tracker Table');
  assert(adminHtml.includes('toggleLotQuarantine'), 'admin.html contains Quarantine Toggle action');
  assert(adminHtml.includes('id="leadsTableBody"'), 'admin.html contains Skincare Consultation Inquiries Table');
  assert(adminHtml.includes('btn-wa-followup'), 'admin.html contains WhatsApp follow-up button on inquiry leads');
  assert(adminHtml.includes('id="forecastCardsGrid"'), 'admin.html contains Reorder Demand Velocity Predictor cards');
  assert(adminHtml.includes('id="adminWaInput"'), 'admin.html contains #adminWaInput for White-Label phone override');

  console.log('\n=== 4. WHITELABEL & GITIGNORE VERIFICATION ===');
  const whitelabelJs = fs.readFileSync(path.join(__dirname, 'public', 'whitelabel.js'), 'utf-8');
  assert(whitelabelJs.includes("params.has('brand')"), 'whitelabel.js supports ?brand= override');
  assert(whitelabelJs.includes("params.has('primary')"), 'whitelabel.js supports ?primary= override');
  assert(whitelabelJs.includes("params.has('wa')"), 'whitelabel.js supports ?wa= override');
  assert(whitelabelJs.includes("params.has('phone')"), 'whitelabel.js supports ?phone= override');

  const gitignore = fs.readFileSync(path.join(__dirname, '.gitignore'), 'utf-8');
  assert(gitignore.includes('.wrangler/'), '.gitignore ignores .wrangler/');
  assert(gitignore.includes('node_modules/'), '.gitignore ignores node_modules/');
  assert(gitignore.includes('*.log'), '.gitignore ignores *.log');

  console.log(`\n========================================`);
  console.log(`SUMMARY: ${testsPassed} passed, ${testsFailed} failed.`);
  console.log(`========================================`);

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
