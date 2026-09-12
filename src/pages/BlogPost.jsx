import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/utils/cn';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  usePageTitle(post?.title, post?.excerpt);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-3xl font-bold text-navy-900 mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-royal-600 hover:text-royal-500">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-royal-400 hover:text-royal-300 mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <time className="text-sm text-royal-400" dateTime={post.date}>{formatDate(post.date)}</time>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-silver-300">By {post.author}</p>
        </div>
      </section>
      <article className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden premium-shadow mb-10">
            <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
          </div>
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-navy-700/80 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
