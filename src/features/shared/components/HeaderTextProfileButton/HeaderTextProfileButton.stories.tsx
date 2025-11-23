import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { HeaderTextProfileButton } from "./HeaderTextProfileButton";

const meta = {
  title: "Features/Shared/HeaderTextProfileButton",
  component: HeaderTextProfileButton,
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
} satisfies Meta<typeof HeaderTextProfileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
