import { Outlet } from 'react-router';
import {
  Header,
  TabNavigation
} from './components';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <TabNavigation />
      <Outlet />
    </div>
  );
}

export default App;
