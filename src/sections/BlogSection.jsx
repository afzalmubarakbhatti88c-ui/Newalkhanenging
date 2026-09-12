import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { formatDate } from '@/utils/cn';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BlogSection({ preview = false, limit = 3 }) {
  const ref = useScrollReveal();
  const posts = preview ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section id="blog" className="section-padding bg-silver-50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Insights & News"
          title="From Our Blog"
          description="Industry insights, maintenance tips, and company updates from New Al Khan Engineering Works."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group bg-white rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <time className="text-xs font-medium text-royal-600" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h3 className="font-display text-xl font-bold text-navy-900 mt-2 mb-3 group-hover:text-royal-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-navy-700/70 leading-relaxed mb-4 line-clamp-3">
                  {preview ? post.excerpt : post.content.slice(0, 200) + '...'}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-royal-600 hover:text-royal-500 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {preview && (
          <div className="reveal text-center mt-12">
            <Link to="/blog">
              <Button variant="secondary" size="lg">View All Articles</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
