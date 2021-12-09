import create from 'zustand';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { getJobsList } from 'src/services/job.service';
import { v4 as uuidv4 } from 'uuid';
import { IJobFilters } from 'src/interfaces/job-filters.interface';

interface IFilterSection {
  label: string;
  id: string;
  isExpanded: boolean;
  options: {
    label: string;
    id: string;
    selected: boolean;
  }[];
}

interface IJobsListState {
  items: IJobPreview[];
  hasMore: boolean;
  page: number;
  hasError: boolean;
  total: number;
  filters: IJobFilters;
  filterSections: IFilterSection[];
  onReset: () => void;
  onLoadMore: () => void;
  onChangeFilterSections: (filterSections: IFilterSection[]) => void;
  onToggleExpandedFilterSection: (filterSectionsId: string) => void;
  onUpdateFilters: (filters: Partial<IJobFilters>) => void;
}

const useJobsListStore = create<IJobsListState>((setState, getState) => ({
  items: [],
  hasMore: true,
  page: 0,
  hasError: false,
  total: 0,
  filters: {},
  filterSections: [],
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
    const { page, filters, filterSections: currentFilterSections } = getState();
    console.log('onLoadMore');

    const nextPage = page + 1;

    const { data, hasMore, total, filterSections } = await getJobsList({
      page: nextPage,
      size: 12,
      ...filters,
    });

    // Filter options will only be available on the first page
    if (filterSections?.length > 0 && currentFilterSections.length === 0) {
      const mappedFilterSections: IFilterSection[] = filterSections.map(
        (section) => {
          return {
            label: section.label,
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

      setState({
        filterSections: mappedFilterSections,
      });
    }

    setState((state) => ({
      ...state,
      page: nextPage,
      items: [...state.items, ...data],
      hasMore,
      total,
    }));
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

export default useJobsListStore;
