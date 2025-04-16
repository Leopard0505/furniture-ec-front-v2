import { useDispatch, useSelector } from "react-redux";
import { actions as favoriteActions, FavoriteItem, selectFavoriteItems } from "../stores/favorite/favoriteSlice";


export const useFavorite = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavoriteItems);

  const isFavorite = (itemId: number) => {
    return favoriteItems.some((item) => item.id === itemId);
  };

  const addToFavorite = (item: FavoriteItem) => {
    dispatch(favoriteActions.addItem(item));
  };

  const removeFromFavorite = (itemId: number) => {
    dispatch(favoriteActions.removeItem(itemId));
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
