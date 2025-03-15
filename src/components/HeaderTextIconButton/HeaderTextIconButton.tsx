import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './HeaderTextIconButton.module.scss';

interface HeaderTextIconButtonProps {
  className?: string;
  to: string;
  text: string;
  children: React.ReactNode;
}

export function HeaderTextIconButton(props: HeaderTextIconButtonProps) {
  const convertClassName = classNames(props.className, styles.itemLink);

  return (
    <Link to={props.to} className={convertClassName}>
      <span className={styles.itemLinkIconCircle}>
        {props.children}
      </span>
      {/* <span classNam e={styles.text}>{props.text}</span> */}
    </Link>
  );
}
