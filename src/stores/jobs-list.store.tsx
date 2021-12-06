import create from 'zustand';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { getJobsList } from 'src/services/job.service';

interface IJobsListState {
  items: IJobPreview[];
  hasMore: boolean;
  page: number;
  hasError: boolean;
  total: number;
  onLoadMore: () => void;
}

const useJobsListStore = create<IJobsListState>((setState, getState) => ({
  items: [],
  hasMore: true,
  page: 0,
  hasError: false,
  total: 0,
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
    const nextPage = getState().page + 1;

    const { data, hasMore, total } = await getJobsList({
      page: nextPage,
      size: 10,
    });

    setState((state) => ({
      ...state,
      page: nextPage,
      items: [...state.items, ...data],
      hasMore,
      total,
    }));
  },
}));

export default useJobsListStore;
