import styles from './MovieDetailsSkeleton.module.scss';

export const MovieDetailsSkeleton = () => {
  return (
    <div className={styles.movieDetailsPage}>
      {/* Hero Section Skeleton */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.backButtonSkeleton}></div>
            
            <div className={styles.movieInfo}>
              <div className={styles.posterSkeleton}></div>
              
              <div className={styles.mainInfo}>
                <div className={styles.titleSkeleton}></div>
                <div className={styles.titleSkeletonSmall}></div>
                
                <div className={styles.meta}>
                  <div className={styles.ratingSkeleton}></div>
                  <div className={styles.votesSkeleton}></div>
                  <div className={styles.runtimeSkeleton}></div>
                </div>
                
                <div className={styles.taglineSkeleton}></div>
                
                <div className={styles.overview}>
                  <div className={styles.overviewTitleSkeleton}></div>
                  <div className={styles.overviewTextSkeleton}></div>
                  <div className={styles.overviewTextSkeleton}></div>
                  <div className={styles.overviewTextSkeletonShort}></div>
                </div>

                <div className={styles.genres}>
                  <div className={styles.genresTitleSkeleton}></div>
                  <div className={styles.genreList}>
                    <div className={styles.genreSkeleton}></div>
                    <div className={styles.genreSkeleton}></div>
                    <div className={styles.genreSkeleton}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className={styles.content}>
        <div className={styles.mainContent}>
          {/* Info Cards Skeleton */}
          <div className={styles.infoCards}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.infoCard}>
                <div className={styles.infoCardTitleSkeleton}></div>
                <div className={styles.infoCardTextSkeleton}></div>
              </div>
            ))}
          </div>

          {/* Production Section Skeleton */}
          <div className={styles.section}>
            <div className={styles.sectionTitleSkeleton}></div>
            <div className={styles.productionList}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={styles.productionCompany}>
                  <div className={styles.companyNameSkeleton}></div>
                  <div className={styles.companyCountrySkeleton}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 