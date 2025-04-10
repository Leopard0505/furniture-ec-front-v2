import { useState } from "react";
import { ImageType } from "../components/ImageViewer/ImageViewer.type";

interface Props {
  mainView: ImageType;
  subView: ImageType[];
}

export const useImageViewer = ({ mainView, subView }: Props) => {
  const [mainImage, setMainImage] = useState<ImageType>(mainView);
  const [subImages, setSubImages] = useState<ImageType[]>(subView);

  const handleSubImageClick = (index: number) => {
    const newMainImage = subImages[index];
    const newSubImages = subImages.map((subImage, i) => {
      if (i === index) {
        return mainImage;
      }
      return subImage;
    });
    setMainImage(newMainImage);
    setSubImages(newSubImages);
  };

  return {
    mainImage,
    subImages,
    handleSubImageClick,
  };
}
