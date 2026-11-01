-- D1 SQLite Seed Data for tpl-ecom-cosmetics
-- Quiet Luxury Apothecary: Botanical Cleansers, Cellular Serums, Biomimetic Creams & Olfactory Formulations

-- 1. PRODUCTS
INSERT OR REPLACE INTO products (id, slug, name, subtitle, step_category, volume_ml, ph_level, skin_type, primary_concern, texture, price, retail_price, short_desc, full_desc, ritual_instructions, hero_active, image_url, pao_months, is_bundle_eligible)
VALUES
(
  'PRD-CLN-01',
  'botanical-barrier-defense-cleanser',
  'Botanical Barrier Defense Cleanser (Centella & Oat)',
  'Formulation Series 01 • Lipid-Preserving Emulsion',
  'cleanse',
  200,
  '5.5',
  'All Skin Types, Reactive & Compromised',
  'Barrier Repair',
  'Jelly-to-Milk Emulsion',
  1850,
  2400,
  'A non-stripping botanical cleansing fluid fortified with bio-fermented Centella Asiatica and colloidal oat to dissolve impurities while preserving stratum corneum lipids.',
  'Formulated at physiological pH 5.5 to safeguard the cutaneous microbiome. Combines high-purity wild harvested Gotu Kola with triple-milled Avena Sativa kernel flour, providing immediate anti-inflammatory calmness while effortlessly melting sebum, pollution particulates, and sunscreens.',
  'Dispense 2-3 pumps onto dry palms. Gently massage into dry face for 60 seconds to break down environmental pollutants. Add tepid water to emulsify into a silky milk, then rinse thoroughly.',
  'Bio-Fermented Centella Asiatica 4.5% + Colloidal Oat 3.0%',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
  12,
  1
),
(
  'PRD-TRT-02',
  'niacinamide-zinc-cellular-serum',
  '10% Niacinamide + Zinc Cellular Serum',
  'Formulation Series 02 • High-Potency Sebum & Pore Modulator',
  'treat',
  30,
  '5.2',
  'Oily, Blemish-Prone & Texture-Irregular',
  'Blemish & Texture',
  'Lightweight Viscous Water-Gel',
  2450,
  3100,
  'High-potency cellular treatment containing pharmaceutical-grade Nicotinamide coupled with 1.2% Zinc PCA to clarify congestion and recalibrate sebum synthesis.',
  'A clinically balanced active concentrate engineered to refine visible pore architecture, inhibit melanogenesis for post-acne erythema fade, and reinforce intercellular ceramide synthesis. Free from silicones, artificial fragrance, or penetrative alcohols.',
  'Apply 3-4 drops directly to clean skin before heavier creams. Lightly press with warm palms across forehead, cheeks, and t-zone until completely absorbed. Use morning and evening.',
  'USP Niacinamide 10.0% + Zinc L-PCA 1.2%',
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
  6,
  1
),
(
  'PRD-MST-03',
  'ceramide-biomimetic-restorative-cream',
  'Ceramide Biomimetic Restorative Cream',
  'Formulation Series 03 • Intercellular Lipid Matrix',
  'moisturize',
  50,
  '5.8',
  'Dry, Dehydrated & Compromised Barrier',
  'Deep Hydration',
  'Biomimetic Rich Velvety Cream',
  2850,
  3600,
  'A physiologically matched 3:1:1 lipid replenishment matrix (Ceramides NP/AP/EOP, Cholesterol, and Free Fatty Acids) suspended in cold-pressed Camellia seed oil.',
  'Engineered to mimic the exact lamellar architecture of natural stratum corneum lipids. Accelerates cutaneous micro-tear recovery within 24 hours while locking in dermal water reservoirs with phytosterols and biomimetic squalane.',
  'Warm a hazelnut-sized portion between fingertips to melt the botanical wax matrix. Press firmly onto face, neck, and décolletage as the terminal step in your daily or nightly ritual.',
  'Phyto-Ceramide Complex (NP, AP, EOP) 3.5% + Bio-Cholesterol 1.0%',
  'https://images.unsplash.com/photo-1608248597359-009941a5d625?auto=format&fit=crop&w=900&q=80',
  12,
  1
),
(
  'PRD-PRF-04',
  'santal-smoked-bergamot-edp',
  'No. 07 Santal & Smoked Bergamot Eau de Parfum',
  'Apothecary Olfactory Specimen • 22% Pure Extrait Concentration',
  'fragrance',
  50,
  'N/A',
  'Universal Olfactory Profile',
  'Olfactory Presence',
  'Fine Micro-Aerosol Mist',
  4600,
  5800,
  'An intimate, grounding olfactory portrait combining Calabrian smoked bergamot with Australian album sandalwood, papyrus reed, and black amber concrete.',
  'Formulated at a concentrated 22% pure extrait dilution in organic neutral grape spirit. Opening with sharp citrus smoke before mellowing into warm parchment, sacred woods, dry iris concrete, and nocturnal resin. Aged for 90 days in inert glass carboys.',
  'Mist onto pulse points — carotid artery behind earlobes, wrists, and collarbone hollows. Refrain from rubbing wrists together to preserve delicate volatile top-note ester bonds.',
  'Aged Australian Sandalwood Heartwood 18% + Calabrian Bergamot',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
  24,
  0
),
(
  'PRD-ELX-05',
  'cold-pressed-bakuchiol-night-elixir',
  'Cold-Pressed Bakuchiol Night Elixir',
  'Formulation Series 05 • Phyto-Retinoid Cellular Regeneration',
  'treat',
  30,
  '5.0',
  'Sensitive, Aging & Photo-Damaged Skin',
  'Fine Lines & Elasticity',
  'Silky Dry Botanical Oil',
  3400,
  4200,
  'Pure 2% monoterpenoid Bakuchiol infused in cold-pressed virgin Marula and Rosehip seed oils to stimulate pro-collagen I synthesis without retinoid dermatitis.',
  'A 100% natural, photo-stable retinol alternative harvested sustainably from Psoralea corylifolia seeds. Synergized with high-content gamma-linolenic acid to accelerate cellular turnover, soften fine lines, and impart an overnight radiance without stinging or UV photosensitivity.',
  'At night, press 2-3 drops over damp skin or blend directly into your Ceramide Restorative Cream. Ideal as an overnight nourishing lipid seal.',
  'Pure Phyto-Bakuchiol 2.0% + Organic Marula & Rosehip Oil',
  'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=80',
  6,
  1
);

