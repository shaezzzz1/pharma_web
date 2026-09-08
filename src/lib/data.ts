export const company = {
  name: 'Shawez Pharma',
  tagline: 'Advancing Global Healthcare Through Innovation',
  description:
    'Shawez Pharma is a premier research-driven pharmaceutical enterprise committed to manufacturing, formulating, and distributing world-class healthcare solutions across 12+ therapeutic specialties.',
  established: '2008',
  address: '100 Pharmaceutical Park, Global Healthcare Zone, NJ 08854',
  phone: '+1 (800) 555-SHAW',
  email: 'contact@shawezpharma.com',
  website: 'www.shawezpharma.com',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Therapeutic Areas', path: '/therapeutic-areas' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Quality Assurance', path: '/quality' },
  { label: 'R&D Innovation', path: '/research' },
  { label: 'Global Network', path: '/global-presence' },
  { label: 'News & Insights', path: '/news' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact Us', path: '/contact' },
];

export const images = {
  heroLab: 'https://images.pexels.com/photos/15831822/pexels-photo-15831822.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroLab2: 'https://images.pexels.com/photos/37839843/pexels-photo-37839843.jpeg?auto=compress&cs=tinysrgb&w=1600',
  researchLab: 'https://images.pexels.com/photos/8442366/pexels-photo-8442366.jpeg?auto=compress&cs=tinysrgb&w=1600',
  microscope: 'https://images.pexels.com/photos/9574556/pexels-photo-9574556.jpeg?auto=compress&cs=tinysrgb&w=1600',
  pillsPetri: 'https://images.pexels.com/photos/8539078/pexels-photo-8539078.jpeg?auto=compress&cs=tinysrgb&w=1600',
  scientistSamples: 'https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?auto=compress&cs=tinysrgb&w=1600',
  researcherNotes: 'https://images.pexels.com/photos/8851605/pexels-photo-8851605.jpeg?auto=compress&cs=tinysrgb&w=1600',
  labTouchscreen: 'https://images.pexels.com/photos/9574516/pexels-photo-9574516.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ampouleFilling: 'https://images.pexels.com/photos/37650270/pexels-photo-37650270.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tabletPackaging: 'https://images.pexels.com/photos/37466061/pexels-photo-37466061.jpeg?auto=compress&cs=tinysrgb&w=1600',
  productionPlant: 'https://images.pexels.com/photos/36823725/pexels-photo-36823725.jpeg?auto=compress&cs=tinysrgb&w=1600',
  automatedPackaging: 'https://images.pexels.com/photos/5532664/pexels-photo-5532664.jpeg?auto=compress&cs=tinysrgb&w=1600',
  pinkTablets: 'https://images.pexels.com/photos/51929/medications-cure-tablets-pharmacy-51929.jpeg?auto=compress&cs=tinysrgb&w=1600',
  colorfulTablets: 'https://images.pexels.com/photos/7034123/pexels-photo-7034123.jpeg?auto=compress&cs=tinysrgb&w=1600',
  blisterPacks: 'https://images.pexels.com/photos/140123/pexels-photo-140123.jpeg?auto=compress&cs=tinysrgb&w=1600',
  blisterPacks2: 'https://images.pexels.com/photos/3873149/pexels-photo-3873149.jpeg?auto=compress&cs=tinysrgb&w=1600',
  pillsBlister: 'https://images.pexels.com/photos/5452239/pexels-photo-5452239.jpeg?auto=compress&cs=tinysrgb&w=1600',
  whiteTablets: 'https://images.pexels.com/photos/7083682/pexels-photo-7083682.jpeg?auto=compress&cs=tinysrgb&w=1600',
  corporateBuilding: 'https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&w=1600',
  modernBuilding: 'https://images.pexels.com/photos/31715450/pexels-photo-31715450.jpeg?auto=compress&cs=tinysrgb&w=1600',
  labEquipment: 'https://images.pexels.com/photos/11589239/pexels-photo-11589239.jpeg?auto=compress&cs=tinysrgb&w=1600',
  testTubes: 'https://images.pexels.com/photos/8540029/pexels-photo-8540029.jpeg?auto=compress&cs=tinysrgb&w=1600',
  labTechnician: 'https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&w=1600',
  scientistsTesting: 'https://images.pexels.com/photos/37889383/pexels-photo-37889383.jpeg?auto=compress&cs=tinysrgb&w=1600',
  globes: 'https://images.pexels.com/photos/7634759/pexels-photo-7634759.jpeg?auto=compress&cs=tinysrgb&w=1600',
  researchersAnalysis: 'https://images.pexels.com/photos/8533141/pexels-photo-8533141.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const productImages = [
  images.pinkTablets,
  images.colorfulTablets,
  images.blisterPacks,
  images.blisterPacks2,
  images.pillsBlister,
  images.whiteTablets,
  images.pillsPetri,
  images.labEquipment,
];

