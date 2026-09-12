import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

export default function ProductCard({ product, onLearnMore }) {
  return (
    <article className="group reveal bg-white rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:-translate-y-1">
      <div  className="relative h-64 md:h-72 lg:h-80 overflow-hidden bg-white flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-64 md:h-72 lg:h-80 object-contain p-4 bg-white transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-navy-800 backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 mb-2 group-hover:text-royal-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-navy-700/70 leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onLearnMore(product)}
          className="w-full"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </article>
  );
}

export function ProductModal({ product, isOpen, onClose }) {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden bg-silver-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover max-h-80 md:max-h-none"
          />
        </div>
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-royal-50 text-royal-600 mb-3">
            {product.category}
          </span>
          <p className="text-navy-700/80 leading-relaxed mb-6">{product.description}</p>
          <h4 className="font-display text-lg font-semibold text-navy-900 mb-3">Key Features</h4>
          <ul className="space-y-2 mb-6">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-navy-700/80">
                <svg className="w-5 h-5 text-royal-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Link to="/request-quote">
            <Button size="sm">Request a Quote</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export function ProductGrid({ products, className = '' }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onLearnMore={setSelected} />
        ))}
      </div>
      <ProductModal
        product={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
