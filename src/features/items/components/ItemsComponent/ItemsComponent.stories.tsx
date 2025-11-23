import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { ItemsComponent } from "./ItemsComponent";
import type { ItemProps } from "../Item/Item";

const meta = {
  title: "Features/Items/ItemsComponent",
  component: ItemsComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
      description: "商品の配列",
      table: {
        type: { summary: "ItemProps[]" },
      },
    },
    currentPage: {
      control: "number",
      description: "現在のページ番号",
      table: {
        type: { summary: "number" },
      },
    },
    totalPages: {
      control: "number",
      description: "総ページ数",
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof ItemsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems: ItemProps[] = [
  {
    id: 1,
    name: "コンフォートソファ",
    src: "https://via.placeholder.com/300",
    alt: "コンフォートソファ",
    description: "快適な座り心地のソファです",
    review: "★★★★☆ 4.5 (120件)",
  },
  {
    id: 2,
    name: "リクライニングソファ",
    src: "https://via.placeholder.com/300",
    alt: "リクライニングソファ",
    description: "リクライニング機能付きのソファ",
    review: "★★★★★ 5.0 (89件)",
  },
  {
    id: 3,
    name: "ダイニングテーブル",
    src: "https://via.placeholder.com/300",
    alt: "ダイニングテーブル",
    description: "4人用のダイニングテーブル",
    review: "★★★★☆ 4.2 (56件)",
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
    currentPage: 1,
    totalPages: 5,
  },
};

export const SinglePage: Story = {
  args: {
    items: mockItems,
    currentPage: 1,
    totalPages: 1,
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      ...mockItems,
      ...mockItems,
      ...mockItems,
    ],
    currentPage: 2,
    totalPages: 10,
  },
};
