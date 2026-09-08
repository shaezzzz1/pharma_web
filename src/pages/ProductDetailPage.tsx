import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight, Package, FileText, Download, ArrowRight, AlertCircle,
  FlaskConical, ShieldCheck, Boxes, Tag, FileCode, Stethoscope, Snowflake, Info,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import { supabase, type Product } from '@/lib/supabase';
import { images } from '@/lib/data';

const productImagesList = [
  images.pinkTablets, images.colorfulTablets, images.blisterPacks, images.blisterPacks2,
  images.pillsBlister, images.whiteTablets, images.pillsPetri, images.labEquipment,
];

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data } = await supabase.from('products').select('*').eq('slug', slug).maybeSingle();
      setProduct(data);
      if (data) {
        const { data: rel } = await supabase
          .from('products')
          .select('*')
          .eq('therapeutic_area', data.therapeutic_area)
          .neq('id', data.id)
          .limit(4);
        setRelated(rel || []);
      }
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-navy-400 text-sm">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-navy-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-navy-900 mb-2">Product Not Found</h2>
          <p className="text-sm text-navy-500 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary text-sm">Back to Products</Link>
        </div>
      </div>
    );
  }

  const productImage = productImagesList[product.display_order % productImagesList.length] || images.pinkTablets;
  const productIndex = product.display_order % productImagesList.length;

  return (
    <>
      <PageHeader
        title={product.name}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: product.name },
        ]}
        backgroundImage={productImage}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product image */}
            <div>
              <div className="aspect-square bg-navy-50 overflow-hidden border border-navy-100">
                <img src={productImage} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide bg-accent-50 px-3 py-1">
                  {product.therapeutic_area || 'General'}
                </span>
                <span className="text-xs text-navy-400 font-mono">{product.product_code}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{product.name}</h1>
              <p className="text-navy-600 mb-8">{product.product_info || '[PRODUCT INFORMATION TO BE PROVIDED]'}</p>

              {/* Key specs */}
              <div className="grid grid-cols-2 gap-px bg-navy-200 border border-navy-200 mb-8">
                <SpecItem icon={FlaskConical} label="Composition" value={product.composition || '[TO BE PROVIDED]'} />
                <SpecItem icon={Package} label="Dosage Form" value={product.dosage_form || '[TO BE PROVIDED]'} />
                <SpecItem icon={Tag} label="Strength" value={product.strength || '[TO BE PROVIDED]'} />
                <SpecItem icon={Boxes} label="Packaging" value={product.packaging || '[TO BE PROVIDED]'} />
                <SpecItem icon={FileCode} label="Product Code" value={product.product_code || '[TO BE PROVIDED]'} />
                <SpecItem icon={Stethoscope} label="Category" value={product.category || '[TO BE PROVIDED]'} />
              </div>

              <div className="flex gap-4">
                <button onClick={() => setShowEnquiry(true)} className="btn-accent">
                  Product Enquiry <ArrowRight className="w-4 h-4" />
                </button>
                <Link to="/products" className="btn-outline text-sm">
                  Back to Products
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed info sections */}
          <div className="grid md:grid-cols-2 gap-px bg-navy-200 border border-navy-200 mb-16">
            <DetailBlock icon={Stethoscope} title="Indications" content={product.indications || '[INDICATIONS TO BE PROVIDED]'} />
            <DetailBlock icon={Snowflake} title="Storage" content={product.storage || '[STORAGE TO BE PROVIDED]'} />
            <DetailBlock icon={Info} title="Product Information" content={product.product_info || '[PRODUCT INFORMATION TO BE PROVIDED]'} />
            <DetailBlock icon={ShieldCheck} title="Therapeutic Category" content={product.therapeutic_area || '[TO BE PROVIDED]'} />
          </div>

          {/* Documents */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Documents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Product Information Sheet', 'Safety Data Sheet', 'Certificate of Analysis'].map((doc) => (
                <div key={doc} className="flex items-center gap-4 bg-navy-50 border border-navy-100 p-5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-accent-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-navy-900">{doc}</h3>
                    <p className="text-xs text-navy-500">[DOCUMENT TO BE PROVIDED]</p>
                  </div>
                  <Download className="w-4 h-4 text-navy-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form */}
          {showEnquiry && (
            <div className="bg-navy-50 border border-navy-100 p-8 mb-16">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Product Enquiry</h2>
              <p className="text-sm text-navy-600 mb-8">Submit your enquiry for {product.name} and our team will get back to you.</p>
              <EnquiryForm presetProduct={product.name} type="product" />
            </div>
          )}

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((rp, i) => (
                  <Link
                    key={rp.id}
                    to={`/products/${rp.slug}`}
                    className="group bg-white border border-navy-100 overflow-hidden card-hover"
                    onClick={() => { window.scrollTo(0, 0); }}
                  >
                    <div className="aspect-square bg-navy-100 overflow-hidden">
                      <img
                        src={productImagesList[(i + 2) % productImagesList.length]}
                        alt={rp.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-navy-900 mb-1 line-clamp-1 group-hover:text-accent-600 transition-colors">{rp.name}</h3>
                      <p className="text-xs text-navy-500 line-clamp-1">{rp.composition || '[COMPOSITION]'}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function SpecItem({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="w-4 h-4 text-navy-400" />
        <span className="text-xs text-navy-500 uppercase tracking-wide font-semibold">{label}</span>
      </div>
      <div className="text-sm font-medium text-navy-900">{value}</div>
    </div>
  );
}

function DetailBlock({ icon: Icon, title, content }: { icon: React.ComponentType<{ className?: string }>; title: string; content: string }) {
  return (
    <div className="bg-white p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-navy-900 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent-400" />
        </div>
        <h3 className="text-lg font-bold text-navy-900">{title}</h3>
      </div>
      <p className="text-sm text-navy-600 leading-relaxed">{content}</p>
    </div>
  );
}
