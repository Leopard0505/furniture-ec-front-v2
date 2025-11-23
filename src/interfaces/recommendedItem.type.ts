import { ImageType } from "../features/shared/components/ImageViewer/ImageViewer.type";

export type RecommendedItem = {
  id: number;
  name: string;
  image: ImageType;
  review: string;
  description: string;
};
