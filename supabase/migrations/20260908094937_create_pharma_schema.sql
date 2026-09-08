/*
# Shawez Pharma - Database Schema

1. New Tables
- `therapeutic_areas` - medical specialty areas (Cardiology, Diabetes, etc.)
- `products` - pharmaceutical product catalogue with full details
- `news_articles` - company news, product updates, research, events
- `job_openings` - career opportunities
- `enquiries` - product and general enquiries from website visitors

2. Security
- All tables have RLS enabled
- Public read access (anon + authenticated) for products, therapeutic_areas, news, jobs
- Public can submit enquiries (INSERT only)
- No auth required - single-tenant public website

3. Notes
- Uses placeholders for product data per company policy
- Enquiries table stores form submissions from contact/product pages
*/

-- Therapeutic Areas
CREATE TABLE IF NOT EXISTS therapeutic_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  icon text,
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE therapeutic_areas ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_therapeutic_areas" ON therapeutic_areas;
CREATE POLICY "public_read_therapeutic_areas" ON therapeutic_areas FOR SELECT
  TO anon, authenticated USING (true);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  product_code text,
  composition text,
  dosage_form text,
  strength text,
  packaging text,
  category text,
  therapeutic_area text,
  product_type text DEFAULT 'Branded',
  image_url text,
  indications text,
  storage text,
  product_info text,
  is_featured boolean DEFAULT false,
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_products" ON products;
CREATE POLICY "public_read_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

-- News Articles
CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text,
  content text,
  category text DEFAULT 'Company News',
  image_url text,
  published_date date DEFAULT CURRENT_DATE,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_news" ON news_articles;
CREATE POLICY "public_read_news" ON news_articles FOR SELECT
  TO anon, authenticated USING (true);

-- Job Openings
CREATE TABLE IF NOT EXISTS job_openings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  department text,
  location text,
  job_type text DEFAULT 'Full-time',
  description text,
  requirements text,
  is_active boolean DEFAULT true,
  posted_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_openings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_jobs" ON job_openings;
CREATE POLICY "public_read_jobs" ON job_openings FOR SELECT
  TO anon, authenticated USING (true);

-- Enquiries
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  country text,
  product text,
  quantity text,
  message text,
  enquiry_type text DEFAULT 'product',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_enquiries" ON enquiries;
CREATE POLICY "public_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_therapeutic_area ON products(therapeutic_area);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_news_published ON news_articles(is_published, published_date);
CREATE INDEX IF NOT EXISTS idx_jobs_active ON job_openings(is_active);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at);
