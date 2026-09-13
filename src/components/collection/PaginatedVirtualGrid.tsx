import { useRef, type ReactNode } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

interface PaginatedVirtualGridProps<T> {
  items: readonly T[];
  columns: number;
  estimateRowHeight: number;
  getItemKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => ReactNode;
  columnClassName?: string;
}

function chunkRows<T>(items: readonly T[], columns: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns) as T[]);
  }
  return rows;
}

export function PaginatedVirtualGrid<T>({
  items,
  columns,
  estimateRowHeight,
  getItemKey,
  renderItem,
  columnClassName = 'grid-cols-1 md:grid-cols-2',
}: PaginatedVirtualGridProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const rows = chunkRows(items, columns);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateRowHeight,
    overscan: 2,
  });

  if (rows.length === 0) {
    return null;
  }

  const useVirtualScroll = rows.length > 3;

  if (!useVirtualScroll) {
    return (
      <div className={`grid gap-8 ${columnClassName}`}>
        {items.map((item, index) => (
          <div key={getItemKey(item, index)} className="h-full min-h-0">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={parentRef}
      className="max-h-[min(80vh,1400px)] overflow-auto pr-1"
      style={{ contain: 'strict' }}
    >
      <div
        className="relative w-full"
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const rowItems = rows[virtualRow.index];
          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              className={`absolute left-0 top-0 grid w-full gap-8 ${columnClassName}`}
              style={{ transform: `translateY(${virtualRow.start}px)` }}
            >
              {rowItems.map((item, colIndex) => {
                const itemIndex = virtualRow.index * columns + colIndex;
                return (
                  <div key={getItemKey(item, itemIndex)} className="h-full min-h-0">
                    {renderItem(item, itemIndex)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
