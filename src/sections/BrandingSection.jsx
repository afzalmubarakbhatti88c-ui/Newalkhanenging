import { Link } from 'react-router-dom';
import { brandingImages } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BrandingSection() {
  const ref = useScrollReveal();
  const posters = brandingImages.filter((img) => img.id !== 'logo');

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-500 rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="max-w-7xl mx-auto relative">
        <SectionHeading
          subtitle="Our Brand"
          title="Trusted Engineering Excellence"
          description="Proudly serving Pakistan's leading beauty and cosmetics companies with precision-manufactured machinery."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {posters.map((poster, i) => (
            <div
              key={poster.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative rounded-2xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:-translate-y-1`}
            >
              <img
                src={poster.src}
                alt={poster.alt}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-display text-xl sm:text-2xl font-bold text-white mb-2">{poster.alt}</p>
                <p className="text-silver-200 text-sm max-w-md">
                  {poster.id === 'hero'
                    ? 'Precision manufacturers of cosmetic and pharmaceutical machinery since 25+ years.'
                    : 'Partnering with leading brands across Pakistan for reliable manufacturing solutions.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal text-center mt-12">
          <Link to="/gallery">
            <Button variant="secondary" size="lg">View Full Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
