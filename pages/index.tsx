import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <h1
      style={{
        fontFamily: 'PlusJakarta',
      }}
    >
      Home
    </h1>
  );
};

Home.getInitialProps = async (ctx) => {
  ctx.res.writeHead(302, { Location: '/vagas' }).end();
};

export default Home;
