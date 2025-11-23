import { render, screen, fireEvent } from "@testing-library/react";
import { FavoriteItem } from "./FavoriteItem";
import { useFavorite } from "../../hooks/useFavorite";
import { useKeyupFunction } from "../../../shared/hooks/useKeyupFunction";

jest.mock("../../hooks/useFavorite");
jest.mock("../../../shared/hooks/useKeyupFunction");

describe("FavoriteItem", () => {
  const mockRemoveFromFavorite = jest.fn();
  const mockHandleEnterKey = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFavorite as jest.Mock).mockReturnValue({
      removeFromFavorite: mockRemoveFromFavorite,
    });
    (useKeyupFunction as jest.Mock).mockReturnValue({
      handleEnterKey: mockHandleEnterKey,
    });
  });

  const mockItem = {
    id: 1,
    name: "Test Item",
    price: 1000,
    image: {
      url: "https://example.com/image.jpg",
      alt: "Test Image",
    },
    variation: {
      size: "M",
      color: "Red",
    }
  };

  it("renders the item details correctly", () => {
    render(<FavoriteItem item={mockItem} />);

    expect(screen.getByAltText("Test Image")).toBeInTheDocument();
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText(/金額：/)).toHaveTextContent("金額：￥1,000");
  });

  it("calls removeFromFavorite when the remove button is clicked", () => {
    render(<FavoriteItem item={mockItem} />);

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);

    expect(mockRemoveFromFavorite).toHaveBeenCalledWith(1);
  });

  it("calls handleEnterKey when a key is pressed on the remove button", () => {
    render(<FavoriteItem item={mockItem} />);

    const removeButton = screen.getByRole("button");
    fireEvent.keyUp(removeButton, { key: "Enter" });

    expect(mockHandleEnterKey).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Function)
    );
  });
});
