import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { DeliveryDate } from "./DeliveryDate";

const meta = {
  title: "Components/DeliveryDate",
  component: DeliveryDate,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: {
      action: "date-selected",
      description: "配達日選択時のハンドラ",
    },
  },
} satisfies Meta<typeof DeliveryDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
};
