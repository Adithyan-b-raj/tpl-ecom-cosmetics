/**
 * Shared Apothecary Data & State Store for tpl-ecom-cosmetics
 * Movement C: Quiet Apothecary Minimalism (Aesop / Byredo / Le Labo)
 * CRITICAL: Zero top-level Date.now() to prevent V8 isolate snapshot freezing.
 * Uses lazy request-time factory getters for all temporal calculations.
 */

function getInitialProducts() {
  return [
    {
      id: 'PRD-CLN-01',
      slug: 'botanical-barrier-defense-cleanser',
      name: 'Botanical Barrier Defense Cleanser (Centella & Oat)',
      subtitle: 'Formulation Series 01 • Lipid-Preserving Emulsion',
      step_category: 'cleanse',
      step_number: '01',
      volume_ml: 200,
      volume_display: '200 mL / 6.8 fl. oz.',
      ph_level: 'pH 5.5',
      skin_type: 'All Skin Types, Reactive & Compromised',
      primary_concern: 'Barrier Repair',
      texture: 'Jelly-to-Milk Emulsion',
      price: 1850,
      retail_price: 2400,
      short_desc: 'A non-stripping botanical cleansing fluid fortified with bio-fermented Centella Asiatica and colloidal oat.',
      full_desc: 'Formulated at physiological pH 5.5 to safeguard the cutaneous microbiome. Combines high-purity wild harvested Gotu Kola with triple-milled Avena Sativa kernel flour, providing immediate anti-inflammatory calmness while effortlessly melting sebum, pollution particulates, and sunscreens.',
      ritual_instructions: 'Dispense 2-3 pumps onto dry palms. Gently massage into dry skin for 60 seconds. Emulsify with tepid water to create a silky milk, then rinse.',
      hero_active: 'Bio-Fermented Centella Asiatica 4.5% + Colloidal Oat 3.0%',
      image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      pao_months: 12,
      is_bundle_eligible: 1,
      batch_lot: 'LOT-2026-A12'
    },
    {
      id: 'PRD-TRT-02',
      slug: 'niacinamide-zinc-cellular-serum',
      name: '10% Niacinamide + Zinc Cellular Serum',
      subtitle: 'Formulation Series 02 • High-Potency Sebum & Pore Modulator',
      step_category: 'treat',
      step_number: '02',
      volume_ml: 30,
      volume_display: '30 mL / 1.0 fl. oz.',
      ph_level: 'pH 5.2',
      skin_type: 'Oily, Blemish-Prone & Texture-Irregular',
      primary_concern: 'Blemish & Texture',
      texture: 'Lightweight Viscous Water-Gel',
      price: 2450,
      retail_price: 3100,
      short_desc: 'High-potency cellular treatment containing Nicotinamide and Zinc PCA to clarify congestion and recalibrate sebum synthesis.',
      full_desc: 'A clinically balanced active concentrate engineered to refine visible pore architecture, inhibit melanogenesis for post-acne erythema fade, and reinforce intercellular ceramide synthesis. Free from silicones, artificial fragrance, or penetrative alcohols.',
      ritual_instructions: 'Apply 3-4 drops directly to clean skin before heavier creams. Lightly press with warm palms across forehead, cheeks, and t-zone until absorbed.',
      hero_active: 'USP Niacinamide 10.0% + Zinc L-PCA 1.2%',
      image_url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
      pao_months: 6,
      is_bundle_eligible: 1,
      batch_lot: 'LOT-2025-C08'
    },
    {
      id: 'PRD-MST-03',
      slug: 'ceramide-biomimetic-restorative-cream',
      name: 'Ceramide Biomimetic Restorative Cream',
      subtitle: 'Formulation Series 03 • Intercellular Lipid Matrix',
      step_category: 'moisturize',
      step_number: '03',
      volume_ml: 50,
      volume_display: '50 mL / 1.7 fl. oz.',
      ph_level: 'pH 5.8',
      skin_type: 'Dry, Dehydrated & Compromised Barrier',
      primary_concern: 'Deep Hydration',
      texture: 'Biomimetic Rich Velvety Cream',
      price: 2850,
      retail_price: 3600,
      short_desc: 'A physiologically matched 3:1:1 lipid replenishment matrix (Ceramides NP/AP/EOP, Cholesterol, and Free Fatty Acids).',
      full_desc: 'Engineered to mimic the exact lamellar architecture of natural stratum corneum lipids. Accelerates cutaneous micro-tear recovery within 24 hours while locking in dermal water reservoirs with phytosterols and biomimetic squalane.',
      ritual_instructions: 'Warm a hazelnut-sized portion between fingertips to melt the botanical wax matrix. Press firmly onto face, neck, and décolletage as the terminal step.',
      hero_active: 'Phyto-Ceramide Complex (NP, AP, EOP) 3.5% + Bio-Cholesterol 1.0%',
      image_url: 'https://images.unsplash.com/photo-1608248597359-009941a5d625?auto=format&fit=crop&w=900&q=80',
      pao_months: 12,
      is_bundle_eligible: 1,
      batch_lot: 'LOT-2026-B03'
    },
    {
      id: 'PRD-PRF-04',
      slug: 'santal-smoked-bergamot-edp',
      name: 'No. 07 Santal & Smoked Bergamot Eau de Parfum',
      subtitle: 'Apothecary Olfactory Specimen • 22% Pure Extrait Concentration',
      step_category: 'fragrance',
      step_number: 'SP',
      volume_ml: 50,
      volume_display: '50 mL / 1.7 fl. oz.',
      ph_level: 'N/A (Extrait)',
      skin_type: 'Universal Olfactory Profile',
      primary_concern: 'Olfactory Presence',
      texture: 'Fine Micro-Aerosol Mist',
      price: 4600,
      retail_price: 5800,
      short_desc: 'An intimate, grounding olfactory portrait combining Calabrian smoked bergamot with Australian sandalwood and black amber.',
      full_desc: 'Formulated at a concentrated 22% pure extrait dilution in organic neutral grape spirit. Opening with sharp citrus smoke before mellowing into warm parchment, sacred woods, dry iris concrete, and nocturnal resin.',
      ritual_instructions: 'Mist onto pulse points — carotid artery behind earlobes, wrists, and collarbone hollows. Refrain from rubbing wrists together to preserve delicate volatile top-note ester bonds.',
      hero_active: 'Aged Australian Sandalwood Heartwood 18% + Calabrian Bergamot',
      image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      pao_months: 24,
      is_bundle_eligible: 0,
      batch_lot: 'LOT-2026-D01'
    },
    {
      id: 'PRD-ELX-05',
      slug: 'cold-pressed-bakuchiol-night-elixir',
      name: 'Cold-Pressed Bakuchiol Night Elixir',
      subtitle: 'Formulation Series 05 • Phyto-Retinoid Cellular Regeneration',
      step_category: 'treat',
      step_number: '02B',
      volume_ml: 30,
      volume_display: '30 mL / 1.0 fl. oz.',
      ph_level: 'pH 5.0',
      skin_type: 'Sensitive, Aging & Photo-Damaged Skin',
      primary_concern: 'Fine Lines & Elasticity',
      texture: 'Silky Dry Botanical Oil',
      price: 3400,
      retail_price: 4200,
      short_desc: 'Pure 2% monoterpenoid Bakuchiol infused in cold-pressed virgin Marula and Rosehip seed oils.',
      full_desc: 'A 100% natural, photo-stable retinol alternative harvested sustainably from Psoralea corylifolia seeds. Synergized with high-content gamma-linolenic acid to accelerate cellular turnover without retinoid dermatitis or UV photosensitivity.',
      ritual_instructions: 'At night, press 2-3 drops over damp skin or blend directly into your Ceramide Restorative Cream. Ideal as an overnight lipid seal.',
      hero_active: 'Pure Phyto-Bakuchiol 2.0% + Organic Marula & Rosehip Oil',
      image_url: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=80',
      pao_months: 6,
      is_bundle_eligible: 1,
      batch_lot: 'LOT-2026-E05'
    }
  ];
}

