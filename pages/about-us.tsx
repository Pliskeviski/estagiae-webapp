import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';
import { AuthContainer } from 'src/containers/auth';
import { AuthStep } from 'src/enums/AuthStep';

const AboutUs: NextPage = () => {
  return (
    <PageWrapper title="Sobre nós">
      <AuthContainer step={AuthStep.Login} />
    </PageWrapper>
  );
};

export default AboutUs;
