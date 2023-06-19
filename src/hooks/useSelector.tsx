import { useCustomSelector } from 'redux/store';

export const useSelector = () => {
  const states = useCustomSelector((state) => state.shoppingReducer);

  const getProductQuantity = (id: number) => {
    const product = states.cart.find((prod) => prod.id === id);
    return product?.quantity || 0;
  };

  const getTotal = () => {
    let total = 0;
    states.cart.forEach((item) => {
      total = item.price * item.quantity;
    });
    return total;
  };

  const getStates = states;

  return { getProductQuantity, getTotal, getStates };
};
