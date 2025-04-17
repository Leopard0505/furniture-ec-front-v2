import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useFavorite } from "../../hooks/useFavorite";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";
import styles from "./FavoriteItemList.module.scss";



export function FavoriteItemList() {
  const { favoriteItems } = useFavorite();

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <SectionTitle text="お気に入り商品" />
        <div>
          {favoriteItems.length === 0 ? (
            <div>いいねした商品がありません</div>
          ) : (
            favoriteItems.map((item) => (
              <FavoriteItem key={item.id} item={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
