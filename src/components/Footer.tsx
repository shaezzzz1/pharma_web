import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { company, navItems } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      {/* CTA strip */}
      <div className="border-b border-navy-800">
        <div className="container-x py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Partner with Shawez Pharma</h3>
            <p className="text-navy-300 text-sm max-w-xl">
              [DESCRIPTION TO BE PROVIDED] — Discover how we can meet your pharmaceutical needs.
            </p>
          </div>
          <Link to="/enquiry" className="btn-accent whitespace-nowrap">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy-800 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinejoin="round" />
                  <path d="M12 7v10M7 9.5v5M17 9.5v5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Shawez <span className="text-accent-400">Pharma</span>
              </span>
            </div>
            <p className="text-sm text-navy-400 leading-relaxed mb-6">
              {company.description}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <span className="text-navy-400">{company.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-navy-400">{company.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-navy-400">{company.email}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-2.5">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-navy-400 hover:text-accent-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-2.5">
              {navItems.slice(6).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-navy-400 hover:text-accent-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/downloads" className="text-sm text-navy-400 hover:text-accent-400 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="text-sm text-navy-400 hover:text-accent-400 transition-colors">
                  Product Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-sm text-navy-400 mb-4">
              Subscribe to receive the latest news and product updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-navy-900 border border-navy-800 text-white text-sm placeholder-navy-500 focus:outline-none focus:border-accent-500"
              />
              <button type="submit" className="px-4 py-2.5 bg-accent-500 text-white text-sm font-medium hover:bg-accent-600 transition-colors">
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-3">
              {['LinkedIn', 'Twitter', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center bg-navy-800 text-navy-400 hover:bg-accent-500 hover:text-white transition-colors text-xs"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-navy-500">
            <a href="#" className="hover:text-navy-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
