
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  white?: boolean;
  pressed?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const convertClassName = classNames(styles.button, props.className, props.white ? styles.white : null);

  return (
    <button
      className={convertClassName}
      type={props.type}
      aria-pressed={props.pressed}
      onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
}
