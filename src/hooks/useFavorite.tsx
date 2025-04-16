import { useDispatch, useSelector } from "react-redux";
import { actions as favoriteActions, FavoriteItem, selectFavoriteItems } from "../stores/favorite/favoriteSlice";


export const useFavorite = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavoriteItems);

  const addToFavorite = (item: FavoriteItem) => {
    dispatch(favoriteActions.addItem(item));
  };

  const removeFromFavorite = (itemId: number) => {
    dispatch(favoriteActions.removeItem(itemId));
  };

  return {
    favoriteItems,
    addToFavorite,
    removeFromFavorite,
  };
}
