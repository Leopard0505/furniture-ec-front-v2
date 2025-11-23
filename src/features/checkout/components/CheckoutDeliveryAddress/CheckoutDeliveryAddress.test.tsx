import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { CheckoutDeliveryAddress } from "./CheckoutDeliveryAddress";

// Portalコンポーネントのモック
jest.mock('../../../shared/components/Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("CheckoutDeliveryAddress", () => {
  it("renders the section title and delivery address panel", () => {
    renderWithRouter(<CheckoutDeliveryAddress />);

    // Check if the section title is rendered
    expect(screen.getByText("お届け先")).toBeInTheDocument();

    // Check if the delivery address panel is rendered
    expect(screen.getByText("変更する")).toBeInTheDocument();
  });

  it("opens and closes the modal on button click", () => {
    renderWithRouter(<CheckoutDeliveryAddress />);

    // Open the modal
    fireEvent.click(screen.getByText("変更する"));
    expect(screen.getByRole("modal")).toBeInTheDocument();

    // Close the modal
    fireEvent.click(screen.getByRole("close-button"));
    expect(screen.queryByRole("modal")).not.toBeInTheDocument();
  });
});
