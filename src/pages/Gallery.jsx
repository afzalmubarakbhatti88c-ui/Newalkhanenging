import { useState } from 'react';
import { galleryImages, brandingImages } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from '@/utils/cn';

const allImages = [...brandingImages, ...galleryImages];
const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const ref = useScrollReveal();
  usePageTitle(
    'Gallery',
    'Browse our machinery portfolio, branding assets, and manufacturing equipment gallery.'
  );

  const filtered =
    activeCategory === 'All'
      ? allImages
      : activeCategory === 'Branding'
        ? brandingImages
        : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-silver-200 text-lg max-w-2xl mx-auto">
            Explore our machinery, manufacturing facility, and brand partnerships
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div ref={ref} className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Work"
            title="Machinery & Branding Gallery"
            description="A visual showcase of our premium cosmetic and pharmaceutical manufacturing equipment."
          />
          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-navy-800 text-white shadow-lg'
                    : 'bg-silver-50 text-navy-700 hover:bg-royal-50 hover:text-royal-600 border border-silver-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)} group relative aspect-[4/3] rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-500`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300 flex items-end">
                  <p className="p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
