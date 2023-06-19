import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getProducts } from 'redux/actions/shoppingCartAction';
import WrapperPage from 'components/WrapperPage';
import Products from 'components/Products';
import { PATHS } from 'constants/paths';
import { useSelector } from 'hooks/useSelector';

import styles from './styles.module.scss';

const Home = () => {
  const { getStates } = useSelector();

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <WrapperPage title="Store">
        <div className={styles['section-products']}>
          <Products products={getStates.products} />
        </div>
      </WrapperPage>
      <div className={styles['section-product']}>
        <Outlet />
        {location.pathname === PATHS.home && (
          <div className={styles.home}>
            <WrapperPage>
              <span>Please Chose a product on the left</span>
            </WrapperPage>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
