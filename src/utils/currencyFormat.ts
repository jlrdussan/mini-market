export const numberFormat = (value: number) => {
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency: 'COP',
    currencyDisplay: 'narrowSymbol',
  });
  return formatter.format(Math.abs(value));
};
