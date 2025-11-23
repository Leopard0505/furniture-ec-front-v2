import type { Meta, StoryObj } from "@storybook/react-vite";
import { CustomerReview } from "./CustomerReview";
import type { Reviews } from "./CustomerReview.types";

const meta = {
  title: "Features/Items/CustomerReview",
  component: CustomerReview,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    reviews: {
      control: "object",
      description: "レビューデータ",
      table: {
        type: { summary: "Reviews" },
      },
    },
  },
} satisfies Meta<typeof CustomerReview>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockReviews: Reviews = {
  average: "4.5",
  count: 120,
  items: [
    {
      id: 1,
      user: {
        id: 1,
        name: "ユーザー1",
        avatar: "https://via.placeholder.com/50",
      },
      rating: "5",
      comment: "とても良い商品でした。",
      createdAt: "2025-01-01",
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "ユーザー2",
        avatar: "https://via.placeholder.com/50",
      },
      rating: "4",
      comment: "満足しています。",
      createdAt: "2025-01-02",
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "ユーザー3",
        avatar: "https://via.placeholder.com/50",
      },
      rating: "3",
      comment: "普通です。",
      createdAt: "2025-01-03",
    },
  ],
};

export const Default: Story = {
  args: {
    reviews: mockReviews,
  },
};

export const ManyReviews: Story = {
  args: {
    reviews: {
      average: "4.8",
      count: 500,
      items: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        user: {
          id: i + 1,
          name: `ユーザー${i + 1}`,
          avatar: "https://via.placeholder.com/50",
        },
        rating: (Math.floor(Math.random() * 3) + 3).toString(),
        comment: `レビューコメント${i + 1}`,
        createdAt: "2025-01-01",
      })),
    },
  },
};
