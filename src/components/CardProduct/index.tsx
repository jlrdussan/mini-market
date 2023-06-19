import { Link } from 'react-router-dom';

import CircleCount from 'components/CircleCount';

import styles from './styles.module.scss';

interface Props {
  image: string;
  id: number;
  quantity: number;
}

const CardProduct = ({ image, id, quantity }: Props) => {
  return (
    <Link className={styles.card} to={`/product/${id}`}>
      <CircleCount count={quantity} />
      <img className={styles.image} src={image} alt="img" />
    </Link>
  );
};

export default CardProduct;
