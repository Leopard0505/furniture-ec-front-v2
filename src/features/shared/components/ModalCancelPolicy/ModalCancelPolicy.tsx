import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Portal } from "../Portal/Portal";
import styles from "./ModalCancelPolicy.module.scss";

interface Props {
  readonly isOpen: boolean;
  readonly onRequestClose: () => void;
}

export function ModalCancelPolicy(props: Props) {

  if (!props.isOpen) {
    return <></>;
  }

  return (
    <Portal>
      <Modal
        title="キャンセルポリシー"
        onClose={props.onRequestClose}
      >
        <div className={styles.cancel__policy}>
          <div className={styles.block}>
            <h4 className={styles.block__title}>初期不良の返品・交換について</h4>
            <div className={styles.block__content}>
              当社に不備がある場合を除き、返品はお受けできません。万一、商品の不良等がございましたら、商品到着後7日以内にメールにてご連絡ください。初期不良が確認できた場合は、返送方法など折り返し連絡させていただきます。※送料は当社で負担いたします。
            </div>
          </div>
          <div className={styles.block}>
            <h4 className={styles.block__title}>返品・交換できるもの</h4>
            <div className={styles.block__content}>
              弊社からお送りした時点での破損、汚損した不良品（送料は当方負担）
            </div>
          </div>
          <div className={styles.block}>
            <h4 className={styles.block__title}>返品期限</h4>
            <div className={styles.block__content}>
              商品到着後7日以内にメールにてご連絡ください。
            </div>
          </div>
        </div>
        <Button text="閉じる" white onClick={props.onRequestClose} />
      </Modal>
    </Portal>
  );
}
