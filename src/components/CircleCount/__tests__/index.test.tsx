import { render, screen } from '@testing-library/react';

import CircleCount from '..';

describe('CircleCount Component', () => {
  test('should render correctly', () => {
    const count = 4;
    render(<CircleCount count={count} />);
    const circleCountComponent = screen.getByTestId('custom-circle-count');
    expect(circleCountComponent).toBeInTheDocument();
    const label = screen.getByText(count);
    expect(label).toBeInTheDocument();
  });
});
