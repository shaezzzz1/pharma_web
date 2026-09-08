import { Link } from 'react-router-dom';
import {
  Factory, Package, FlaskConical, ClipboardCheck, Truck, ArrowRight,
  Boxes, Settings, ShieldCheck, Warehouse, Cpu, FileCheck,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { images, manufacturingSteps } from '@/lib/data';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Package, Factory, FlaskConical, ClipboardCheck, Truck,
};

const facilityFeatures = [
  { icon: 'Factory', title: 'Production', description: '[DESCRIPTION TO BE PROVIDED] — Modern production lines for tablets, capsules, liquids, and other dosage forms.' },
  { icon: 'Cpu', title: 'Technology', description: '[DESCRIPTION TO BE PROVIDED] — Advanced manufacturing technology and automated systems.' },
  { icon: 'ShieldCheck', title: 'Quality Testing', description: '[DESCRIPTION TO BE PROVIDED] — In-process quality testing at every manufacturing stage.' },
  { icon: 'Boxes', title: 'Packaging', description: '[DESCRIPTION TO BE PROVIDED] — Primary and secondary packaging with tamper-evident solutions.' },
  { icon: 'Warehouse', title: 'Warehousing', description: '[DESCRIPTION TO BE PROVIDED] — Climate-controlled warehousing for raw materials and finished products.' },
  { icon: 'Settings', title: 'Equipment', description: '[DESCRIPTION TO BE PROVIDED] — State-of-the-art equipment maintained to international standards.' },
  { icon: 'FileCheck', title: 'Compliance', description: '[DESCRIPTION TO BE PROVIDED] — Full compliance with [REGULATORY BODY] manufacturing guidelines.' },
  { icon: 'ClipboardCheck', title: 'Final Inspection', description: '[DESCRIPTION TO BE PROVIDED] — Comprehensive final inspection before product release.' },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader
        title="Manufacturing"
        subtitle="State-of-the-art facilities producing pharmaceuticals to the highest international standards."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Manufacturing' }]}
        backgroundImage={images.ampouleFilling}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-accent-500" /> Manufacturing Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Advanced facilities for pharmaceutical production
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  [DESCRIPTION TO BE PROVIDED] — Our manufacturing facilities are designed and
                  equipped to produce a wide range of pharmaceutical dosage forms, meeting
                  international quality and regulatory standards.
                </p>
                <p>
                  Every stage of the manufacturing process — from raw material handling to
                  final product release — is governed by strict protocols and continuous
                  quality monitoring.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={images.productionPlant} alt="Manufacturing facility" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process diagram */}
      <ProcessDiagram />

      {/* Facility features */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-8 h-px bg-accent-500" /> Facilities & Capabilities <span className="w-8 h-px bg-accent-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Manufacturing Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200 border border-navy-200">
            {facilityFeatures.map((feature) => {
              const Icon = iconMap[feature.icon] || Factory;
              return (
                <div key={feature.title} className="bg-white p-8 hover:bg-navy-50 transition-colors">
                  <div className="w-12 h-12 bg-navy-900 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Our Manufacturing Capabilities?</h2>
          <p className="text-navy-300 mb-10 max-w-2xl mx-auto">
            [DESCRIPTION TO BE PROVIDED] — Contact us to learn more about our facilities and how we can meet your needs.
          </p>
          <Link to="/enquiry" className="btn-accent">
            Make an Enquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function ProcessDiagram() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-navy-950 overflow-hidden animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center text-accent-400 mb-4">
            <span className="w-8 h-px bg-accent-400" /> Manufacturing Process <span className="w-8 h-px bg-accent-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">From Raw Material to Distribution</h2>
          <p className="text-navy-300 mt-4">
            A systematic process ensuring quality at every stage of production.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-navy-700" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {manufacturingSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Package;
              return (
                <div key={step.step} className="relative text-center" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative z-10 w-24 h-24 mx-auto bg-navy-900 border-2 border-navy-700 hover:border-accent-500 flex items-center justify-center mb-4 transition-colors group">
                    <Icon className="w-8 h-8 text-accent-400 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent-500 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{step.step}</h3>
                  <p className="text-xs text-navy-400 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
