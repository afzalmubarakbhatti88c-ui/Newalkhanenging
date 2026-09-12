import { cn } from '@/utils/cn';

const variants = {
  primary:
    'bg-gradient-to-r from-navy-800 to-royal-600 text-white hover:from-navy-700 hover:to-royal-500 shadow-lg shadow-royal-600/20 hover:shadow-xl hover:shadow-royal-600/30 hover:-translate-y-0.5',
  secondary:
    'bg-white text-navy-800 border-2 border-navy-800/20 hover:border-royal-500 hover:text-royal-600 hover:-translate-y-0.5',
  outline:
    'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50',
  ghost: 'text-navy-700 hover:text-royal-600 hover:bg-royal-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  target,
  rel,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
