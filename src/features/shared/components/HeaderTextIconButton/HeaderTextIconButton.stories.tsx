import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { HeaderTextIconButton } from "./HeaderTextIconButton";
import { FaHeart } from "react-icons/fa6";

const meta = {
  title: "Features/Shared/HeaderTextIconButton",
  component: HeaderTextIconButton,
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
    className: {
      control: "text",
      description: "追加のクラス名",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof HeaderTextIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    children: <FaHeart size={24} />,
  },
};

export const WithCustomIcon: Story = {
  args: {
    to: "/favorites",
    children: <FaHeart size={24} />,
  },
};
