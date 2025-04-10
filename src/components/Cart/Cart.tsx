import { RecommendedItem } from './Cart.type';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Item } from '../Item/Item';
import { CartSummary } from '../CartSummary/CartSummary';
import styles from './Cart.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { useCart } from '../../hooks/useCart';
import cartEmptyImage from '@/assets/images/cart-empty.png';

interface Props {
  recommendedItems: RecommendedItem[];
}

export function Cart({ recommendedItems }: Props) {
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
            <CartSummary />
          </div>
        )}
      </div>
      <div className={styles.recommended__section}>
        <SectionTitle text="閲覧履歴に基づくおすすめ商品" />
        <div className={styles.recommended__section__content}>
          {recommendedItems.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              src={item.image.url}
              alt={item.image.alt}
              description={item.description}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
