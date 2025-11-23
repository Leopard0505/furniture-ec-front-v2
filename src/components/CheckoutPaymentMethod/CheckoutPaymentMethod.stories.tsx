import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckoutPaymentMethod } from "./CheckoutPaymentMethod";

const meta = {
  title: "Components/CheckoutPaymentMethod",
  component: CheckoutPaymentMethod,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckoutPaymentMethod>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
