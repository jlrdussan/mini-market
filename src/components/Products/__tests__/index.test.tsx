import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from 'redux/store';
import { PRODUCTS } from 'constants/products';

import Products from '..';

describe('Products component', () => {
  test('Render all elements', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Products products={[PRODUCTS]} />
        </BrowserRouter>
      </Provider>
    );
    const cardsProduct = screen.getAllByRole('link');
    expect(cardsProduct.length).toBe(1);
  });
});
