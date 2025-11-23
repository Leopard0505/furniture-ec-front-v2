import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "ボタンに表示するテキスト",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    white: {
      control: "boolean",
      description: "白背景のボタンかどうか",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "ボタン",
    onClick: fn(),
  },
};

export const White: Story = {
  args: {
    text: "白背景ボタン",
    white: true,
    onClick: fn(),
  },
};

export const Pressed: Story = {
  args: {
    text: "押下状態",
    pressed: true,
    onClick: fn(),
  },
};

export const WhitePressed: Story = {
  args: {
    text: "白背景押下状態",
    white: true,
    pressed: true,
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    text: "無効化ボタン",
    disabled: true,
    onClick: fn(),
  },
};

export const WithChildren: Story = {
  args: {
    children: <span>子要素を含むボタン</span>,
    onClick: fn(),
  },
};
