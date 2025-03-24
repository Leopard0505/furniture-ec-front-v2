
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';

export type ListItemType = {
  id: string;
  to: string;
  src: string;
  alt: string;
};

export interface ListItemProps {
  item: ListItemType;
}

export function ListItem({ item }: ListItemProps) {
  return (
    <Link className={styles.list__item} to={item.to}>
      <img
        className={styles.list__item__image}
        src={item.src}
        alt={item.alt}
      />
    </Link>
  );
}
