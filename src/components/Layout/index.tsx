import NavBar from 'components/NavBar';
import Home from 'pages/Home';

import styles from './styles.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Home />
    </div>
  );
}

export default Layout;
