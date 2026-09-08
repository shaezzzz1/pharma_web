import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Award, Globe, FileText } from 'lucide-react';
import { company } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-800">
      {/* High Impact Call To Action Strip */}
      <div className="border-b border-navy-800/80 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950">
        <div className="container-x py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-400 mb-2">
              <ShieldCheck className="w-4 h-4" /> Global Partnership
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Partner with Shawez Pharma</h3>
            <p className="text-navy-300 text-sm max-w-2xl mt-1 leading-relaxed">
              Explore contract manufacturing, regional distribution opportunities, or submit formulation inquiry to our global sales team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/enquiry" className="btn-accent text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-lg shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 whitespace-nowrap">
              Submit Enquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="px-6 py-3.5 border border-navy-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-navy-900 transition-colors whitespace-nowrap">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center border border-navy-800 shadow-md">
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                  <rect width="32" height="32" rx="8" fill="#102a43" />
                  <circle cx="16" cy="16" r="10" stroke="#38bec9" strokeWidth="2.5" strokeDasharray="4 2" />
                  <path d="M11 16H21M16 11V21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  SHAWEZ <span className="text-accent-400">PHARMA</span>
                </span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-navy-400">
                  Global Healthcare Excellence
                </span>
              </div>
            </Link>

            <p className="text-sm text-navy-400 leading-relaxed mb-6 max-w-md">
              {company.description}
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 text-navy-300">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-3 text-navy-300">
                <Phone className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">{company.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-navy-300">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">{company.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-accent-500 pl-2.5">Company</h4>
            <ul className="space-y-2.5 text-xs text-navy-400">
              <li><Link to="/about" className="hover:text-accent-400 transition-colors">About Us</Link></li>
              <li><Link to="/manufacturing" className="hover:text-accent-400 transition-colors">Manufacturing Facility</Link></li>
              <li><Link to="/quality" className="hover:text-accent-400 transition-colors">Quality Assurance</Link></li>
              <li><Link to="/research" className="hover:text-accent-400 transition-colors">R&D Innovation</Link></li>
              <li><Link to="/global-presence" className="hover:text-accent-400 transition-colors">Global Network</Link></li>
              <li><Link to="/careers" className="hover:text-accent-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Portfolio */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-accent-500 pl-2.5">Products</h4>
            <ul className="space-y-2.5 text-xs text-navy-400">
              <li><Link to="/products" className="hover:text-accent-400 transition-colors font-semibold text-navy-300">All Products Catalogue</Link></li>
              <li><Link to="/therapeutic-areas" className="hover:text-accent-400 transition-colors font-semibold text-navy-300">Therapeutic Specialties</Link></li>
              <li><Link to="/products?ta=Anti-Infectives" className="hover:text-accent-400 transition-colors">Anti-Infectives</Link></li>
              <li><Link to="/products?ta=Cardiology" className="hover:text-accent-400 transition-colors">Cardiology Formulations</Link></li>
              <li><Link to="/products?ta=Diabetes" className="hover:text-accent-400 transition-colors">Diabetes & Metabolism</Link></li>
              <li><Link to="/products?ta=Gastroenterology" className="hover:text-accent-400 transition-colors">Gastroenterology</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Certifications */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-accent-500 pl-2.5">Resources</h4>
            <ul className="space-y-2.5 text-xs text-navy-400">
              <li><Link to="/news" className="hover:text-accent-400 transition-colors">News & Press Releases</Link></li>
              <li><Link to="/downloads" className="hover:text-accent-400 transition-colors flex items-center gap-1.5"><FileText className="w-3 h-3 text-accent-400" /> Downloads & Dossiers</Link></li>
              <li><Link to="/enquiry" className="hover:text-accent-400 transition-colors">Product Inquiry Form</Link></li>
              <li><Link to="/contact" className="hover:text-accent-400 transition-colors">Global Offices & Contact</Link></li>
            </ul>

            <div className="mt-6 pt-4 border-t border-navy-800">
              <div className="flex items-center gap-2 text-xs text-accent-400 font-semibold mb-1">
                <Award className="w-4 h-4" /> cGMP Certified
              </div>
              <p className="text-[11px] text-navy-500 leading-tight">
                Facilities compliant with WHO-GMP, EU-GMP, and international ISO quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800/80 bg-navy-950/90">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            © {year} {company.name}. All rights reserved. Prescribing information may vary by regional regulatory approvals.
          </p>
          <div className="flex gap-6 text-xs text-navy-500">
            <a href="#" className="hover:text-navy-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Terms of Compliance</a>
            <a href="#" className="hover:text-navy-300 transition-colors">Pharmacovigilance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
