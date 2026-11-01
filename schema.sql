-- D1 SQLite Relational Schema for tpl-ecom-cosmetics
-- Luxury Cosmetics, Skincare & Perfume D2C (Quiet Apothecary Minimalist)

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subtitle TEXT,
  step_category TEXT NOT NULL, -- 'cleanse', 'treat', 'moisturize', 'fragrance'
  volume_ml INTEGER NOT NULL,
  ph_level TEXT DEFAULT '5.5',
  skin_type TEXT DEFAULT 'All Skin Types',
  primary_concern TEXT,
  texture TEXT,
  price INTEGER NOT NULL,
  retail_price INTEGER NOT NULL,
  short_desc TEXT,
  full_desc TEXT,
  ritual_instructions TEXT,
  hero_active TEXT,
  image_url TEXT,
  pao_months INTEGER DEFAULT 12,
  is_bundle_eligible INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product_inci (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  rank_order INTEGER NOT NULL,
  scientific_name TEXT NOT NULL,
  common_name TEXT,
  function_role TEXT NOT NULL,
  ewg_score INTEGER DEFAULT 1,
  source_origin TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS fragrance_pyramids (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  tier TEXT NOT NULL, -- 'top', 'heart', 'base'
  note_name TEXT NOT NULL,
  description TEXT,
  evaporation_rate TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS batch_lots (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  batch_number TEXT NOT NULL UNIQUE,
  manufacture_date DATE NOT NULL,
  expiry_date DATE NOT NULL,
  pao_months INTEGER DEFAULT 12,
  quantity_produced INTEGER NOT NULL,
  quantity_remaining INTEGER NOT NULL,
  daily_velocity REAL DEFAULT 3.2,
  status TEXT DEFAULT 'active', -- 'active', 'near_expiry', 'expired', 'quarantined'
  qc_passed INTEGER DEFAULT 1,
  facility_location TEXT DEFAULT 'Apothecary Lab Cleanroom A',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS consultation_leads (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  skin_type TEXT,
  primary_concern TEXT,
  texture_preference TEXT,
  prescribed_routine TEXT,
  bundle_total INTEGER,
  status TEXT DEFAULT 'new', -- 'new', 'contacted', 'converted'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  shipping_address TEXT,
  items_json TEXT NOT NULL,
  detail TEXT,
  subtotal INTEGER NOT NULL,
  discount INTEGER DEFAULT 0,
  total_amount INTEGER NOT NULL,
  is_bundle INTEGER DEFAULT 0,
  channel TEXT DEFAULT 'online', -- 'online', 'pos_counter'
  payment_method TEXT DEFAULT 'cashfree_upi',
  status TEXT DEFAULT 'PAID // LAB DISPATCH',
  batch_lot_assigned TEXT,
  upi_qr_string TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_inci_product ON product_inci(product_id);
CREATE INDEX IF NOT EXISTS idx_fragrance_product ON fragrance_pyramids(product_id);
CREATE INDEX IF NOT EXISTS idx_batch_product ON batch_lots(product_id);
CREATE INDEX IF NOT EXISTS idx_batch_status ON batch_lots(status);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON consultation_leads(customer_phone);
