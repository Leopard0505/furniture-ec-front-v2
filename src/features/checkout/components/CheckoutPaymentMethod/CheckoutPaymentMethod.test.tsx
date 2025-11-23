import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { CheckoutPaymentMethod } from "./CheckoutPaymentMethod";

describe("CheckoutPaymentMethod", () => {
  it("renders the section title and payment method options", () => {
    renderWithRouter(<CheckoutPaymentMethod />);

    // Check if the section title is rendered
    expect(screen.getByText("お支払い方法")).toBeInTheDocument();

    // Check if all payment method options are rendered
    expect(screen.getByLabelText("クレジットカード")).toBeInTheDocument();
    expect(screen.getByLabelText("コンビニ決済")).toBeInTheDocument();
    expect(screen.getByLabelText("銀行振込")).toBeInTheDocument();
    expect(screen.getByLabelText("代金引換")).toBeInTheDocument();
  });

  it("renders CreditCardRegistered component when 'クレジットカード' is selected", () => {
    renderWithRouter(<CheckoutPaymentMethod />);

    // Select the "クレジットカード" option
    fireEvent.click(screen.getByLabelText("クレジットカード"));

    // Check if the CreditCardRegistered component is rendered
    expect(screen.getByText("クレジットカードを登録する")).toBeInTheDocument();
  });

  it("does not render CreditCardRegistered component when other options are selected", () => {
    renderWithRouter(<CheckoutPaymentMethod />);

    // Select the "コンビニ決済" option
    fireEvent.click(screen.getByLabelText("コンビニ決済"));

    // Check that the CreditCardRegistered component is not rendered
    expect(screen.queryByText("クレジットカードを登録する")).not.toBeInTheDocument();
  });
});
