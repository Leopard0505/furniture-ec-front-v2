
import styles from './ColorPalette.module.scss';

export function ColorPalette() {

  return (
    <div className={styles.color__palette}>
      <div className={styles.color__palette__color__container}>
        <div className={styles.color__palette__color__container__color}></div>
        <div className={styles.color__palette__color__container__color}></div>
        <div className={styles.color__palette__color__container__color}></div>
        <div className={styles.color__palette__color__container__color}></div>
        <div className={styles.color__palette__color__container__color}></div>
        <div className={styles.color__palette__color__container__color}></div>
        <div className={styles.color__palette__color__container__color}></div>
      </div>
    </div>
  );
}
