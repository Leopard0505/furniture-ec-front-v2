import type { Meta, StoryObj } from "@storybook/react-vite";
import { CreditCardRegistered } from "./CreditCardRegistered";
import { useEffect } from "react";

const meta = {
  title: "Components/CreditCardRegistered",
  component: CreditCardRegistered,
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
  argTypes: {
    cardNumber: {
      control: "text",
      description: "カード番号",
      table: {
        type: { summary: "string" },
      },
    },
    cardHolder: {
      control: "text",
      description: "カード名義",
      table: {
        type: { summary: "string" },
      },
    },
    expirationDate: {
      control: "text",
      description: "有効期限",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof CreditCardRegistered>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
  },
};

export const WithCard: Story = {
  args: {
    cardNumber: "1234-5678-9012-3456",
    cardHolder: "TARO YAMADA",
    expirationDate: "12/25",
  },
};
