import Head from 'next/head';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Results from '../../components/Results';
import Footer from '../../components/Footer';
import movieRequests from '../../utils/fetchApi';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const SearchMovie = ({ results, url, keyword }) => {
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

export default SearchMovie;

export async function getServerSideProps(context) {
  const keyword = context.query.keyword;

  const request = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&page=1&include_adult=false`,
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
      url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&page=1&include_adult=false`,
      keyword,
    },
  };
}
