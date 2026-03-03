import { Link, useParams } from 'react-router';
import { SectionTitle } from '../../../shared/components/SectionTitle/SectionTitle';
import { PATH } from '../../../../constants/path';
import { formattedPrice } from '../../../shared/utils/price';
import { Button } from '../../../shared/components/Button/Button';
import { useOrders } from '../../hooks/useOrders';
import { useCart } from '../../../cart/hooks/useCart';
import type { OrderItem } from '../../types/order.types';
import styles from './OrderId.module.scss';

export default function OrderId() {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useOrders();
  const { addToCart } = useCart();

  const order = orderId ? getOrderById(orderId) : null;

  const handleRepurchase = (item: OrderItem) => {
    addToCart({
      id: item.itemId,
      name: item.name,
      quantity: 1,
      price: item.price,
      image: item.image,
      variation: item.variation ?? { size: 'M', color: 'default' },
      stock: true,
    });
  };

  if (!order) {
    return (
      <div className={styles.container}>
        <SectionTitle text="注文詳細" size="large" />
        <p className={styles.notFound}>注文が見つかりません</p>
        <Link to={PATH.ME_ORDERS()} className={styles.backLink}>
          注文履歴に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <SectionTitle text="注文詳細" size="large" />
      <div className={styles.content}>
        <div className={styles.orderInfo}>
          <div className={styles.infoRow}>
            <span className={styles.label}>注文番号</span>
            <span>{order.id}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>注文日</span>
            <span>{order.orderDate}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>ステータス</span>
            <span>{order.status}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.label}>合計金額</span>
            <span className={styles.total}>{formattedPrice(order.totalAmount)}</span>
          </div>
        </div>
        <section className={styles.itemsSection}>
          <h3 className={styles.sectionTitle}>購入商品</h3>
          <ul className={styles.itemList}>
            {order.items.map((item) => (
              <li key={`${item.itemId}-${item.name}`} className={styles.item}>
                <Link
                  to={PATH.ITEMS_ID(item.itemId.toString())}
                  className={styles.itemLink}
                >
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>
                      {formattedPrice(item.price)} × {item.quantity}
                    </span>
                    {item.variation && (
                      <span className={styles.itemVariation}>
                        {item.variation.size} / {item.variation.color}
                      </span>
                    )}
                  </div>
                </Link>
                <Button
                  className={styles.repurchaseButton}
                  text="再購入"
                  onClick={() => handleRepurchase(item)}
                />
              </li>
            ))}
          </ul>
        </section>
        <Link to={PATH.ME_ORDERS()} className={styles.backLink}>
          注文履歴に戻る
        </Link>
      </div>
    </div>
  );
}
