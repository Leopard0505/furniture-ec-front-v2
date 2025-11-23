import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { MemoryRouter } from "react-router";
import { LoginPortal } from "./LoginPortal";

const meta = {
  title: "Features/Auth/LoginPortal",
  component: LoginPortal,
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
    email: {
      control: "text",
      description: "デフォルトのメールアドレス",
      table: {
        type: { summary: "string" },
      },
    },
    password: {
      control: "text",
      description: "デフォルトのパスワード",
      table: {
        type: { summary: "string" },
      },
    },
    login: {
      action: "logged-in",
      description: "ログイン時のハンドラ",
    },
  },
} satisfies Meta<typeof LoginPortal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: "",
    password: "",
    login: fn(),
  },
};

export const WithDefaultValues: Story = {
  args: {
    email: "test@example.com",
    password: "password123",
    login: fn(),
  },
};
