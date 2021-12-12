import { IPrefetchedFilters } from 'src/interfaces/prefetched-filters.interface';

const availableRoutes = {
  'vagas-de-estagio-remotas': {
    filters: {
      text: 'remoto',
    },
    filterSections: [],
  } as IPrefetchedFilters,
};

export const getFiltersByUrl = (url: string): IPrefetchedFilters => {
  const routeFilters = availableRoutes[url];

  if (!routeFilters) {
    return {
      filters: {},
      filterSections: [],
    };
  }

  return routeFilters;
};
