import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { InputField } from './InputField';

describe('InputField', () => {
  it('renders the input field with a label', () => {
    renderWithRouter(<InputField label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies the provided className', () => {
    renderWithRouter(<InputField className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('renders error messages when errors are provided', () => {
    const errors = ['Error 1', 'Error 2'];
    renderWithRouter(<InputField errors={errors} />);
    errors.forEach((error) => {
      expect(screen.getByText(error)).toBeInTheDocument();
    });
  });

  it('handles input value changes', () => {
    const handleChange = jest.fn();
    renderWithRouter(<InputField onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not render a label if none is provided', () => {
    renderWithRouter(<InputField />);
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
  });
});
