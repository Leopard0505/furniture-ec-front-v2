import { useSelector } from 'react-redux';
import styles from './CartSummary.module.scss';
import { PATH } from '../../constants/path';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { selectCartTotalPrice } from '../../stores/cart/cartSlice';
import { formattedPrice } from '../../utils/price';

export function CartSummary() {
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const cartServiceFee = 0;

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.summary__item}>
          <div>商品の小計：</div>
          <div>{formattedPrice(cartTotalPrice)}</div>
        </div>
        <div className={styles.summary__item}>
          <div>配送料・サービス料：</div>
          <div>{formattedPrice(cartServiceFee)}</div>
        </div>
        <div className={styles.summary__item__total}>
          <div>ご請求額：</div>
          <div>{formattedPrice(cartTotalPrice + cartServiceFee)}</div>
        </div>
      </div>
      <div>キャンセル・ポリシーについて</div>
      <ButtonLink to={PATH.PURCHASE()} text="注文を確定する" />
    </div>
  );
}
