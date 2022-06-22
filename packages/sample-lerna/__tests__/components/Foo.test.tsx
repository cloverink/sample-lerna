import { render, screen } from '@testing-library/react';
import { Foo } from 'components';

describe('Foo', () => {
  it('should renders Foo', () => {
    render(<Foo name="BAR" />);

    const heading = screen.getByText('BAR Button');

    expect(heading).toBeInTheDocument();
  });
});
