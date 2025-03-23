import { useMemo } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useFormContext } from 'react-hook-form';

import styles from './InputPasswordField.module.scss';

import { usePassword } from './usePassword';

interface InputPasswordFieldProps {
  name: string;
  label: string;
}

export function InputPasswordField(props: InputPasswordFieldProps) {
  const { register, formState: { errors } } = useFormContext();
  const { type, handleToggleType } = usePassword();

  const label = useMemo(() => {
    return props.label ? (<label className={styles.label}>{props.label}</label>) : null;
  }, [props.label]);

  return (
    <div className={styles.input__field}>
      {label}
      <div className={styles.input__password__field__container}>
        <input
          {...register(props.name)}
          className={styles.input}
          aria-invalid={errors[props.name] ? "true" : "false"}
          type={type}
          placeholder={`${props.label}を入力してください`}
        />
        <span className={styles.input__password__field__icon__container}>
          {
            type === 'text'
            ? <BsEyeSlash className={styles.input__password__field__icon} onClick={handleToggleType} />
            : <BsEye className={styles.input__password__field__icon} onClick={handleToggleType} />
          }
        </span>
      </div>
      {errors[props.name] && (
        <p className={styles.text__error}>{errors[props.name]?.message as string}</p>
      )}
    </div>
  );
}
