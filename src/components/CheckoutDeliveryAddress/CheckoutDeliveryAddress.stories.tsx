import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckoutDeliveryAddress } from "./CheckoutDeliveryAddress";
import { useEffect } from "react";

const meta = {
  title: "Components/CheckoutDeliveryAddress",
  component: CheckoutDeliveryAddress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        const portalEl = document.createElement("div");
        portalEl.id = "portal";
        document.body.appendChild(portalEl);
        return () => {
          document.body.removeChild(portalEl);
        };
      }, []);
      return <Story />;
    },
  ],
} satisfies Meta<typeof CheckoutDeliveryAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
