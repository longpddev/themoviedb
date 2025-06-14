import type { ViewMode } from '../../types/movie';
import styles from './LoadingState.module.scss';

interface LoadingStateProps {
  viewMode: ViewMode;
}

export const LoadingState = ({ viewMode }: LoadingStateProps) => {
  const skeletonCount = viewMode === 'grid' ? 12 : 6;

  return (
    <div className={`${styles.loadingState} ${styles[viewMode]}`}>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={index} className={`${styles.skeleton} ${styles[viewMode]}`}>
          <div className={styles.skeletonPoster}></div>
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonYear}></div>
            {viewMode === 'list' && (
              <>
                <div className={styles.skeletonOverview}></div>
                <div className={styles.skeletonOverview}></div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 