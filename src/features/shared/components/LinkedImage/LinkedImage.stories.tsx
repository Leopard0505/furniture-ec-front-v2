import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { LinkedImage } from "./LinkedImage";

const meta = {
  title: "Features/Shared/LinkedImage",
  component: LinkedImage,
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
    item: {
      control: "object",
      description: "リンク画像のアイテム情報",
      table: {
        type: { summary: "LinkedImageType" },
      },
    },
  },
} satisfies Meta<typeof LinkedImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: "1",
      to: "/items/1",
      src: "https://via.placeholder.com/200",
      alt: "商品画像",
    },
  },
};

export const CategoryImage: Story = {
  args: {
    item: {
      id: "2",
      to: "/items?category=sofa",
      src: "https://via.placeholder.com/200",
      alt: "ソファカテゴリ",
    },
  },
};
