import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useFavorite } from "../../hooks/useFavorite";
import { FavoriteItem } from "../../store/favorite/favoriteSlice";
import { Button } from "../../../shared/components/Button/Button";
import styles from "./FavoriteButton.module.scss";

interface Props {
  readonly item: FavoriteItem;
}

export function FavoriteButton({ item }: Props) {
  const { isFavorite, toggleFavorite } = useFavorite();

  return (
    <Button
      className={styles.favorite}
      white
      onClick={() => toggleFavorite({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        variation: {
          size: "M",
          color: "red",
        },
      })}>
      {isFavorite(item.id) ? (
        <FaHeart role="button" aria-label="favorite" className={styles.icon} size={28} />
      ) : (
        <FaRegHeart role="button" aria-label="unfavorite" className={styles.icon} size={28} />
      )}
    </Button>
  );
}
