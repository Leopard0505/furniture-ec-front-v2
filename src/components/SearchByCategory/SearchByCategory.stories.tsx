import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { SearchByCategory } from "./SearchByCategory";

const meta = {
  title: "Components/SearchByCategory",
  component: SearchByCategory,
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
    items: {
      control: "object",
      description: "カテゴリアイテムの配列",
      table: {
        type: { summary: "{ id: string, to: string, src: string, alt: string }[]" },
      },
    },
  },
} satisfies Meta<typeof SearchByCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = Array.from({ length: 12 }, (_, i) => ({
  id: `category-${i + 1}`,
  to: `/category/${i + 1}`,
  src: "https://via.placeholder.com/100",
  alt: `カテゴリ${i + 1}`,
}));

export const Default: Story = {
  args: {
    items: mockItems,
  },
};
