import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { Item } from "./Item";

const meta = {
  title: "Components/Item",
  component: Item,
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
    id: {
      control: "number",
      description: "商品ID",
      table: {
        type: { summary: "number" },
      },
    },
    name: {
      control: "text",
      description: "商品名",
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
    description: {
      control: "text",
      description: "商品説明",
      table: {
        type: { summary: "string" },
      },
    },
    review: {
      control: "text",
      description: "レビュー情報",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    name: "コンフォートソファ",
    src: "https://via.placeholder.com/300",
    alt: "コンフォートソファ",
    description: "快適な座り心地のソファです",
    review: "★★★★☆ 4.5 (120件)",
  },
};

export const Sofa: Story = {
  args: {
    id: 2,
    name: "リクライニングソファ",
    src: "https://via.placeholder.com/300",
    alt: "リクライニングソファ",
    description: "リクライニング機能付きのソファ",
    review: "★★★★★ 5.0 (89件)",
  },
};

export const Table: Story = {
  args: {
    id: 3,
    name: "ダイニングテーブル",
    src: "https://via.placeholder.com/300",
    alt: "ダイニングテーブル",
    description: "4人用のダイニングテーブル",
    review: "★★★★☆ 4.2 (56件)",
  },
};
