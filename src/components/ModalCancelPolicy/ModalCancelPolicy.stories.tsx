import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { ModalCancelPolicy } from "./ModalCancelPolicy";
import { useEffect } from "react";

const meta = {
  title: "Components/ModalCancelPolicy",
  component: ModalCancelPolicy,
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
  },
} satisfies Meta<typeof ModalCancelPolicy>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalCancelPolicyWithState = (args: { isOpen?: boolean; onRequestClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <ModalCancelPolicy
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          args.onRequestClose?.();
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalCancelPolicyWithState {...args} />,
  args: {
    isOpen: false,
    onRequestClose: fn(),
  },
};

export const Open: Story = {
  render: (args) => <ModalCancelPolicyWithState {...args} />,
  args: {
    isOpen: true,
    onRequestClose: fn(),
  },
};
