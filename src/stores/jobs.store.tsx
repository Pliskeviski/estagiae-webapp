import create from 'zustand';

export interface IJobPreview {
  id: string;
  title: string;
  description: string;
  postedAt: Date;
  companyName: string;
  companyImageUrl: string;
  location: string;
  jobType: string;
  industries: string[];
  responsibilities: string[];
}

interface IJobsState {
  jobs: IJobPreview[];
  setJobs: (jobs: any[]) => void;
}

const useAuthStore = create<IJobsState>((set) => ({
  jobs: [],
  setJobs: (jobs: IJobPreview[]) => {
    set((state) => ({
      ...state,
      jobs,
    }));
  },
}));

export default useAuthStore;