-- 2. PRODUCT INCI COSMETIC INGREDIENT LEDGER
INSERT OR REPLACE INTO product_inci (id, product_id, rank_order, scientific_name, common_name, function_role, ewg_score, source_origin)
VALUES
-- Cleanser INCI
('INCI-CLN-01', 'PRD-CLN-01', 1, 'Aqua / Water / Eau', 'Purified Demineralized Water', 'Solvent Base', 1, 'Double-Reverse Osmosis Filtration'),
('INCI-CLN-02', 'PRD-CLN-01', 2, 'Centella Asiatica Extract', 'Gotu Kola Herb Extract', 'Anti-Inflammatory & Microcirculation', 1, 'Madagascar Wild-Harvest'),
('INCI-CLN-03', 'PRD-CLN-01', 3, 'Avena Sativa (Oat) Kernel Flour', 'Colloidal Oat Flour', 'Skin Protectant & Barrier Soothing', 1, 'Scandinavian Organic Milling'),
('INCI-CLN-04', 'PRD-CLN-01', 4, 'Sodium Cocoyl Isethionate', 'Coconut-Derived Cleanser', 'Gentle Surfactant Cleansing Agent', 1, 'Renewable Coconut Fatty Acids'),
('INCI-CLN-05', 'PRD-CLN-01', 5, 'Glycerin (Vegetable)', 'Plant Glycerin', 'Humectant Water Binding', 1, 'Non-GMO Rapeseed'),
('INCI-CLN-06', 'PRD-CLN-01', 6, 'Allantoin', 'Comfrey Derivative', 'Epithelial Soothing & Softening', 1, 'Bio-Synthesized Botanical'),

