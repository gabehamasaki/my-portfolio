import { useCallback, useEffect, useState, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/context';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface AutoCarouselProps {
  itemCount: number;
  slidesPerView?: 1 | 2 | 3;
  intervalMs?: number;
  autoplayEnabled: boolean;
  children: ReactNode;
}

export function AutoCarousel({
  itemCount,
  slidesPerView = 1,
  intervalMs = 6000,
  autoplayEnabled,
  children,
}: AutoCarouselProps) {
  const { isDark } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: itemCount > 1, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoplayEnabled || prefersReducedMotion || isPaused || itemCount <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [autoplayEnabled, emblaApi, intervalMs, isPaused, itemCount, prefersReducedMotion]);

  const navButtonClass = `absolute top-1/2 z-10 -translate-y-1/2 rounded-full p-2 backdrop-blur-sm transition-colors ${
    isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/90 text-gray-900 hover:bg-white'
  }`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {children}
        </div>
      </div>

      {itemCount > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className={`${navButtonClass} left-0`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className={`${navButtonClass} right-0`}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="mt-4 flex justify-center gap-1.5">
            {Array.from({ length: itemCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === selectedIndex
                    ? 'bg-purple-500'
                    : isDark
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-black/20 hover:bg-black/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function CarouselSlide({
  slidesPerView = 1,
  children,
}: {
  slidesPerView?: 1 | 2 | 3;
  children: ReactNode;
}) {
  const basis =
    slidesPerView === 3
      ? 'basis-full sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]'
      : slidesPerView === 2
        ? 'basis-full md:basis-[calc((100%-1rem)/2)]'
        : 'basis-full';

  return <div className={`min-w-0 shrink-0 grow-0 ${basis}`}>{children}</div>;
}
