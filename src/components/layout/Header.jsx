import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { company, navLinks } from '@/data/company';
import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { useScrollHeader } from '@/hooks/useScrollHeader';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScrollHeader();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div
        className={cn(
          'glass-dark mx-4 rounded-2xl premium-shadow lg:mx-8 transition-all duration-300',
          scrolled ? 'mt-2 shadow-xl shadow-navy-950/20' : 'mt-4',
          scrolled && 'bg-navy-950/95'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between px-4 lg:px-6 transition-all duration-300',
            scrolled ? 'py-2 lg:py-2.5' : 'py-3 lg:py-4'
          )}
        >
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <img
              src="/assets/logo.png.png"
              alt={company.name}
              className={cn(
                'w-auto transition-all duration-300 group-hover:scale-105',
                scrolled ? 'h-9 lg:h-10' : 'h-10 lg:h-12'
              )}
            />
            <div className="hidden sm:block">
              <p className="font-display text-sm lg:text-base font-bold text-white leading-tight">
                New Al Khan
              </p>
              <p className="text-[10px] lg:text-xs text-silver-300 leading-tight max-w-[180px]">
                {company.tagline}
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                  isActive(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-silver-200 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-royal-400" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/request-quote">
              <Button size="sm">Request a Quote</Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="lg:hidden border-t border-white/10 px-4 py-4 animate-slide-down"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive(link.path)
                      ? 'text-white bg-white/10'
                      : 'text-silver-200 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/request-quote"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-royal-600 text-white text-sm font-medium text-center hover:bg-royal-500 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
