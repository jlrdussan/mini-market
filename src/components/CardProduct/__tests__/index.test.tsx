import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import CardProduct from '..';

const img = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
const view = (
  <BrowserRouter>
    <CardProduct image={img} id={0} quantity={0} />
  </BrowserRouter>
);

describe('CardProduct Component', () => {
  test('should render correctly', () => {
    render(view);
    const cardProductComponent = screen.getByRole('link');
    expect(cardProductComponent).toBeInTheDocument();
  });

  test('should render an image', () => {
    render(view);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  test('should redirects to product page', async () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router location={history.location} navigator={history}>
        <CardProduct image={img} id={1} quantity={0} />
      </Router>
    );
    const cardProductComponent = screen.getByRole('link');
    // eslint-disable-next-line testing-library/no-wait-for-side-effects
    await waitFor(() => userEvent.click(cardProductComponent));

    expect(history.location.pathname).toBe('/product/1');
  });
});
