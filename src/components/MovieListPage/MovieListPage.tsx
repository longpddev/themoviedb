import { useState } from 'react';
import type { ViewMode } from '../../types/movie';
import {
  ViewToggle,
  MovieList,
  Pagination,
} from '../';
import styles from './MovieListPage.module.scss';
import type {Movie} from '../../api/interface';

interface MovieListPageProps {
  page: number;
  isLoading: boolean;
  error: string | undefined;
  movies: Movie[];
  sectionTitle: string;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function MovieListPage({ page, isLoading, error, movies, sectionTitle, totalPages, onPageChange }: MovieListPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className={styles.moviesPage}>
      <div className={styles.controls}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {sectionTitle}
          </h2>
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
      </div>

      <main className={styles.main}>
        <MovieList
          movies={movies}
          viewMode={viewMode}
          isLoading={isLoading}
          error={error}
          onMovieClick={() => {}}
        />
        
        {totalPages > 1 && (
          <Pagination
            currentPage={Number(page)}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </main>
    </div>
  );
} 