export function getProductImage(index: number): string {
  return productImages[index % productImages.length];
}

export const therapeuticAreaIcons: Record<string, string> = {
  Cardiology: 'HeartPulse',
  Diabetes: 'Activity',
  Gastroenterology: 'CircleDot',
  Respiratory: 'Wind',
  Dermatology: 'Shield',
  Neurology: 'Brain',
  Orthopedics: 'Bone',
  'Anti-Infectives': 'ShieldPlus',
  "Women's Health": 'Heart',
  'Pain Management': 'Pill',
  Nutraceuticals: 'Leaf',
  'General Healthcare': 'PlusCircle',
};

export const companyValues = [
  {
    title: 'Patient-First Focus',
    description: 'Every formulation and research initiative is guided by patient safety, efficacy, and enhanced quality of life.',
  },
  {
    title: 'Quality Without Compromise',
    description: 'Unwavering adherence to WHO-GMP, EU-GMP, and US-FDA regulatory standards across all production lines.',
  },
  {
    title: 'Innovation & Research',
    description: 'Continuous capital reinvestment in R&D for novel drug delivery systems and optimized oral dosage forms.',
  },
  {
    title: 'Integrity & Transparency',
    description: 'Ethical governance, full traceability, and open partner communication in every market we operate.',
  },
  {
    title: 'Global Healthcare Access',
    description: 'Expanding access to affordable, life-saving medicines for patients in emerging and developed nations.',
  },
  {
    title: 'Environmental Sustainability',
    description: 'Commitment to eco-friendly manufacturing, zero-waste initiatives, and green energy utilization.',
  },
];

export const milestones = [
  { year: '2008', title: 'Foundation', description: 'Shawez Pharma established with a modern solid oral dosage plant.' },
  { year: '2012', title: 'First International Export', description: 'Initiated commercial supply to Southeast Asian and Middle Eastern healthcare partners.' },
  { year: '2016', title: 'WHO-GMP Certification', description: 'Commissioned automated liquid and injectable lines receiving international WHO-GMP accreditation.' },
  { year: '2019', title: 'R&D Excellence Center', description: 'Inaugurated a multi-million dollar formulation research center focusing on modified-release drug delivery.' },
  { year: '2022', title: 'EU-GMP Approval', description: 'Achieved EU-GMP certification, opening European Union commercial distribution.' },
  { year: '2025', title: 'Global Footprint', description: 'Expanded market presence to over 45 countries with 150+ commercialized pharmaceutical SKUs.' },
];

export const leadership = [
  { name: 'Dr. Shawez Ahmed', title: 'Chief Executive Officer & Founder', description: 'Ph.D. in Pharmaceutical Sciences with 25+ years leading global biopharma operations and strategic growth.' },
  { name: 'Dr. Elena Rostova', title: 'Chief Scientific Officer', description: 'Former VP of Formulations at major multi-nationals; specialist in advanced targeted drug delivery systems.' },
  { name: 'Marcus Vance', title: 'Chief Operating Officer', description: 'Over 20 years managing cGMP manufacturing plants, supply chains, and international compliance.' },
  { name: 'Sarah Lin, M.Sc.', title: 'Head of Global Quality Assurance', description: 'Expert in international regulatory audits, total quality management, and analytical method validation.' },
  { name: 'Rajiv Patel', title: 'Head of Regulatory Affairs', description: 'Leads CTD/eCTD dossier filings across US-FDA, EMA, and Asia-Pacific regulatory bodies.' },
  { name: 'Claire Dubois', title: 'Head of International Business', description: 'Drives global distributor partnerships, technology licensing, and commercial expansion.' },
];

export const keyStrengths = [
  { title: 'Advanced Manufacturing', description: 'State-of-the-art automated production lines operating under strict cGMP protocols.', icon: 'Factory' },
  { title: 'Multi-Tier Quality Control', description: 'Integrated QMS with ultra-modern analytical testing laboratories at every stage.', icon: 'ShieldCheck' },
  { title: 'Dedicated R&D Pipeline', description: 'In-house scientists delivering high-barrier generic formulations and NDDS.', icon: 'FlaskConical' },
  { title: 'Global Regulatory Compliance', description: 'Dossiers aligned with WHO-GMP, EU-GMP, and international CTD standards.', icon: 'Globe' },
  { title: 'Expert Scientific Workforce', description: 'Team of experienced pharmacologists, chemists, and quality assurance specialists.', icon: 'Users' },
  { title: 'Broad Therapeutic Spectrum', description: 'Comprehensive product portfolio covering 12+ critical medical specialties.', icon: 'Layers' },
];

