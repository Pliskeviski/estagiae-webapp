import { useAsyncData } from './useAsyncData';

export const useLocation = (prefetch) => {
  const config = {
    baseApiUrl: '/api/v1/location',
    prefetch,
  };

  const { loadOptions, isLoadingData, prefetchedData } = useAsyncData(config);

  return {
    loadOptions,
    isLoadingData,
    prefetchedData,
  };
};
