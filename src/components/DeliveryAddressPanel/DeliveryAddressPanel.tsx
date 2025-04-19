
import styles from "./DeliveryAddressPanel.module.scss";

export function DeliveryAddressPanel() {
  return (
    <div className={styles.container}>
      <div className={styles.judgement}>会員情報と同じお届け先</div>
      <div className={styles.name}>山田太郎</div>
      <div className={styles.address}>〒000-0000 東京都○○区○○○ ○○ビル ○○○</div>
      <div className={styles.address}>電話番号: 080-0000-0000</div>
    </div>
  );
}