function getInitialInci() {
  return [
    // Cleanser
    { id: 'INCI-CLN-01', product_id: 'PRD-CLN-01', rank_order: 1, scientific_name: 'Aqua / Water / Eau', common_name: 'Purified Demineralized Water', function_role: 'Solvent Base', ewg_score: 1, source_origin: 'Double-Reverse Osmosis Filtration' },
    { id: 'INCI-CLN-02', product_id: 'PRD-CLN-01', rank_order: 2, scientific_name: 'Centella Asiatica Extract', common_name: 'Gotu Kola Herb Extract', function_role: 'Anti-Inflammatory & Microcirculation', ewg_score: 1, source_origin: 'Madagascar Wild-Harvest' },
    { id: 'INCI-CLN-03', product_id: 'PRD-CLN-01', rank_order: 3, scientific_name: 'Avena Sativa (Oat) Kernel Flour', common_name: 'Colloidal Oat Flour', function_role: 'Skin Protectant & Barrier Soothing', ewg_score: 1, source_origin: 'Scandinavian Organic Milling' },
    { id: 'INCI-CLN-04', product_id: 'PRD-CLN-01', rank_order: 4, scientific_name: 'Sodium Cocoyl Isethionate', common_name: 'Coconut Cleanser', function_role: 'Gentle Surfactant Cleansing Agent', ewg_score: 1, source_origin: 'Renewable Coconut Fatty Acids' },
    { id: 'INCI-CLN-05', product_id: 'PRD-CLN-01', rank_order: 5, scientific_name: 'Glycerin (Vegetable)', common_name: 'Plant Glycerin', function_role: 'Humectant Water Binding', ewg_score: 1, source_origin: 'Non-GMO Rapeseed' },
    { id: 'INCI-CLN-06', product_id: 'PRD-CLN-01', rank_order: 6, scientific_name: 'Allantoin', common_name: 'Comfrey Derivative', function_role: 'Epithelial Soothing & Softening', ewg_score: 1, source_origin: 'Bio-Synthesized Botanical' },

    // Serum
    { id: 'INCI-TRT-01', product_id: 'PRD-TRT-02', rank_order: 1, scientific_name: 'Aqua / Water / Eau', common_name: 'Purified Demineralized Water', function_role: 'Solvent Base', ewg_score: 1, source_origin: 'Double-Reverse Osmosis Filtration' },
    { id: 'INCI-TRT-02', product_id: 'PRD-TRT-02', rank_order: 2, scientific_name: 'Niacinamide (Vitamin B3)', common_name: 'Nicotinamide', function_role: 'Cellular Renewal & Sebum Modulation', ewg_score: 1, source_origin: 'USP Pharmaceutical Grade Synthesis' },
    { id: 'INCI-TRT-03', product_id: 'PRD-TRT-02', rank_order: 3, scientific_name: 'Zinc PCA', common_name: 'Zinc Pyrrolidone Carboxylic Acid', function_role: 'Anti-Microbial & Oil Reduction', ewg_score: 1, source_origin: 'Bio-Fermented Mineral Salt' },
    { id: 'INCI-TRT-04', product_id: 'PRD-TRT-02', rank_order: 4, scientific_name: 'Sodium Hyaluronate', common_name: 'Low-Molecular Hyaluronic Acid', function_role: 'Deep Dermal Hydration', ewg_score: 1, source_origin: 'Bio-Fermented Streptococcus Zooepidemicus' },
    { id: 'INCI-TRT-05', product_id: 'PRD-TRT-02', rank_order: 5, scientific_name: 'Ethoxydiglycol', common_name: 'Active Delivery Vehicle', function_role: 'Penetration Enhancer', ewg_score: 1, source_origin: 'Safe Solubilizer' },
    { id: 'INCI-TRT-06', product_id: 'PRD-TRT-02', rank_order: 6, scientific_name: 'Phenoxyethanol (and) Ethylhexylglycerin', common_name: 'Clean Preservative Complex', function_role: 'Microbial Stability', ewg_score: 2, source_origin: 'Ecological Shield System' },

    // Ceramide Cream
    { id: 'INCI-MST-01', product_id: 'PRD-MST-03', rank_order: 1, scientific_name: 'Aqua / Water / Eau', common_name: 'Purified Demineralized Water', function_role: 'Solvent Base', ewg_score: 1, source_origin: 'Double-Reverse Osmosis Filtration' },
    { id: 'INCI-MST-02', product_id: 'PRD-MST-03', rank_order: 2, scientific_name: 'Ceramide NP / Ceramide AP / Ceramide EOP', common_name: 'Bio-Identical Ceramides', function_role: 'Intercellular Lipid Cement Replenishment', ewg_score: 1, source_origin: 'Yeast Bio-Fermentation' },
    { id: 'INCI-MST-03', product_id: 'PRD-MST-03', rank_order: 3, scientific_name: 'Phytosphingosine & Cholesterol', common_name: 'Cutaneous Precursors', function_role: 'Natural Barrier Architecture Restoration', ewg_score: 1, source_origin: 'Plant-Derived Bio-Lipids' },
    { id: 'INCI-MST-04', product_id: 'PRD-MST-03', rank_order: 4, scientific_name: 'Camellia Japonica Seed Oil', common_name: 'Tsubaki Flower Seed Oil', function_role: 'Antioxidant Emollient & Elasticity', ewg_score: 1, source_origin: 'Cold-Pressed Jeju Camellia' },
    { id: 'INCI-MST-05', product_id: 'PRD-MST-03', rank_order: 5, scientific_name: 'Squalane (Olive)', common_name: 'Phytosqualane', function_role: 'Biomimetic Sebaceous Lipid Mimic', ewg_score: 1, source_origin: 'Spanish Olive Oil Esters' },
    { id: 'INCI-MST-06', product_id: 'PRD-MST-03', rank_order: 6, scientific_name: 'Tocopherol', common_name: 'Pure Vitamin E', function_role: 'Lipid Oxidation Inversion', ewg_score: 1, source_origin: 'Non-GMO Sunflower Distillate' },

    // Perfume
    { id: 'INCI-PRF-01', product_id: 'PRD-PRF-04', rank_order: 1, scientific_name: 'Alcohol Denat. (Grape Spirit)', common_name: 'Organic Grape Alcohol', function_role: 'Olfactory Evaporation Carrier', ewg_score: 2, source_origin: 'French Organic Viticulture' },
    { id: 'INCI-PRF-02', product_id: 'PRD-PRF-04', rank_order: 2, scientific_name: 'Parfum / Fragrance Concentrate', common_name: 'Artisanal Botanical Extracts', function_role: 'Olfactory Identity', ewg_score: 1, source_origin: 'Grasse Essential Oils & Isolates' },
    { id: 'INCI-PRF-03', product_id: 'PRD-PRF-04', rank_order: 3, scientific_name: 'Santalum Spicatum Wood Oil', common_name: 'Australian Sandalwood Oil', function_role: 'Base Fixative & Sacred Wood Essence', ewg_score: 1, source_origin: 'Ethical Sustainable Plantation' },
    { id: 'INCI-PRF-04', product_id: 'PRD-PRF-04', rank_order: 4, scientific_name: 'Citrus Aurantium Bergamia Peel Oil', common_name: 'Calabrian Bergamot Essence', function_role: 'Top Citrus Sparkle (Furocoumarin-Free)', ewg_score: 1, source_origin: 'Cold-Pressed Italian Orchards' },
    { id: 'INCI-PRF-05', product_id: 'PRD-PRF-04', rank_order: 5, scientific_name: 'Aqua / Water / Eau', common_name: 'Mineral Demineralized Water', function_role: 'Diluent Balancer', ewg_score: 1, source_origin: 'Double-Reverse Osmosis Filtration' },

    // Bakuchiol
    { id: 'INCI-ELX-01', product_id: 'PRD-ELX-05', rank_order: 1, scientific_name: 'Sclerocarya Birrea (Marula) Seed Oil', common_name: 'Virgin Marula Seed Oil', function_role: 'High-Oleic Botanical Base Carrier', ewg_score: 1, source_origin: 'Namibian Cold-Pressed Harvest' },
    { id: 'INCI-ELX-02', product_id: 'PRD-ELX-05', rank_order: 2, scientific_name: 'Rosa Canina (Rosehip) Seed Oil', common_name: 'Organic Rosehip Fruit Oil', function_role: 'Trans-Retinoic Acid & Pro-Vitamin A', ewg_score: 1, source_origin: 'Patagonian Andes Wild-Harvest' },
    { id: 'INCI-ELX-03', product_id: 'PRD-ELX-05', rank_order: 3, scientific_name: 'Bakuchiol (99% Purity)', common_name: 'Pure Babchi Phenol Extract', function_role: 'Phyto-Retinol Collagen Stimulation', ewg_score: 1, source_origin: 'Ayurvedic Babchi Seed Distillate' },
    { id: 'INCI-ELX-04', product_id: 'PRD-ELX-05', rank_order: 4, scientific_name: 'Helianthus Annuus Seed Oil', common_name: 'Sunflower Seed Oil', function_role: 'Natural Solubilizer', ewg_score: 1, source_origin: 'Certified Organic Seed Press' },
    { id: 'INCI-ELX-05', product_id: 'PRD-ELX-05', rank_order: 5, scientific_name: 'Bisabolol', common_name: 'Alpha-Bisabolol Chamomile Isolate', function_role: 'Anti-Irritant & Redness Pacifier', ewg_score: 1, source_origin: 'Candeia Tree Bark Extraction' }
  ];
}

