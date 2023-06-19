import { Product } from 'interfaces/products';
import { getFromApi } from 'utils/api';

export const getProducts = async (): Promise<Product[]> => {
  const res = await getFromApi({
    url: '/products',
  });
  return res.data;
};

export const getProduct = async (id: number | string): Promise<Product> => {
  const res = await getFromApi({
    url: `/products/${id}`,
  });
  return res.data;
};
