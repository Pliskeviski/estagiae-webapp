import { useAsyncData } from './useAsyncData';

export const useCompany = (prefetch) => {
  const config = {
    baseApiUrl: '/api/v1/job/companies',
    prefetch,
  };

  const { loadOptions, isLoadingData, prefetchedData } = useAsyncData(config);

  return {
    loadOptions,
    isLoadingData,
    prefetchedData,
  };
};
