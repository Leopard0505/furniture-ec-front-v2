import { useSelector } from 'react-redux';
import styles from './CartSummary.module.scss';
import { ButtonLink } from '../../../shared/components/ButtonLink/ButtonLink';
import { selectCartTotalPrice } from '../../store/cart/cartSlice';
import { formattedPrice } from '../../../shared/utils/price';
import { CancelPolicy } from '../../../shared/components/CancelPolicy/CancelPolicy';

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
      <CancelPolicy className={styles.cancel__policy} />
      <ButtonLink to={props.to} text={props.buttonText} />
    </div>
  );
}
