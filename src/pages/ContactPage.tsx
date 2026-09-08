import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, Building2, Factory, FlaskConical, Briefcase } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import { images, company } from '@/lib/data';

const departmentContacts = [
  { icon: Building2, name: 'General Inquiries', email: '[EMAIL TO BE PROVIDED]', phone: '[PHONE TO BE PROVIDED]' },
  { icon: Factory, name: 'Manufacturing', email: '[EMAIL TO BE PROVIDED]', phone: '[PHONE TO BE PROVIDED]' },
  { icon: FlaskConical, name: 'R&D', email: '[EMAIL TO BE PROVIDED]', phone: '[PHONE TO BE PROVIDED]' },
  { icon: Briefcase, name: 'Sales & Business', email: '[EMAIL TO BE PROVIDED]', phone: '[PHONE TO BE PROVIDED]' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help with your pharmaceutical needs."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        backgroundImage={images.corporateBuilding}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <div className="section-label mb-6">
                <span className="w-8 h-px bg-accent-500" /> Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                We'd love to hear from you
              </h2>
              <p className="text-navy-600 leading-relaxed mb-10">
                [DESCRIPTION TO BE PROVIDED] — Whether you have a question about our products,
                need a quotation, or want to explore partnership opportunities, our team is
                ready to assist you.
              </p>

              <div className="space-y-6">
                <ContactItem icon={MapPin} label="Address" value={company.address} />
                <ContactItem icon={Phone} label="Phone" value={company.phone} />
                <ContactItem icon={Mail} label="Email" value={company.email} />
                <ContactItem icon={Clock} label="Business Hours" value="[BUSINESS HOURS TO BE PROVIDED]" />
              </div>

              {/* Map placeholder */}
              <div className="mt-10">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wide mb-4">Find Us</h3>
                <div className="aspect-[16/9] bg-navy-100 border border-navy-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-navy-300 mx-auto mb-2" />
                    <p className="text-sm text-navy-500">[MAP TO BE PROVIDED]</p>
                    <p className="text-xs text-navy-400 mt-1">{company.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-navy-50 border border-navy-100 p-8 md:p-10">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Send Us a Message</h3>
              <p className="text-sm text-navy-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              <EnquiryForm type="general" />
            </div>
          </div>

          {/* Department contacts */}
          <div className="mt-20">
            <h3 className="text-xl font-bold text-navy-900 mb-8">Department Contacts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200 border border-navy-200">
              {departmentContacts.map(dept => (
                <div key={dept.name} className="bg-white p-8 hover:bg-navy-50 transition-colors">
                  <div className="w-10 h-10 bg-navy-900 flex items-center justify-center mb-4">
                    <dept.icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="text-sm font-bold text-navy-900 mb-3">{dept.name}</h4>
                  <div className="space-y-1.5 text-xs text-navy-500">
                    <p className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> {dept.email}</p>
                    <p className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> {dept.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-navy-600 mb-6">Looking for product-specific enquiries?</p>
            <Link to="/enquiry" className="btn-accent">
              Product Enquiry Form <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-accent-400" />
      </div>
      <div>
        <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-1">{label}</div>
        <div className="text-sm text-navy-900 font-medium">{value}</div>
      </div>
    </div>
  );
}
