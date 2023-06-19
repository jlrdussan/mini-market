import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/icons/logo.svg';
import { PATHS } from 'constants/paths';

import Cart from '../Cart';
import styles from './styles.module.scss';

const NavBar = () => {
  return (
    <div className={styles['nav-bar']}>
      <Link to={PATHS.home}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.container}>
        <Cart />
      </div>
    </div>
  );
};

export default NavBar;
