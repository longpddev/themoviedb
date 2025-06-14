import type { ViewMode } from '../../types/movie';
import { MovieCard } from '../MovieCard/MovieCard';
import { LoadingState } from '../LoadingState/LoadingState';
import { ErrorState } from '../ErrorState/ErrorState';
import styles from './MovieList.module.scss';
import type {Movie} from '../../api/interface';

interface MovieListProps {
  movies: Movie[];
  viewMode: ViewMode;
  isLoading: boolean;
  error: string | undefined;
  onMovieClick: (movie: Movie) => void;
  onRetry?: () => void;
}

export const MovieList = ({ 
  movies, 
  viewMode, 
  isLoading, 
  error, 
  onRetry 
}: MovieListProps) => {
  if (isLoading) {
    return <LoadingState viewMode={viewMode} />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  if (movies.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No movies found</p>
      </div>
    );
  }

  return (
    <div className={`${styles.movieList} ${styles[viewMode]}`}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}; 