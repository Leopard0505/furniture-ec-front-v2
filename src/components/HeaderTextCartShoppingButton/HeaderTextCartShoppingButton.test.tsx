import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { HeaderTextCartShoppingButton } from "./HeaderTextCartShoppingButton";
import { useCart } from "../../hooks/useCart";

jest.mock("../../hooks/useCart");

const mockedUseCart = useCart as jest.MockedFunction<typeof useCart>;

describe("HeaderTextCartShoppingButton", () => {
  it("displays the correct cart item count", () => {
    mockedUseCart.mockReturnValue({ cartItems: [], cartItemCount: 5, addToCart: jest.fn(), removeFromCart: jest.fn() });

    renderWithRouter(<HeaderTextCartShoppingButton />);

    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
