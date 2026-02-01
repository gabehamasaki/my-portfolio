import { cn } from '@/lib/utils';
import { TailwindColor } from '@/types/tailwind';
import { MAP_COLOR_VARIANT_TO_BG } from '@/utils/mapVariants';

type Props = {
  position: 'bottom' | 'top';
  color: TailwindColor;
};

export function GlowCircle({ position, color }: Props) {
  return (
    <div
      className={cn(
        'fixed z-0 h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-100 pointer-events-none',
        MAP_COLOR_VARIANT_TO_BG[color],
        {
          '-left-20 -top-20': position === 'top',
          '-right-20 -bottom-20': position === 'bottom',
        }
      )}
    />
  );
}
