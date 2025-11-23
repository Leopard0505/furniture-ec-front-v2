import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { HeaderTextFavoriteButton } from "./HeaderTextFavoriteButton";

const meta = {
  title: "Features/Shared/HeaderTextFavoriteButton",
  component: HeaderTextFavoriteButton,
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
} satisfies Meta<typeof HeaderTextFavoriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
