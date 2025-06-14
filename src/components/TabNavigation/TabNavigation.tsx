import {NavLink} from 'react-router';
import styles from './TabNavigation.module.scss';


export const TabNavigation = () => {
  return (
    <nav className={styles.tabNav}>
      <div className={styles.container}>
        <NavLink className={({isActive}) =>styles.tab + ' ' + (isActive ? styles.active : '')} to="/now-playing">Now Playing</NavLink>
        <NavLink className={({isActive}) =>styles.tab + ' ' + (isActive ? styles.active : '')} to="/top-rated">Top Rated</NavLink>
      </div>
    </nav>
  );
}; 