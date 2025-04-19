import { Button } from "../Button/Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutDeliveryDateTime.module.scss";

export function CheckoutDeliveryDateTime() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle text='配達希望日時' />
      <Button white text="2023年4月1日" />
      <Button white text="19:00〜21:00" />
    </div>
  );
}
