import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckoutDeliveryDateTime } from "./CheckoutDeliveryDateTime";

const meta = {
  title: "Features/Checkout/CheckoutDeliveryDateTime",
  component: CheckoutDeliveryDateTime,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckoutDeliveryDateTime>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
