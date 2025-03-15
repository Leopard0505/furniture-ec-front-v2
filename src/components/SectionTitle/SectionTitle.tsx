
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  text: string;
}

export function SectionTitle(props: SectionTitleProps) {

  return (
    <h3 className={styles.section__title}>
      {props.text}
    </h3>
  );
}
