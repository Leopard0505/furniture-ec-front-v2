import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  const options = [
    { id: 'option-1', checked: false, label: 'Option 1' },
    { id: 'option-2', checked: false, label: 'Option 2' },
    { id: 'option-3', checked: false, label: 'Option 3' },
  ];

  it('renders all radio options with correct labels', () => {
    renderWithRouter(
      <RadioGroup
        name="test-group"
        options={options}
        onChangeSelectOption={() => {}}
      />
    );
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('selects the correct option when clicked', () => {
    const handleChange = jest.fn();
    renderWithRouter(
      <RadioGroup
        name="test-group"
        options={options}
        onChangeSelectOption={handleChange}
      />
    );

    const option2 = screen.getByLabelText('Option 2');
    fireEvent.click(option2);
    expect(option2).toBeChecked();
    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });

  it('only one option is selected at a time', () => {
    renderWithRouter(
      <RadioGroup
        name="test-group"
        options={options}
        onChangeSelectOption={() => {}}
      />
    );

    const option1 = screen.getByLabelText('Option 1');
    const option2 = screen.getByLabelText('Option 2');

    fireEvent.click(option1);
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();

    fireEvent.click(option2);
    expect(option2).toBeChecked();
    expect(option1).not.toBeChecked();
  });
});
