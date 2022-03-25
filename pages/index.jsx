import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import movieRequests from '../utils/fetchApi';

const Home = ({ results }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto max-w-screen-xl">
        <Header />
        <Nav />
        <Results data={results} />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genreData = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      movieRequests[genreData]?.url ||
      movieRequests['fetchTrending'].url
    }`,
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
      genre: genreData,
      url: `https://api.themoviedb.org/3${
        movieRequests[genreData]?.url ||
        movieRequests['fetchTrending'].url
      }`,
    },
  };
}
