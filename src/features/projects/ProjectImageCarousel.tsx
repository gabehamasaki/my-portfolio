import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/context';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const { theme, isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length;

  const goTo = (index: number) => {
    setActiveIndex((index + count) % count);
  };

  if (count === 0) {
    return null;
  }

  const slideLabel = `${activeIndex + 1} / ${count}`;

  return (
    <div className="relative -mx-8 -mt-8 mb-6 h-56 overflow-hidden bg-black/20">
      <img
        src={images[activeIndex]}
        alt={`${title} — screenshot ${activeIndex + 1}`}
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-1.5 backdrop-blur-sm transition-colors ${
              isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/80 text-gray-900 hover:bg-white'
            }`}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-1.5 backdrop-blur-sm transition-colors ${
              isDark ? 'bg-black/50 text-white hover:bg-black/70' : 'bg-white/80 text-gray-900 hover:bg-white'
            }`}
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className={`absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full px-2 py-1 backdrop-blur-sm ${
              isDark ? 'bg-black/40' : 'bg-white/70'
            }`}
            role="tablist"
            aria-label="Project screenshots"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Screenshot ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-purple-500'
                    : isDark
                      ? 'bg-white/40 hover:bg-white/60'
                      : 'bg-black/30 hover:bg-black/50'
                }`}
              />
            ))}
          </div>

          <span
            className={`absolute right-2 top-2 z-10 rounded px-2 py-0.5 text-xs ${theme.textSecondary} ${
              isDark ? 'bg-black/50' : 'bg-white/80'
            }`}
            aria-hidden
          >
            {slideLabel}
          </span>
        </>
      )}
    </div>
  );
}
