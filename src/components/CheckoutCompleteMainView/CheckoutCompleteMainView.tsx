import classNames from 'classnames';
import styles from './CheckoutCompleteMainView.module.scss'
import { CheckoutCompleteIdPanel } from '../CheckoutCompleteIdPanel/CheckoutCompleteIdPanel';

interface Props {
  className?: string;
};

export function CheckoutCompleteMainView(props: Props) {
  const convertClassName = classNames(styles.wrapper, props.className);

  return (
    <div className={convertClassName}>
      <div className={styles.content}>
        <h1 className={styles.title}>注文が完了しました</h1>
        <CheckoutCompleteIdPanel />
      </div>
    </div>
  );
};
