import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckoutCompleteMainView } from "./CheckoutCompleteMainView";

const meta = {
  title: "Components/CheckoutCompleteMainView",
  component: CheckoutCompleteMainView,
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
} satisfies Meta<typeof CheckoutCompleteMainView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
