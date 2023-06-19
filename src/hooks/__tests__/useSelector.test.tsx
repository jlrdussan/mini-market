import { renderHook } from '@testing-library/react';

import { useSelector as P } from '../useSelector';

const state = {
  product: [
    {
      id: 1,
      title: '',
      price: 4000,
      description: '',
      image: '',
    },
  ],
  cart: [
    { id: 1, title: '', price: 4000, description: '', image: '', quantity: 1 },
  ],
};

jest.mock('redux/store', () => {
  return {
    ...jest.requireActual('redux/store'),
    useCustomSelector: () => {
      return state;
    },
  };
});

describe('useSelector Hook', () => {
  test('useSelector returns the state', () => {
    const { result } = renderHook(() => P());
    const { getProductQuantity, getStates, getTotal } = result.current;
    expect(getStates).toEqual(state);
    expect(getProductQuantity(1)).toEqual(1);
    expect(getTotal()).toEqual(4000);
  });
});
