import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';
import { JobsListContainer } from 'src/containers/jobs-list';
import { getJobsList } from 'src/services/job.service';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { IPaginatedResponse } from 'src/interfaces/pagination.interface';
import { ReactNode, useEffect, useLayoutEffect } from 'react';
import { setJobsListStore } from 'src/stores/jobs-list.store';
import { getFiltersByUrl } from 'src/seo/getFiltersByUrl';
import { IPrefetchedFilters } from 'src/interfaces/prefetched-filters.interface';

// route /vagas
interface IJobListProps {
  preLoadedJobs: IPaginatedResponse<IJobPreview>;
  preLoadedFilters: IPrefetchedFilters;
  children?: ReactNode;
}

const JobsList: NextPage = ({
  preLoadedJobs,
  preLoadedFilters,
  children,
}: IJobListProps) => {
  const effectFn = typeof window === 'undefined' ? useEffect : useLayoutEffect;

  effectFn(() => {
    setJobsListStore({
      preFetchedData: preLoadedJobs,
      preFetchedFilters: preLoadedFilters,
    });
  }, [preLoadedJobs]);

  return (
    <PageWrapper
      title="Vagas"
      customDescription={preLoadedFilters?.description}
    >
      <JobsListContainer />
      {children}
    </PageWrapper>
  );
};

export async function getServerSideProps(context) {
  const filters = getFiltersByUrl(context?.query?.url);

  try {
    const response = await getJobsList(
      {
        page: 1,
        size: 12,
      },
      filters.filters,
      filters.filterSections || []
    );

    return {
      props: {
        preLoadedJobs: response,
        preLoadedFilters: filters,
      },
    };
  } catch {
    return {
      props: {
        preLoadedJobs: null,
        preLoadedFilters: null,
      },
    };
  }
}

export default JobsList;
