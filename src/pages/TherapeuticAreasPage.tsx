import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  HeartPulse, Activity, CircleDot, Wind, Shield, Brain, Bone, ShieldPlus,
  Pill, Leaf, PlusCircle, ArrowRight, ChevronRight,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { supabase, type TherapeuticArea, type Product } from '@/lib/supabase';
import { defaultProducts, defaultTherapeuticAreas } from '@/lib/mockData';
import { images, therapeuticAreaIcons } from '@/lib/data';
import { useStaggeredAnimation } from '@/lib/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse, Activity, CircleDot, Wind, Shield, Brain, Bone, ShieldPlus,
  Pill, Leaf, PlusCircle,
};

const productImagesList = [
  images.pinkTablets, images.colorfulTablets, images.blisterPacks, images.blisterPacks2,
  images.pillsBlister, images.whiteTablets, images.pillsPetri, images.labEquipment,
];

export default function TherapeuticAreasPage() {
  const { slug } = useParams();
  const [areas, setAreas] = useState<TherapeuticArea[]>([]);
  const [selectedArea, setSelectedArea] = useState<TherapeuticArea | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase.from('therapeutic_areas').select('*').order('display_order');
        setAreas(data && data.length > 0 ? data : defaultTherapeuticAreas);
      } catch {
        setAreas(defaultTherapeuticAreas);
      }
    })();
  }, []);

  useEffect(() => {
    if (!slug && areas.length > 0) return;
    if (slug) {
      (async () => {
        try {
          const { data: area } = await supabase.from('therapeutic_areas').select('*').eq('slug', slug).maybeSingle();
          const targetArea = area || defaultTherapeuticAreas.find(a => a.slug === slug) || null;
          setSelectedArea(targetArea);
          if (targetArea) {
            const { data: prods } = await supabase.from('products').select('*').eq('therapeutic_area', targetArea.name).order('display_order');
            if (prods && prods.length > 0) {
              setProducts(prods);
            } else {
              setProducts(defaultProducts.filter(p => p.therapeutic_area?.toLowerCase() === targetArea.name.toLowerCase() || p.category?.toLowerCase() === targetArea.name.toLowerCase()));
            }
          }
        } catch {
          const targetArea = defaultTherapeuticAreas.find(a => a.slug === slug) || null;
          setSelectedArea(targetArea);
          if (targetArea) {
            setProducts(defaultProducts.filter(p => p.therapeutic_area?.toLowerCase() === targetArea.name.toLowerCase() || p.category?.toLowerCase() === targetArea.name.toLowerCase()));
          }
        }
      })();
    } else {
      setSelectedArea(null);
    }
  }, [slug, areas]);

  if (slug && selectedArea) {
    return <AreaDetail area={selectedArea} products={products} />;
  }

  return (
    <>
      <PageHeader
        title="Therapeutic Areas"
        subtitle="Comprehensive pharmaceutical solutions across multiple medical specialties."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Therapeutic Areas' }]}
        backgroundImage={images.researchLab}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-accent-500" /> Medical Specialties
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Covering a Wide Range of Therapeutic Needs
            </h2>
            <p className="text-navy-600">
              [DESCRIPTION TO BE PROVIDED] — Our product portfolio spans multiple therapeutic areas,
              ensuring healthcare professionals have access to effective treatments across specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.length === 0
              ? Object.entries(therapeuticAreaIcons).map(([name, icon], i) => (
                  <AreaCard key={name} area={{ id: String(i), name, slug: name.toLowerCase().replace(/[^a-z]/g, '-'), description: `[DESCRIPTION TO BE PROVIDED]`, icon, display_order: i }} index={i} />
                ))
              : areas.map((area, i) => <AreaCard key={area.id} area={area} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function AreaCard({ area, index }: { area: TherapeuticArea; index: number }) {
  const iconName = area.icon || therapeuticAreaIcons[area.name] || 'PlusCircle';
  const Icon = iconMap[iconName] || PlusCircle;

  return (
    <Link
      to={`/therapeutic-areas/${area.slug}`}
      className="group bg-white border border-navy-100 p-8 transition-all duration-300 hover:shadow-xl hover:border-navy-300 card-hover"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-navy-900 group-hover:bg-accent-500 flex items-center justify-center transition-colors">
          <Icon className="w-7 h-7 text-accent-400 group-hover:text-white transition-colors" />
        </div>
        <ChevronRight className="w-5 h-5 text-navy-300 group-hover:text-navy-900 group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">{area.name}</h3>
      <p className="text-sm text-navy-500 leading-relaxed line-clamp-3">{area.description}</p>
    </Link>
  );
}

function AreaDetail({ area, products }: { area: TherapeuticArea; products: Product[] }) {
  const iconName = area.icon || therapeuticAreaIcons[area.name] || 'PlusCircle';
  const Icon = iconMap[iconName] || PlusCircle;

  return (
    <>
      <PageHeader
        title={area.name}
        subtitle={area.description || `[DESCRIPTION TO BE PROVIDED]`}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Therapeutic Areas', path: '/therapeutic-areas' },
          { label: area.name },
        ]}
        backgroundImage={images.labEquipment}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-navy-900 flex items-center justify-center">
                <Icon className="w-8 h-8 text-accent-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900">{area.name}</h2>
                <p className="text-sm text-navy-500">Therapeutic Area</p>
              </div>
            </div>
            <p className="text-navy-600 leading-relaxed">
              [DESCRIPTION TO BE PROVIDED] — Our {area.name} product range includes medications
              developed to address the specific needs of this therapeutic area. Each product
              is manufactured under stringent quality protocols.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Products in {area.name}</h3>
            {products.length === 0 ? (
              <div className="text-center py-16 bg-navy-50 border border-navy-100">
                <p className="text-sm text-navy-500">Products in this therapeutic area will be listed here.</p>
                <p className="text-xs text-navy-400 mt-2">[PRODUCTS TO BE PROVIDED]</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, i) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    className="group bg-white border border-navy-100 overflow-hidden card-hover"
                  >
                    <div className="aspect-square bg-navy-100 overflow-hidden">
                      <img
                        src={productImagesList[i % productImagesList.length]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-navy-900 mb-1 line-clamp-1 group-hover:text-accent-600 transition-colors">{product.name}</h4>
                      <p className="text-xs text-navy-500 line-clamp-1">{product.composition || '[COMPOSITION]'}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Link to="/enquiry" className="btn-accent text-sm">
              Enquire About Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/therapeutic-areas" className="btn-outline text-sm">
              All Therapeutic Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
