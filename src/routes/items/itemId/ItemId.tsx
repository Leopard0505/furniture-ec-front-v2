import { Link, useParams } from 'react-router';
import { PATH } from '../../../constants/path';
import styles from './ItemId.module.scss';

export default function ItemId() {
  const { itemId } = useParams();

  return (
    <main className={styles.itemId}>
      <div className={styles.itemId__content}>
        <h1>商品詳細 {itemId}</h1>
        <p>商品情報はこちらに表示されます。</p>
        <div className={styles.itemId__cart__area}>
          <Link to={PATH.CART()} className={styles.itemId__cart__button}>
            カートに追加
          </Link>
          <p className={styles.itemId__guide__link}>
            <Link to={PATH.GUIDE()} className={styles.itemId__guide__link__anchor}>
              ご利用ガイドはこちら
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
