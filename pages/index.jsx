import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import Footer from '../components/Footer';
import movieRequests from '../utils/fetchApi';

const Home = ({ results, genre, url }) => {
  return (
    <div>
      <Head>
        <title>Hulu Portfolio - Basofiibnu</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Header />
        <Nav />
        <Results data={results} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genreData = context.query.genre;
  const genreUrl = 'fetchTrending';

  const request = await fetch(
    `https://api.themoviedb.org/3${
      movieRequests[genreData]?.url || movieRequests[genreUrl].url
    }`,
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
      genre: genreData || genreUrl,
      url: `https://api.themoviedb.org/3${
        movieRequests[genreData]?.url ||
        movieRequests['fetchTrending'].url
      }`,
    },
  };
}
