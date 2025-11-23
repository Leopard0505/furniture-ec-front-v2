import type { Meta, StoryObj } from "@storybook/react-vite";
import { CancelPolicy } from "./CancelPolicy";

const meta = {
  title: "Components/CancelPolicy",
  component: CancelPolicy,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: {
      control: "text",
      description: "追加のクラス名",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof CancelPolicy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithClassName: Story = {
  args: {
    className: "custom-class",
  },
};
