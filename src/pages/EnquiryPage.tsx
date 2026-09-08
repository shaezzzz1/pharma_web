import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import { images } from '@/lib/data';

export default function EnquiryPage() {
  return (
    <>
      <PageHeader
        title="Product Enquiry"
        subtitle="Submit your product enquiry and our team will get back to you with detailed information."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Product Enquiry' }]}
        backgroundImage={images.pillsBlister}
      />

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          <div className="bg-navy-50 border border-navy-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-navy-900 mb-2">Enquiry Form</h2>
            <p className="text-sm text-navy-600 mb-8">
              [DESCRIPTION TO BE PROVIDED] — Fill out the form below with your product requirements.
              Fields marked with * are required.
            </p>
            <EnquiryForm type="product" />
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-navy-200 border border-navy-200">
            {[
              { label: 'Response Time', value: '[TIME TO BE PROVIDED]' },
              { label: 'Email', value: '[EMAIL TO BE PROVIDED]' },
              { label: 'Phone', value: '[PHONE TO BE PROVIDED]' },
            ].map(item => (
              <div key={item.label} className="bg-white p-6 text-center">
                <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">{item.label}</div>
                <div className="text-sm font-bold text-navy-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
