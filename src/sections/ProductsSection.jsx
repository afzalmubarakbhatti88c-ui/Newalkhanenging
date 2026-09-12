import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';
import { ProductGrid } from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductsSection({ preview = false, limit = 6 }) {
  const ref = useScrollReveal();
  const displayProducts = preview ? products.filter((p) => p.category !== 'Branding').slice(0, limit) : products;

  return (
    <section id="products" className="section-padding bg-silver-50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Products"
          title="Precision-Engineered Machinery"
          description="Discover our comprehensive range of cosmetic and pharmaceutical manufacturing equipment, built with 25+ years of engineering expertise."
        />
        <ProductGrid products={displayProducts} />
        {preview && (
          <div className="reveal text-center mt-12">
            <Link to="/products">
              <Button size="lg">View All Products</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