function getInitialFragrancePyramids() {
  return [
    // No. 07 Santal & Smoked Bergamot
    { id: 'FRG-PRF-01', product_id: 'PRD-PRF-04', tier: 'top', note_name: 'Smoked Calabrian Bergamot', description: 'Sun-drenched Mediterranean citrus roasted over green oak wood chips', evaporation_rate: '15-30 minutes' },
    { id: 'FRG-PRF-02', product_id: 'PRD-PRF-04', tier: 'top', note_name: 'Crushed Italian Pink Pepper', description: 'Crisp, piquant botanical spice delivering an invigorating opening sparkle', evaporation_rate: '15-45 minutes' },
    { id: 'FRG-PRF-03', product_id: 'PRD-PRF-04', tier: 'top', note_name: 'Green Cardamom Pod', description: 'Cool herbal balsamic undertones balancing smoky citrus', evaporation_rate: '20-60 minutes' },
    { id: 'FRG-PRF-04', product_id: 'PRD-PRF-04', tier: 'heart', note_name: 'Nile Papyrus Reed', description: 'Dry parchment, antique library scrolls, and sun-baked river reeds', evaporation_rate: '2-4 hours' },
    { id: 'FRG-PRF-05', product_id: 'PRD-PRF-04', tier: 'heart', note_name: 'Black Amber Concrete', description: 'Nocturnal resin providing warm tactile depth and honeyed smokiness', evaporation_rate: '3-5 hours' },
    { id: 'FRG-PRF-06', product_id: 'PRD-PRF-04', tier: 'heart', note_name: 'Florentine Orris Concrete', description: 'Velvety, powdery earthiness harvested from aged iris rhizomes', evaporation_rate: '2-6 hours' },
    { id: 'FRG-PRF-07', product_id: 'PRD-PRF-04', tier: 'base', note_name: 'Australian Album Sandalwood', description: 'Creamy, sacred timber harvested with ethical reforestation certification', evaporation_rate: '6-12+ hours' },
    { id: 'FRG-PRF-08', product_id: 'PRD-PRF-04', tier: 'base', note_name: 'Moroccan Atlas Cedarwood', description: 'Resinous pencil shavings and dry wood smoke grounding the projection', evaporation_rate: '8-14+ hours' },
    { id: 'FRG-PRF-09', product_id: 'PRD-PRF-04', tier: 'base', note_name: 'Dark Botanical Musk', description: 'Clean cutaneous sillage replicating warm skin chemistry', evaporation_rate: '10-18+ hours' },

    // Bakuchiol Night Elixir
    { id: 'FRG-ELX-01', product_id: 'PRD-ELX-05', tier: 'top', note_name: 'Cold-Pressed Wild Rose', description: 'Subtle dewy botanical floral breath from unrefined rosehip fruit', evaporation_rate: '10-20 minutes' },
    { id: 'FRG-ELX-02', product_id: 'PRD-ELX-05', tier: 'heart', note_name: 'Earthy Babchi Herbal', description: 'Warm balsamic seed essence natural to pure bakuchiol monoterpenes', evaporation_rate: '1-2 hours' },
    { id: 'FRG-ELX-03', product_id: 'PRD-ELX-05', tier: 'base', note_name: 'Raw Marula Nut', description: 'Soft nutty warmth that diffuses gently upon nocturnal application', evaporation_rate: '3-5 hours' }
  ];
}

