import { Reviews } from "../CustomerReview/CustomerReview.types";
import { ImageType } from "../ImageViewer/ImageViewer.type";

type Category = {
  id: number;
  name: string;
};

type Brand = {
  id: number;
  name: string;
};

type Seller = {
  id: number;
  name: string;
  about: string;
};

type Shipping = {
  method: string;
  fee: string;
  area: string;
  days: number;
};

type Material = {
  id: number;
  name: string;
};

type Handling = {
  return: boolean;
  returnDays: string;
  returnCondition: string;
  returnFee: string;
  cancellation: boolean;
  cancellationDays: string;
};

type TogetherItem = {
  id: number;
  name: string;
  image: ImageType;
  review: string;
  description: string;
};

export type ItemType = {
  id: number;
  image: ImageType;
  subImages: ImageType[];
  category: Category;
  brand: Brand;
  name: string;
  price: string;
  stock: boolean;
  overview: string;
  description: string;
  width: string;
  height: string;
  weight: string;
  seller: Seller;
  shipping: Shipping;
  materials: Material[];
  handling: Handling;
  reviews: Reviews;
  togetherItems: TogetherItem[];
};

export interface Variation {
  size: string;
  color: string;
}
