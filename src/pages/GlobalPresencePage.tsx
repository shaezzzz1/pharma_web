import { Link } from 'react-router-dom';
import { Globe, MapPin, ArrowRight, Building2, Handshake, Truck, Network } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { images, globalRegions } from '@/lib/data';
import { useStaggeredAnimation } from '@/lib/useScrollAnimation';

export default function GlobalPresencePage() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(globalRegions.length);

  return (
    <>
      <PageHeader
        title="Global Presence"
        subtitle="Serving healthcare markets worldwide through a robust distribution network."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Global Presence' }]}
        backgroundImage={images.globes}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-accent-500" /> Worldwide Operations <span className="w-8 h-px bg-accent-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Reaching Patients Across the Globe
            </h2>
            <p className="text-navy-600 leading-relaxed">
              [DESCRIPTION TO BE PROVIDED] — Shawez Pharma serves international markets through
              a well-established distribution network and strategic partnerships. We are committed
              to making quality pharmaceuticals accessible to patients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive map placeholder */}
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="container-x relative py-20">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-accent-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Global Network</h2>
            <p className="text-navy-400 max-w-xl mx-auto text-sm">
              [DESCRIPTION TO BE PROVIDED] — Interactive map showing countries served will be displayed here.
            </p>
          </div>

          {/* World map visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[2/1] bg-navy-900 border border-navy-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative z-10 text-center">
                <Globe className="w-24 h-24 text-navy-700 mx-auto mb-4" />
                <p className="text-navy-500 text-sm">[INTERACTIVE WORLD MAP TO BE PROVIDED]</p>
                <p className="text-navy-600 text-xs mt-2">Countries served: [COUNTRIES TO BE PROVIDED]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-accent-500" /> Export Markets <span className="w-8 h-px bg-accent-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Regions We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalRegions.map((region, i) => (
              <div
                key={region.region}
                className={`bg-navy-50 border border-navy-100 p-8 transition-all duration-300 hover:shadow-lg ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: getDelay(i) }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent-500" />
                  <h3 className="text-lg font-bold text-navy-900">{region.region}</h3>
                </div>
                <p className="text-sm text-navy-600 mb-3">{region.description}</p>
                <div className="text-xs text-navy-500">
                  <span className="font-semibold">Countries:</span> {region.countries}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution network */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-accent-500" /> Distribution & Partnerships <span className="w-8 h-px bg-accent-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Network</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-200 border border-navy-200">
            {[
              { icon: Truck, title: 'Distribution Network', desc: '[DESCRIPTION TO BE PROVIDED] — Robust logistics ensuring timely delivery across all markets.' },
              { icon: Handshake, title: 'International Partnerships', desc: '[DESCRIPTION TO BE PROVIDED] — Strategic partnerships with distributors and healthcare organizations.' },
              { icon: Building2, title: 'Local Presence', desc: '[DESCRIPTION TO BE PROVIDED] — Regional offices and representatives in key markets.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-10 hover:bg-navy-50 transition-colors">
                <item.icon className="w-10 h-10 text-accent-500 mb-5" />
                <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/enquiry" className="btn-primary">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