-- Serum INCI
('INCI-TRT-01', 'PRD-TRT-02', 1, 'Aqua / Water / Eau', 'Purified Demineralized Water', 'Solvent Base', 1, 'Double-Reverse Osmosis Filtration'),
('INCI-TRT-02', 'PRD-TRT-02', 2, 'Niacinamide (Vitamin B3)', 'Nicotinamide', 'Cellular Renewal & Sebum Modulation', 1, 'USP Pharmaceutical Grade Synthesis'),
('INCI-TRT-03', 'PRD-TRT-02', 3, 'Zinc PCA', 'Zinc Pyrrolidone Carboxylic Acid', 'Anti-Microbial & Oil Reduction', 1, 'Bio-Fermented Mineral Salt'),
('INCI-TRT-04', 'PRD-TRT-02', 4, 'Sodium Hyaluronate', 'Low-Molecular Hyaluronic Acid', 'Deep Dermal Hydration', 1, 'Bio-Fermented Streptococcus Zooepidemicus'),
('INCI-TRT-05', 'PRD-TRT-02', 5, 'Ethoxydiglycol', 'Active Delivery Vehicle', 'Penetration Enhancer', 1, 'Safe Solubilizer'),
('INCI-TRT-06', 'PRD-TRT-02', 6, 'Phenoxyethanol (and) Ethylhexylglycerin', 'Clean Preservative Complex', 'Microbial Stability', 2, 'Ecological Shield System'),

-- Ceramide Cream INCI
('INCI-MST-01', 'PRD-MST-03', 1, 'Aqua / Water / Eau', 'Purified Demineralized Water', 'Solvent Base', 1, 'Double-Reverse Osmosis Filtration'),
('INCI-MST-02', 'PRD-MST-03', 2, 'Ceramide NP / Ceramide AP / Ceramide EOP', 'Bio-Identical Ceramides', 'Intercellular Lipid Cement Replenishment', 1, 'Yeast Bio-Fermentation'),
('INCI-MST-03', 'PRD-MST-03', 3, 'Phytosphingosine & Cholesterol', 'Cutaneous Precursors', 'Natural Barrier Architecture Restoration', 1, 'Plant-Derived Bio-Lipids'),
('INCI-MST-04', 'PRD-MST-03', 4, 'Camellia Japonica Seed Oil', 'Tsubaki Flower Seed Oil', 'Antioxidant Emollient & Elasticity', 1, 'Cold-Pressed Jeju Camellia'),
('INCI-MST-05', 'PRD-MST-03', 5, 'Squalane (Olive)', 'Phytosqualane', 'Biomimetic Sebaceous Lipid Mimic', 1, 'Spanish Olive Oil Esters'),
('INCI-MST-06', 'PRD-MST-03', 6, 'Tocopherol', 'Pure Vitamin E', 'Lipid Oxidation Inversion', 1, 'Non-GMO Sunflower Distillate'),

-- Perfume INCI
('INCI-PRF-01', 'PRD-PRF-04', 1, 'Alcohol Denat. (Organic Neutral Grape Spirit)', 'Organic Grape Alcohol', 'Olfactory Evaporation Carrier', 2, 'French Organic Viticulture'),
('INCI-PRF-02', 'PRD-PRF-04', 2, 'Parfum / Fragrance Concentrate', 'Artisanal Botanical & Resin Extracts', 'Olfactory Identity', 1, 'Grasse Essential Oils & Isolates'),
('INCI-PRF-03', 'PRD-PRF-04', 3, 'Santalum Spicatum Wood Oil', 'Australian Sandalwood Oil', 'Base Fixative & Sacred Wood Essence', 1, 'Ethical Sustainable Plantation'),
('INCI-PRF-04', 'PRD-PRF-04', 4, 'Citrus Aurantium Bergamia Peel Oil', 'Calabrian Bergamot Essence', 'Top Citrus Sparkle (Furocoumarin-Free)', 1, 'Cold-Pressed Italian Orchards'),
('INCI-PRF-05', 'PRD-PRF-04', 5, 'Aqua / Water / Eau', 'Mineral Demineralized Water', 'Diluent Balancer', 1, 'Double-Reverse Osmosis Filtration'),

-- Bakuchiol Elixir INCI
('INCI-ELX-01', 'PRD-ELX-05', 1, 'Sclerocarya Birrea (Marula) Seed Oil', 'Virgin Marula Seed Oil', 'High-Oleic Botanical Base Carrier', 1, 'Namibian Cold-Pressed Harvest'),
('INCI-ELX-02', 'PRD-ELX-05', 2, 'Rosa Canina (Rosehip) Seed Oil', 'Organic Rosehip Fruit Oil', 'Trans-Retinoic Acid & Pro-Vitamin A', 1, 'Patagonian Andes Wild-Harvest'),
('INCI-ELX-03', 'PRD-ELX-05', 3, 'Bakuchiol (99% Purity)', 'Pure Babchi Phenol Extract', 'Phyto-Retinol Collagen Stimulation', 1, 'Ayurvedic Babchi Seed Distillate'),
('INCI-ELX-04', 'PRD-ELX-05', 4, 'Helianthus Annuus Seed Oil', 'Sunflower Seed Oil', 'Natural Solubilizer', 1, 'Certified Organic Seed Press'),
('INCI-ELX-05', 'PRD-ELX-05', 5, 'Bisabolol', 'Alpha-Bisabolol Chamomile Isolate', 'Anti-Irritant & Redness Pacifier', 1, 'Candeia Tree Bark Extraction');

