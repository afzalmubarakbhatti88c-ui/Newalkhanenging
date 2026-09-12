import { company } from '@/data/company';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhyChooseUs() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal-400 rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <span className="reveal inline-block text-sm font-semibold tracking-widest uppercase text-royal-400 mb-3">
            Why Choose Us
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The New Al Khan Advantage
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.whyChooseUs.map((item, i) => (
            <div
              key={item}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} p-6 rounded-2xl glass-dark text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-10 h-10 rounded-full bg-royal-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-royal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-medium text-silver-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