export const manufacturingSteps = [
  { step: 'Raw Material Testing', description: 'Rigorous chemical and microbiological analysis of active pharmaceutical ingredients (APIs).', icon: 'Package' },
  { step: 'Formulation & Blending', description: 'Precision automated batch mixing, granulation, and compression in cleanroom environments.', icon: 'Factory' },
  { step: 'In-Process Control', description: 'Continuous physical and analytical testing of dissolution, hardness, and friability.', icon: 'FlaskConical' },
  { step: 'Primary Packaging', description: 'Blister and strip packaging under HEPA-filtered laminar airflow stations.', icon: 'Package' },
  { step: 'Final QA Inspection', description: '100% vision system inspection and final batch certificate release.', icon: 'ClipboardCheck' },
  { step: 'Global Supply Logistics', description: 'Temperature-controlled cold-chain warehousing and international dispatch.', icon: 'Truck' },
];

export const qualityFeatures = [
  { title: 'Quality Assurance', description: 'Systematic audits, validation protocols, and cGMP compliance oversight across all operations.', icon: 'ShieldCheck' },
  { title: 'Quality Control', description: 'State-of-the-art analytical testing for potency, purity, stability, and dissolution profiles.', icon: 'ClipboardCheck' },
  { title: 'Testing Laboratories', description: 'HPLC, GC-MS, FTIR, and dissolution testing units operated by certified chemists.', icon: 'FlaskConical' },
  { title: 'Integrated QMS', description: 'Digital quality management system with real-time process monitoring and batch traceability.', icon: 'Settings' },
  { title: 'Regulatory Dossiers', description: 'Comprehensive CTD/eCTD dossier compilation for fast international registration.', icon: 'FileCheck' },
  { title: 'Global Certifications', description: 'WHO-GMP, EU-GMP, ISO 9001, and ISO 14001 accredited manufacturing sites.', icon: 'Award' },
];

export const rdFeatures = [
  { title: 'Formulation Development', description: 'Designing stable, bioequivalent oral solid and liquid pharmaceutical dosage forms.', icon: 'FlaskConical' },
  { title: 'Analytical Method Validation', description: 'Developing robust stability-indicating HPLC/GC analytical methods.', icon: 'Microscope' },
  { title: 'Novel Drug Delivery', description: 'Researching sustained-release, enteric-coated, and targeted drug delivery systems.', icon: 'Search' },
  { title: 'Technology Transfer', description: 'Seamless scale-up of R&D formulation batches to commercial scale production.', icon: 'Lightbulb' },
];

export const globalRegions = [
  { region: 'South Asia', countries: 'India, Sri Lanka, Nepal, Bangladesh', description: 'Major manufacturing hub and commercial supply network.' },
  { region: 'Southeast Asia', countries: 'Vietnam, Philippines, Thailand, Indonesia', description: 'Established commercial presence and retail pharmacy partnerships.' },
  { region: 'Middle East & North Africa', countries: 'UAE, Saudi Arabia, Egypt, Jordan', description: 'Growing distribution network for specialized hospital products.' },
  { region: 'Sub-Saharan Africa', countries: 'Kenya, Nigeria, Ghana, Tanzania', description: 'Supply partner for essential anti-infective and metabolic medicines.' },
  { region: 'Latin America', countries: 'Brazil, Colombia, Mexico, Chile', description: 'Strategic alliances for generic pharmaceutical licensing.' },
  { region: 'Europe & CIS', countries: 'Germany, Poland, Romania, Kazakhstan', description: 'EU-GMP approved supply channels for specialty oral solid formulations.' },
];

export const downloads = [
  { title: '2026 Global Product Catalogue', description: 'Complete listing of prescription, hospital, and OTC products with SKUs.', type: 'PDF', icon: 'FileText' },
  { title: 'Corporate Capability Profile', description: 'Overview of Shawez Pharma manufacturing sites, R&D, and global footprint.', type: 'PDF', icon: 'Building2' },
  { title: 'GMP & Quality Certificates', description: 'Verified WHO-GMP, EU-GMP, and ISO quality accreditation documents.', type: 'PDF', icon: 'Award' },
  { title: 'Therapeutic Product Summaries', description: 'Detailed medical indications, dosages, and prescribing guidelines.', type: 'PDF', icon: 'BookOpen' },
  { title: 'Contract Manufacturing Guide', description: 'Technical specifications for toll manufacturing and formulation licensing.', type: 'PDF', icon: 'Factory' },
  { title: 'Regulatory Compliance Dossier', description: 'Standard CTD dossier structures available for regional registrations.', type: 'PDF', icon: 'FileCheck' },
];

export const departments = [
  'R&D', 'Quality Assurance', 'Manufacturing', 'Regulatory Affairs', 'Sales & Marketing', 'Supply Chain', 'Finance', 'Human Resources',
];
