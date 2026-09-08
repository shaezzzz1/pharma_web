export const company = {
  name: 'Shawez Pharma',
  tagline: 'Advancing Healthcare Through Innovation',
  description:
    '[COMPANY DESCRIPTION TO BE PROVIDED] — Shawez Pharma is a pharmaceutical company committed to delivering high-quality medicines across multiple therapeutic areas.',
  established: '[YEAR TO BE PROVIDED]',
  address: '[ADDRESS TO BE PROVIDED]',
  phone: '[PHONE TO BE PROVIDED]',
  email: '[EMAIL TO BE PROVIDED]',
  website: 'www.shawezpharma.com',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Therapeutic Areas', path: '/therapeutic-areas' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Quality', path: '/quality' },
  { label: 'R&D', path: '/research' },
  { label: 'Global Presence', path: '/global-presence' },
  { label: 'News', path: '/news' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
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
    title: 'Patient First',
    description: '[VALUE DESCRIPTION TO BE PROVIDED] — Every decision is guided by patient well-being and safety.',
  },
  {
    title: 'Quality Without Compromise',
    description: '[VALUE DESCRIPTION TO BE PROVIDED] — Unwavering commitment to the highest quality standards.',
  },
  {
    title: 'Innovation & Research',
    description: '[VALUE DESCRIPTION TO BE PROVIDED] — Continuous investment in research and development.',
  },
  {
    title: 'Integrity & Transparency',
    description: '[VALUE DESCRIPTION TO BE PROVIDED] — Ethical practices in every aspect of operations.',
  },
  {
    title: 'Global Responsibility',
    description: '[VALUE DESCRIPTION TO BE PROVIDED] — Contributing to global healthcare access.',
  },
  {
    title: 'Sustainability',
    description: '[VALUE DESCRIPTION TO BE PROVIDED] — Environmentally responsible manufacturing.',
  },
];

export const milestones = [
  { year: '[YEAR]', title: 'Foundation', description: '[MILESTONE TO BE PROVIDED] — Shawez Pharma was established.' },
  { year: '[YEAR]', title: 'First Product Launch', description: '[MILESTONE TO BE PROVIDED] — First product line introduced to market.' },
  { year: '[YEAR]', title: 'Manufacturing Expansion', description: '[MILESTONE TO BE PROVIDED] — State-of-the-art manufacturing facility commissioned.' },
  { year: '[YEAR]', title: 'International Export', description: '[MILESTONE TO BE PROVIDED] — Began exporting to international markets.' },
  { year: '[YEAR]', title: 'Quality Certification', description: '[MILESTONE TO BE PROVIDED] — Achieved [CERTIFICATION] certification.' },
  { year: '[YEAR]', title: 'R&D Center', description: '[MILESTONE TO BE PROVIDED] — Dedicated research and development center established.' },
];

export const leadership = [
  { name: '[EXECUTIVE NAME]', title: 'Chief Executive Officer', description: '[BIO TO BE PROVIDED]' },
  { name: '[EXECUTIVE NAME]', title: 'Chief Operating Officer', description: '[BIO TO BE PROVIDED]' },
  { name: '[EXECUTIVE NAME]', title: 'Chief Scientific Officer', description: '[BIO TO BE PROVIDED]' },
  { name: '[EXECUTIVE NAME]', title: 'Head of Quality Assurance', description: '[BIO TO BE PROVIDED]' },
  { name: '[EXECUTIVE NAME]', title: 'Head of Regulatory Affairs', description: '[BIO TO BE PROVIDED]' },
  { name: '[EXECUTIVE NAME]', title: 'Head of Global Operations', description: '[BIO TO BE PROVIDED]' },
];

export const keyStrengths = [
  { title: 'Advanced Manufacturing', description: '[DESCRIPTION TO BE PROVIDED] — Modern facilities equipped with state-of-the-art technology.', icon: 'Factory' },
  { title: 'Stringent Quality Control', description: '[DESCRIPTION TO BE PROVIDED] — Multi-layered quality assurance at every stage.', icon: 'ShieldCheck' },
  { title: 'Dedicated R&D', description: '[DESCRIPTION TO BE PROVIDED] — In-house research driving formulation development.', icon: 'FlaskConical' },
  { title: 'Global Compliance', description: '[DESCRIPTION TO BE PROVIDED] — Adherence to international regulatory standards.', icon: 'Globe' },
  { title: 'Skilled Workforce', description: '[DESCRIPTION TO BE PROVIDED] — Team of experienced scientists and professionals.', icon: 'Users' },
  { title: 'Wide Therapeutic Reach', description: '[DESCRIPTION TO BE PROVIDED] — Products across [NUMBER] therapeutic areas.', icon: 'Layers' },
];

