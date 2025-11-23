import { ChangeEvent } from 'react';
import styles from './PriceInput.module.scss';

interface PriceInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const PriceInput = (props: PriceInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '');
    props.onChange(newValue);
  };

  return (
    <div className={styles.price_input}>
      <label className={styles.price_input__label}>{props.label}</label>
      <div className={styles.price_input__wrapper}>
        <input
          type="text"
          value={props.value}
          onChange={handleChange}
          className={styles.price_input__input}
          placeholder="0"
          maxLength={7}
        />
        <span className={styles.price_input__unit}>円</span>
      </div>
    </div>
  );
};
