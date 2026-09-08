import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Phone, Mail, Globe, Search, ShieldCheck,
  Building2, Factory, FlaskConical, Award, HeartPulse, Activity,
  CircleDot, Wind, Shield, Brain, Bone, ShieldPlus, Pill, Leaf, PlusCircle, ArrowRight,
  Package, FileText
} from 'lucide-react';
import { company } from '@/lib/data';
import { defaultProducts, defaultTherapeuticAreas } from '@/lib/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse, Activity, CircleDot, Wind, Shield, Brain, Bone, ShieldPlus, Pill, Leaf, PlusCircle,
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const filteredSearchResults = searchQuery.trim()
    ? defaultProducts.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.composition?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.therapeutic_area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="hidden lg:block bg-navy-950 text-navy-200 text-xs border-b border-navy-800/80">
        <div className="container-x flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent-400" />
              <span className="font-medium text-navy-100">{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent-400" />
              <span className="text-navy-300">{company.email}</span>
            </a>
            <div className="h-3 w-px bg-navy-800" />
            <div className="flex items-center gap-1.5 text-accent-400 font-medium bg-navy-900/80 px-2.5 py-0.5 rounded-full border border-navy-800">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              WHO-GMP & EU-GMP Certified
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 text-navy-300 hover:text-white transition-colors bg-navy-900 hover:bg-navy-800 px-3 py-1 rounded text-xs border border-navy-800"
            >
              <Search className="w-3 h-3 text-accent-400" />
              <span>Search products...</span>
              <kbd className="hidden xl:inline-block text-[10px] text-navy-400 bg-navy-950 px-1.5 rounded font-mono border border-navy-800 ml-1">⌘K</kbd>
            </button>
            <div className="flex items-center gap-1.5 text-navy-300">
              <Globe className="w-3.5 h-3.5 text-accent-400" />
              <span>Global (EN)</span>
            </div>
            <Link to="/downloads" className="hover:text-white transition-colors flex items-center gap-1 text-navy-300">
              <FileText className="w-3 h-3 text-accent-400" />
              Downloads
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-navy-100/80 py-3' : 'bg-white border-b border-navy-100/60 py-4'
        }`}
      >
        <div className="container-x">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative flex items-center justify-center">
                <div className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center shadow-md shadow-navy-900/10 group-hover:bg-navy-950 transition-all duration-300 group-hover:shadow-accent-500/20">
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                    <rect width="32" height="32" rx="8" fill="#102a43" />
                    <circle cx="16" cy="16" r="10" stroke="#38bec9" strokeWidth="2.5" strokeDasharray="4 2" />
                    <path d="M11 16H21M16 11V21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-accent-500 rounded-full border-2 border-white" />
              </div>

              <div className="leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl lg:text-2xl font-black text-navy-900 tracking-tight font-sans">
                    SHAWEZ
                  </span>
                  <span className="text-xl lg:text-2xl font-black text-accent-600 tracking-tight font-sans">
                    PHARMA
                  </span>
                </div>
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-navy-400">
                  Healthcare Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              <Link
                to="/"
                className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-accent-600 bg-accent-50/80 font-bold'
                    : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                }`}
              >
                Home
              </Link>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    ['/about', '/manufacturing', '/quality', '/research'].some(p => location.pathname.startsWith(p))
                      ? 'text-accent-600 bg-accent-50/80'
                      : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                  }`}
                >
                  About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fade-in-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-2 space-y-1">
                      <Link to="/about" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-navy-50 transition-colors group">
                        <Building2 className="w-5 h-5 text-accent-500 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-bold text-navy-900">Company Overview</div>
                          <div className="text-xs text-navy-500">Mission, vision, leadership & values</div>
                        </div>
                      </Link>
                      <Link to="/manufacturing" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-navy-50 transition-colors group">
                        <Factory className="w-5 h-5 text-accent-500 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-bold text-navy-900">Manufacturing Plant</div>
                          <div className="text-xs text-navy-500">cGMP state-of-the-art facilities</div>
                        </div>
                      </Link>
                      <Link to="/quality" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-navy-50 transition-colors group">
                        <Award className="w-5 h-5 text-accent-500 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-bold text-navy-900">Quality Assurance</div>
                          <div className="text-xs text-navy-500">WHO-GMP & EU-GMP certifications</div>
                        </div>
                      </Link>
                      <Link to="/research" className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-navy-50 transition-colors group">
                        <FlaskConical className="w-5 h-5 text-accent-500 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-bold text-navy-900">R&D Innovation</div>
                          <div className="text-xs text-navy-500">Advanced drug delivery systems</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Mega Menu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    isActive('/products') ? 'text-accent-600 bg-accent-50/80 font-bold' : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                  }`}
                >
                  Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'products' && (
                  <div className="absolute top-full -left-12 pt-2 w-[540px] z-50 animate-fade-in-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-5">
                      <div className="flex items-center justify-between border-b border-navy-100 pb-3 mb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-accent-600">Product Portfolio</span>
                          <h4 className="text-base font-bold text-navy-900">Pharmaceutical Formulations</h4>
                        </div>
                        <Link to="/products" className="text-xs font-bold text-navy-900 hover:text-accent-600 flex items-center gap-1">
                          View Catalogue <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {defaultTherapeuticAreas.slice(0, 8).map((ta) => (
                          <Link
                            key={ta.id}
                            to={`/products?ta=${encodeURIComponent(ta.name)}`}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-navy-50 transition-colors text-xs font-medium text-navy-700 hover:text-navy-950"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                            {ta.name}
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-navy-100 bg-navy-50/80 -mx-5 -mb-5 p-4 rounded-b-xl flex items-center justify-between">
                        <div className="text-xs text-navy-600">
                          Need custom formulation or bulk contract manufacturing?
                        </div>
                        <Link to="/enquiry" className="text-xs font-bold text-accent-600 hover:text-accent-700 flex items-center gap-1">
                          Submit Enquiry <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Therapeutic Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('ta')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/therapeutic-areas"
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    isActive('/therapeutic-areas') ? 'text-accent-600 bg-accent-50/80 font-bold' : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                  }`}
                >
                  Therapeutic Areas <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'ta' ? 'rotate-180' : ''}`} />
                </Link>

                {activeDropdown === 'ta' && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-fade-in-down">
                    <div className="bg-white rounded-xl shadow-2xl border border-navy-100 p-2 max-h-96 overflow-y-auto space-y-0.5">
                      <Link to="/therapeutic-areas" className="block px-3 py-2 text-xs font-bold text-accent-600 uppercase tracking-wider border-b border-navy-100 mb-1">
                        All Therapeutic Areas →
                      </Link>
                      {defaultTherapeuticAreas.map((ta) => {
                        const Icon = iconMap[ta.icon || 'PlusCircle'] || PlusCircle;
                        return (
                          <Link
                            key={ta.id}
                            to={`/therapeutic-areas/${ta.slug}`}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-navy-50 transition-colors text-xs font-medium text-navy-800"
                          >
                            <Icon className="w-4 h-4 text-accent-500 flex-shrink-0" />
                            <span className="truncate">{ta.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/global-presence"
                className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  isActive('/global-presence') ? 'text-accent-600 bg-accent-50/80 font-bold' : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                }`}
              >
                Global Network
              </Link>

              <Link
                to="/news"
                className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  isActive('/news') ? 'text-accent-600 bg-accent-50/80 font-bold' : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                }`}
              >
                News
              </Link>

              <Link
                to="/careers"
                className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  isActive('/careers') ? 'text-accent-600 bg-accent-50/80 font-bold' : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                }`}
              >
                Careers
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  isActive('/contact') ? 'text-accent-600 bg-accent-50/80 font-bold' : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions & Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="lg:hidden p-2 text-navy-700 hover:bg-navy-50 rounded-lg"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/enquiry"
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md shadow-accent-500/20 hover:shadow-accent-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Product Enquiry <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 text-navy-900 rounded-lg hover:bg-navy-50"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-navy-100 bg-white max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-fade-in shadow-xl">
            <div className="container-x py-5 flex flex-col gap-2">
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Search products or formulations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
                      setMobileOpen(false);
                    }
                  }}
                  className="w-full px-4 py-2.5 bg-navy-50 border border-navy-200 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:border-accent-500"
                />
              </div>

              <Link to="/" className="px-4 py-3 text-sm font-bold text-navy-900 border-b border-navy-50 hover:bg-navy-50 rounded-lg">Home</Link>

              <div className="py-2 border-b border-navy-50">
                <div className="px-4 text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">Company</div>
                <div className="grid grid-cols-2 gap-1 px-2">
                  <Link to="/about" className="px-3 py-2 text-xs font-semibold text-navy-700 hover:bg-navy-50 rounded-lg">About Us</Link>
                  <Link to="/manufacturing" className="px-3 py-2 text-xs font-semibold text-navy-700 hover:bg-navy-50 rounded-lg">Manufacturing</Link>
                  <Link to="/quality" className="px-3 py-2 text-xs font-semibold text-navy-700 hover:bg-navy-50 rounded-lg">Quality Assurance</Link>
                  <Link to="/research" className="px-3 py-2 text-xs font-semibold text-navy-700 hover:bg-navy-50 rounded-lg">R&D Innovation</Link>
                </div>
              </div>

              <div className="py-2 border-b border-navy-50">
                <div className="px-4 text-xs font-bold uppercase tracking-wider text-accent-600 mb-2">Products & Specialties</div>
                <div className="grid grid-cols-2 gap-1 px-2">
                  <Link to="/products" className="px-3 py-2 text-xs font-bold text-navy-900 hover:bg-navy-50 rounded-lg">All Products</Link>
                  <Link to="/therapeutic-areas" className="px-3 py-2 text-xs font-bold text-navy-900 hover:bg-navy-50 rounded-lg">Therapeutic Areas</Link>
                  {defaultTherapeuticAreas.slice(0, 6).map((ta) => (
                    <Link key={ta.id} to={`/therapeutic-areas/${ta.slug}`} className="px-3 py-1.5 text-xs text-navy-600 hover:bg-navy-50 rounded-lg truncate">
                      {ta.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/global-presence" className="px-4 py-3 text-sm font-semibold text-navy-900 border-b border-navy-50 hover:bg-navy-50 rounded-lg">Global Network</Link>
              <Link to="/news" className="px-4 py-3 text-sm font-semibold text-navy-900 border-b border-navy-50 hover:bg-navy-50 rounded-lg">News & Insights</Link>
              <Link to="/careers" className="px-4 py-3 text-sm font-semibold text-navy-900 border-b border-navy-50 hover:bg-navy-50 rounded-lg">Careers</Link>
              <Link to="/contact" className="px-4 py-3 text-sm font-semibold text-navy-900 border-b border-navy-50 hover:bg-navy-50 rounded-lg">Contact Us</Link>

              <div className="pt-3">
                <Link to="/enquiry" className="btn-accent text-sm w-full py-3 rounded-lg text-center font-bold">
                  Submit Product Enquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Instant Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl border border-navy-100 w-full max-w-2xl overflow-hidden animate-scale-in">
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-navy-100 bg-navy-50/50">
              <Search className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, API composition, or category..."
                className="w-full bg-transparent text-navy-900 placeholder-navy-400 text-sm focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-navy-400 hover:text-navy-900 rounded-lg ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Container */}
            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.trim() === '' ? (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-3 px-2">Popular Categories</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {defaultTherapeuticAreas.slice(0, 6).map((ta) => (
                      <button
                        key={ta.id}
                        onClick={() => {
                          setSearchOpen(false);
                          navigate(`/therapeutic-areas/${ta.slug}`);
                        }}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-navy-50 hover:bg-navy-100 text-xs font-semibold text-navy-800 text-left transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent-500" />
                        <span className="truncate">{ta.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredSearchResults.length === 0 ? (
                <div className="text-center py-10">
                  <Package className="w-12 h-12 text-navy-300 mx-auto mb-2" />
                  <div className="text-sm font-bold text-navy-900">No products found matching "{searchQuery}"</div>
                  <div className="text-xs text-navy-500 mt-1">Try searching for Amoxicillin, Amlodipine, Metformin, or Omeprazole.</div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-2 px-2">
                    Found {filteredSearchResults.length} Product{filteredSearchResults.length !== 1 ? 's' : ''}
                  </div>
                  {filteredSearchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        setSearchOpen(false);
                        navigate(`/products/${product.slug}`);
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-navy-50 transition-colors text-left group border border-transparent hover:border-navy-100"
                    >
                      <div>
                        <div className="text-sm font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
                          {product.name}
                        </div>
                        <div className="text-xs text-navy-500">
                          {product.composition} · <span className="font-semibold text-navy-700">{product.therapeutic_area}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-navy-300 group-hover:text-accent-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-navy-50/80 border-t border-navy-100 flex items-center justify-between text-xs text-navy-400">
              <span>Press <kbd className="bg-white px-1.5 py-0.5 border border-navy-200 rounded text-navy-600">ESC</kbd> to close</span>
              <Link
                to="/products"
                onClick={() => setSearchOpen(false)}
                className="font-bold text-navy-900 hover:text-accent-600 flex items-center gap-1"
              >
                Browse All Catalogue →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
