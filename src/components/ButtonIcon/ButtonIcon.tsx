
import classNames from 'classnames';
import styles from './ButtonIcon.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  white?: boolean;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: () => void;
}

export function ButtonIcon(props: ButtonProps) {
  const convertClassName = classNames(styles.button, props.className, props.white ? styles.white : null);

  return (
    <button
      className={convertClassName}
      type={props.type}
      onClick={props.onClick}
      ref={props.ref}>
      {props.children}
    </button>
  );
}
