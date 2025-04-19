import { Button } from "../Button/Button";
import { DeliveryAddressPanel } from "../DeliveryAddressPanel/DeliveryAddressPanel";
import { SectionTitle } from "../SectionTitle/SectionTitle"
import styles from "./CheckoutDeliveryAddress.module.scss";


export function CheckoutDeliveryAddress() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle text='お届け先' />
      <div className={styles.container}>
        <DeliveryAddressPanel />
        <Button white text="変更する" />
      </div>
    </div>
  );
}
