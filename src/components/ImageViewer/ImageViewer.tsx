
import { useImageViewer } from '../../hooks/useImageViewer';
import styles from './ImageViewer.module.scss';
import { ImageType } from './ImageViewer.type';

interface ImageViewerProps {
  mainView: ImageType;
  subView: ImageType[];
}

export function ImageViewer({ mainView, subView }: ImageViewerProps) {
  const { mainImage, subImages, handleSubImageClick } = useImageViewer({ mainView, subView });

  return (
    <div className={styles.image__viewer}>
      <div className={styles.image__viewer__main}>
        <img className={styles.image__viewer__main__image} src={mainImage.url} alt={mainImage.alt} />
      </div>
      <div className={styles.image__viewer__sub}>
        {subImages.map((subImage, index) => (
          <img
            key={index}
            className={styles.image__viewer__sub__image}
            src={subImage.url}
            alt={subImage.alt}
            onClick={() => handleSubImageClick(index)} />
        ))}
      </div>
    </div>
  );
}
