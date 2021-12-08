import { useState, useCallback, useEffect } from 'react';
import { setup } from 'axios-cache-adapter';

const api = setup({});

let timer = null;

const defaultCacheMaxAge = 86400000; // 24 hours

const prefetchedMap = {};

export const useAsyncData = ({
  baseApiUrl,
  prefetch = false,
  onParseData = null,
  cacheMaxAge = defaultCacheMaxAge,
  queryParam = 'search=',
}) => {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [prefetchedData, setPrefetchedData] = useState([]);

  const onFetchData = useCallback(
    (query = '') =>
      api.get(`${baseApiUrl}?${queryParam}${encodeURIComponent(query || '')}`, {
        cache: {
          maxAge: cacheMaxAge,
          exclude: {
            query: false,
          },
        },
      }),
    [baseApiUrl, cacheMaxAge, queryParam]
  );

  const loadOptions = useCallback(
    (query, callback) => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        setIsLoadingData(true);
        try {
          const response = await onFetchData(query);
          const items = response.data || [];

          setIsLoadingData(false);

          if (onParseData) {
            const customParsedData = onParseData(items);
            callback(customParsedData);
          } else {
            const mappedItems = items.map((item) => ({
              ...item,
              label: item.label,
              value: item.id || item.value,
            }));

            callback(mappedItems);
          }
        } catch {
          setIsLoadingData(false);
          callback([]);
        }
      }, 500);
    },
    [onFetchData, onParseData]
  );

  const onPrefetchData = useCallback(async () => {
    if (!prefetch) return;

    const eventName = `prefetch-${baseApiUrl}`;

    if (!prefetchedMap[baseApiUrl]) {
      prefetchedMap[baseApiUrl] = 'loading';
      const response = await onFetchData();

      const items = response.data.result ? response.data.result : [];

      let mappedItems = items;

      if (onParseData) {
        const customParsedData = onParseData(items);
        setPrefetchedData(customParsedData);
        mappedItems = customParsedData;
      }

      const loadEvent = new CustomEvent(eventName, {
        detail: mappedItems,
      });

      window.dispatchEvent(loadEvent);

      setPrefetchedData(mappedItems);

      prefetchedMap[baseApiUrl] = mappedItems;
    } else if (prefetchedMap[baseApiUrl] === 'loading') {
      // This event is needed in case we have multiple items using this hook on the same page.
      // It prevents unecessary prefetch calls to our api :)
      window.addEventListener(eventName, (e) => {
        // eslint-disable-next-line dot-notation
        setPrefetchedData(e['detail']);
      });
    } else if (prefetchedMap[baseApiUrl]?.length > 0) {
      setPrefetchedData(prefetchedMap[baseApiUrl]);
    }
  }, [baseApiUrl, onFetchData, onParseData, prefetch]);

  useEffect(() => {
    onPrefetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loadOptions,
    isLoadingData,
    prefetchedData,
  };
};
