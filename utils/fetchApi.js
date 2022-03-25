const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`,
  },
  fetchAction: {
    title: 'Action',
    url: `/discover/movie?api_key=${apiKey}&with_genres=28&sort_by=popularity.desc`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${apiKey}&with_genres=35&sort_by=popularity.desc`,
  },
  fetchHorror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${apiKey}&with_genres=27&sort_by=popularity.desc`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/discover/movie?api_key=${apiKey}&with_genres=10749&sort_by=popularity.desc`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${apiKey}&with_genres=9648&sort_by=popularity.desc`,
  },
  fetchScifi: {
    title: 'Sci-fi',
    url: `/discover/movie?api_key=${apiKey}&with_genres=878&sort_by=popularity.desc`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${apiKey}&with_genres=37&sort_by=popularity.desc`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${apiKey}&with_genres=16&sort_by=popularity.desc`,
  },
  fetchTV: {
    title: 'TV Series',
    url: `/discover/movie?api_key=${apiKey}&with_genres=10770&sort_by=popularity.desc`,
  },
};
