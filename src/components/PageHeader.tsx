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
    <section className="relative bg-navy-950 overflow-hidden border-b border-navy-800">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/70" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
      ) : (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>
      )}

      <div className="container-x relative py-14 md:py-20">
        {/* Breadcrumbs */}
        {crumbs.length > 0 && (
          <nav className="inline-flex items-center gap-2 text-xs text-navy-300 mb-5 bg-navy-900/80 px-3.5 py-1.5 rounded-full border border-navy-800 backdrop-blur-sm animate-fade-in">
            {crumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-accent-400 transition-colors font-medium">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3 text-navy-500" />}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight animate-fade-in-up">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3.5 text-base md:text-lg text-navy-200 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
