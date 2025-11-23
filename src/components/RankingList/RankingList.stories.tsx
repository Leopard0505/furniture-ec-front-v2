import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { RankingList } from "./RankingList";
import type { RankingListItemProps } from "../RankingListItem/RankingListItem";

const meta = {
  title: "Components/RankingList",
  component: RankingList,
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
    items: {
      control: "object",
      description: "ランキングアイテムの配列",
      table: {
        type: { summary: "RankingListItemProps[]" },
      },
    },
  },
} satisfies Meta<typeof RankingList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems: RankingListItemProps[] = [
  {
    rank: 1,
    to: "/items/1",
    src: "https://via.placeholder.com/150",
    alt: "ランキング1位の商品",
    name: "コンフォートソファ",
    description: "快適な座り心地のソファです",
    price: 50000,
  },
  {
    rank: 2,
    to: "/items/2",
    src: "https://via.placeholder.com/150",
    alt: "ランキング2位の商品",
    name: "リクライニングソファ",
    description: "リクライニング機能付きのソファ",
    price: 80000,
  },
  {
    rank: 3,
    to: "/items/3",
    src: "https://via.placeholder.com/150",
    alt: "ランキング3位の商品",
    name: "ダイニングテーブル",
    description: "4人用のダイニングテーブル",
    price: 30000,
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};

export const TopFive: Story = {
  args: {
    items: [
      ...mockItems,
      {
        rank: 4,
        to: "/items/4",
        src: "https://via.placeholder.com/150",
        alt: "ランキング4位の商品",
        name: "チェア",
        description: "快適な座り心地のチェア",
        price: 15000,
      },
      {
        rank: 5,
        to: "/items/5",
        src: "https://via.placeholder.com/150",
        alt: "ランキング5位の商品",
        name: "ベッド",
        description: "快適な睡眠のためのベッド",
        price: 120000,
      },
    ],
  },
};
