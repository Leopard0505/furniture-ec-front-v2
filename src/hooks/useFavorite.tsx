import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteItems } from "../stores/favorite/favoriteSlice";
import { FavoriteItem } from "../interfaces/favorite";
import { addItem, removeItem } from "../stores/favorite/favoriteActions";


export const useFavorite = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavoriteItems);

  const isFavorite = (itemId: number) => {
    return favoriteItems.some((item) => item.id === itemId);
  };

  const addToFavorite = (item: FavoriteItem) => {
    dispatch(addItem(item));
  };

  const removeFromFavorite = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      removeFromFavorite(item.id);
    } else {
      addToFavorite(item);
    }
  };

  return {
    favoriteItems,
    isFavorite,
    addToFavorite,
    removeFromFavorite,
    toggleFavorite,
  };
}
