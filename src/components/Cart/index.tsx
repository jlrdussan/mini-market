import { useNavigate } from 'react-router-dom';

import iconCart from 'assets/icons/shopping_cart.svg';
import { PATHS } from 'constants/paths';
import CircleCount from 'components/CircleCount';
import { numberFormat } from 'utils/currencyFormat';
import { useSelector } from 'hooks/useSelector';

import styles from './styles.module.scss';

function Cart() {
  const { getTotal, getStates } = useSelector();

  const navigate = useNavigate();
  return (
    <button
      className={styles['container-cart']}
      type="button"
      onClick={() => {
        navigate(PATHS.shoppingCart, { replace: true });
      }}
    >
      <img className={styles.cart} src={iconCart} alt="cart" />
      <CircleCount
        top="-6px"
        left="0"
        width="15px"
        count={getStates.cart.length}
      />
      <span className={styles.price}>{numberFormat(getTotal())}</span>
    </button>
  );
}

export default Cart;
