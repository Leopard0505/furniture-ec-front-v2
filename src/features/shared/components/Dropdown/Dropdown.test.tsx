import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  it('renders the placeholder text when no option is selected', () => {
    renderWithRouter(<Dropdown options={options} onChange={jest.fn()} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('opens the dropdown menu when clicked', () => {
    renderWithRouter(<Dropdown options={options} onChange={jest.fn()} />);
    fireEvent.click(screen.getByText('選択してください'));
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('closes the dropdown menu when an option is selected', () => {
    renderWithRouter(<Dropdown options={options} onChange={jest.fn()} />);
    fireEvent.click(screen.getByText('選択してください'));
    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('calls onChange with the selected value', () => {
    const handleChange = jest.fn();
    renderWithRouter(<Dropdown options={options} onChange={handleChange} />);
    fireEvent.click(screen.getByText('選択してください'));
    fireEvent.click(screen.getByText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('displays the selected option label after selection', () => {
    renderWithRouter(<Dropdown options={options} onChange={jest.fn()} />);
    fireEvent.click(screen.getByText('選択してください'));
    fireEvent.click(screen.getByText('Option 3'));
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('closes the dropdown menu when the escape key is pressed', () => {
    renderWithRouter(<Dropdown options={options} onChange={jest.fn()} />);
    fireEvent.click(screen.getByText('選択してください'));
    fireEvent.keyDown(screen.getByRole('list'), { key: 'Escape' });
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
