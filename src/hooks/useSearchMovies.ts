import {API_ENDPOINTS} from "../api/endpoints";
import type {Movie} from "../api/interface";
import {useApiQuery} from "./useApiQuery";

export interface SearchMoviesParams {
  query?: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string
  page: number
  region?: string
  year?: string
}

export interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export function useSearchMovies(params: SearchMoviesParams) {
  return useApiQuery<SearchMoviesResponse>(API_ENDPOINTS.SEARCH.MOVIE, params)
}
