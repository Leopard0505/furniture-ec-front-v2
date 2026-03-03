import { Link } from 'react-router';
import { SectionTitle } from '../../shared/components/SectionTitle/SectionTitle';
import { PATH } from '../../../constants/path';
import { formattedPrice } from '../../shared/utils/price';
import { useOrders } from '../hooks/useOrders';
import styles from './Orders.module.scss';

export default function Orders() {
  const { orders } = useOrders();

  return (
    <div className={styles.container}>
      <Link to={PATH.ME()} className={styles.backLink}>
        マイページに戻る
      </Link>
      <SectionTitle text="注文履歴" size="large" />
      <div className={styles.content}>
        {orders.length === 0 ? (
          <p className={styles.emptyMessage}>注文履歴がありません</p>
        ) : (
          <ul className={styles.orderList}>
            {orders.map((order) => (
              <li key={order.id} className={styles.orderItem}>
                <Link
                  to={PATH.ME_ORDERS_ORDER_ID(order.id)}
                  className={styles.orderLink}
                >
                  <div className={styles.orderHeader}>
                    <span className={styles.orderId}>注文番号: {order.id}</span>
                    <span className={styles.orderDate}>{order.orderDate}</span>
                  </div>
                  <div className={styles.orderFooter}>
                    <span className={styles.orderStatus}>{order.status}</span>
                    <span className={styles.orderTotal}>
                      {formattedPrice(order.totalAmount)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
