import { useParams } from 'react-router';
import { MovieDetails } from '../components';

import type { MovieDetailResponse } from '../api/interface';
import {useApiQuery} from '../hooks/useApiQuery';
import {API_ENDPOINTS} from '../api/endpoints';

export function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const {data: movie, isLoading} = useApiQuery<MovieDetailResponse>(API_ENDPOINTS.MOVIES.DETAILS(id ?? ''))

  if (!movie && !isLoading) {
    return <div>Movie not found</div>;
  }

  return (
    <MovieDetails
      movieDetail={movie || null}
      isLoading={isLoading}
    />
  );
} 