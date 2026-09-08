import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Gem, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { images, companyValues, milestones, leadership, keyStrengths } from '@/lib/data';
import { useScrollAnimation, useStaggeredAnimation } from '@/lib/useScrollAnimation';
import { company } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Shawez Pharma"
        subtitle="A pharmaceutical company dedicated to quality, innovation, and global healthcare access."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
        backgroundImage={images.corporateBuilding}
      />

      <CompanyOverview />
      <VisionMission />
      <Values />
      <Leadership />
      <Milestones />
      <Strengths />
    </>
  );
}

function CompanyOverview() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-white animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-6">
              <span className="w-8 h-px bg-accent-500" /> Company Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              Building a healthier future through pharmaceutical excellence
            </h2>
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                [COMPANY DESCRIPTION TO BE PROVIDED] — Shawez Pharma is a pharmaceutical company
                committed to developing, manufacturing, and distributing high-quality medications
                that meet international standards.
              </p>
              <p>
                Founded in {company.established}, we have grown from a local operation into a company
                serving multiple international markets. Our journey has been defined by a relentless
                focus on quality, a commitment to research, and a dedication to patient well-being.
              </p>
              <p>
                Today, Shawez Pharma operates across [NUMBER] therapeutic areas, with a product
                portfolio that continues to expand to meet evolving healthcare needs.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={images.researchLab} alt="Shawez Pharma facility" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-navy-900 hidden md:flex flex-col items-center justify-center p-6">
              <div className="text-3xl font-bold text-accent-400">[NUMBER]+</div>
              <div className="text-xs text-navy-300 uppercase tracking-wider mt-1">Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-navy-50 animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-px bg-navy-200 border border-navy-200">
          <div className="bg-white p-10">
            <div className="w-14 h-14 bg-navy-900 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Vision</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              [VISION STATEMENT TO BE PROVIDED] — To be a globally recognized pharmaceutical company
              known for quality, innovation, and improving patient outcomes.
            </p>
          </div>
          <div className="bg-white p-10">
            <div className="w-14 h-14 bg-navy-900 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Mission</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              [MISSION STATEMENT TO BE PROVIDED] — To develop, manufacture, and deliver high-quality
              pharmaceutical products that improve the health and quality of life of patients worldwide.
            </p>
          </div>
          <div className="bg-white p-10">
            <div className="w-14 h-14 bg-navy-900 flex items-center justify-center mb-6">
              <Gem className="w-7 h-7 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Promise</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              [PROMISE TO BE PROVIDED] — Every product we manufacture is backed by rigorous quality
              testing and a commitment to pharmaceutical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(companyValues.length);
  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Core Values <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">The Principles That Guide Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyValues.map((value, i) => (
            <div
              key={value.title}
              className={`bg-navy-50 border border-navy-100 p-8 transition-all duration-300 hover:shadow-lg ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: getDelay(i) }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-accent-500" />
                <h3 className="text-lg font-bold text-navy-900">{value.title}</h3>
              </div>
              <p className="text-sm text-navy-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(leadership.length);
  return (
    <section ref={ref} className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Leadership <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Leadership Team</h2>
          <p className="text-navy-600 mt-4">
            [DESCRIPTION TO BE PROVIDED] — Experienced professionals guiding our mission.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((member, i) => (
            <div
              key={i}
              className={`bg-white border border-navy-100 p-8 text-center transition-all duration-300 hover:shadow-lg ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: getDelay(i) }}
            >
              <div className="w-20 h-20 mx-auto bg-navy-900 flex items-center justify-center mb-5">
                <span className="text-2xl font-bold text-accent-400">
                  {member.name.split(' ').map(w => w[0]).join('').slice(0, 2) || 'SP'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-1">{member.name}</h3>
              <div className="text-sm text-accent-600 font-medium mb-3">{member.title}</div>
              <p className="text-xs text-navy-500 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Milestones() {
  const { ref, inView } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding bg-white animate-on-scroll ${inView ? 'in-view' : ''}`}>
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Our Journey <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Company Milestones</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-navy-200 md:-translate-x-1/2" />
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`relative flex gap-6 md:gap-0 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 border-4 border-white rounded-full -translate-x-1/2 z-10 top-2" />
              {/* Content */}
              <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-navy-50 border border-navy-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-accent-600 mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  const { ref, inView, getDelay } = useStaggeredAnimation<HTMLDivElement>(keyStrengths.length);
  return (
    <section ref={ref} className="section-padding bg-navy-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-8 h-px bg-accent-500" /> Company Strengths <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">What Sets Us Apart</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyStrengths.map((strength, i) => (
            <div
              key={strength.title}
              className={`bg-white border border-navy-100 p-8 transition-all duration-300 hover:shadow-lg ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: getDelay(i) }}
            >
              <h3 className="text-lg font-bold text-navy-900 mb-3">{strength.title}</h3>
              <p className="text-sm text-navy-600 leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
