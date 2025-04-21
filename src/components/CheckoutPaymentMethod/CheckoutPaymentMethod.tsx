import { useState } from "react";
import type { RadioType } from "../Radio/Radio";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutPaymentMethod.module.scss";
import { CreditCardRegistered } from "../CreditCardRegistered/CreditCardRegistered";

export function CheckoutPaymentMethod() {
  const [selectedOption, setSelectedOption] = useState<RadioType | null>(null);

  const options: RadioType[] = [
    { id: "credit-card", checked: false, label: "クレジットカード" },
    { id: "convenience", checked: false, label: "コンビニ決済" },
    { id: "bank-transfer", checked: false, label: "銀行振込" },
    { id: "cash", checked: false, label: "代金引換" },
  ];

  return (
    <div className={styles.wrapper}>
      <SectionTitle text='お支払い方法' />
      <RadioGroup
        name="payment-method"
        options={options}
        onChangeSelectOption={setSelectedOption}
      />
      {selectedOption?.id === "credit-card" && (
        <CreditCardRegistered />
      )}
    </div>
  );
}
