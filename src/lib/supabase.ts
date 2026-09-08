import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name: string;
  slug: string;
  product_code: string | null;
  composition: string | null;
  dosage_form: string | null;
  strength: string | null;
  packaging: string | null;
  category: string | null;
  therapeutic_area: string | null;
  product_type: string | null;
  image_url: string | null;
  indications: string | null;
  storage: string | null;
  product_info: string | null;
  is_featured: boolean;
  display_order: number;
};

export type TherapeuticArea = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  display_order: number;
};

export type NewsArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  image_url: string | null;
  published_date: string;
  is_published: boolean;
};

export type JobOpening = {
  id: string;
  title: string;
  slug: string;
  department: string | null;
  location: string | null;
  job_type: string | null;
  description: string | null;
  requirements: string | null;
  is_active: boolean;
  posted_date: string;
};

export type Enquiry = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  product?: string;
  quantity?: string;
  message?: string;
  enquiry_type?: string;
};
