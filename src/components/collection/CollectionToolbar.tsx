import { ChevronLeft, ChevronRight, Grid3x3, GalleryHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';
import type { CollectionViewMode } from '@/hooks/useViewMode';

interface CollectionToolbarProps {
  viewMode: CollectionViewMode;
  onViewModeChange: (mode: CollectionViewMode) => void;
  showPagination?: boolean;
  page?: number;
  totalPages?: number;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export function CollectionToolbar({
  viewMode,
  onViewModeChange,
  showPagination = false,
  page = 0,
  totalPages = 1,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
}: CollectionToolbarProps) {
  const { t } = useTranslation();
  const { theme, isDark } = useTheme();

  const buttonBase = `p-2 rounded-lg border transition-colors ${theme.border} ${
    isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
  }`;

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      <div className={`flex items-center gap-1 rounded-lg border p-0.5 ${theme.border}`}>
        <button
          type="button"
          onClick={() => onViewModeChange('slide')}
          className={`${buttonBase} border-0 ${viewMode === 'slide' ? (isDark ? 'bg-white/10 text-purple-300' : 'bg-black/5 text-purple-600') : theme.textTertiary}`}
          aria-pressed={viewMode === 'slide'}
          aria-label={t('collection.viewSlide')}
          title={t('collection.viewSlide')}
        >
          <GalleryHorizontal className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onViewModeChange('grid')}
          className={`${buttonBase} border-0 ${viewMode === 'grid' ? (isDark ? 'bg-white/10 text-purple-300' : 'bg-black/5 text-purple-600') : theme.textTertiary}`}
          aria-pressed={viewMode === 'grid'}
          aria-label={t('collection.viewGrid')}
          title={t('collection.viewGrid')}
        >
          <Grid3x3 className="h-4 w-4" />
        </button>
      </div>

      {showPagination && viewMode === 'grid' && totalPages > 1 && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className={`${buttonBase} disabled:opacity-40 disabled:pointer-events-none`}
            aria-label={t('collection.prev')}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className={`text-sm tabular-nums ${theme.textSecondary}`}>
            {t('collection.page', { current: page + 1, total: totalPages })}
          </span>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className={`${buttonBase} disabled:opacity-40 disabled:pointer-events-none`}
            aria-label={t('collection.next')}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
