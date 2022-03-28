import Head from 'next/head';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import DetailContent from '../../components/DetailContent';
import DetailHeader from '../../components/DetailHeader';

const DetailMovie = ({ results, id, url }) => {
  const BASE_URL = `https://image.tmdb.org/t/p/original${results.backdrop_path}`;
  if (!id) return <p>No Movie Id</p>;

  return (
    <div>
      <Head>
        <title>{results.title} - Hulu Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div
        style={{
          backgroundImage: `url('${BASE_URL}')`,
          backgroundSize: 'cover',
        }}
        className="-mt-5"
      >
        <div className="bg-black/70">
          <div className="header-container pt-6 pr-4">
            <Header />
            <Nav detail />
          </div>
          <div className="content-container">
            <DetailHeader data={results} />
          </div>
        </div>
      </div>
      <DetailContent data={results} />
      <Footer />
    </div>
  );
};

export default DetailMovie;

export async function getServerSideProps(context) {
  const movieId = context.query.id;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const baseUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`;

  const response = await fetch(baseUrl).then((res) => res.json());

  return {
    props: {
      results: response,
      id: movieId,
      url: baseUrl,
    },
  };
}
