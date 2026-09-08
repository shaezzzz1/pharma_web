import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, Newspaper, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { supabase, type NewsArticle } from '@/lib/supabase';
import { defaultNewsArticles } from '@/lib/mockData';
import { images } from '@/lib/data';
import { useStaggeredAnimation } from '@/lib/useScrollAnimation';

const newsImages = [images.researcherNotes, images.labTouchscreen, images.scientistSamples, images.researchLab, images.microscope];

const categories = ['All', 'Company News', 'Product Updates', 'Research', 'Events', 'Industry Insights'];

export default function NewsPage() {
  const { slug } = useParams();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await supabase.from('news_articles').select('*').eq('is_published', true).order('published_date', { ascending: false });
        setArticles(data && data.length > 0 ? data : defaultNewsArticles);
      } catch {
        setArticles(defaultNewsArticles);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (slug) {
      const article = articles.find(a => a.slug === slug);
      setSelectedArticle(article || null);
    } else {
      setSelectedArticle(null);
    }
  }, [slug, articles]);

  if (slug && selectedArticle) {
    return <ArticleDetail article={selectedArticle} />;
  }

  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <PageHeader
        title="News & Insights"
        subtitle="Stay updated with the latest news, product updates, and industry insights."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'News' }]}
        backgroundImage={images.researchLab}
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat ? 'bg-navy-900 text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-navy-50 border border-navy-100 p-6 animate-pulse">
                  <div className="aspect-[16/10] bg-navy-100 mb-4" />
                  <div className="h-4 bg-navy-100 mb-2" />
                  <div className="h-3 bg-navy-100 w-2/3" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-navy-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">No articles found</h3>
              <p className="text-sm text-navy-500">[ARTICLES TO BE PROVIDED]</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((article, i) => (
                <Link
                  key={article.id}
                  to={`/news/${article.slug}`}
                  className="group block"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-navy-100 mb-5">
                    <img
                      src={article.image_url || newsImages[i % newsImages.length]}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-accent-600 font-semibold uppercase tracking-wide">{article.category}</span>
                    <span className="text-xs text-navy-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-navy-500 line-clamp-2 mb-3">{article.excerpt}</p>
                  <span className="text-xs font-semibold text-navy-900 group-hover:text-accent-600 flex items-center gap-1 transition-colors">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ArticleDetail({ article }: { article: NewsArticle }) {
  const articleImage = article.image_url || newsImages[0];
  return (
    <>
      <PageHeader
        title={article.title}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'News', path: '/news' },
          { label: article.title || 'Article' },
        ]}
        backgroundImage={articleImage}
      />
      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs text-accent-600 font-semibold uppercase tracking-wide bg-accent-50 px-3 py-1">{article.category}</span>
            <span className="text-xs text-navy-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(article.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="aspect-[16/9] overflow-hidden mb-10">
            <img src={articleImage} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-navy-600 leading-relaxed text-lg mb-6">{article.excerpt}</p>
            <p className="text-navy-600 leading-relaxed">{article.content || '[ARTICLE CONTENT TO BE PROVIDED]'}</p>
          </div>
          <div className="mt-12 pt-8 border-t border-navy-100">
            <Link to="/news" className="btn-outline text-sm">Back to All News</Link>
          </div>
        </div>
      </section>
    </>
  );
}
