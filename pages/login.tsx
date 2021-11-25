import { NextPage } from 'next';
import { PageWrapper } from 'src/components/page-wrapper';

const Login: NextPage = () => {
  return (
    <PageWrapper title="Login">
      <h1
        style={{
          fontFamily: 'PlusJakarta',
        }}
      >
        Login
      </h1>
    </PageWrapper>
  );
};

export default Login;