function getInitialBatchLots() {
  return [
    {
      id: 'LOT-2026-A12',
      product_id: 'PRD-CLN-01',
      batch_number: 'LOT-2026-A12',
      product_name: 'Botanical Barrier Defense Cleanser (Centella & Oat)',
      manufacture_date: '2026-02-10',
      expiry_date: '2028-02-10',
      pao_months: 12,
      quantity_produced: 800,
      quantity_remaining: 342,
      daily_velocity: 4.2,
      status: 'active',
      qc_passed: 1,
      facility_location: 'Apothecary Lab Cleanroom A'
    },
    {
      id: 'LOT-2025-C08',
      product_id: 'PRD-TRT-02',
      batch_number: 'LOT-2025-C08',
      product_name: '10% Niacinamide + Zinc Cellular Serum',
      manufacture_date: '2025-01-15',
      expiry_date: '2026-12-15',
      pao_months: 6,
      quantity_produced: 600,
      quantity_remaining: 85,
      daily_velocity: 3.8,
      status: 'near_expiry',
      qc_passed: 1,
      facility_location: 'Apothecary Lab Cleanroom B'
    },
    {
      id: 'LOT-2026-B03',
      product_id: 'PRD-MST-03',
      batch_number: 'LOT-2026-B03',
      product_name: 'Ceramide Biomimetic Restorative Cream',
      manufacture_date: '2026-03-01',
      expiry_date: '2028-03-01',
      pao_months: 12,
      quantity_produced: 750,
      quantity_remaining: 420,
      daily_velocity: 3.5,
      status: 'active',
      qc_passed: 1,
      facility_location: 'Apothecary Lab Cleanroom A'
    },
    {
      id: 'LOT-2026-D01',
      product_id: 'PRD-PRF-04',
      batch_number: 'LOT-2026-D01',
      product_name: 'No. 07 Santal & Smoked Bergamot Eau de Parfum',
      manufacture_date: '2026-04-12',
      expiry_date: '2029-04-12',
      pao_months: 24,
      quantity_produced: 400,
      quantity_remaining: 188,
      daily_velocity: 2.1,
      status: 'active',
      qc_passed: 1,
      facility_location: 'Grasse Maceration Vault 04'
    },
    {
      id: 'LOT-2025-Q99',
      product_id: 'PRD-ELX-05',
      batch_number: 'LOT-2025-Q99',
      product_name: 'Cold-Pressed Bakuchiol Night Elixir',
      manufacture_date: '2025-11-20',
      expiry_date: '2027-11-20',
      pao_months: 6,
      quantity_produced: 300,
      quantity_remaining: 120,
      daily_velocity: 0.0,
      status: 'quarantined',
      qc_passed: 0,
      facility_location: 'Stability Testing Chamber 02'
    },
    {
      id: 'LOT-2026-E05',
      product_id: 'PRD-ELX-05',
      batch_number: 'LOT-2026-E05',
      product_name: 'Cold-Pressed Bakuchiol Night Elixir',
      manufacture_date: '2026-05-18',
      expiry_date: '2028-05-18',
      pao_months: 6,
      quantity_produced: 500,
      quantity_remaining: 295,
      daily_velocity: 2.8,
      status: 'active',
      qc_passed: 1,
      facility_location: 'Apothecary Lab Cleanroom C'
    }
  ];
}

