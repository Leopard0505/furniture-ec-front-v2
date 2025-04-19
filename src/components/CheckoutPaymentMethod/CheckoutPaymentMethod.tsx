import type { RadioType } from "../Radio/Radio";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutPaymentMethod.module.scss";

export function CheckoutPaymentMethod() {
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
        onChangeSelectOption={(option) => {
          console.log(option);
        }}
      />
    </div>
  );
}
