import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { CategoryLabel } from "./CategoryLabel";

const meta = {
  title: "Components/CategoryLabel",
  component: CategoryLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "ラベルに表示するテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    pressed: {
      control: "boolean",
      description: "押下状態かどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      action: "clicked",
      description: "クリック時のハンドラ",
    },
  },
} satisfies Meta<typeof CategoryLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "カテゴリ",
    onClick: fn(),
  },
};

export const Pressed: Story = {
  args: {
    text: "選択済みカテゴリ",
    pressed: true,
    onClick: fn(),
  },
};

export const Furniture: Story = {
  args: {
    text: "家具",
    onClick: fn(),
  },
};

export const Sofa: Story = {
  args: {
    text: "ソファ",
    pressed: true,
    onClick: fn(),
  },
};
