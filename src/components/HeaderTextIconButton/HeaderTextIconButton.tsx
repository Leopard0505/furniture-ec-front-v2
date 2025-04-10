import { Link } from 'react-router';
import classNames from 'classnames';

import styles from './HeaderTextIconButton.module.scss';

interface HeaderTextIconButtonProps {
  className?: string;
  to: string;
  children: React.ReactNode;
}

export function HeaderTextIconButton(props: HeaderTextIconButtonProps) {
  const convertClassName = classNames(props.className, styles.itemLink);

  return (
    <Link to={props.to} className={convertClassName}>
      <span className={styles.itemLinkIconCircle}>
        {props.children}
      </span>
    </Link>
  );
}
