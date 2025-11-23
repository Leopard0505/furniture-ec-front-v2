import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { ModalCreditCardRegistration } from "./ModalCreditCardRegistration";
import { useEffect } from "react";
import { FormInputs } from "./schema";

const meta = {
  title: "Features/Checkout/ModalCreditCardRegistration",
  component: ModalCreditCardRegistration,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
    isOpen: {
      control: "boolean",
      description: "モーダルが開いているかどうか",
      table: {
        type: { summary: "boolean" },
      },
    },
    onRequestClose: {
      action: "closed",
      description: "モーダルを閉じる時のハンドラ",
    },
    onSubmit: {
      action: "submitted",
      description: "フォーム送信時のハンドラ",
    },
  },
} satisfies Meta<typeof ModalCreditCardRegistration>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalCreditCardRegistrationWithState = (args: { isOpen?: boolean; onRequestClose?: () => void; onSubmit?: (data: FormInputs) => void }) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <ModalCreditCardRegistration
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          args.onRequestClose?.();
        }}
        onSubmit={(data) => {
          args.onSubmit?.(data);
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalCreditCardRegistrationWithState {...args} />,
  args: {
    isOpen: false,
    onRequestClose: fn(),
    onSubmit: fn(),
  },
};

export const Open: Story = {
  render: (args) => <ModalCreditCardRegistrationWithState {...args} />,
  args: {
    isOpen: true,
    onRequestClose: fn(),
    onSubmit: fn(),
  },
};
