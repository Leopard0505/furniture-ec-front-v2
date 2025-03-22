
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';

export interface ListItemProps {
  to: string;
  src: string;
  alt: string;
}

export function ListItem(props: ListItemProps) {
  return (
    <Link className={styles.list__item} to={props.to}>
      <img
        className={styles.list__item__image}
        src={props.src}
        alt={props.alt}
      />
    </Link>
  );
}
