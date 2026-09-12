import AboutSection from '@/sections/AboutSection';
import { company } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function About() {
  const ref = useScrollReveal();
  usePageTitle('About Us', `${company.about.slice(0, 155)}...`);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-silver-200 text-lg max-w-2xl mx-auto">{company.tagline}</p>
        </div>
      </section>
      <AboutSection />
      <section className="section-padding bg-silver-50">
        <div ref={ref} className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Industries"
            title="Industries We Serve"
            description="Our machinery solutions cater to diverse manufacturing sectors across Pakistan."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.industries.map((industry, i) => (
              <div
                key={industry}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center gap-4 p-6 rounded-2xl bg-white premium-shadow hover:premium-shadow-lg transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-royal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-medium text-navy-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
