import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { HeaderTextLoginButton } from "./HeaderTextLoginButton";

const meta = {
  title: "Features/Shared/HeaderTextLoginButton",
  component: HeaderTextLoginButton,
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
} satisfies Meta<typeof HeaderTextLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
