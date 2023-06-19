import { Product } from 'interfaces/products';

import { ActionTypes, ShoppingCartAction } from '../actions/shoppingCartAction';

interface ProductCart extends Product {
  quantity: number;
}

interface ShoppingCartState {
  cart: ProductCart[];
  products: Product[];
}

export const shoppingReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: ShoppingCartState = { cart: [], products: [] },
  action: ShoppingCartAction
): ShoppingCartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const productNew = state.products.find(
        (product) => product.id === action.payload
      );

      const productCart = state.cart.find((item) => item.id === action.payload);

      if (productCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === productNew?.id
              ? { ...productCart, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...productNew!, quantity: 1 }],
        };
      }
    }
    case ActionTypes.REMOVE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete && itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case ActionTypes.ADD_PRODUCTS: {
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    }
    default:
      return state;
  }
};
