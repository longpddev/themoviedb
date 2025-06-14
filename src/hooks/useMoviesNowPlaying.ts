import {API_ENDPOINTS} from "../api/endpoints";
import type {Movie} from "../api/interface";
import { useApiQuery } from "./useApiQuery";

interface MovieNowPlayingParams {
  language?: string;
  page: number;
  region?: string;
}

interface MovieNowPlayingResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export const useMoviesNowPlaying = (params: MovieNowPlayingParams) => {
  return useApiQuery<MovieNowPlayingResponse>(API_ENDPOINTS.MOVIES.NOW_PLAYING, params);
};