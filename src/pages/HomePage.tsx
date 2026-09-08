import { Link } from 'react-router-dom';
import {
  ArrowRight, HeartPulse, Activity, CircleDot, Wind, Shield, Brain, Bone,
  ShieldPlus, Pill, Leaf, PlusCircle, Factory, ShieldCheck, FlaskConical,
  Globe, Users, Layers, Package, ClipboardCheck, Truck, Search, Microscope,
  Lightbulb, FileCheck, Award, Settings, FileText, Building2, BookOpen,
  MapPin, Phone, Mail, ChevronRight, Newspaper, Briefcase, Download,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { images, keyStrengths, manufacturingSteps, therapeuticAreaIcons } from '@/lib/data';
import { defaultProducts, defaultTherapeuticAreas, defaultNewsArticles } from '@/lib/mockData';
import { useScrollAnimation, useStaggeredAnimation } from '@/lib/useScrollAnimation';
import { supabase, type Product, type TherapeuticArea, type NewsArticle } from '@/lib/supabase';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse, Activity, CircleDot, Wind, Shield, Brain, Bone, ShieldPlus,
  Pill, Leaf, PlusCircle, Factory, ShieldCheck, FlaskConical, Globe,
  Users, Layers, Package, ClipboardCheck, Truck, Search, Microscope,
  Lightbulb, FileCheck, Award, Settings, FileText, Building2, BookOpen,
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [therapeuticAreas, setTherapeuticAreas] = useState<TherapeuticArea[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [p, ta, n] = await Promise.all([
          supabase.from('products').select('*').eq('is_featured', true).order('display_order').limit(8),
          supabase.from('therapeutic_areas').select('*').order('display_order'),
          supabase.from('news_articles').select('*').eq('is_published', true).order('published_date', { ascending: false }).limit(3),
        ]);
        setProducts(p.data && p.data.length > 0 ? p.data : defaultProducts.filter(x => x.is_featured));
        setTherapeuticAreas(ta.data && ta.data.length > 0 ? ta.data : defaultTherapeuticAreas);
        setNews(n.data && n.data.length > 0 ? n.data : defaultNewsArticles);
      } catch {
        setProducts(defaultProducts.filter(x => x.is_featured));
        setTherapeuticAreas(defaultTherapeuticAreas);
        setNews(defaultNewsArticles);
      }
    })();
  }, []);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Key Strengths */}
      <KeyStrengths />

      {/* Therapeutic Areas */}
      <TherapeuticAreasSection areas={therapeuticAreas} />

      {/* Featured Products */}
      <FeaturedProducts products={products} />

      {/* Manufacturing */}
      <ManufacturingPreview />

      {/* Quality */}
      <QualityPreview />

      {/* R&D */}
      <RdPreview />

      {/* Global Presence */}
      <GlobalPreview />

      {/* News */}
      <NewsPreview news={news} />

      {/* Enquiry CTA */}
      <EnquiryCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-navy-950 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={images.heroLab} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/85 to-navy-900/70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="container-x relative py-20">
        <div className="max-w-3xl">
          <div className="section-label text-accent-400 mb-6 animate-fade-in-down">
            <span className="w-8 h-px bg-accent-400" /> Pharmaceutical Excellence
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight animate-fade-in-up text-balance">
            Advancing Healthcare <br />
            <span className="text-accent-400">Through Innovation</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-navy-200 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Shawez Pharma is committed to delivering high-quality pharmaceutical products
            across multiple therapeutic areas, backed by rigorous quality standards and
            continuous research.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link to="/products" className="btn-accent">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-outline border-navy-600 text-white hover:bg-navy-800 hover:border-navy-500">
              About Shawez Pharma
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-800/50 border border-navy-800 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {[
            { value: '12+', label: 'Therapeutic Specialties' },
            { value: '150+', label: 'Commercial SKUs' },
            { value: '45+', label: 'Countries Served' },
            { value: '18+', label: 'Years of Excellence' },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-950/80 px-6 py-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-1">{stat.value}</div>
              <div className="text-xs text-navy-400 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-navy-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function CompanyIntro() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-white animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-accent-500" /> Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              A pharmaceutical company built on trust, science, and quality
            </h2>
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Shawez Pharma is a science-led global pharmaceutical enterprise dedicated to research, cGMP manufacturing, and commercialization of therapeutic formulations meeting stringent WHO-GMP and EU-GMP regulatory standards.
              </p>
              <p>
                Our vertically integrated operations span formulation development, high-throughput analytical testing, cleanroom manufacturing, and international distribution — bringing trusted therapies to patients worldwide.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary text-sm">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/quality" className="btn-ghost text-sm">
                Our Quality Standards
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={images.researchLab} alt="Research laboratory" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-32 bg-navy-900 hidden md:flex items-center justify-center p-6">
              <div>
                <div className="text-3xl font-bold text-accent-400">2008</div>
                <div className="text-xs text-navy-300 uppercase tracking-wider mt-1">Established</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-400 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyStrengths() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(keyStrengths.length);
  return (
    <section ref={ref} className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Our Strengths <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Why Choose Shawez Pharma</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-200 border border-navy-200">
          {keyStrengths.map((strength, i) => {
            const Icon = iconMap[strength.icon] || ShieldCheck;
            return (
              <div
                key={strength.title}
                className={`bg-white p-8 transition-all duration-300 hover:bg-navy-50 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: getDelay(i) }}
              >
                <div className="w-12 h-12 bg-navy-900 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{strength.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{strength.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TherapeuticAreasSection({ areas }: { areas: TherapeuticArea[] }) {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(12);
  const displayAreas = areas.length > 0 ? areas : [
    { id: '1', name: 'Cardiology', slug: 'cardiology', description: 'Cardiovascular health medications.', icon: 'HeartPulse', display_order: 1 },
    { id: '2', name: 'Diabetes', slug: 'diabetes', description: 'Diabetes management medications.', icon: 'Activity', display_order: 2 },
    { id: '3', name: 'Gastroenterology', slug: 'gastroenterology', description: 'Digestive system treatments.', icon: 'CircleDot', display_order: 3 },
    { id: '4', name: 'Respiratory', slug: 'respiratory', description: 'Respiratory medications.', icon: 'Wind', display_order: 4 },
    { id: '5', name: 'Dermatology', slug: 'dermatology', description: 'Dermatological preparations.', icon: 'Shield', display_order: 5 },
    { id: '6', name: 'Neurology', slug: 'neurology', description: 'Neurological medications.', icon: 'Brain', display_order: 6 },
    { id: '7', name: 'Orthopedics', slug: 'orthopedics', description: 'Orthopedic medications.', icon: 'Bone', display_order: 7 },
    { id: '8', name: 'Anti-Infectives', slug: 'anti-infectives', description: 'Anti-infective medications.', icon: 'ShieldPlus', display_order: 8 },
    { id: '9', name: "Women's Health", slug: 'womens-health', description: "Women's health medications.", icon: 'Heart', display_order: 9 },
    { id: '10', name: 'Pain Management', slug: 'pain-management', description: 'Pain management formulations.', icon: 'Pill', display_order: 10 },
    { id: '11', name: 'Nutraceuticals', slug: 'nutraceuticals', description: 'Nutritional supplements.', icon: 'Leaf', display_order: 11 },
    { id: '12', name: 'General Healthcare', slug: 'general-healthcare', description: 'General health medications.', icon: 'PlusCircle', display_order: 12 },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-accent-500" /> Therapeutic Areas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Comprehensive Coverage Across Specialties</h2>
          </div>
          <Link to="/therapeutic-areas" className="btn-ghost text-sm whitespace-nowrap">
            View All Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayAreas.map((area, i) => {
            const iconName = area.icon || therapeuticAreaIcons[area.name] || 'PlusCircle';
            const Icon = iconMap[iconName] || PlusCircle;
            return (
              <Link
                key={area.id}
                to={`/therapeutic-areas/${area.slug}`}
                className={`group bg-navy-50 border border-navy-100 p-6 transition-all duration-300 hover:bg-navy-900 hover:border-navy-900 card-hover ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: getDelay(i) }}
              >
                <div className="w-10 h-10 bg-navy-900 group-hover:bg-accent-500 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-navy-900 group-hover:text-white transition-colors mb-1">{area.name}</h3>
                <p className="text-xs text-navy-500 group-hover:text-navy-300 transition-colors line-clamp-2">{area.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts({ products }: { products: Product[] }) {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(8);
  const productImagesList = [images.pinkTablets, images.colorfulTablets, images.blisterPacks, images.blisterPacks2, images.pillsBlister, images.whiteTablets, images.pillsPetri, images.labEquipment];

  return (
    <section ref={ref} className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-accent-500" /> Featured Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Pharmaceutical Range</h2>
          </div>
          <Link to="/products" className="btn-ghost text-sm whitespace-nowrap">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.length === 0
            ? // Fallback placeholders
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white border border-navy-100 overflow-hidden">
                  <div className="aspect-square bg-navy-100">
                    <img src={productImagesList[i]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-accent-600 font-semibold uppercase tracking-wide mb-2">[CATEGORY]</div>
                    <h3 className="text-sm font-bold text-navy-900 mb-1">[PRODUCT NAME]</h3>
                    <p className="text-xs text-navy-500 mb-3">[COMPOSITION]</p>
                    <Link to="/products" className="text-xs font-semibold text-navy-900 hover:text-accent-600 flex items-center gap-1">
                      View Details <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))
            : products.map((product, i) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className={`group bg-white border border-navy-100 overflow-hidden card-hover ${
                    inView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: getDelay(i) }}
                >
                  <div className="aspect-square bg-navy-100 overflow-hidden">
                    <img
                      src={productImagesList[i % productImagesList.length]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-accent-600 font-semibold uppercase tracking-wide mb-2">{product.therapeutic_area || product.category || 'Pharmaceutical'}</div>
                    <h3 className="text-sm font-bold text-navy-900 mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-navy-500 mb-3 line-clamp-1">{product.composition || '[COMPOSITION]'}</p>
                    <span className="text-xs font-semibold text-navy-900 group-hover:text-accent-600 flex items-center gap-1 transition-colors">
                      View Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}

function ManufacturingPreview() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.ampouleFilling} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
      </div>
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="section-label text-accent-400 mb-6">
            <span className="w-8 h-px bg-accent-400" /> Manufacturing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            State-of-the-Art Production Facilities
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed mb-10">
            Our automated manufacturing plants are engineered with cGMP cleanrooms, climate-controlled suites, and high-speed tablet compression and ampoule filling lines.
          </p>

          {/* Process diagram */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-navy-800 border border-navy-800">
            {manufacturingSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Package;
              return (
                <div key={step.step} className="bg-navy-950/90 p-4 text-center group hover:bg-navy-900 transition-colors">
                  <div className="w-10 h-10 mx-auto bg-navy-800 group-hover:bg-accent-500 flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-5 h-5 text-accent-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-xs font-semibold text-white">{step.step}</div>
                </div>
              );
            })}
          </div>

          <Link to="/manufacturing" className="btn-accent mt-10">
            Explore Manufacturing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function QualityPreview() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-white animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-px bg-navy-200 border border-navy-200">
              {[
                { icon: 'ShieldCheck', title: 'Quality Assurance' },
                { icon: 'ClipboardCheck', title: 'Quality Control' },
                { icon: 'FlaskConical', title: 'Testing Labs' },
                { icon: 'FileCheck', title: 'Regulatory Compliance' },
              ].map((item) => {
                const Icon = iconMap[item.icon] || ShieldCheck;
                return (
                  <div key={item.title} className="bg-white p-6 hover:bg-navy-50 transition-colors">
                    <Icon className="w-8 h-8 text-accent-500 mb-3" />
                    <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-accent-500" /> Quality & Compliance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Uncompromising Quality at Every Stage
            </h2>
            <p className="text-navy-600 leading-relaxed mb-8">
              Quality is embedded into our operational culture. From raw material API testing to final finished batch certificate release, every process adheres strictly to WHO-GMP and international pharmacopeial standards.
            </p>
            <Link to="/quality" className="btn-primary text-sm">
              Our Quality Systems <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RdPreview() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-accent-500" /> Research & Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Driving Innovation in Pharmaceutical Science
            </h2>
            <p className="text-navy-600 leading-relaxed mb-8">
              Our R&D division focuses on formulation development, bioequivalence optimization, and novel drug delivery systems to bring affordable high-potency therapeutics to market.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'FlaskConical', title: 'Formulation Development', desc: 'Sustained-release and modified oral solid dosage form development.' },
                { icon: 'Microscope', title: 'Analytical Development', desc: 'HPLC, GC-MS method validation and bio-stability profiling.' },
                { icon: 'Lightbulb', title: 'Innovation & Research', desc: 'Next-generation drug delivery platforms for improved patient adherence.' },
              ].map((item) => {
                const Icon = iconMap[item.icon] || FlaskConical;
                return (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-navy-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link to="/research" className="btn-primary text-sm mt-8">
              Explore R&D <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={images.microscope} alt="Research and development" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-400 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalPreview() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="container-x relative py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center text-accent-400 mb-4">
            <span className="w-8 h-px bg-accent-400" /> Global Presence <span className="w-8 h-px bg-accent-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Serving Markets Worldwide</h2>
          <p className="text-navy-300 text-lg leading-relaxed">
            Shawez Pharma serves healthcare institutions and retail pharmacies across 45+ countries through a cold-chain logistics distribution network and international strategic alliances.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-navy-800 border border-navy-800 max-w-4xl mx-auto">
          {['South Asia', 'Southeast Asia', 'Middle East', 'Africa', 'Latin America', 'Europe'].map((region) => (
            <div key={region} className="bg-navy-950/90 p-6 text-center hover:bg-navy-900 transition-colors group">
              <Globe className="w-6 h-6 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-semibold text-white">{region}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/global-presence" className="btn-accent">
            View Global Network <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsPreview({ news }: { news: NewsArticle[] }) {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(3);
  const newsImages = [images.researcherNotes, images.labTouchscreen, images.scientistSamples];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-accent-500" /> News & Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Latest Updates</h2>
          </div>
          <Link to="/news" className="btn-ghost text-sm whitespace-nowrap">
            All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(news.length > 0 ? news : defaultNewsArticles).map((article, i) => (
            <Link
              key={article.id}
              to={`/news/${article.slug}`}
              className={`group block ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: getDelay(i) }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-navy-100 mb-5">
                <img
                  src={article.image_url || newsImages[i % newsImages.length]}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-xs text-accent-600 font-semibold uppercase tracking-wide mb-2">
                {article.category}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-navy-500 line-clamp-2 mb-3">{article.excerpt}</p>
              <span className="text-xs text-navy-400">
                {new Date(article.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquiryCTA() {
  return (
    <section className="relative bg-accent-500 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="container-x relative py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Have a Product or Bulk Procurement Enquiry?
          </h2>
          <p className="text-accent-50 text-lg mb-10">
            Get in touch with our international business team to discuss your pharmaceutical distribution, contract manufacturing, or licensing requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent-700 font-bold text-sm tracking-wide hover:bg-navy-950 hover:text-white transition-all duration-300 rounded-lg shadow-lg">
              Submit Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm tracking-wide hover:bg-white hover:text-accent-700 transition-all duration-300 rounded-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
