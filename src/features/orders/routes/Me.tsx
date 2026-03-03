import { Link } from 'react-router';
import { SectionTitle } from '../../shared/components/SectionTitle/SectionTitle';
import { PATH } from '../../../constants/path';
import { formattedPrice } from '../../shared/utils/price';
import { useOrders } from '../hooks/useOrders';
import styles from './Me.module.scss';

export default function Me() {
  const { monthlySpending } = useOrders();

  return (
    <div className={styles.container}>
      <SectionTitle text="マイページ" size="large" />
      <div className={styles.sections}>
        <section className={styles.section}>
          <h4 className={styles.sectionTitle}>メニュー</h4>
          <nav className={styles.menu}>
            <Link to={PATH.ME_ORDERS()} className={styles.menuLink}>
              注文履歴を確認する
            </Link>
            <Link to={PATH.ME_FAVORITES()} className={styles.menuLink}>
              お気に入り商品
            </Link>
          </nav>
        </section>
        <section className={styles.section}>
          <h4 className={styles.sectionTitle}>月別の利用金額</h4>
          <div className={styles.monthlySpending}>
            {monthlySpending.length === 0 ? (
              <p className={styles.emptyMessage}>注文履歴がありません</p>
            ) : (
              <ul className={styles.spendingList}>
                {monthlySpending.map((item) => (
                  <li key={item.month} className={styles.spendingItem}>
                    <span>{item.month}</span>
                    <span>{formattedPrice(item.amount)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <section className={styles.section}>
          <h4 className={styles.sectionTitle}>過去の購入商品</h4>
          <p className={styles.description}>
            気に入った商品を再度購入したい場合は、
            <Link to={PATH.ME_ORDERS()} className={styles.inlineLink}>
              注文履歴
            </Link>
            から各注文の詳細を確認し、商品ページへ移動してカートに追加できます。
          </p>
        </section>
      </div>
    </div>
  );
}
