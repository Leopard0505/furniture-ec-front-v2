import { useState } from "react";
import styles from "./RadioGroup.module.scss";
import Radio, { RadioType } from "../Radio/Radio";

interface Props {
  name: string;
  options: RadioType[];
  onChangeSelectOption: (option: RadioType) => void;
}

export function RadioGroup(props: Props) {
  const [selectedOption, setSelectedOption] = useState<RadioType["id"]>("");

  const handleOptionChange = (optionId: RadioType["id"]) => {
    setSelectedOption(optionId);
    const option = props.options.find((option) => option.id === optionId);
    if (!option) return;
    props.onChangeSelectOption(option);
  };

  return (
    <div className={styles.radio_group}>
      {props.options.map((option) => (
        <Radio
          key={option.id}
          name={props.name}
          id={option.id}
          checked={selectedOption === option.id}
          onChange={handleOptionChange}
        >
          {option.label}
        </Radio>
      ))}
    </div>
  );
}
