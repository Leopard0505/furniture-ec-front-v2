import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { Pagenation } from "./Pagenation";

const meta: Meta<typeof Pagenation> = {
  title: "Features/Shared/Pagenation",
  component: Pagenation,
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
    currentPage: {
      control: "number",
      description: "現在のページ番号",
      table: {
        type: { summary: "number" },
      },
    },
    totalPages: {
      control: "number",
      description: "総ページ数",
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof Pagenation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
};
