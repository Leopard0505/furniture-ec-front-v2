import { Link } from 'react-router';
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import styles from './MainVisual.module.scss';
import { useEffect } from 'react';
import classNames from 'classnames';

interface MainVisualProps {
  items: { id: string, to: string, src: string, alt: string }[];
}

export const MainVisual = (props: MainVisualProps) => {

  useEffect(() => {
    const splide = new Splide( '.splide', {
      type: 'loop', // ループ有効
      speed: 1000, // スライドのスピード
      gap: '16px', // スライド間の余白
      padding: '160px', // パディング
      arrows: false, // 矢印無効
      pagination: true, // ページネーション有効
      autoplay: true, // 自動再生有効
      interval: 4000, // 再生間隔
    });

    splide.mount();

    return () => {
      splide.destroy();
    }
  }, []);

  return (
    <section className={styles.mainVisual}>
      <div className="splide" aria-label="Splideの基本的なHTML">
        <div className="splide__track">
          <ul className="splide__list">
            {props.items.map((item) => (
              <li key={item.id} className={classNames('splide__slide', styles.mainVisual__item)}>
                <Link to={item.to}>
                  <img className={styles.mainVisual__image} src={item.src} alt={item.alt} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
