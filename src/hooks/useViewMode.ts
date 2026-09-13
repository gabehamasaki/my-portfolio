import { useCallback, useEffect, useState } from 'react';

export type CollectionViewMode = 'slide' | 'grid';

export function useViewMode(storageKey: string, defaultMode: CollectionViewMode = 'slide') {
  const [viewMode, setViewModeState] = useState<CollectionViewMode>(() => {
    if (typeof window === 'undefined') {
      return defaultMode;
    }
    const stored = window.localStorage.getItem(storageKey);
    if (stored === 'slide' || stored === 'grid') {
      return stored;
    }
    return defaultMode;
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, viewMode);
  }, [storageKey, viewMode]);

  const setViewMode = useCallback((mode: CollectionViewMode) => {
    setViewModeState(mode);
  }, []);

  return { viewMode, setViewMode };
}