// In-memory persistent caches across requests within isolate
let memoryProducts = getInitialProducts();
let memoryInci = getInitialInci();
let memoryFragrance = getInitialFragrancePyramids();
let memoryBatchLots = getInitialBatchLots();

let memoryLeads = [
  {
    id: 'LEAD-8801',
    customer_name: 'Dr. Tara Varma (Kochi)',
    customer_phone: '919847112233',
    skin_type: 'Sensitive / Reactive',
    primary_concern: 'Barrier Repair',
    texture_preference: 'Biomimetic Rich Cream',
    prescribed_routine: 'Step 1: Botanical Cleanser + Step 2: Niacinamide Cellular Serum + Step 3: Ceramide Restorative Cream',
    bundle_total: 6077,
    status: 'contacted',
    created_at: '2026-11-01 07:15:00'
  },
  {
    id: 'LEAD-8802',
    customer_name: 'Ananya Nambiar (Bangalore)',
    customer_phone: '919447223344',
    skin_type: 'Mature / Photo-Damaged',
    primary_concern: 'Fine Lines & Elasticity',
    texture_preference: 'Silky Botanical Oil',
    prescribed_routine: 'Step 1: Botanical Cleanser + Step 2: Cold-Pressed Bakuchiol Night Elixir + Step 3: Ceramide Restorative Cream',
    bundle_total: 6885,
    status: 'new',
    created_at: '2026-11-01 08:20:00'
  },
  {
    id: 'LEAD-8803',
    customer_name: 'Rohan Mehta (Mumbai)',
    customer_phone: '919820334455',
    skin_type: 'Oily / Combination',
    primary_concern: 'Blemish & Texture',
    texture_preference: 'Lightweight Water Gel',
    prescribed_routine: 'Step 1: Botanical Cleanser + Step 2: Niacinamide Cellular Serum + Step 3: Ceramide Restorative Cream',
    bundle_total: 6077,
    status: 'new',
    created_at: '2026-11-01 09:05:00'
  }
];

