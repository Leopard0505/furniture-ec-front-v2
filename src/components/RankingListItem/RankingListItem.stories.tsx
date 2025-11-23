import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { RankingListItem } from "./RankingListItem";

const meta = {
  title: "Components/RankingListItem",
  component: RankingListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    rank: {
      control: "number",
      description: "ランキング順位",
      table: {
        type: { summary: "number" },
      },
    },
    to: {
      control: "text",
      description: "リンク先のパス",
      table: {
        type: { summary: "string" },
      },
    },
    src: {
      control: "text",
      description: "商品画像のURL",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: "text",
      description: "商品画像のalt属性",
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      control: "text",
      description: "商品名",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description: "商品説明",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: "number",
      description: "商品価格",
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof RankingListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    rank: 1,
    to: "/items/1",
    src: "https://via.placeholder.com/150",
    alt: "ランキング1位の商品",
    name: "コンフォートソファ",
    description: "快適な座り心地のソファです",
    price: 50000,
  },
};

export const Second: Story = {
  args: {
    rank: 2,
    to: "/items/2",
    src: "https://via.placeholder.com/150",
    alt: "ランキング2位の商品",
    name: "リクライニングソファ",
    description: "リクライニング機能付きのソファ",
    price: 80000,
  },
};

export const Third: Story = {
  args: {
    rank: 3,
    to: "/items/3",
    src: "https://via.placeholder.com/150",
    alt: "ランキング3位の商品",
    name: "ダイニングテーブル",
    description: "4人用のダイニングテーブル",
    price: 30000,
  },
};
