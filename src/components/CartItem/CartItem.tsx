import { FaCircleXmark } from "react-icons/fa6";
import styles from './CartItem.module.scss';
import type { CartItem } from '../../stores/cart/cartSlice';
import { useCart } from "../../hooks/useCart";
import { KeyboardEvent } from "react";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";

interface Props {
  item: CartItem;
}

export function CartItem({ item }: Props) {
  const { removeFromCart } = useCart();
  const { handleEnterKey } = useKeyupFunction();

  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <img className={styles.item__image} src={item.image.url} alt={item.image.alt} />
      </div>
      <div className={styles.item__info}>
        <div className={styles.item__name}>{item.name}</div>
        <div className={styles.item__price}>金額：{item.price}</div>
        <div className={styles.item__quantity}>数量：{item.quantity}</div>
      </div>
      <div className={styles.item__actions}>
        <FaCircleXmark
          className={styles.item__remove__button}
          size={24}
          onClick={() => removeFromCart(item.id)}
          onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () => removeFromCart(item.id))}
        />
      </div>
    </div>
  );
}
