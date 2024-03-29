import create from 'zustand';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { getJobsList } from 'src/services/job.service';
import { v4 as uuidv4 } from 'uuid';
import { IJobFilters } from 'src/interfaces/job-filters.interface';
import { IFilterSection } from 'src/interfaces/filter-section.interface';
import { IPrefetchedFilters } from 'src/interfaces/prefetched-filters.interface';

interface IJobsListState {
  items: IJobPreview[];
  hasMore: boolean;
  page: number;
  hasError: boolean;
  total: number;
  filters: IJobFilters;
  filterSections: IFilterSection[];
  isFetchingData: boolean;
  preFetchedData: any;
  preFetchedFilters: IPrefetchedFilters;
  pageTitle: string;
  onReset: () => void;
  onLoadMore: () => void;
  onChangeFilterSections: (filterSections: IFilterSection[]) => void;
  onToggleExpandedFilterSection: (filterSectionsId: string) => void;
  onUpdateFilters: (filters: Partial<IJobFilters>) => void;
}

let hasClearedCustomTitleTick = 0;
const useJobsListStore = create<IJobsListState>((setState, getState) => ({
  items: [],
  hasMore: true,
  page: 0,
  hasError: false,
  total: 0,
  filters: {},
  filterSections: [],
  isFetchingData: false,
  preFetchedData: null,
  preFetchedFilters: null,
  pageTitle: null,
  onReset: () => {
    setState({
      items: [],
      hasMore: true,
      hasError: false,
      page: 0,
      total: 0,
    });
  },
  onLoadMore: async () => {
    const {
      page,
      filters,
      filterSections: currentFilterSections,
      isFetchingData,
      preFetchedData,
      preFetchedFilters,
      pageTitle,
    } = getState();

    // Resets page title
    if (hasClearedCustomTitleTick === 1) {
      setState({ pageTitle: '' });
      window.history.replaceState({}, '', '/vagas');
    } else {
      hasClearedCustomTitleTick += 1;
      document.title =
        `${pageTitle} - Estagiaê` ||
        'Encontre as melhores vagas de estágio do Brasil - Estagiaê';
    }

    if (isFetchingData) return;

    const nextPage = page + 1;

    setState({ isFetchingData: true });

    try {
      const { data, hasMore, total, filterSections } =
        preFetchedData ||
        (await getJobsList(
          {
            page: nextPage,
            size: 12,
          },
          filters,
          currentFilterSections
        ));

      // Filter options will only be available on the first page
      if (filterSections?.length > 0 && currentFilterSections.length === 0) {
        const mappedFilterSections: IFilterSection[] = filterSections.map(
          (section) => {
            return {
              label: section.label,
              type: section.type,
              id: uuidv4(),
              isExpanded: false,
              options: section.options.map((option) => {
                return {
                  label: option.label,
                  id: option.value,
                  selected: false,
                };
              }),
            } as IFilterSection;
          }
        );

        if (preFetchedFilters) {
          // TODO: map preFetchedFilters to mappedFilterSections
        }

        setState({
          filterSections: mappedFilterSections,
          filters: preFetchedFilters?.filters
            ? { ...preFetchedFilters?.filters }
            : {},
        });
      }

      setState((state) => ({
        ...state,
        page: nextPage,
        items: [...state.items, ...data],
        hasMore,
        total,
        hasError: false,
        isFetchingData: false,
        preFetchedData: null,
      }));
    } catch {
      setState({ hasError: false, isFetchingData: false });
    }
  },
  onChangeFilterSections: (filterSections: IFilterSection[]) => {
    setState((state) => ({
      ...state,
      filterSections,
      items: [],
      hasMore: true,
      hasError: false,
      page: 0,
      total: 0,
    }));
  },
  onToggleExpandedFilterSection: (filterSectionsId: string) => {
    setState((state) => {
      const filterSections = state.filterSections.map((section) => {
        if (section.id === filterSectionsId) {
          return { ...section, isExpanded: !section.isExpanded };
        }
        return section;
      });

      return {
        ...state,
        filterSections,
      };
    });
  },
  onUpdateFilters: (filters: Partial<IJobFilters>) => {
    setState((state) => ({
      ...state,
      filters: { ...state.filters, ...filters },
      items: [],
      hasMore: true,
      hasError: false,
      page: 0,
      total: 0,
    }));

    // By setting the page to 0, the job list page will be reloaded
  },
}));

export const setJobsListStore = (initialState: Partial<IJobsListState>) => {
  if (initialState) {
    useJobsListStore.setState({
      ...useJobsListStore.getState(),
      ...initialState,
    });
  }
};

export default useJobsListStore;
