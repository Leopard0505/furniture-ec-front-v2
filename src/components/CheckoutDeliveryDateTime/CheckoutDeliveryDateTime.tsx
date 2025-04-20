import { useState } from "react";
import { DeliveryDate } from "../DeliveryDate/DeliveryDate";
import { DeliveryDateDropdownOption } from "../DeliveryDate/DeliveryDate.types";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutDeliveryDateTime.module.scss";
import { DeliveryTime } from "../DeliveryTime.tsx/DeliveryTime";

export function CheckoutDeliveryDateTime() {
  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState<DeliveryDateDropdownOption | null>(null);
  const [, setSelectedDeliveryTime] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <SectionTitle text='配達希望日時' />
      <div className={styles.content}>
        <DeliveryDate onChange={setSelectedDeliveryDate} />
        {selectedDeliveryDate && (
          <DeliveryTime onChange={setSelectedDeliveryTime} />
        )}
      </div>
    </div>
  );
}
