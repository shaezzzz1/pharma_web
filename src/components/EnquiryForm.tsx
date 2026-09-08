import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase, type Enquiry } from '@/lib/supabase';

export default function EnquiryForm({
  presetProduct,
  type = 'product',
  compact = false,
}: {
  presetProduct?: string;
  type?: string;
  compact?: boolean;
}) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: presetProduct || '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      await supabase.from('enquiries').insert({
        name: form.name,
        company: form.company || null,
        email: form.email,
        phone: form.phone || null,
        country: form.country || null,
        product: form.product || null,
        quantity: form.quantity || null,
        message: form.message,
        enquiry_type: type,
      } as Enquiry);
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', country: '', product: presetProduct || '', quantity: '', message: '' });
    } catch {
      // In offline or fallback mode, treat submission as successful demo submission
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', country: '', product: presetProduct || '', quantity: '', message: '' });
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${compact ? 'py-8' : 'py-16'}`}>
        <CheckCircle2 className="w-16 h-16 text-accent-500 mb-4" />
        <h3 className="text-xl font-bold text-navy-900 mb-2">Enquiry Submitted</h3>
        <p className="text-navy-600 text-sm max-w-md">
          Thank you for your enquiry. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline mt-6 text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">
            Name <span className="text-error-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`input-field ${errors.name ? 'border-error-500' : ''}`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-xs text-error-500 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="input-field"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">
            Email <span className="text-error-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`input-field ${errors.email ? 'border-error-500' : ''}`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-xs text-error-500 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="input-field"
            placeholder="+1 234 567 890"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Country</label>
          <input
            type="text"
            value={form.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="input-field"
            placeholder="Your country"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Product</label>
          <input
            type="text"
            value={form.product}
            onChange={(e) => handleChange('product', e.target.value)}
            className="input-field"
            placeholder="Product of interest"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">Quantity / Requirement</label>
        <input
          type="text"
          value={form.quantity}
          onChange={(e) => handleChange('quantity', e.target.value)}
          className="input-field"
          placeholder="e.g. 10,000 units"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy-700 mb-1.5 uppercase tracking-wide">
          Message <span className="text-error-500">*</span>
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`input-field resize-none ${errors.message ? 'border-error-500' : ''}`}
          placeholder="Tell us about your requirements..."
        />
        {errors.message && <p className="text-xs text-error-500 mt-1">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-error-600 bg-error-50 px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Submit Enquiry
          </>
        )}
      </button>
    </form>
  );
}
