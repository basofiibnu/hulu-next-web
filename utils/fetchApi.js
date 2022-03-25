const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key${apiKey}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key${apiKey}&language=en-US`,
  },
  fetchAction: {
    title: 'Action',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=28`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=35`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=27`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=9648`,
  },
  fetchScifi: {
    title: 'Sci-fi',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=16`,
  },
  fetchTV: {
    title: 'TV Series',
    url: `/discover/movie?week?api_key${apiKey}&with_genres=10770`,
  },
};
