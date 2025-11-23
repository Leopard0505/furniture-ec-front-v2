import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { DeliveryTime } from "./DeliveryTime";

const meta = {
  title: "Features/Checkout/DeliveryTime",
  component: DeliveryTime,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: {
      action: "time-selected",
      description: "配達時間選択時のハンドラ",
    },
  },
} satisfies Meta<typeof DeliveryTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
};
