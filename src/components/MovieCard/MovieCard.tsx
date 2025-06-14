import {useNavigate} from 'react-router';
import type { ViewMode } from '../../types/movie';
import styles from './MovieCard.module.scss';
import type {Movie} from '../../api/interface';
import {Image} from '../Image';

interface MovieCardProps {
  movie: Movie;
  viewMode: ViewMode;
}

export const MovieCard = ({ movie, viewMode }: MovieCardProps) => {
  const navigate = useNavigate();
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-poster.svg';

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div 
      className={`${styles.movieCard} ${styles[viewMode]}`}
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className={styles.posterContainer}>
        <Image
          src={posterUrl}
          alt={movie.title}
          className={styles.poster}
          loading="lazy"
        />
        <div className={styles.rating}>
          ⭐ {rating}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.year}>{releaseYear}</p>
        {viewMode === 'list' && (
          <p className={styles.overview}>{movie.overview}</p>
        )}
      </div>
    </div>
  );
}; 