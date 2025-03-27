
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  white?: boolean;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const convertClassName = classNames(styles.button, props.white ? styles.white : null);

  return (
    <button
      className={convertClassName}
      type={props.type}
      onClick={props.onClick}>
      {props.text}
    </button>
  );
}
