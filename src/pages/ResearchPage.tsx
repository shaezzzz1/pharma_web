import { Link } from 'react-router-dom';
import {
  FlaskConical, Microscope, Search, Lightbulb, ArrowRight,
  Beaker, TestTube, Atom, Cpu,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { images, rdFeatures } from '@/lib/data';
import { useScrollAnimation, useStaggeredAnimation } from '@/lib/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FlaskConical, Microscope, Search, Lightbulb,
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research & Development"
        subtitle="Driving pharmaceutical innovation through dedicated research and formulation development."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'R&D' }]}
        backgroundImage={images.microscope}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-accent-500" /> Innovation Hub
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Advancing pharmaceutical science through research
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  [DESCRIPTION TO BE PROVIDED] — Our Research & Development division is dedicated
                  to advancing pharmaceutical science through formulation development, analytical
                  method development, and innovative drug delivery systems.
                </p>
                <p>
                  Our team of experienced scientists works on developing optimized formulations,
                  improving existing products, and exploring new therapeutic approaches.
                </p>
              </div>
              <Link to="/enquiry" className="btn-primary text-sm mt-8">
                Collaborate With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={images.scientistsTesting} alt="R&D laboratory" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-400 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* R&D Features */}
      <RdFeatures />

      {/* Research areas */}
      <ResearchAreas />

      {/* Stats / Innovation */}
      <InnovationSection />
    </>
  );
}

function RdFeatures() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(rdFeatures.length);
  return (
    <section ref={ref} className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> R&D Capabilities <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Research Focus</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy-200 border border-navy-200">
          {rdFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || FlaskConical;
            return (
              <div
                key={feature.title}
                className={`bg-white p-10 transition-all duration-300 hover:bg-navy-50 ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: getDelay(i) }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-sm text-navy-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResearchAreas() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-white animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Research Activities <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Areas of Investigation</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-200 border border-navy-200">
          {[
            { icon: Beaker, title: 'Formulation', desc: '[DESCRIPTION TO BE PROVIDED]' },
            { icon: TestTube, title: 'Stability', desc: '[DESCRIPTION TO BE PROVIDED]' },
            { icon: Atom, title: 'Drug Delivery', desc: '[DESCRIPTION TO BE PROVIDED]' },
            { icon: Cpu, title: 'Process Development', desc: '[DESCRIPTION TO BE PROVIDED]' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 text-center hover:bg-navy-50 transition-colors">
              <item.icon className="w-10 h-10 text-accent-500 mx-auto mb-4" />
              <h3 className="text-sm font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-xs text-navy-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InnovationSection() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.researcherNotes} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70" />
      </div>
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="section-label text-accent-400 mb-6">
            <span className="w-8 h-px bg-accent-400" /> Innovation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Committed to Continuous Innovation
          </h2>
          <p className="text-navy-300 text-lg leading-relaxed mb-10">
            [DESCRIPTION TO BE PROVIDED] — Innovation is at the heart of our R&D efforts.
            We continuously invest in research capabilities and scientific talent to develop
            better pharmaceutical solutions.
          </p>
          <Link to="/enquiry" className="btn-accent">
            Partner With Our R&D Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
