
import { ReactNode } from "react";
import styles from "./Radio.module.scss";

export type RadioType = {
  id: string;
  checked: boolean;
  label: string;
};

interface Props {
  name: string;
  id: string;
  checked: boolean;
  children?: ReactNode;
  onChange: (id: string) => void;
}

export function Radio(props: Props) {
  return (
    <div className={styles.radio_button}>
      <input
        name={props.name}
        id={props.id}
        type="radio"
        checked={props.checked}
        onChange={() => props.onChange(props.id)}
      />
      <label htmlFor={props.id}>
        <span></span>
        {props.children}
      </label>
    </div>
  );
}

export default Radio;
