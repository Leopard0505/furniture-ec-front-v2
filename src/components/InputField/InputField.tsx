
import { useMemo } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  text: string;
  value: string;
  onChange: (value: string) => void;
}

export function InputField(props: InputFieldProps) {

  const label = useMemo(() => {
    return props.text ? (<label className={styles.label}>{props.text}</label>) : null;
  }, [props.text]);

  return (
    <div className={styles.input__field}>
      {label}
      <input
        className={styles.input}
        type="text"
        placeholder={`${props.text}を入力してください`}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
