import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta = {
  title: "Features/Shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "モーダルのタイトル",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: "object",
      description: "モーダルのコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    onClose: {
      action: "closed",
      description: "モーダルを閉じる時のハンドラ",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithState = (args: { title: string; children?: React.ReactNode; onClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return <Button text="モーダルを開く" onClick={() => setIsOpen(true)} />;
  return (
    <Modal
      title={args.title}
      onClose={() => {
        setIsOpen(false);
        args.onClose?.();
      }}
    >
      {args.children}
    </Modal>
  );
};

export const Default: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    title: "モーダルタイトル",
    children: <p>モーダルのコンテンツです</p>,
    onClose: fn(),
  },
};

export const WithForm: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    title: "フォーム",
    children: (
      <div>
        <input type="text" placeholder="入力してください" />
        <Button text="送信" />
      </div>
    ),
    onClose: fn(),
  },
};

export const WithLongContent: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    title: "長いコンテンツ",
    children: (
      <div>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>これは長いコンテンツの例です。{i + 1}</p>
        ))}
      </div>
    ),
    onClose: fn(),
  },
};
