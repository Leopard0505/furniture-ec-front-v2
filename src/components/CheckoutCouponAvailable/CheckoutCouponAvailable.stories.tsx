import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckoutCouponAvailable } from "./CheckoutCouponAvailable";

const meta = {
  title: "Components/CheckoutCouponAvailable",
  component: CheckoutCouponAvailable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckoutCouponAvailable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
