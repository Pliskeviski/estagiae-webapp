import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';
import { JobsListContainer } from 'src/containers/jobs-list';
import { getJobsList } from 'src/services/job.service';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { IPaginatedResponse } from 'src/interfaces/pagination.interface';
import { ReactNode, useEffect, useLayoutEffect } from 'react';
import { setJobsListStore } from 'src/stores/jobs-list.store';

// route /vagas
interface IJobListProps {
  preLoadedJobs: IPaginatedResponse<IJobPreview>;
  children?: ReactNode;
}

const JobsList: NextPage = ({ preLoadedJobs, children }: IJobListProps) => {
  const effectFn = typeof window === 'undefined' ? useEffect : useLayoutEffect;

  effectFn(() => {
    setJobsListStore({ preFetchedData: preLoadedJobs });
  }, [preLoadedJobs]);

  return (
    <PageWrapper title="Vagas">
      <JobsListContainer />
      {children}
    </PageWrapper>
  );
};

export async function getServerSideProps() {
  try {
    const response = await getJobsList(
      {
        page: 1,
        size: 12,
      },
      {},
      []
    );

    return {
      props: {
        preLoadedJobs: response,
      },
    };
  } catch {
    return {
      props: {
        preLoadedJobs: null,
      },
    };
  }
}

export default JobsList;
