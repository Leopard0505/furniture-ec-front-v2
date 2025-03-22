import { Link } from 'react-router-dom';
import styles from './LinkList.module.scss';

interface LinkListProps {
  items: { to: string, src: string, alt: string }[];
}

export function LinkList(props: LinkListProps) {

  return (
    <div className={styles.link__list}>
      {props.items.map((item, index) => (
        <div className={styles.link__item} key={index}>
          <Link to={item.to} className={styles.menu__link}>{item.alt}</Link>
        </div>
      ))}
    </div>
  );
}