export const manufacturingSteps = [
  { step: 'Raw Material', description: 'Sourcing and testing of raw materials', icon: 'Package' },
  { step: 'Production', description: 'Formulation and manufacturing', icon: 'Factory' },
  { step: 'Quality Testing', description: 'In-process quality control checks', icon: 'FlaskConical' },
  { step: 'Packaging', description: 'Primary and secondary packaging', icon: 'Package' },
  { step: 'Final Inspection', description: 'Final quality inspection', icon: 'ClipboardCheck' },
  { step: 'Distribution', description: 'Warehousing and distribution', icon: 'Truck' },
];

export const qualityFeatures = [
  { title: 'Quality Assurance', description: '[DESCRIPTION TO BE PROVIDED] — Comprehensive QA systems ensuring product consistency.', icon: 'ShieldCheck' },
  { title: 'Quality Control', description: '[DESCRIPTION TO BE PROVIDED] — Rigorous testing protocols for every batch.', icon: 'ClipboardCheck' },
  { title: 'Testing Laboratories', description: '[DESCRIPTION TO BE PROVIDED] — Equipped with advanced analytical instruments.', icon: 'FlaskConical' },
  { title: 'Quality Management', description: '[DESCRIPTION TO BE PROVIDED] — Integrated QMS aligned with international standards.', icon: 'Settings' },
  { title: 'Regulatory Compliance', description: '[DESCRIPTION TO BE PROVIDED] — Compliance with [REGULATORY BODY] requirements.', icon: 'FileCheck' },
  { title: 'Certifications', description: '[DESCRIPTION TO BE PROVIDED] — [CERTIFICATION] certified facilities.', icon: 'Award' },
];

export const rdFeatures = [
  { title: 'Formulation Development', description: '[DESCRIPTION TO BE PROVIDED] — Developing optimized drug formulations.', icon: 'FlaskConical' },
  { title: 'Analytical Development', description: '[DESCRIPTION TO BE PROVIDED] — Advanced analytical method development.', icon: 'Microscope' },
  { title: 'Research', description: '[DESCRIPTION TO BE PROVIDED] — Ongoing research in drug delivery systems.', icon: 'Search' },
  { title: 'Innovation', description: '[DESCRIPTION TO BE PROVIDED] — Novel approaches to pharmaceutical development.', icon: 'Lightbulb' },
];

export const globalRegions = [
  { region: 'South Asia', countries: '[COUNTRIES TO BE PROVIDED]', description: '[DESCRIPTION TO BE PROVIDED]' },
  { region: 'Southeast Asia', countries: '[COUNTRIES TO BE PROVIDED]', description: '[DESCRIPTION TO BE PROVIDED]' },
  { region: 'Middle East', countries: '[COUNTRIES TO BE PROVIDED]', description: '[DESCRIPTION TO BE PROVIDED]' },
  { region: 'Africa', countries: '[COUNTRIES TO BE PROVIDED]', description: '[DESCRIPTION TO BE PROVIDED]' },
  { region: 'Latin America', countries: '[COUNTRIES TO BE PROVIDED]', description: '[DESCRIPTION TO BE PROVIDED]' },
  { region: 'Europe', countries: '[COUNTRIES TO BE PROVIDED]', description: '[DESCRIPTION TO BE PROVIDED]' },
];

export const downloads = [
  { title: 'Product Catalogue', description: '[DESCRIPTION TO BE PROVIDED]', type: 'PDF', icon: 'FileText' },
  { title: 'Corporate Profile', description: '[DESCRIPTION TO BE PROVIDED]', type: 'PDF', icon: 'Building2' },
  { title: 'Quality Certificates', description: '[DESCRIPTION TO BE PROVIDED]', type: 'PDF', icon: 'Award' },
  { title: 'Product Brochures', description: '[DESCRIPTION TO BE PROVIDED]', type: 'PDF', icon: 'BookOpen' },
  { title: 'Manufacturing Capabilities', description: '[DESCRIPTION TO BE PROVIDED]', type: 'PDF', icon: 'Factory' },
  { title: 'Compliance Documents', description: '[DESCRIPTION TO BE PROVIDED]', type: 'PDF', icon: 'FileCheck' },
];

export const departments = [
  'R&D', 'Quality Assurance', 'Manufacturing', 'Regulatory Affairs', 'Sales & Marketing', 'Supply Chain', 'Finance', 'Human Resources',
];
