import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';
import { AboutUsContainer } from 'src/containers/about-us';

const AboutUs: NextPage = () => {
  return (
    <PageWrapper title="Sobre nós">
      <AboutUsContainer />
    </PageWrapper>
  );
};

export default AboutUs;
