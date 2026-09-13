import { useEffect, useRef, useState } from 'react';

export function useInViewport(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold]);

  return { ref, isInView };
}
