export type OrderItem = {
  itemId: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    url: string;
    alt: string;
  };
  variation?: {
    size: string;
    color: string;
  };
};

export type Order = {
  id: string;
  orderDate: string;
  totalAmount: number;
  status: string;
  items: OrderItem[];
};
