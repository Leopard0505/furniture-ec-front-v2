import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { CheckoutDeliveryDateTime } from "./CheckoutDeliveryDateTime";

describe("CheckoutDeliveryDateTime", () => {
  it("renders the section title and delivery date component", () => {
    renderWithRouter(<CheckoutDeliveryDateTime />);

    // Check if the section title is rendered
    expect(screen.getByText("配達希望日時")).toBeInTheDocument();

    // Check if the DeliveryDate component is rendered
    expect(screen.getByText("配達日を選択してください")).toBeInTheDocument();
  });

  it("renders the DeliveryTime component when a delivery date is selected", () => {
    renderWithRouter(<CheckoutDeliveryDateTime />);

    const button = screen.getByRole("button");
    fireEvent.click(button); // open the dropdown

    const options = screen.getAllByRole("option");
    fireEvent.click(options[0]); // selected today

    // Check if the DeliveryTime component is rendered
    expect(screen.getByText("配達時間を選択してください")).toBeInTheDocument();
  });
});
