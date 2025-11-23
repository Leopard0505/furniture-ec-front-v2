import { render, screen } from '@testing-library/react';
import { CategoryLabel } from './CategoryLabel';

describe('CategoryLabel Component', () => {
  it('renders the category label with the correct text', () => {
    render(<CategoryLabel text="Furniture" />);

    expect(screen.getByText('Furniture')).toBeInTheDocument();
  });
});
