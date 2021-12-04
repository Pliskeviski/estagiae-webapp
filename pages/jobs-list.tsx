import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';
import { JobsListContainer } from 'src/containers/jobs-list';

// route /vagas
const JobsList: NextPage = () => {
  return (
    <PageWrapper title="Vagas">
      <JobsListContainer />
    </PageWrapper>
  );
};

export default JobsList;
