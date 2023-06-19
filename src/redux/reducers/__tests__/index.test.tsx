import { ActionTypes } from 'redux/actions/shoppingCartAction';

import { shoppingReducer } from '../shoppingCartReducer';

const product = {
  id: 1,
  title: '',
  price: 2,
  description: '',
  image: '',
  quantity: 1,
};
const products = [
  {
    id: 1,
    title: '',
    price: 2,
    description: '',
    image: '',
  },
];

describe('Shopping cart reducer', () => {
  test('ADD_TO_CART', () => {
    const { cart } = shoppingReducer(
      {
        cart: [],
        products,
      },
      { type: ActionTypes.ADD_TO_CART, payload: 1 }
    );
    expect(cart).toEqual([product]);
  });

  test('REMOVE_FROM_CART', () => {
    const { cart } = shoppingReducer(
      {
        cart: [],
        products,
      },
      { type: ActionTypes.REMOVE_FROM_CART, payload: 1 }
    );
    expect(cart).toEqual([]);
  });

  test('REMOVE_FROM_CART quantity < 1', () => {
    product.quantity = 2;
    const { cart } = shoppingReducer(
      {
        cart: [product],
        products,
      },
      { type: ActionTypes.REMOVE_FROM_CART, payload: 1 }
    );
    product.quantity = 1;
    expect(cart).toEqual([product]);
  });

  test('REMOVE_FROM_CART quantity = 1', () => {
    product.quantity = 1;
    const { cart } = shoppingReducer(
      {
        cart: [product],
        products,
      },
      { type: ActionTypes.REMOVE_FROM_CART, payload: 1 }
    );

    expect(cart).toEqual([]);
  });

  test('ADD_PRODUCTS', () => {
    const state = shoppingReducer(
      {
        cart: [],
        products: [],
      },
      { type: ActionTypes.ADD_PRODUCTS, payload: products }
    );
    expect(state.products).toEqual(products);
  });
});
