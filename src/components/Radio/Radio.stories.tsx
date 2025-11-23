import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Radio } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: "text",
      description: "ラジオボタンのグループ名",
      table: {
        type: { summary: "string" },
      },
    },
    id: {
      control: "text",
      description: "ラジオボタンのID",
      table: {
        type: { summary: "string" },
      },
    },
    checked: {
      control: "boolean",
      description: "選択されているかどうか",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      action: "changed",
      description: "選択変更時のハンドラ",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "option",
    id: "option1",
    checked: false,
    children: "オプション1",
    onChange: fn(),
  },
};

export const Checked: Story = {
  args: {
    name: "option",
    id: "option2",
    checked: true,
    children: "オプション2",
    onChange: fn(),
  },
};