let memoryOrders = [
  {
    id: 'ORD-APO-5011',
    customer_name: 'Meera Nair (Panampilly Nagar, Kochi)',
    customer_phone: '919846001122',
    customer_email: 'meera.nair@example.com',
    shipping_address: 'Villa 14, Rosewood Gardens, Panampilly Nagar, Kochi 682036',
    items: [
      { id: 'PRD-CLN-01', name: 'Botanical Barrier Defense Cleanser', qty: 1, price: 1850 },
      { id: 'PRD-TRT-02', name: '10% Niacinamide + Zinc Cellular Serum', qty: 1, price: 2450 },
      { id: 'PRD-MST-03', name: 'Ceramide Biomimetic Restorative Cream', qty: 1, price: 2850 }
    ],
    detail: 'Apothecary 3-Piece Regimen (Cleanser + Niacinamide + Ceramide) • 15% Routine Discount',
    subtotal: 7150,
    discount: 1073,
    total_amount: 6077,
    is_bundle: 1,
    channel: 'online',
    payment_method: 'cashfree_upi',
    status: 'PAID // LAB DISPATCH',
    batch_lot_assigned: 'LOT-2026-A12, LOT-2025-C08, LOT-2026-B03',
    upi_qr_string: 'upi://pay?pa=botanica.apothecary@icici&pn=BOTANICA+LABS&am=6077&cu=INR&tn=ORD-APO-5011',
    created_at: '2026-11-01 07:45:00'
  },
  {
    id: 'ORD-APO-5012',
    customer_name: 'Boutique Consultation Counter Walk-In',
    customer_phone: '919061902295',
    customer_email: 'walkin@botanica.in',
    shipping_address: 'Apothecary Flagship Counter #01, Fort Kochi',
    items: [
      { id: 'PRD-PRF-04', name: 'No. 07 Santal & Smoked Bergamot Eau de Parfum', qty: 1, price: 4600 }
    ],
    detail: 'No. 07 Santal & Smoked Bergamot EDP (50ml) • Amber Glass Vial Macerated Batch',
    subtotal: 4600,
    discount: 0,
    total_amount: 4600,
    is_bundle: 0,
    channel: 'pos_counter',
    payment_method: 'cashfree_upi',
    status: 'POS COMPLETED // APOTHECARY BOTTLE DISPENSED',
    batch_lot_assigned: 'LOT-2026-D01',
    upi_qr_string: 'upi://pay?pa=botanica.apothecary@icici&pn=BOTANICA+LABS&am=4600&cu=INR&tn=ORD-APO-5012',
    created_at: '2026-11-01 08:50:00'
  }
];

/**
 * Lazy request-time catalog loader.
 * Injects INCI ingredients and Fragrance Pyramids into each product object.
 */
export function getCatalog() {
  return memoryProducts.map(p => {
    const inciList = memoryInci
      .filter(item => item.product_id === p.id)
      .sort((a, b) => a.rank_order - b.rank_order);

    const fragrancePyramid = {
      top: memoryFragrance.filter(f => f.product_id === p.id && f.tier === 'top'),
      heart: memoryFragrance.filter(f => f.product_id === p.id && f.tier === 'heart'),
      base: memoryFragrance.filter(f => f.product_id === p.id && f.tier === 'base')
    };

    const hasFragrance = fragrancePyramid.top.length > 0 || fragrancePyramid.heart.length > 0 || fragrancePyramid.base.length > 0;

    return {
      ...p,
      inci_ledger: inciList,
      fragrance_pyramid: hasFragrance ? fragrancePyramid : null
    };
  });
}

/**
 * Find single product with full ledger
 */
export function getProductById(id) {
  const catalog = getCatalog();
  return catalog.find(p => p.id === id || p.slug === id);
}

/**
 * Lazy request-time Batch Lot & Expiry Tracker with dynamic velocity forecasting.
 */
export function getBatchLots() {
  const now = Date.now();
  const msPerDay = 1000 * 60 * 60 * 24;

  return memoryBatchLots.map(lot => {
    const expTime = new Date(lot.expiry_date + 'T00:00:00Z').getTime();
    const daysRemaining = Math.ceil((expTime - now) / msPerDay);

    let status = lot.status;
    let badge = '🟢 Fresh';
    let alertLevel = 'fresh';

    if (lot.status === 'quarantined' || lot.qc_passed === 0) {
      status = 'quarantined';
      badge = '🔴 Quarantined';
      alertLevel = 'danger';
    } else if (daysRemaining <= 0) {
      status = 'expired';
      badge = '🔴 Expired';
      alertLevel = 'expired';
    } else if (daysRemaining <= 90) {
      status = 'near_expiry';
      badge = `🟡 Expiring in ${daysRemaining} Days`;
      alertLevel = 'warning';
    } else {
      status = 'active';
      badge = `🟢 Fresh (${daysRemaining} Days)`;
      alertLevel = 'fresh';
    }

    // Velocity Depletion Forecasting
    const dailyVelocity = lot.daily_velocity || 1;
    const runOutDays = dailyVelocity > 0 ? Math.round(lot.quantity_remaining / dailyVelocity) : 999;
    const depletionDate = new Date(now + runOutDays * msPerDay).toISOString().slice(0, 10);

    const reorderUrgent = runOutDays <= 45;

    return {
      ...lot,
      days_remaining: daysRemaining,
      computed_status: status,
      status_badge: badge,
      alert_level: alertLevel,
      run_out_days: runOutDays,
      estimated_depletion_date: depletionDate,
      reorder_urgency: reorderUrgent ? 'URGENT CLEANROOM REORDER' : 'STABLE RUN',
      server_check_time: new Date(now).toISOString()
    };
  });
}

/**
 * Toggle Quarantine State for a Batch Lot
 */
export function toggleBatchQuarantine(batchId) {
  const lot = memoryBatchLots.find(b => b.id === batchId || b.batch_number === batchId);
  if (!lot) return null;

  if (lot.status === 'quarantined') {
    lot.status = 'active';
    lot.qc_passed = 1;
  } else {
    lot.status = 'quarantined';
    lot.qc_passed = 0;
  }

  return getBatchLots().find(b => b.id === lot.id);
}

/**
 * Update stock count for a batch
 */
