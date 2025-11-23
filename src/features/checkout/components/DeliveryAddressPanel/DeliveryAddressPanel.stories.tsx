import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeliveryAddressPanel } from "./DeliveryAddressPanel";

const meta = {
  title: "Features/Checkout/DeliveryAddressPanel",
  component: DeliveryAddressPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DeliveryAddressPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
