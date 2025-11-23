import { FavoriteItemList } from "../components/FavoriteItemList/FavoriteItemList";
import { RecommendItemListForYou } from "../../items/components/RecommendItemListForYou/RecommendItemListForYou";

export function MeFavorites() {
  return (
    <div>
      <FavoriteItemList />
      <RecommendItemListForYou />
    </div>
  );
}
