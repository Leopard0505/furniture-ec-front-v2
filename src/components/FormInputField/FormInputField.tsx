
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './FormInputField.module.scss';

interface FormInputFieldProps {
  name: string;
  label: string;
  role?: string;
}

export function FormInputField(props: FormInputFieldProps) {
  const { register, formState: { errors } } = useFormContext();

  const label = useMemo(() => {
    return props.label ? (<label className={styles.label}>{props.label}</label>) : null;
  }, [props.label]);

  return (
    <div className={styles.input__field}>
      {label}
      <input
        {...register(props.name)}
        role={props.role}
        aria-label={props.name}
        className={styles.input}
        aria-invalid={errors[props.name] ? "true" : "false"}
        type="text"
        placeholder={`${props.label}を入力してください`}
      />
      {errors[props.name] && (
        <p className={styles.text__error}>{errors[props.name]?.message as string}</p>
      )}
    </div>
  );
}
