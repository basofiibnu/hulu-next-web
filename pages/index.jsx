import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-screen-xl">
        <Header />
        <Nav />
      </div>
    </div>
  );
};

export default Home;
