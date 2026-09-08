import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, ArrowRight, Users, Heart, TrendingUp, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { supabase, type JobOpening } from '@/lib/supabase';
import { images, departments } from '@/lib/data';

export default function CareersPage() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDept, setSelectedDept] = useState('All');

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('job_openings').select('*').eq('is_active', true).order('posted_date', { ascending: false });
      setJobs(data || []);
      setLoading(false);
    })();
  }, []);

  const filtered = selectedDept === 'All' ? jobs : jobs.filter(j => j.department === selectedDept);

  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Join our team of passionate professionals dedicated to advancing healthcare."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Careers' }]}
        backgroundImage={images.corporateBuilding}
      />

      {/* Work culture */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-accent-500" /> Work Culture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Build your career in pharmaceutical excellence
              </h2>
              <p className="text-navy-600 leading-relaxed mb-8">
                [DESCRIPTION TO BE PROVIDED] — At Shawez Pharma, we believe our people are our
                greatest strength. We foster a culture of innovation, collaboration, and
                continuous learning.
              </p>
              <div className="grid grid-cols-3 gap-px bg-navy-200 border border-navy-200">
                {[
                  { icon: Users, label: 'Collaborative' },
                  { icon: TrendingUp, label: 'Growth' },
                  { icon: Heart, label: 'Wellbeing' },
                ].map(item => (
                  <div key={item.label} className="bg-white p-4 text-center">
                    <item.icon className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                    <span className="text-xs font-semibold text-navy-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={images.researchLab} alt="Workplace" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Departments */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-navy-900 mb-6">Our Departments</h3>
            <div className="flex flex-wrap gap-2">
              {['All', ...departments].map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedDept === dept ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job listings */}
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-6">Open Positions</h3>
            {loading ? (
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="bg-navy-50 border border-navy-100 p-6 animate-pulse">
                    <div className="h-5 bg-navy-100 mb-3 w-1/3" />
                    <div className="h-4 bg-navy-100 w-1/4" />
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 bg-navy-50 border border-navy-100">
                <Briefcase className="w-16 h-16 text-navy-300 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-navy-900 mb-2">No open positions</h4>
                <p className="text-sm text-navy-500">[JOB OPENINGS TO BE PROVIDED]</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map(job => (
                  <div key={job.id} className="bg-white border border-navy-100 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-navy-900 mb-2">{job.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-navy-500">
                          {job.department && <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>}
                          {job.location && <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>}
                          {job.job_type && <span className="bg-accent-50 text-accent-700 px-2 py-0.5 text-xs font-medium">{job.job_type}</span>}
                        </div>
                      </div>
                      <Link to={`/careers/${job.slug}`} className="btn-primary text-sm whitespace-nowrap">
                        View & Apply <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Application form */}
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}

function ApplicationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', position: '', message: '', resumeName: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        product: form.position || null,
        message: form.message,
        enquiry_type: 'career',
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', position: '', message: '', resumeName: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-16 bg-navy-50 border border-navy-100 p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-accent-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy-900 mb-2">Application Submitted</h3>
        <p className="text-sm text-navy-600">Thank you for your interest. We'll be in touch soon.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline text-sm mt-6">Submit Another Application</button>
      </div>
    );
  }

  return (
    <div className="mt-16 bg-navy-50 border border-navy-100 p-8 md:p-12">
      <h3 className="text-2xl font-bold text-navy-900 mb-2">General Application</h3>
      <p className="text-sm text-navy-600 mb-8">Submit your application and our HR team will get back to you.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Name *</label>
            <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Email *</label>
            <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="your@email.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Phone</label>
            <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="input-field" placeholder="+1 234 567 890" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Position of Interest</label>
            <input type="text" value={form.position} onChange={e => setForm({ ...form, position: e.target.value })} className="input-field" placeholder="Position or department" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Message</label>
          <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="input-field resize-none" placeholder="Tell us about yourself..." />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Resume / CV</label>
          <input type="file" className="text-sm text-navy-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-navy-900 file:text-white file:text-sm file:font-medium" onChange={e => setForm({ ...form, resumeName: e.target.files?.[0]?.name || '' })} />
        </div>
        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-error-600 bg-error-50 px-4 py-3">
            <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
          </div>
        )}
        <button type="submit" disabled={status === 'loading'} className="btn-primary">
          {status === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Submit Application</>}
        </button>
      </form>
    </div>
  );
}
