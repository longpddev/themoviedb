import type { ViewMode } from '../../types/movie';
import styles from './ViewToggle.module.scss';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className={styles.viewToggle}>
      <button
        className={`${styles.toggleButton} ${viewMode === 'list' ? styles.active : ''}`}
        onClick={() => onViewModeChange('list')}
        aria-label="List view"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      </button>
      <button
        className={`${styles.toggleButton} ${viewMode === 'grid' ? styles.active : ''}`}
        onClick={() => onViewModeChange('grid')}
        aria-label="Grid view"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
        </svg>
      </button>
    </div>
  );
}; 