
import styles from './MainVisual.module.scss';

import mainVisualImage1 from '@/assets/images/main-visual_1.png';

export const MainVisual = () => {

  return (
    <section className={styles.mainVisual}>
      <div>
        <img className={styles.mainVisual__image} src={mainVisualImage1} alt="メインビジュアル" />
      </div>
    </section>
  )
}
