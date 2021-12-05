import { useState, useCallback, useEffect } from 'react';

export interface IPaginatedResponse<T> {
  data: T[];
  hasMore: boolean;
  page: number;
  size: number;
  total: number;
}

export interface ILoadMore {
  page: number;
  size: number;
}

interface IUseInfinityScrollProps {
  loadMore: (params: ILoadMore) => Promise<IPaginatedResponse<any>>;
  itemsPerPage?: number;
}

interface IUseInfinityScroll {
  onLoadMore: () => void;
  onReset: () => void;
  items: any[];
  hasMore: boolean;
  hasError: boolean;
  total: number;
}

export const useInfinityScroll = ({
  loadMore,
  itemsPerPage = 20,
}: IUseInfinityScrollProps) => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const onLoadMore = useCallback(async () => {
    if (!hasMore) return;

    const nextPage = page + 1;

    try {
      const {
        data,
        hasMore: hasMoreItems,
        total: totalItems,
      } = await loadMore({
        page: nextPage,
        size: itemsPerPage,
      });

      setHasMore(hasMoreItems);
      setPage(nextPage);
      setItems([...items, ...data]);
      setTotal(totalItems);
      setHasError(false);
    } catch {
      setHasError(true);
    }
  }, [hasMore, page, loadMore, itemsPerPage, items]);

  const onReset = useCallback(() => {
    setPage(0);
    setTotal(0);
    setItems([]);
    setHasMore(true);
    setHasError(false);
    setIsFirstLoad(true);
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      onLoadMore();
    }
  }, [isFirstLoad, onLoadMore]);

  return {
    onLoadMore,
    onReset,
    items,
    hasMore,
    hasError,
    total,
  } as IUseInfinityScroll;
};
