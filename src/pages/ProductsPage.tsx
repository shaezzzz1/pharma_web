import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronRight, Package } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { supabase, type Product, type TherapeuticArea } from '@/lib/supabase';
import { images } from '@/lib/data';

const productImagesList = [
  images.pinkTablets, images.colorfulTablets, images.blisterPacks, images.blisterPacks2,
  images.pillsBlister, images.whiteTablets, images.pillsPetri, images.labEquipment,
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [therapeuticAreas, setTherapeuticAreas] = useState<TherapeuticArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState({
    therapeutic_area: searchParams.get('ta') || '',
    category: searchParams.get('cat') || '',
    dosage_form: searchParams.get('df') || '',
    product_type: searchParams.get('pt') || '',
  });

  useEffect(() => {
    (async () => {
      const [p, ta] = await Promise.all([
        supabase.from('products').select('*').order('display_order'),
        supabase.from('therapeutic_areas').select('*').order('display_order'),
      ]);
      if (p.data) setProducts(p.data);
      if (ta.data) setTherapeuticAreas(ta.data);
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(() => [...new Set(products.map(p => p.category).filter(Boolean))] as string[], [products]);
  const dosageForms = useMemo(() => [...new Set(products.map(p => p.dosage_form).filter(Boolean))] as string[], [products]);
  const productTypes = useMemo(() => [...new Set(products.map(p => p.product_type).filter(Boolean))] as string[], [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (search) {
        const q = search.toLowerCase();
        const match = [p.name, p.composition, p.product_code, p.category, p.therapeutic_area, p.dosage_form, p.strength]
          .some(v => v?.toLowerCase().includes(q));
        if (!match) return false;
      }
      if (filters.therapeutic_area && p.therapeutic_area !== filters.therapeutic_area) return false;
      if (filters.category && p.category !== filters.category) return false;
      if (filters.dosage_form && p.dosage_form !== filters.dosage_form) return false;
      if (filters.product_type && p.product_type !== filters.product_type) return false;
      return true;
    });
  }, [products, search, filters]);

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    Object.entries(newFilters).forEach(([k, v]) => { if (v) params.set(k === 'therapeutic_area' ? 'ta' : k === 'category' ? 'cat' : k === 'dosage_form' ? 'df' : 'pt', v); });
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({ therapeutic_area: '', category: '', dosage_form: '', product_type: '' });
    setSearch('');
    setSearchParams({});
  };

  const hasActiveFilters = search || Object.values(filters).some(v => v);

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Explore our comprehensive pharmaceutical product catalogue."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Products' }]}
        backgroundImage={images.pillsBlister}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          {/* Search bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by product name, composition, code, category..."
                className="w-full pl-12 pr-4 py-4 border border-navy-200 text-navy-900 placeholder-navy-400 text-sm focus:outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8">
            {/* Filters sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" /> Filters
                  </h3>
                  {hasActiveFilters && (
                    <button onClick={clearFilters} className="text-xs text-accent-600 hover:text-accent-700 font-medium">
                      Clear All
                    </button>
                  )}
                </div>

                <FilterGroup
                  title="Therapeutic Area"
                  options={therapeuticAreas.map(t => t.name)}
                  value={filters.therapeutic_area}
                  onChange={(v) => updateFilter('therapeutic_area', v)}
                />
                <FilterGroup
                  title="Category"
                  options={categories}
                  value={filters.category}
                  onChange={(v) => updateFilter('category', v)}
                />
                <FilterGroup
                  title="Dosage Form"
                  options={dosageForms}
                  value={filters.dosage_form}
                  onChange={(v) => updateFilter('dosage_form', v)}
                />
                <FilterGroup
                  title="Product Type"
                  options={productTypes}
                  value={filters.product_type}
                  onChange={(v) => updateFilter('product_type', v)}
                />
              </div>
            </aside>

            {/* Products grid */}
            <div>
              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden mb-4 flex items-center gap-2 text-sm font-medium text-navy-900 border border-navy-200 px-4 py-2.5"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
                {hasActiveFilters && <span className="bg-accent-500 text-white text-xs px-1.5 rounded-full">!</span>}
              </button>

              {/* Active filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {search && (
                    <FilterChip label={`Search: "${search}"`} onRemove={() => setSearch('')} />
                  )}
                  {Object.entries(filters).map(([k, v]) => v && (
                    <FilterChip key={k} label={v} onRemove={() => updateFilter(k, '')} />
                  ))}
                </div>
              )}

              {/* Results count */}
              <div className="text-sm text-navy-500 mb-6">
                {loading ? 'Loading...' : `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`}
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-navy-50 border border-navy-100 p-6 animate-pulse">
                      <div className="aspect-square bg-navy-100 mb-4" />
                      <div className="h-4 bg-navy-100 mb-2" />
                      <div className="h-3 bg-navy-100 w-2/3" />
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20">
                  <Package className="w-16 h-16 text-navy-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-navy-900 mb-2">No products found</h3>
                  <p className="text-sm text-navy-500 mb-6">Try adjusting your search or filters.</p>
                  <button onClick={clearFilters} className="btn-outline text-sm">
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((product, i) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="group bg-white border border-navy-100 overflow-hidden card-hover"
                    >
                      <div className="aspect-square bg-navy-100 overflow-hidden relative">
                        <img
                          src={productImagesList[i % productImagesList.length]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.is_featured && (
                          <span className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-semibold px-2 py-1">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-accent-600 font-semibold uppercase tracking-wide">{product.therapeutic_area || 'General'}</span>
                          <span className="text-xs text-navy-400">·</span>
                          <span className="text-xs text-navy-400">{product.product_type}</span>
                        </div>
                        <h3 className="text-sm font-bold text-navy-900 mb-1 line-clamp-1 group-hover:text-accent-600 transition-colors">{product.name}</h3>
                        <p className="text-xs text-navy-500 mb-2 line-clamp-1">{product.composition || '[COMPOSITION]'}</p>
                        <div className="flex items-center gap-3 text-xs text-navy-400 mb-3">
                          {product.dosage_form && <span>{product.dosage_form}</span>}
                          {product.strength && <span>· {product.strength}</span>}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-navy-400 font-mono">{product.product_code}</span>
                          <span className="text-xs font-semibold text-navy-900 group-hover:text-accent-600 flex items-center gap-1 transition-colors">
                            Details <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterGroup({ title, options, value, onChange }: { title: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <h4 className="text-xs font-bold text-navy-700 uppercase tracking-wide mb-3">{title}</h4>
      <div className="space-y-1.5">
        <button
          onClick={() => onChange('')}
          className={`block w-full text-left text-sm px-3 py-1.5 transition-colors ${
            !value ? 'bg-navy-900 text-white' : 'text-navy-600 hover:bg-navy-50'
          }`}
        >
          All
        </button>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`block w-full text-left text-sm px-3 py-1.5 transition-colors ${
              value === opt ? 'bg-navy-900 text-white' : 'text-navy-600 hover:bg-navy-50'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-navy-100 text-navy-700 text-xs px-3 py-1.5">
      {label}
      <button onClick={onRemove} className="hover:text-error-500">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
