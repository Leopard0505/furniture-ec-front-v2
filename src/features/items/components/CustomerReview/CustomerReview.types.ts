export type ReviewItem = {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  rating: string;
  comment: string;
  createdAt: string;
};

export type Reviews = {
  average: string;
  count: number;
  items: ReviewItem[];
};
