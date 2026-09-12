import BlogSection from '@/sections/BlogSection';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Blog() {
  usePageTitle(
    'Blog',
    'Industry insights, maintenance tips, and company updates from New Al Khan Engineering Works.'
  );
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-silver-200 text-lg max-w-2xl mx-auto">
            Industry insights, maintenance tips, and company updates
          </p>
        </div>
      </section>
      <BlogSection />
    </>
  );
}