-- 3. FRAGRANCE PYRAMIDS
INSERT OR REPLACE INTO fragrance_pyramids (id, product_id, tier, note_name, description, evaporation_rate)
VALUES
-- No. 07 Santal & Smoked Bergamot EDP
('FRG-PRF-01', 'PRD-PRF-04', 'top', 'Smoked Calabrian Bergamot', 'Sun-drenched Mediterranean citrus roasted over green oak wood chips', '15-30 minutes'),
('FRG-PRF-02', 'PRD-PRF-04', 'top', 'Crushed Italian Pink Pepper', 'Crisp, piquant botanical spice delivering an invigorating opening sparkle', '15-45 minutes'),
('FRG-PRF-03', 'PRD-PRF-04', 'top', 'Green Cardamom Pod', 'Cool herbal balsamic undertones balancing smoky citrus', '20-60 minutes'),
('FRG-PRF-04', 'PRD-PRF-04', 'heart', 'Nile Papyrus Reed', 'Dry parchment, antique library scrolls, and sun-baked river reeds', '2-4 hours'),
('FRG-PRF-05', 'PRD-PRF-04', 'heart', 'Black Amber Concrete', 'Nocturnal resin providing warm tactile depth and honeyed smokiness', '3-5 hours'),
('FRG-PRF-06', 'PRD-PRF-04', 'heart', 'Florentine Orris Concrete', 'Velvety, powdery earthiness harvested from aged iris rhizomes', '2-6 hours'),
('FRG-PRF-07', 'PRD-PRF-04', 'base', 'Australian Album Sandalwood', 'Creamy, sacred timber harvested with ethical reforestation certification', '6-12+ hours'),
('FRG-PRF-08', 'PRD-PRF-04', 'base', 'Moroccan Atlas Cedarwood', 'Resinous pencil shavings and dry wood smoke grounding the olfactory projection', '8-14+ hours'),
('FRG-PRF-09', 'PRD-PRF-04', 'base', 'Dark Botanical Musk', 'Clean cutaneous sillage replicating warm skin chemistry', '10-18+ hours'),

-- Subtle botanical profile for Bakuchiol Elixir
('FRG-ELX-01', 'PRD-ELX-05', 'top', 'Cold-Pressed Wild Rose', 'Subtle dewy botanical floral breath from unrefined rosehip fruit', '10-20 minutes'),
('FRG-ELX-02', 'PRD-ELX-05', 'heart', 'Earthy Babchi Herbal', 'Warm balsamic seed essence natural to pure bakuchiol monoterpenes', '1-2 hours'),
('FRG-ELX-03', 'PRD-ELX-05', 'base', 'Raw Marula Nut', 'Soft nutty warmth that diffuses gently upon nocturnal application', '3-5 hours');

-- 4. BATCH LOTS & EXPIRY TRACKER
INSERT OR REPLACE INTO batch_lots (id, product_id, batch_number, manufacture_date, expiry_date, pao_months, quantity_produced, quantity_remaining, daily_velocity, status, qc_passed, facility_location)
VALUES
(
  'LOT-2026-A12',
  'PRD-CLN-01',
  'LOT-2026-A12',
  '2026-02-10',
  '2028-02-10',
  12,
  800,
  342,
  4.2,
  'active',
  1,
  'Apothecary Lab Cleanroom A'
),
(
  'LOT-2025-C08',
  'PRD-TRT-02',
  'LOT-2025-C08',
  '2025-01-15',
  '2026-12-15',
  6,
  600,
  85,
  3.8,
  'near_expiry',
  1,
  'Apothecary Lab Cleanroom B'
),
(
  'LOT-2026-B03',
  'PRD-MST-03',
  'LOT-2026-B03',
  '2026-03-01',
  '2028-03-01',
  12,
  750,
  420,
  3.5,
  'active',
  1,
  'Apothecary Lab Cleanroom A'
),
(
  'LOT-2026-D01',
  'PRD-PRF-04',
  'LOT-2026-D01',
  '2026-04-12',
  '2029-04-12',
  24,
  400,
  188,
  2.1,
  'active',
  1,
  'Grasse Maceration Vault 04'
),
(
  'LOT-2025-Q99',
  'PRD-ELX-05',
  'LOT-2025-Q99',
  '2025-11-20',
  '2027-11-20',
  6,
  300,
  120,
  0.0,
  'quarantined',
  0,
  'Stability Testing Chamber 02'
),
(
  'LOT-2026-E05',
  'PRD-ELX-05',
  'LOT-2026-E05',
  '2026-05-18',
  '2028-05-18',
  6,
  500,
  295,
  2.8,
  'active',
  1,
  'Apothecary Lab Cleanroom C'
);

