import { Link } from 'react-router-dom';
import {
  ShieldCheck, ClipboardCheck, FlaskConical, Settings, FileCheck, Award,
  ArrowRight, Microscope, Beaker, TestTube, BadgeCheck,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { images, qualityFeatures } from '@/lib/data';
import { useScrollAnimation, useStaggeredAnimation } from '@/lib/useScrollAnimation';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, ClipboardCheck, FlaskConical, Settings, FileCheck, Award,
};

export default function QualityPage() {
  return (
    <>
      <PageHeader
        title="Quality Assurance"
        subtitle="Comprehensive quality systems ensuring every product meets international standards."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Quality' }]}
        backgroundImage={images.labTechnician}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-accent-500" /> Quality First
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Quality embedded in every aspect of our operations
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  [DESCRIPTION TO BE PROVIDED] — Quality is the cornerstone of our pharmaceutical
                  operations. Our comprehensive Quality Management System (QMS) encompasses every
                  stage from raw material sourcing to finished product distribution.
                </p>
                <p>
                  We adhere to Good Manufacturing Practices (GMP) and international regulatory
                  standards to ensure that every product we deliver is safe, effective, and
                  of consistent quality.
                </p>
              </div>
              <Link to="/enquiry" className="btn-primary text-sm mt-8">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/3] overflow-hidden">
              <img src={images.testTubes} alt="Quality testing laboratory" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality features */}
      <QualityFeatures />

      {/* Testing labs */}
      <TestingLabs />

      {/* Certifications */}
      <Certifications />
    </>
  );
}

function QualityFeatures() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(qualityFeatures.length);
  return (
    <section ref={ref} className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Quality Systems <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Quality Framework</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || ShieldCheck;
            return (
              <div
                key={feature.title}
                className={`bg-white border border-navy-100 p-8 transition-all duration-300 hover:shadow-lg ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: getDelay(i) }}
              >
                <div className="w-12 h-12 bg-navy-900 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestingLabs() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-white animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Testing Laboratories <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Advanced Analytical Testing</h2>
          <p className="text-navy-600 mt-4">
            [DESCRIPTION TO BE PROVIDED] — Our laboratories are equipped with modern analytical
            instruments for comprehensive quality testing.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy-200 border border-navy-200">
          {[
            { icon: Microscope, title: 'Microscopy', desc: '[DESCRIPTION]' },
            { icon: Beaker, title: 'Chemical Analysis', desc: '[DESCRIPTION]' },
            { icon: TestTube, title: 'Dissolution Testing', desc: '[DESCRIPTION]' },
            { icon: BadgeCheck, title: 'Stability Studies', desc: '[DESCRIPTION]' },
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

function Certifications() {
  return (
    <section className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Certifications & Compliance <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Verified Quality Standards</h2>
          <p className="text-navy-600 mt-4">
            [DESCRIPTION TO BE PROVIDED] — Our facilities and processes are certified to
            international standards. Only genuine, verified certifications are displayed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['[CERTIFICATION]', '[CERTIFICATION]', '[CERTIFICATION]'].map((cert, i) => (
            <div key={i} className="bg-white border border-navy-100 p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-navy-900 flex items-center justify-center mb-5">
                <Award className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{cert}</h3>
              <p className="text-xs text-navy-500">[CERTIFICATION DETAILS TO BE PROVIDED]</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            Contact Us for Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
