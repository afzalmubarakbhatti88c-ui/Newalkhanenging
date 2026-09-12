import { company } from '@/data/company';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CEOSection() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-b from-silver-50 to-white">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-3xl premium-shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-800 via-royal-500 to-navy-800" />
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 relative">
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full min-h-[400px]">
                <img
                  src={company.ceo.image}
                  alt={company.ceo.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-900/20 to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-3 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="reveal inline-block text-sm font-semibold tracking-widest uppercase text-royal-600 mb-3">
                Leadership
              </span>
              <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-1">
                {company.ceo.name}
              </h2>
              <p className="reveal reveal-delay-2 text-royal-600 font-medium mb-6">
                {company.ceo.title}
              </p>
              <div className="reveal reveal-delay-3 relative mb-8">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-royal-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v7h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v7h-9.983z" />
                </svg>
                <p className="text-navy-700/80 text-lg leading-relaxed pl-6 italic">
                  {company.ceo.message}
                </p>
              </div>
              <div className="reveal reveal-delay-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-royal-500/50 to-transparent" />
                <span className="text-sm text-navy-600 font-medium">{company.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
