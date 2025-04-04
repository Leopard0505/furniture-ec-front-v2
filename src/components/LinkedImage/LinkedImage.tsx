
import { Link } from 'react-router';
import styles from './LinkedImage.module.scss';

export type LinkedImageType = {
  id: string;
  to: string;
  src: string;
  alt: string;
};

export interface LinkedImageProps {
  item: LinkedImageType;
}

export function LinkedImage({ item }: LinkedImageProps) {
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
