import { Link } from 'react-router-dom';
import ServicesSection from '@/sections/ServicesSection';
import { company } from '@/data/company';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Services() {
  usePageTitle(
    'Services',
    'Machine manufacturing, custom design, installation, maintenance, spare parts, and after-sales support.'
  );
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-silver-200 text-lg max-w-2xl mx-auto">
            Complete engineering support from design to after-sales service
          </p>
        </div>
      </section>
      <ServicesSection />
      <section className="section-padding bg-navy-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-silver-300 mb-8">
            Contact {company.ceo.name} and our team to discuss your manufacturing requirements.
          </p>
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-royal-600 to-royal-500 text-white font-medium hover:shadow-lg hover:shadow-royal-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
