
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  to: string;
  text: string;
  onClick?: () => void;
}

export function ButtonLink(props: ButtonLinkProps) {

  return (
    <Link
      className={styles.link}
      to={props.to}
      onClick={props.onClick}>
      {props.text}
    </Link>
  );
}
