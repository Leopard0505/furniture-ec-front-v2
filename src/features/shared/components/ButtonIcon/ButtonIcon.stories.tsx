import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ButtonIcon } from "./ButtonIcon";
import { FaHeart } from "react-icons/fa6";

const meta = {
  title: "Features/Shared/ButtonIcon",
  component: ButtonIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    white: {
      control: "boolean",
      description: "白背景のボタンかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "無効化されているかどうか",
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
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <FaHeart size={24} />,
    onClick: fn(),
  },
};

export const White: Story = {
  args: {
    children: <FaHeart size={24} />,
    white: true,
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    children: <FaHeart size={24} />,
    disabled: true,
    onClick: fn(),
  },
};
