import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders the radio button with the correct label', () => {
    renderWithRouter(
      <Radio
        name="test-radio"
        id="radio-1"
        checked={false}
        onChange={() => {}}
      >
        Test Label
      </Radio>
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('sets the radio button as checked when the checked prop is true', () => {
    renderWithRouter(
      <Radio
        name="test-radio"
        id="radio-1"
        checked={true}
        onChange={() => {}}
      >
        Checked Radio
      </Radio>
    );
    const input = screen.getByRole('radio');
    expect(input).toBeChecked();
  });

  it('sets the radio button as unchecked when the checked prop is false', () => {
    renderWithRouter(
      <Radio
        name="test-radio"
        id="radio-1"
        checked={false}
        onChange={() => {}}
      >
        Unchecked Radio
      </Radio>
    );
    const input = screen.getByRole('radio');
    expect(input).not.toBeChecked();
  });

  it('calls the onChange handler with the correct id when clicked', () => {
    const handleChange = jest.fn();
    renderWithRouter(
      <Radio
        name="test-radio"
        id="radio-1"
        checked={false}
        onChange={handleChange}
      >
        Clickable Radio
      </Radio>
    );
    const input = screen.getByRole('radio');
    fireEvent.click(input);
    expect(handleChange).toHaveBeenCalledWith('radio-1');
  });
});
