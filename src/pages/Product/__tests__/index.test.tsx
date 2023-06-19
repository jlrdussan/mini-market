import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import store from 'redux/store';
import * as ProductsServices from 'services/products.services';

import Product from '..';

const product = {
  id: 1,
  title: '',
  price: 4,
  description: '',
  image: '',
  quantity: 1,
};

const spyGetAccounts = jest
  .spyOn(ProductsServices, 'getProduct')
  .mockImplementation(() => Promise.resolve(product));

describe('Product page', () => {
  test('should getProduct be called', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Product />
        </BrowserRouter>
      </Provider>
    );

    expect(spyGetAccounts).toBeCalledTimes(1);
  });
});
