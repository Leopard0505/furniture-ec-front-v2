import { SectionTitle } from '../../../shared/components/SectionTitle/SectionTitle';
import { CartSummary } from '../CartSummary/CartSummary';
import styles from './Cart.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { useCart } from '../../hooks/useCart';
import cartEmptyImage from '../../../../assets/images/cart-empty.png';
import { PATH } from '../../../../constants/path';

export function Cart() {
  const { cartItems } = useCart();

  return (
    <div className={styles.cart}>
      <div className={styles.cart__section}>
        <SectionTitle text="カート" />
        {cartItems.length === 0 ? (
          <div className={styles.cart__section__empty__content}>
            <div>
              <img src={cartEmptyImage} alt="Empty Cart" />
            </div>
          </div>
        ) : (
          <div className={styles.cart__section__content}>
            <div className={styles.cart__items__container}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <CartSummary to={PATH.CHECKOUT()} buttonText="注文手続きへ" />
          </div>
        )}
      </div>
    </div>
  );
}