export function updateBatchStock(batchId, quantityRemaining) {
  const lot = memoryBatchLots.find(b => b.id === batchId || b.batch_number === batchId);
  if (!lot) return null;
  lot.quantity_remaining = Math.max(0, Number(quantityRemaining) || 0);
  return getBatchLots().find(b => b.id === lot.id);
}

/**
 * Calculate 3-Piece Routine Bundle with 15% Apothecary Discount
 */
export function calculateBundle(itemIds = []) {
  const catalog = getCatalog();
  const selectedProducts = [];
  let subtotal = 0;

  for (const id of itemIds) {
    const prod = catalog.find(p => p.id === id || p.slug === id);
    if (prod) {
      selectedProducts.push(prod);
      subtotal += prod.price;
    }
  }

  // 15% Routine Discount applies if 3 or more products are chosen
  const isEligible = selectedProducts.length >= 3;
  const discountRate = isEligible ? 0.15 : 0.0;
  const discount = isEligible ? Math.round(subtotal * discountRate) : 0;
  const total = Math.max(0, subtotal - discount);

  return {
    isEligible,
    itemCount: selectedProducts.length,
    discountRate: isEligible ? 15 : 0,
    subtotal,
    discount,
    total,
    bundleBadge: isEligible ? '15% ROUTINE DISCOUNT APPLIED' : null,
    products: selectedProducts
  };
}

/**
 * Process Skin Diagnostic Quiz Answers
 * Step 1: Skin Type
 * Step 2: Primary Concern
 * Step 3: Texture Preference
 * Returns tailored 3-Step Routine and saves inquiry lead.
 */
export function processSkinQuiz(payload = {}) {
  const now = Date.now();
  const {
    name = 'Guest Visitor',
    phone = '919061902295',
    skinType = 'Sensitive / Reactive',
    concern = 'Barrier Repair',
    texture = 'Biomimetic Rich Cream'
  } = payload;

  const catalog = getCatalog();

  // Step 1: Cleanse formulation (Foundational for all types)
  const cleanser = catalog.find(p => p.id === 'PRD-CLN-01');

  // Step 2: Treatment formulation (Determined by concern & texture)
  let treatment;
  if (concern === 'Fine Lines & Elasticity' || skinType.includes('Mature') || texture === 'Silky Botanical Oil') {
    treatment = catalog.find(p => p.id === 'PRD-ELX-05'); // Bakuchiol Night Elixir
  } else {
    treatment = catalog.find(p => p.id === 'PRD-TRT-02'); // Niacinamide + Zinc Serum
  }

  // Step 3: Moisturizer formulation
  const moisturizer = catalog.find(p => p.id === 'PRD-MST-03'); // Ceramide Biomimetic Cream

  const routineItems = [cleanser, treatment, moisturizer].filter(Boolean);
  const bundleCalc = calculateBundle(routineItems.map(p => p.id));

  // Build Prescribed Text
  const routineDescription = `Step 1: ${cleanser.name} + Step 2: ${treatment.name} + Step 3: ${moisturizer.name}`;

  // Generate Unique Lead ID
  const leadId = `LEAD-${Math.floor(1000 + Math.random() * 9000)}`;

  const leadRecord = {
    id: leadId,
    customer_name: name.trim(),
    customer_phone: phone.trim().replace(/[^0-9]/g, ''),
    skin_type: skinType,
    primary_concern: concern,
    texture_preference: texture,
    prescribed_routine: routineDescription,
    bundle_total: bundleCalc.total,
    status: 'new',
    created_at: new Date(now).toISOString().replace('T', ' ').slice(0, 19)
  };

  memoryLeads.unshift(leadRecord);
  if (memoryLeads.length > 50) memoryLeads.pop();

  // WhatsApp concierge pre-filled follow up link
  const waPhone = leadRecord.customer_phone || '919061902295';
  const waMsg = encodeURIComponent(
    `Hello ${leadRecord.customer_name}, here is your tailored Apothecary 3-Step Routine for ${concern} (${skinType}):\n\n1. Cleanse: ${cleanser.name}\n2. Treat: ${treatment.name}\n3. Moisturize: ${moisturizer.name}\n\nPrescribed Regimen Total: ₹${bundleCalc.total} (15% Routine Discount Included). Would you like to finalize your formulation batch dispatch?`
  );
  const whatsappFollowUpUrl = `https://wa.me/${waPhone}?text=${waMsg}`;

  return {
    success: true,
    leadId,
    customer: {
      name: leadRecord.customer_name,
      phone: leadRecord.customer_phone
    },
    diagnosticInput: {
      skinType,
      concern,
      texture
    },
    routine: {
      step1: cleanser,
      step2: treatment,
      step3: moisturizer
    },
    pricing: {
      subtotal: bundleCalc.subtotal,
      discount: bundleCalc.discount,
      discountRate: 15,
      total: bundleCalc.total
    },
    ritualGuidance: [
      'AM: Cleanse gently with 2 pumps of Centella emulsion. Pat dry. Apply 3 drops of treatment, then lock with a pea-sized amount of Ceramide cream.',
      'PM: Repeat ritual. If using Bakuchiol Elixir, press 2-3 drops as the final layer to lock in overnight cellular renewal.'
    ],
    whatsappFollowUpUrl
  };
}

/**
 * Process Order Checkout with Batch Assignment & Cashfree UPI QR Simulation
 */
