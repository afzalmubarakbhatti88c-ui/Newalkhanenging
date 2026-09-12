import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' }
    );

    const children = element.querySelectorAll('.reveal');
    if (children.length > 0) {
      children.forEach((child) => observer.observe(child));
    } else {
      element.classList.add('reveal');
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return ref;
}