-- 5. INITIAL CONSULTATION LEADS (From Skin Diagnostic Quiz)
INSERT OR REPLACE INTO consultation_leads (id, customer_name, customer_phone, skin_type, primary_concern, texture_preference, prescribed_routine, bundle_total, status)
VALUES
(
  'LEAD-8801',
  'Dr. Tara Varma (Kochi)',
  '919847112233',
  'Sensitive / Reactive',
  'Barrier Repair',
  'Biomimetic Rich Cream',
  'Step 1: Botanical Cleanser + Step 2: Niacinamide Cellular Serum + Step 3: Ceramide Restorative Cream',
  6077,
  'contacted'
),
(
  'LEAD-8802',
  'Ananya Nambiar (Bangalore)',
  '919447223344',
  'Mature / Photo-Damaged',
  'Fine Lines & Elasticity',
  'Silky Botanical Oil',
  'Step 1: Botanical Cleanser + Step 2: Cold-Pressed Bakuchiol Night Elixir + Step 3: Ceramide Restorative Cream',
  6885,
  'new'
),
(
  'LEAD-8803',
  'Rohan Mehta (Mumbai)',
  '919820334455',
  'Oily / Combination',
  'Blemish & Texture',
  'Lightweight Water Gel',
  'Step 1: Botanical Cleanser + Step 2: Niacinamide Cellular Serum + Step 3: Ceramide Restorative Cream',
  6077,
  'new'
);

-- 6. INITIAL ORDERS
INSERT OR REPLACE INTO orders (id, customer_name, customer_phone, customer_email, shipping_address, items_json, detail, subtotal, discount, total_amount, is_bundle, channel, payment_method, status, batch_lot_assigned, upi_qr_string)
VALUES
(
  'ORD-APO-5011',
  'Meera Nair (Panampilly Nagar, Kochi)',
  '919846001122',
  'meera.nair@example.com',
  'Villa 14, Rosewood Gardens, Panampilly Nagar, Kochi 682036',
  '[{"id":"PRD-CLN-01","name":"Botanical Barrier Defense Cleanser","qty":1,"price":1850},{"id":"PRD-TRT-02","name":"10% Niacinamide + Zinc Cellular Serum","qty":1,"price":2450},{"id":"PRD-MST-03","name":"Ceramide Biomimetic Restorative Cream","qty":1,"price":2850}]',
  'Apothecary 3-Piece Regimen (Cleanser + Niacinamide + Ceramide) • 15% Routine Discount',
  7150,
  1073,
  6077,
  1,
  'online',
  'cashfree_upi',
  'PAID // LAB DISPATCH',
  'LOT-2026-A12, LOT-2025-C08, LOT-2026-B03',
  'upi://pay?pa=botanica.apothecary@icici&pn=BOTANICA+LABS&am=6077&cu=INR&tn=ORD-APO-5011'
),
(
  'ORD-APO-5012',
  'Boutique Consultation Counter Walk-In',
  '919061902295',
  'walkin@botanica.in',
  'Apothecary Flagship Counter #01, Fort Kochi',
  '[{"id":"PRD-PRF-04","name":"No. 07 Santal & Smoked Bergamot Eau de Parfum","qty":1,"price":4600}]',
  'No. 07 Santal & Smoked Bergamot EDP (50ml) • Amber Glass Vial Macerated Batch',
  4600,
  0,
  4600,
  0,
  'pos_counter',
  'cashfree_upi',
  'POS COMPLETED // APOTHECARY BOTTLE DISPENSED',
  'LOT-2026-D01',
  'upi://pay?pa=botanica.apothecary@icici&pn=BOTANICA+LABS&am=4600&cu=INR&tn=ORD-APO-5012'
);
