import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';
import { AuthContainer } from 'src/containers/auth';
import { AuthStep } from 'src/enums/AuthStep';

const Login: NextPage = () => {
  return (
    <PageWrapper title="Login">
      <AuthContainer step={AuthStep.Login} />
    </PageWrapper>
  );
};

export default Login;
