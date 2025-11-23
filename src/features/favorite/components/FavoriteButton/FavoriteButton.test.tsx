import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { FavoriteButton } from "./FavoriteButton";
import { useFavorite } from "../../hooks/useFavorite";

jest.mock("../../hooks/useFavorite");

describe("FavoriteButton", () => {
  const mockToggleFavorite = jest.fn();
  const mockIsFavorite = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFavorite as jest.Mock).mockReturnValue({
      isFavorite: mockIsFavorite,
      toggleFavorite: mockToggleFavorite,
    });
  });

  const item = {
    id: 1,
    name: "Item 1",
    price: 100,
    image: {
      url: "image.jpg",
      alt: "Item 1"
    },
    variation: {
      size: "M",
      color: "red",
    },
  }

  it("renders the button with a filled heart icon when the item is a favorite", () => {
    mockIsFavorite.mockReturnValue(true);

    renderWithRouter(
      <FavoriteButton
        item={item}
      />
    );

    expect(screen.queryByRole("button", { name: "favorite" })).toBeInTheDocument();
  });

  it("renders the button with an outlined heart icon when the item is not a favorite", () => {
    mockIsFavorite.mockReturnValue(false);

    renderWithRouter(
      <FavoriteButton
        item={item}
      />
    );

    expect(screen.getByRole("button", { name: "unfavorite" })).toBeInTheDocument();
  });

  it("calls toggleFavorite with the correct item data when clicked", () => {
    mockIsFavorite.mockReturnValue(false);

    renderWithRouter(
      <FavoriteButton
        item={item}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "unfavorite" }));

    expect(mockToggleFavorite).toHaveBeenCalledWith({
      id: 1,
      name: "Item 1",
      price: 100,
      image:{
        url: "image.jpg",
        alt: "Item 1"
      },
      variation: {
        size: "M",
        color: "red"
      },
    });
  });
});
