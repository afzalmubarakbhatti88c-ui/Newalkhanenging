import { useState } from 'react';
import { products, productCategories } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';
import { ProductGrid } from '@/components/products/ProductCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageTitle } from '@/hooks/usePageTitle';
import { cn } from '@/utils/cn';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useScrollReveal();
  usePageTitle(
    'Products',
    'Explore our full range of cream mixers, filling machines, capping systems, and pharmaceutical processing equipment.'
  );

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-silver-200 text-lg max-w-2xl mx-auto">
            Comprehensive range of cosmetic and pharmaceutical manufacturing machinery
          </p>
        </div>
      </section>
      <section className="section-padding bg-silver-50">
        <div ref={ref} className="max-w-7xl mx-auto">
          <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-navy-800 text-white shadow-lg'
                    : 'bg-white text-navy-700 hover:bg-royal-50 hover:text-royal-600 border border-silver-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <ProductGrid products={filtered} />
        </div>
      </section>
    </>
  );
}
