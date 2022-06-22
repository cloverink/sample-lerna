import { render, screen } from '@testing-library/react';
import { Hello } from 'components';

describe('Hello', () => {
  it('should renders Hello', () => {
    render(<Hello name="world" />);

    const heading = screen.getByText('Hello, world');

    expect(heading).toBeInTheDocument();
  });
});
