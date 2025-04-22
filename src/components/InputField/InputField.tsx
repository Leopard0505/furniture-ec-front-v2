
import { InputHTMLAttributes, useMemo } from 'react';
import styles from './InputField.module.scss';
import classNames from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  errors?: string[];
}

export function InputField({ label, className, ...props}: Props) {
  const memoLabel = useMemo(() => {
    return label ? (<label className={styles.label}>{label}</label>) : null;
  }, [label]);

  return (
    <div className={styles.input__field}>
      {memoLabel}
      <input
        {...props}
        className={classNames(styles.input, className)}
      />
      {props.errors && props.errors.length > 0 && (
        <div className={styles.error__message}>
          {props.errors.map((error, index) => (
            <p key={index} className={styles.error}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}
