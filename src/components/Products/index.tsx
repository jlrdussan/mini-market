import CardProduct from 'components/CardProduct';
import { useSelector } from 'hooks/useSelector';
import { Product } from 'interfaces/products';

interface Props {
  products: Product[];
}

const Products = ({ products }: Props) => {
  const { getProductQuantity } = useSelector();

  return (
    <>
      {products.map(({ id, image }, index) => (
        <CardProduct
          key={index}
          id={id}
          quantity={getProductQuantity(id)}
          image={image}
        />
      ))}
    </>
  );
};

export default Products;
