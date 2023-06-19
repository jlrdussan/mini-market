import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Divider from 'components/Divider';
import { getProduct } from 'services/products.services';
import CircleCount from 'components/CircleCount';
import { addToCart, removeToCart } from 'redux/actions/shoppingCartAction';
import WrapperPage from 'components/WrapperPage';
import { Product as IProduct } from 'interfaces/products';
import { numberFormat } from 'utils/currencyFormat';
import { useSelector } from 'hooks/useSelector';

import styles from './styles.module.scss';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const dispatch = useDispatch();
  const idProduct = parseInt(id!);
  const { getProductQuantity } = useSelector();

  useEffect(() => {
    (async () => {
      try {
        const res = await getProduct(idProduct);
        setProduct(res!);
      } catch {}
    })();
  }, [idProduct]);

  return (
    <WrapperPage title="Product">
      {product && (
        <div data-testid="custom-product" className={styles.container}>
          <CircleCount
            left="0"
            top="10px"
            width="40px"
            count={getProductQuantity(idProduct)}
          />
          <img src={product.image} alt="img" width={200} height={250} />
          <div className={styles['product-detail']}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>{numberFormat(product.price)}</p>
            <div className={styles['container-btn']}>
              <button
                className={styles['btn-delete']}
                onClick={() => dispatch(removeToCart(idProduct))}
              >
                -
              </button>
              <button
                className={styles['btn-add']}
                onClick={() => dispatch(addToCart(idProduct))}
              >
                +
              </button>
            </div>
          </div>
          <Divider />
          <span className={styles.description}>{product.description}</span>
          <Divider />
        </div>
      )}
    </WrapperPage>
  );
};

export default Product;
