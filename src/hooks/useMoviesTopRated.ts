import {API_ENDPOINTS} from "../api/endpoints";
import { useApiQuery } from "./useApiQuery";
import type {Movie} from "../api/interface";

interface MovieTopRatedParams {
  language?: string;
  page: number;
  region?: string;
}

interface MovieTopRatedResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export const useMoviesTopRated = (params: MovieTopRatedParams) => {
  return useApiQuery<MovieTopRatedResponse>(API_ENDPOINTS.MOVIES.TOP_RATED, params);
};