import { useMemo } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";

import styles from './InputPasswordField.module.scss';

import { usePassword } from './usePassword';

interface InputPasswordFieldProps {
  text: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputPasswordField(props: InputPasswordFieldProps) {
  const { type, handleToggleType } = usePassword();

  const label = useMemo(() => {
    return props.text ? (<label className={styles.label}>{props.text}</label>) : null;
  }, [props.text]);

  return (
    <div className={styles.input__field}>
      {label}
      <div className={styles.input__password__field__container}>
        <input
          className={styles.input}
          type={type}
          placeholder={`${props.text}を入力してください`}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <span className={styles.input__password__field__icon__container}>
          {
            type === 'text'
            ? <BsEyeSlash className={styles.input__password__field__icon} onClick={handleToggleType} />
            : <BsEye className={styles.input__password__field__icon} onClick={handleToggleType} />
          }
        </span>
      </div>
    </div>
  );
}
