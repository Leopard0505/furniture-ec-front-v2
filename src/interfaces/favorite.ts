import { ImageType } from "../components/ImageViewer/ImageViewer.type";
import { Variation } from "../components/ItemDetail/ItemDetail.type";

export type FavoriteItem = {
  id: number;
  name: string;
  price: number;
  image: ImageType;
  variation: Variation;
};
