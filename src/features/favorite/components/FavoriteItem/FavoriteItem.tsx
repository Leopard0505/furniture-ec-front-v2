import { KeyboardEvent } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import styles from './FavoriteItem.module.scss';
import type { FavoriteItem } from '../../store/favorite/favoriteSlice';
import { useKeyupFunction } from "../../../shared/hooks/useKeyupFunction";
import { formattedPrice } from "../../../shared/utils/price";
import { useFavorite } from "../../hooks/useFavorite";

interface Props {
  item: FavoriteItem;
}

export function FavoriteItem({ item }: Props) {
  const { removeFromFavorite } = useFavorite();
  const { handleEnterKey } = useKeyupFunction();

  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <img className={styles.item__image} src={item.image.url} alt={item.image.alt} />
      </div>
      <div className={styles.item__info}>
        <div className={styles.item__name}>{item.name}</div>
        <div className={styles.item__price}>金額：{formattedPrice(item.price)}</div>
      </div>
      <div className={styles.item__actions}>
        <FaCircleXmark
          className={styles.item__remove__button}
          size={24}
          role="button"
          tabIndex={0}
          onClick={() => removeFromFavorite(item.id)}
          onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () => removeFromFavorite(item.id))}
        />
      </div>
    </div>
  );
}
