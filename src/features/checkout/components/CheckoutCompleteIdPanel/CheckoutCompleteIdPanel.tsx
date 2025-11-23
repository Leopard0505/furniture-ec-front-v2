import classNames from 'classnames';
import styles from './CheckoutCompleteIdPanel.module.scss'
import { generateId } from './generateId';

interface Props {
  className?: string;
};

export function CheckoutCompleteIdPanel(props: Props) {
  const convertClassName = classNames(styles.wrapper, props.className);
  const checkoutCompleteId = generateId();

  return (
    <div className={convertClassName}>
      <p className={styles.title}>購入ID</p>
      <p className={styles.id}>{checkoutCompleteId}</p>
      <p className={styles.text}>
        お問い合わせ時に、<br />
        こちらの番号をお伺いする場合がございます。<br />
        お手元に保存をお願いいたします。
      </p>
    </div>
  );
};
