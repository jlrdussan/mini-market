import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { PATHS } from 'constants/paths';
import store from 'redux/store';

import Cart from '..';

const history = createMemoryHistory();
const view = (
  <Provider store={store}>
    <Router location={history.location} navigator={history}>
      <Cart />
    </Router>
  </Provider>
);

describe('Cart Component', () => {
  test('should render correctly', () => {
    render(view);
    const cartComponent = screen.getByRole('button');
    expect(cartComponent).toBeInTheDocument();
  });

  test('should redirects to shoppingCart page', async () => {
    history.push('/');
    render(view);
    const cartComponent = screen.getByRole('button');
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    await waitFor(() => userEvent.click(cartComponent));

    expect(history.location.pathname).toBe(PATHS.shoppingCart);
  });
});
