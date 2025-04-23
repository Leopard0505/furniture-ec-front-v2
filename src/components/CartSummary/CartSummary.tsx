import { useSelector } from 'react-redux';
import styles from './CartSummary.module.scss';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { selectCartTotalPrice } from '../../stores/cart/cartSlice';
import { formattedPrice } from '../../utils/price';

interface Props {
  to: string;
  buttonText: string;
}

export function CartSummary(props: Props) {
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const cartServiceFee = 0;

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.summary__item}>
          <div>商品の小計：</div>
          <div role="presentation" aria-label="商品の小計">{formattedPrice(cartTotalPrice)}</div>
        </div>
        <div className={styles.summary__item}>
          <div>配送料・サービス料：</div>
          <div role="presentation" aria-label="配送料・サービス料">{formattedPrice(cartServiceFee)}</div>
        </div>
        <div className={styles.summary__item__total}>
          <div>ご請求額：</div>
          <div role="presentation" aria-label="ご請求額">{formattedPrice(cartTotalPrice + cartServiceFee)}</div>
        </div>
      </div>
      <div>キャンセル・ポリシーについて</div>
      <ButtonLink to={props.to} text={props.buttonText} />
    </div>
  );
}
