import { Product } from 'interfaces/products';

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ADD_PRODUCTS = 'ADD_PRODUCTS',
  GET_PRODUCTS = 'GET_PRODUCTS',
}

interface AddToCart {
  type: ActionTypes.ADD_TO_CART;
  payload: number;
}

interface RemoveFromCart {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: number;
}

interface AddProducts {
  type: ActionTypes.ADD_PRODUCTS;
  payload: Product[];
}

// interface GetProducts {
//   type: ActionTypes.GET_PRODUCTS;
// }

export type ShoppingCartAction = AddToCart | RemoveFromCart | AddProducts;

export function addToCart(productId: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productId,
  };
}

export function removeToCart(productId: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  };
}

export function addProducts(products: Product[]) {
  return {
    type: ActionTypes.ADD_PRODUCTS,
    payload: products,
  };
}

export function getProducts() {
  return {
    type: ActionTypes.GET_PRODUCTS,
  };
}
