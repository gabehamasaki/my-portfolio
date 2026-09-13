import { useCallback, useMemo, useState } from 'react';

export function usePagination<T>(items: readonly T[], pageSize: number) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  const safePage = Math.min(page, totalPages - 1);

  const pageItems = useMemo(() => {
    const start = safePage * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, pageSize, safePage]);

  const goTo = useCallback(
    (nextPage: number) => {
      setPage(Math.max(0, Math.min(nextPage, totalPages - 1)));
    },
    [totalPages],
  );

  const next = useCallback(() => {
    goTo(safePage + 1);
  }, [goTo, safePage]);

  const prev = useCallback(() => {
    goTo(safePage - 1);
  }, [goTo, safePage]);

  const reset = useCallback(() => {
    setPage(0);
  }, []);

  return {
    page: safePage,
    totalPages,
    pageItems,
    goTo,
    next,
    prev,
    reset,
    hasNext: safePage < totalPages - 1,
    hasPrev: safePage > 0,
  };
}
