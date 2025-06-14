export const API_ENDPOINTS = {
  MOVIES: {
    NOW_PLAYING: "/movie/now_playing",
    TOP_RATED: "/movie/top_rated",
    DETAILS: (id: string) => `/movie/${id}`,
  },
  SEARCH: {
    MOVIE: "/search/movie"
  }
};