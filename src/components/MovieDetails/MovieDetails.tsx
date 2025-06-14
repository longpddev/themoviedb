import {useNavigate} from 'react-router';
import type { MovieDetailResponse } from '../../api/interface';
import styles from './MovieDetails.module.scss';
import { MovieDetailsSkeleton } from './MovieDetailsSkeleton';
import {Image} from '../Image';

interface MovieDetailsProps {
  movieDetail: MovieDetailResponse | null;
  isLoading?: boolean;
}

export const MovieDetails = ({ movieDetail: movie, isLoading = false }: MovieDetailsProps) => {
  const navigate = useNavigate();
  
  if (isLoading) {
    return <MovieDetailsSkeleton />;
  }
  
  if (!movie) return null;

  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-poster.svg';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : posterUrl;

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  
  // Format budget and revenue
  const formatCurrency = (amount: number) => {
    if (amount === 0) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Format runtime
  const formatRuntime = (minutes: number) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  // Get genres as keywords (since we don't have actual keywords in the API response)
  const genreKeywords = movie.genres?.map(genre => genre.name.toLowerCase()) || [];

  return (
    <div className={styles.movieDetailsPage}>
      {/* Hero Section */}
      <div className={styles.hero} style={{ backgroundImage: `url(${backdropUrl})` }}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
              ← Back
            </button>
            
            <div className={styles.movieInfo}>
              <div className={styles.posterContainer}>
                <Image
                  src={posterUrl}
                  alt={movie.title}
                  className={styles.poster}
                />
              </div>
              
              <div className={styles.mainInfo}>
                <h1 className={styles.title}>
                  {movie.title} <span className={styles.year}>({releaseYear})</span>
                </h1>
                
                <div className={styles.meta}>
                  <div className={styles.rating}>
                    <span className={styles.ratingScore}>{rating}</span>
                    <span className={styles.ratingLabel}>User Score</span>
                  </div>
                  <span className={styles.votes}>({movie.vote_count} votes)</span>
                  {movie.runtime && (
                    <span className={styles.runtime}>{formatRuntime(movie.runtime)}</span>
                  )}
                </div>
                
                {movie.tagline && (
                  <div className={styles.tagline}>
                    {movie.tagline}
                  </div>
                )}
                
                <div className={styles.overview}>
                  <h3>Overview</h3>
                  <p>{movie.overview || 'No overview available.'}</p>
                </div>

                {movie.genres && movie.genres.length > 0 && (
                  <div className={styles.genres}>
                    <h3>Genres</h3>
                    <div className={styles.genreList}>
                      {movie.genres.map((genre) => (
                        <span key={genre.id} className={styles.genre}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className={styles.content}>
        <div className={styles.mainContent}>
          {/* Movie Info Cards */}
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <h3>Status</h3>
              <p>{movie.status || 'Unknown'}</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Original Language</h3>
              <p>{movie.original_language?.toUpperCase() || 'N/A'}</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Budget</h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Revenue</h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>

            {movie.runtime && (
              <div className={styles.infoCard}>
                <h3>Runtime</h3>
                <p>{formatRuntime(movie.runtime)}</p>
              </div>
            )}

            {movie.homepage && (
              <div className={styles.infoCard}>
                <h3>Homepage</h3>
                <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className={styles.homepage}>
                  Visit Website
                </a>
              </div>
            )}
            
            {genreKeywords.length > 0 && (
              <div className={styles.infoCard}>
                <h3>Genres</h3>
                <div className={styles.keywords}>
                  {genreKeywords.map((keyword, index) => (
                    <span key={index} className={styles.keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.production_countries && movie.production_countries.length > 0 && (
              <div className={styles.infoCard}>
                <h3>Production Countries</h3>
                <div className={styles.countries}>
                  {movie.production_countries.map((country, index) => (
                    <span key={index} className={styles.country}>
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Production Info */}
          {movie.production_companies && movie.production_companies.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Production</h2>
              <div className={styles.productionList}>
                {movie.production_companies.map((company) => (
                  <div key={company.id} className={styles.productionCompany}>
                    <div className={styles.companyName}>{company.name}</div>
                    <div className={styles.companyCountry}>{company.origin_country}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}; 