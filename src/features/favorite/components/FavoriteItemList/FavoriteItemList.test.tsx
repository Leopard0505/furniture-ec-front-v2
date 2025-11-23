import { render, screen } from "@testing-library/react";
import { FavoriteItemList } from "./FavoriteItemList";
import { useFavorite } from "../../hooks/useFavorite";

jest.mock("../../hooks/useFavorite");

const mockedUseFavorite = useFavorite as jest.Mock;

describe("FavoriteItemList", () => {
  it("renders a message when there are no favorite items", () => {
    mockedUseFavorite.mockReturnValue({ favoriteItems: [] });

    render(<FavoriteItemList />);

    expect(screen.getByText("いいねした商品がありません")).toBeInTheDocument();
  });

  it("renders a list of favorite items", () => {
    const favoriteItems = [
      { id: 1, name: "Item 1", price: 100, image: { url: "image1.jpg", alt: "Item 1" } },
      { id: 2, name: "Item 2", price: 200, image: { url: "image2.jpg", alt: "Item 2" } },
    ];
    mockedUseFavorite.mockReturnValue({ favoriteItems });

    render(<FavoriteItemList />);

    favoriteItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
