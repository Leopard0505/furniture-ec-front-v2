import { useState } from "react";
import { RadioType } from "../Radio/Radio";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import styles from "./CheckoutPointAvailable.module.scss";

export function CheckoutPointAvailable() {
  const [selectedOption, setSelectedOption] = useState<RadioType | null>(null);
  const options: RadioType[] = [
    { id: "利用しない", checked: false, label: "利用しない" },
    { id: "すべて利用する", checked: false, label: "すべて利用する" },
    { id: "一部のみ利用する", checked: false, label: "一部のみ利用する" },
  ];

  return (
    <div className={styles.wrapper}>
      <SectionTitle text='ご利用可能なポイント' />
      <div>利用可能ポイント 1,200pt</div>
      <RadioGroup
        name="point-available"
        options={options}
        onChangeSelectOption={setSelectedOption}
      />
      <input
        type="text"
        name="利用するポイント数"
        placeholder="利用するポイント数"
        disabled={selectedOption?.id !== "一部のみ利用する"}
      />
    </div>
  );
}
