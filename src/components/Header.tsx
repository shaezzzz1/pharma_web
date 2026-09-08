import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react';
import { navItems, company } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [taDropdown, setTaDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsDropdown(false);
    setTaDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const productMegaMenu = [
    { label: 'All Products', path: '/products' },
    { label: 'Cardiology', path: '/products?ta=Cardiology' },
    { label: 'Diabetes', path: '/products?ta=Diabetes' },
    { label: 'Gastroenterology', path: '/products?ta=Gastroenterology' },
    { label: 'Respiratory', path: '/products?ta=Respiratory' },
    { label: 'Dermatology', path: '/products?ta=Dermatology' },
    { label: 'Neurology', path: '/products?ta=Neurology' },
    { label: 'Anti-Infectives', path: '/products?ta=Anti-Infectives' },
    { label: 'Pain Management', path: '/products?ta=Pain Management' },
    { label: 'Nutraceuticals', path: '/products?ta=Nutraceuticals' },
  ];

  const taMenu = [
    { label: 'All Therapeutic Areas', path: '/therapeutic-areas' },
    { label: 'Cardiology', path: '/therapeutic-areas/cardiology' },
    { label: 'Diabetes', path: '/therapeutic-areas/diabetes' },
    { label: 'Gastroenterology', path: '/therapeutic-areas/gastroenterology' },
    { label: 'Respiratory', path: '/therapeutic-areas/respiratory' },
    { label: 'Dermatology', path: '/therapeutic-areas/dermatology' },
    { label: 'Neurology', path: '/therapeutic-areas/neurology' },
    { label: 'Orthopedics', path: '/therapeutic-areas/orthopedics' },
    { label: 'Anti-Infectives', path: '/therapeutic-areas/anti-infectives' },
    { label: "Women's Health", path: '/therapeutic-areas/womens-health' },
    { label: 'Pain Management', path: '/therapeutic-areas/pain-management' },
    { label: 'Nutraceuticals', path: '/therapeutic-areas/nutraceuticals' },
    { label: 'General Healthcare', path: '/therapeutic-areas/general-healthcare' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-navy-950 text-navy-200 text-xs">
        <div className="container-x flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> {company.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> {company.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3" /> {company.website}
            </span>
            <Link to="/downloads" className="hover:text-white transition-colors">Downloads</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-x">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-11 lg:h-11 bg-navy-900 flex items-center justify-center transition-transform group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinejoin="round" />
                    <path d="M12 7v10M7 9.5v5M17 9.5v5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="leading-none">
                <span className="block text-lg lg:text-xl font-bold text-navy-900 tracking-tight">
                  Shawez <span className="text-accent-500">Pharma</span>
                </span>
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-navy-500 mt-0.5">
                  {company.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.label === 'Products') {
                  return (
                    <div
                      key={item.path}
                      className="relative"
                      onMouseEnter={() => setProductsDropdown(true)}
                      onMouseLeave={() => setProductsDropdown(false)}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(item.path) ? 'text-navy-900' : 'text-navy-600 hover:text-navy-900'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </Link>
                      {productsDropdown && (
                        <div className="absolute top-full left-0 pt-2">
                          <div className="w-64 bg-white shadow-2xl border border-navy-100 py-2 animate-fade-in-down">
                            {productMegaMenu.map((m) => (
                              <Link
                                key={m.path}
                                to={m.path}
                                className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                              >
                                {m.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                if (item.label === 'Therapeutic Areas') {
                  return (
                    <div
                      key={item.path}
                      className="relative"
                      onMouseEnter={() => setTaDropdown(true)}
                      onMouseLeave={() => setTaDropdown(false)}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(item.path) ? 'text-navy-900' : 'text-navy-600 hover:text-navy-900'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </Link>
                      {taDropdown && (
                        <div className="absolute top-full left-0 pt-2">
                          <div className="w-56 bg-white shadow-2xl border border-navy-100 py-2 animate-fade-in-down">
                            {taMenu.map((m) => (
                              <Link
                                key={m.path}
                                to={m.path}
                                className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                              >
                                {m.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) ? 'text-navy-900' : 'text-navy-600 hover:text-navy-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link to="/enquiry" className="hidden sm:inline-flex btn-accent text-sm">
                Product Enquiry
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 text-navy-900"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-navy-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto animate-fade-in">
            <nav className="container-x py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 text-sm font-medium border-b border-navy-50 transition-colors ${
                    isActive(item.path) ? 'text-navy-900 bg-navy-50' : 'text-navy-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/enquiry" className="btn-accent text-sm mt-3 w-full">
                Product Enquiry
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
