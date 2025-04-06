
import { Link } from 'react-router';
import styles from './ButtonLink.module.scss';
import classNames from 'classnames';

interface ButtonLinkProps {
  to: string;
  text?: string;
  white?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function ButtonLink(props: ButtonLinkProps) {
  const convertClassName = classNames(styles.link, props.white ? styles.white : null, props.className);

  return (
    <Link
      className={convertClassName}
      to={props.to}
      onClick={props.onClick}>
      {props.text}
      {props.children}
    </Link>
  );
}