export function processCheckout(payload = {}) {
  const now = Date.now();
  const {
    items = [],
    customer = {},
    channel = 'online',
    isBundle = false,
    paymentMethod = 'cashfree_upi'
  } = payload;

  if (!Array.isArray(items) || items.length === 0) {
    return {
      status: 400,
      error: 'EMPTY_BAG',
      message: 'Your apothecary bag contains no formulations.'
    };
  }

  const catalog = getCatalog();
  const verifiedItems = [];
  let subtotal = 0;
  const assignedLots = [];

  for (const it of items) {
    const prod = catalog.find(p => p.id === (it.id || it.productId) || p.slug === (it.id || it.productId));
    if (!prod) {
      return {
        status: 400,
        error: 'INVALID_FORMULATION',
        message: `Product ${it.name || it.id} not found in apothecary catalog.`
      };
    }

    const qty = Math.max(1, Number(it.qty) || 1);

    // Find active or near-expiry batch lot eligible for dispensing (FEFO principle)
    const activeLot = memoryBatchLots.find(b => b.product_id === prod.id && (b.status === 'active' || b.status === 'near_expiry') && b.status !== 'quarantined' && b.status !== 'expired' && b.qc_passed !== 0 && b.quantity_remaining > 0);
    if (!activeLot) {
      return {
        status: 400,
        error: 'ZERO_STOCK_REJECTED',
        message: `Zero-Backorder Scarcity: Formulation ${prod.name} has no active released batch remaining in cleanroom inventory.`
      };
    }

    if (activeLot.quantity_remaining < qty) {
      return {
        status: 400,
        error: 'INSUFFICIENT_BATCH_STOCK',
        message: `Only ${activeLot.quantity_remaining} bottles available in batch ${activeLot.batch_number}.`
      };
    }

    // Deduct stock
    activeLot.quantity_remaining -= qty;
    assignedLots.push(`${prod.name} (${activeLot.batch_number})`);

    const lineTotal = prod.price * qty;
    subtotal += lineTotal;

    verifiedItems.push({
      id: prod.id,
      name: prod.name,
      step_category: prod.step_category,
      price: prod.price,
      qty,
      lineTotal,
      batch_lot: activeLot.batch_number,
      pao_months: prod.pao_months
    });
  }

  // Calculate routine bundle discount (15% if 3+ items or explicitly flagged as bundle)
  const applyBundle = isBundle || verifiedItems.length >= 3;
  const discount = applyBundle ? Math.round(subtotal * 0.15) : 0;
  const totalAmount = Math.max(0, subtotal - discount);

  // Generate Order ID
  const orderId = `ORD-APO-${Math.floor(1000 + Math.random() * 9000)}`;

  // Cashfree UPI QR string simulation
  const upiQrString = `upi://pay?pa=botanica.apothecary@icici&pn=BOTANICA+LABS&am=${totalAmount}&cu=INR&tn=${orderId}`;
  const upiIntentUrl = upiQrString;

  const customerName = (customer.name || (channel === 'pos_counter' ? 'Apothecary Walk-In Patron' : 'Private Client')).trim();
  const customerPhone = (customer.phone || '919061902295').trim();
  const customerEmail = customer.email || 'client@botanica.apothecary';
  const shippingAddress = customer.address || (channel === 'pos_counter' ? 'Counter POS Dispensed' : 'Private Courier Dispatch');

  const summaryDetail = verifiedItems.map(i => `${i.name} ×${i.qty} [${i.batch_lot}]`).join(', ') + (applyBundle ? ' • 15% Apothecary Routine Discount' : '');

  const newOrder = {
    id: orderId,
    customer_name: customerName,
    customer_phone: customerPhone,
    customer_email: customerEmail,
    shipping_address: shippingAddress,
    items: verifiedItems,
    detail: summaryDetail,
    subtotal,
    discount,
    total_amount: totalAmount,
    is_bundle: applyBundle ? 1 : 0,
    channel,
    payment_method: paymentMethod,
    status: channel === 'pos_counter' ? 'POS COMPLETED // APOTHECARY BOTTLE DISPENSED' : 'PAID // LAB DISPATCH',
    batch_lot_assigned: assignedLots.join('; '),
    upi_qr_string: upiQrString,
    created_at: new Date(now).toISOString().replace('T', ' ').slice(0, 19)
  };

  memoryOrders.unshift(newOrder);
  if (memoryOrders.length > 50) memoryOrders.pop();

  return {
    status: 200,
    success: true,
    orderId,
    customer: {
      name: customerName,
      phone: customerPhone
    },
    items: verifiedItems,
    subtotal,
    discount,
    totalAmount,
    isBundle: applyBundle,
    batchLotsAssigned: assignedLots,
    cashfreeSimulation: {
      gateway: 'Cashfree UPI Apothecary Express v2',
      status: 'SUCCESS',
      transactionId: `CF_APO_${now}`,
      upiQrString,
      upiIntentUrl
    },
    orderSummary: newOrder
  };
}

/**
 * Consultation Leads Getter
 */
export function getConsultationLeads() {
  return memoryLeads.map(l => {
    const waPhone = l.customer_phone || '919061902295';
    const waMsg = encodeURIComponent(
      `Hello ${l.customer_name}, following up from Botanica Apothecary regarding your ${l.primary_concern} skincare routine (${l.prescribed_routine}). How can our formulation chemist assist your ritual?`
    );
    return {
      ...l,
      whatsapp_link: `https://wa.me/${waPhone}?text=${waMsg}`
    };
  });
}

/**
 * Orders Getter
 */
export function getOrders() {
  return memoryOrders.map(o => ({ ...o }));
}
