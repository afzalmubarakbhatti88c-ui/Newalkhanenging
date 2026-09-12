import { Link } from 'react-router-dom';
import { services } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ServicesSection({ preview = false }) {
  const ref = useScrollReveal();
  const displayServices = preview ? services.slice(0, 3) : services;

  return (
    <section id="services" className="section-padding bg-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="End-to-End Engineering Solutions"
          description="From custom machine design to after-sales support, we provide comprehensive services for your manufacturing needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group p-8 rounded-2xl bg-white border border-silver-100 premium-shadow hover:premium-shadow-lg hover:border-royal-200 hover:-translate-y-1 transition-all duration-500`}
            >
              <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{service.icon}</span>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3 group-hover:text-royal-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-navy-700/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        {preview && (
          <div className="reveal text-center mt-12">
            <Link to="/services">
              <Button variant="secondary" size="lg">View All Services</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
