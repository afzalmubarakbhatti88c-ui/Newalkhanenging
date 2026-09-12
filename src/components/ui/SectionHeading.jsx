import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/utils/cn';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
  className,
}) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        'mb-14',
        align === 'center' && 'text-center max-w-3xl mx-auto',
        align === 'left' && 'text-left max-w-2xl',
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            'reveal inline-block text-sm font-semibold tracking-widest uppercase mb-3',
            light ? 'text-royal-400' : 'text-royal-600'
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
          light ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'reveal reveal-delay-2 mt-4 text-lg leading-relaxed',
            light ? 'text-silver-200' : 'text-navy-700/70'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
