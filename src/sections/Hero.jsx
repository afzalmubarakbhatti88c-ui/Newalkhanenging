import { Link } from 'react-router-dom';
import { company } from '@/data/company';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png.png"
          alt={company.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <img
              src="/assets/logo.png.png"
              alt={company.name}
              className="h-16 sm:h-20 lg:h-24 w-auto mb-8 drop-shadow-2xl"
            />
          </div>
          <p className="animate-fade-in-up text-royal-400 text-sm font-semibold tracking-widest uppercase mb-4" style={{ animationDelay: '0.1s' }}>
            Est. 25+ Years of Excellence
          </p>
          <h1 className="animate-fade-in-up font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6" style={{ animationDelay: '0.2s' }}>
            Premium Cosmetic &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 to-silver-200">
              Pharmaceutical Machinery
            </span>
          </h1>
          <p className="animate-fade-in-up text-lg sm:text-xl text-silver-200 leading-relaxed mb-4 max-w-2xl" style={{ animationDelay: '0.3s' }}>
            {company.tagline}
          </p>
          <p className="animate-fade-in-up text-base text-silver-300/80 leading-relaxed mb-10 max-w-xl" style={{ animationDelay: '0.4s' }}>
            {company.shortDescription}
          </p>
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.5s' }}>
            <Link to="/products">
              <Button size="lg">Explore Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
