import { PATH } from '../../constants/path';
import { useCartSummary } from '../../hooks/useCartSummary';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import styles from './CartSummary.module.scss';

export function CartSummary() {
  const { subtotal, shippingAndServiceFee, total } = useCartSummary();

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.summary__item}>
          <div>商品の小計：</div>
          <div>{subtotal}</div>
        </div>
        <div className={styles.summary__item}>
          <div>配送料・サービス料：</div>
          <div>{shippingAndServiceFee}</div>
        </div>
        <div className={styles.summary__item__total}>
          <div>ご請求額：</div>
          <div>{total}</div>
        </div>
      </div>
      <div>キャンセル・ポリシーについて</div>
      <ButtonLink to={PATH.PURCHASE()} text="注文を確定する" />
    </div>
  );
}
