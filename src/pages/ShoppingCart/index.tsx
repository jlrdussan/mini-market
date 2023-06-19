import CircleCount from 'components/CircleCount';
import Divider from 'components/Divider';
import WrapperPage from 'components/WrapperPage';
import { numberFormat } from 'utils/currencyFormat';
import { useSelector } from 'hooks/useSelector';
import WompiWidget from 'components/WompiWidget';

import styles from './styles.module.scss';

const ShoppingCart = () => {
  const { getTotal, getStates } = useSelector();

  return (
    <WrapperPage title="Shopping cart">
      {getStates.cart.map(({ id, image, price, quantity }) => (
        <div data-testid="custom-shopping-cart" key={id}>
          <div className={styles['product-cart']}>
            <CircleCount position="static" width="20px" count={quantity} />
            <img className={styles.image} src={image} alt="hjh" />
            <span className={styles.price}>
              {numberFormat(price * quantity)}
            </span>
          </div>
          <Divider />
        </div>
      ))}
      <p className={styles.total}>
        <span>TOTAL:</span> {numberFormat(getTotal())}
      </p>
      <WompiWidget amount={getTotal()} />
    </WrapperPage>
  );
};

export default ShoppingCart;
