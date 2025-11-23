import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { ItemSortField } from "./ItemSortField";

const meta = {
  title: "Components/ItemSortField",
  component: ItemSortField,
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
} satisfies Meta<typeof ItemSortField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
