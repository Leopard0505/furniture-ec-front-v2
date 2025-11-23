import { useCallback, useState } from "react";
import { Button } from "../../../shared/components/Button/Button";
import { DeliveryAddressPanel } from "../DeliveryAddressPanel/DeliveryAddressPanel";
import { ModalDeliveryAddressChange } from "../ModalDeliveryAddressChange/ModalDeliveryAddressChange";
import { SectionTitle } from "../../../shared/components/SectionTitle/SectionTitle"
import styles from "./CheckoutDeliveryAddress.module.scss";


export function CheckoutDeliveryAddress() {
  const [isOpen, setIsOpen] = useState(false);

  const handleRequestClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSubmit = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.wrapper}>
      <SectionTitle text='お届け先' />
      <div className={styles.container}>
        <DeliveryAddressPanel />
        <Button white text="変更する" onClick={() => setIsOpen(true)} />
        <ModalDeliveryAddressChange isOpen={isOpen} onRequestClose={handleRequestClose} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
