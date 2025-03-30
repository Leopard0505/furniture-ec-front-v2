
import styles from './CategoryLabel.module.scss';

interface CategoryLabelProps {
  text: string;
  onClick?: () => void;
}

export function CategoryLabel(props: CategoryLabelProps) {

  return (
    <span
      className={styles.category__label}
      onClick={props.onClick}
      onKeyUp={props.onClick}
    >
      {props.text}
    </span>
  );
}
