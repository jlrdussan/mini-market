import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'redux/store';

import ShoppingCart from '..';

const productCart = [
  {
    id: 1,
    title: '',
    price: 4,
    description: '',
    image: '',
    quantity: 1,
  },
];

jest.mock('hooks/useSelector', () => {
  return {
    useSelector: () => {
      return {
        getTotal: () => 1,
        getStates: {
          cart: productCart,
        },
      };
    },
  };
});

describe('ShoppingCart page', () => {
  test('Render all elements', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ShoppingCart />
        </BrowserRouter>
      </Provider>
    );
    const cardsProduct = screen.getAllByTestId('custom-shopping-cart');

    expect(cardsProduct.length).toBe(1);
  });
});
