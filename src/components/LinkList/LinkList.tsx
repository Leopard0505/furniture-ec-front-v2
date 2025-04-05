import { Link } from 'react-router';
import styles from './LinkList.module.scss';
import classNames from 'classnames';

interface LinkListProps {
  items: { id: string, to: string, text: string }[];
  className?: string;
}

export function LinkList(props: LinkListProps) {
  const convertClassName = classNames(styles.link__list, props.className);

  return (
    <div className={convertClassName}>
      {props.items.map((item) => (
        <div className={styles.link__item} key={item.id}>
          <Link to={item.to} className={styles.menu__link}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
}
