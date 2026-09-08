import { Link } from 'react-router-dom';
import { FileText, Building2, Award, BookOpen, Factory, FileCheck, Download, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { images, downloads } from '@/lib/data';
import { useStaggeredAnimation } from '@/lib/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Building2, Award, BookOpen, Factory, FileCheck,
};

export default function DownloadsPage() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(downloads.length);

  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Access our product catalogues, brochures, certificates, and corporate documents."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Downloads' }]}
        backgroundImage={images.blisterPacks}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <div className="section-label mb-4">
              <span className="w-8 h-px bg-accent-500" /> Resource Center
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Documents & Resources</h2>
            <p className="text-navy-600">
              [DESCRIPTION TO BE PROVIDED] — Download our product catalogues, corporate profile,
              quality certificates, and other documents.
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((item, i) => {
              const Icon = iconMap[item.icon] || FileText;
              return (
                <div
                  key={item.title}
                  className={`bg-white border border-navy-100 p-8 transition-all duration-300 hover:shadow-lg ${
                    inView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: getDelay(i) }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-navy-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-navy-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-navy-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-navy-100">
                    <span className="text-xs font-semibold text-navy-400 uppercase tracking-wide">{item.type}</span>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-accent-600 transition-colors">
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-navy-50 border border-navy-100 p-8 md:p-12 text-center">
            <h3 className="text-xl font-bold text-navy-900 mb-3">Need More Information?</h3>
            <p className="text-sm text-navy-600 mb-6 max-w-xl mx-auto">
              [DESCRIPTION TO BE PROVIDED] — Can't find what you're looking for? Contact us and we'll be happy to help.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
