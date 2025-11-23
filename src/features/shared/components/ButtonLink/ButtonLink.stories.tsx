import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { MemoryRouter } from "react-router";
import { ButtonLink } from "./ButtonLink";

const meta = {
  title: "Features/Shared/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    to: {
      control: "text",
      description: "リンク先のパス",
      table: {
        type: { summary: "string" },
      },
    },
    text: {
      control: "text",
      description: "リンクに表示するテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      action: "clicked",
      description: "クリック時のハンドラ",
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    text: "リンクボタン",
    onClick: fn(),
  },
};

export const ToItems: Story = {
  args: {
    to: "/items",
    text: "商品一覧へ",
    onClick: fn(),
  },
};
