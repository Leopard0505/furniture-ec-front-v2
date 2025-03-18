
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './InputField.module.scss';

interface InputFieldProps {
  name: string;
  label: string;
}

export function InputField(props: InputFieldProps) {
  const { register, formState: { errors } } = useFormContext();

  const label = useMemo(() => {
    return props.label ? (<label className={styles.label}>{props.label}</label>) : null;
  }, [props.label]);

  return (
    <div className={styles.input__field}>
      {label}
      <input
        {...register(props.name)}
        className={styles.input}
        type="text"
        placeholder={`${props.label}を入力してください`}
      />
      {errors[props.name] && (
        <p>{errors[props.name]?.message as string}</p>
      )}
    </div>
  );
}
