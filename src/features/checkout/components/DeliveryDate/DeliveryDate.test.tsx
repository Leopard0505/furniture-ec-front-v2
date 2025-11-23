import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { DeliveryDate } from "./DeliveryDate";

describe("DeliveryDate", () => {
  it("renders the dropdown with the correct options", () => {
    renderWithRouter(<DeliveryDate onChange={jest.fn()} />);
    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button); // Open the dropdown
    expect(dropdown).toHaveAttribute("aria-expanded", "true");

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(7); // MAX_DAYS
    options.forEach((option, index) => {
      const date = new Date();
      date.setDate(date.getDate() + 1 + index);
      const formattedDate = date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      expect(option).toHaveTextContent(formattedDate);
    });
  });

  it("calls onChange with the correct option when an option is selected", () => {
    const mockOnChange = jest.fn();
    renderWithRouter(<DeliveryDate onChange={mockOnChange} />);

    const button = screen.getByRole("button");
    fireEvent.click(button); // Open the dropdown

    const options = screen.getAllByRole("option");

    fireEvent.click(options[2]); // Select the 3rd option

    expect(mockOnChange).toHaveBeenCalled();
  });
});
