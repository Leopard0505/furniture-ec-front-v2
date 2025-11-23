import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { CheckoutCouponAvailable } from "./CheckoutCouponAvailable";

describe("CheckoutCouponAvailable", () => {
  it("renders the section title and available coupons", () => {
    renderWithRouter(<CheckoutCouponAvailable />);

    // Check if the section title is rendered
    expect(screen.getByText("ご利用可能なクーポン")).toBeInTheDocument();

    // Check if the available coupons are rendered
    expect(screen.getByText("利用可能クーポン 200円")).toBeInTheDocument();
    expect(screen.getByText("利用可能クーポン 1,000円")).toBeInTheDocument();
  });
});
