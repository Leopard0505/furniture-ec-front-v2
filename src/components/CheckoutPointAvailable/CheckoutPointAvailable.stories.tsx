import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckoutPointAvailable } from "./CheckoutPointAvailable";

const meta = {
  title: "Components/CheckoutPointAvailable",
  component: CheckoutPointAvailable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckoutPointAvailable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
