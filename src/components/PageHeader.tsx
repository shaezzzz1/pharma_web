import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Crumb = { label: string; path?: string };

export default function PageHeader({
  title,
  subtitle,
  crumbs = [],
  backgroundImage,
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  backgroundImage?: string;
}) {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-grid opacity-50" />
      )}
      <div className="container-x relative py-16 md:py-24">
        {/* Breadcrumbs */}
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-navy-400 mb-6 animate-fade-in">
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-accent-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-navy-300">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3 text-navy-600" />}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-navy-300 max-w-2xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
