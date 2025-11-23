import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../test/utils/renderWithRouter';
import { SectionTitle } from './SectionTitle';

describe('SectionTitle', () => {
  it('renders the text correctly', () => {
    renderWithRouter(<SectionTitle text="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
