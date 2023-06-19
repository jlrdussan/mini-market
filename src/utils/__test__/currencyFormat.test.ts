import { numberFormat } from 'utils/currencyFormat';

describe('Currency formatter', () => {
  test('Correct COP currency formatter', () => {
    const result = numberFormat(65.5);
    expect(result).toBe('$65,5');
  });
});
