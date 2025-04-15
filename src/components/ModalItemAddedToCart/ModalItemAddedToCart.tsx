import { KeyboardEvent, useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Portal } from "../Portal/Portal";
import styles from "./ModalItemAddedToCart.module.scss";
import { useBodyScroll } from "../../hooks/useBodyScroll";
import { useKeyupFunction } from "../../hooks/useKeyupFunction";

export function ModalItemAddedToCart() {
  const { handleEnterKey } = useKeyupFunction();
  const { lastAddedItem } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const { disableBodyScroll, enableBodyScroll } = useBodyScroll();

  useEffect(() => {
    if (lastAddedItem) {
      setIsVisible(true);

      // Disable body scroll
      disableBodyScroll();

      const timer = setTimeout(() => {
        setIsVisible(false);
        enableBodyScroll(); // Re-enable body scroll
      }, 3000);

      return () => {
        clearTimeout(timer);
        enableBodyScroll(); // Re-enable body scroll
      };
    }
  }, [disableBodyScroll, enableBodyScroll, lastAddedItem]);

  if (!isVisible || !lastAddedItem) return null; // モーダルが非表示の場合は何も描画しない

  const handleClose = () => {
    setIsVisible(false); // モーダルを閉じる
    enableBodyScroll(); // 背景スクロールを有効化
  };

  return (
    <Portal>
      <div
        className={styles.overlay}
        onClick={handleClose}
        onKeyUp={(e: KeyboardEvent) => handleEnterKey(e, () => handleClose())}
        tabIndex={0}
      >
        <div className={styles.modal}>
          <p className={styles.text}>Item added to cart:</p>
          <p className={styles.itemName}>{lastAddedItem.name}</p>
          <p className={styles.itemQuantity}>Quantity: {lastAddedItem.quantity}</p>
          <p className={styles.itemPrice}>Price: ${lastAddedItem.price}</p>
        </div>
      </div>
    </Portal>
  );
}
