import { Link } from 'react-router-dom';
import { company, coreValues } from '@/data/company';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection({ preview = false }) {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="About Us"
          title="Engineering Excellence Since Day One"
          description={preview ? company.about.slice(0, 200) + '...' : undefined}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden premium-shadow">
              <img
                src="/assets/work-all-brands.png.png"
                alt="Trusted by leading brands"
                className="w-full max-w-[450px] h-auto mx-auto object-contain"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/80 to-transparent">
                <p className="text-white font-display text-xl font-semibold">25+ Years of Trust</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="text-navy-700/80 leading-relaxed mb-6">
              {preview ? company.about : company.history}
            </p>
            {!preview && (
              <p className="text-navy-700/80 leading-relaxed">{company.about}</p>
            )}
            {preview && (
              <Link to="/about" className="inline-block mt-6">
                <Button variant="secondary" size="sm">Read More About Us</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="reveal p-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-white premium-shadow">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-royal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-silver-200 leading-relaxed">{company.vision}</p>
          </div>
          <div className="reveal reveal-delay-1 p-8 rounded-2xl bg-gradient-to-br from-royal-600 to-royal-500 text-white premium-shadow">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-white/90 leading-relaxed">{company.mission}</p>
          </div>
        </div>

        {!preview && (
          <div>
            <h3 className="reveal font-display text-2xl sm:text-3xl font-bold text-navy-900 text-center mb-10">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, i) => (
                <div
                  key={value.title}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} p-6 rounded-2xl bg-silver-50 border border-silver-100 hover:border-royal-200 hover:premium-shadow transition-all duration-300`}
                >
                  <h4 className="font-display text-lg font-semibold text-navy-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-navy-700/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {preview && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} p-5 rounded-xl bg-silver-50 border border-silver-100 text-center`}
              >
                <h4 className="font-display text-base font-semibold text-navy-900 mb-1">{value.title}</h4>
                <p className="text-xs text-navy-700/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
