
import { Link } from 'react-router';
import styles from './Item.module.scss';
import { PATH } from '../../constants/path';

export interface ItemProps {
  id: number,
  name: string,
  price: number | string,
  src: string,
  alt: string,
  description: string,
  category: string,
  review: string,
}

export function Item(props: ItemProps) {

  return (
    <Link className={styles.item} to={PATH.ITEMS_ID(props.id.toString())}>
      <img className={styles.item__image} src={props.src} alt={props.alt} />
      <div className={styles.item__info__container}>
        <div className={styles.item__name}>{props.name}</div>
        <div className={styles.item__review}>{props.review}</div>
        <div className={styles.item__description}>{props.description}</div>
      </div>
    </Link>
  );
}
