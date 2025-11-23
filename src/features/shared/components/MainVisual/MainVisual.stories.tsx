import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { MainVisual } from "./MainVisual";

const meta: Meta<typeof MainVisual> = {
  title: "Features/Shared/MainVisual",
  component: MainVisual,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
      description: "メインビジュアルアイテムの配列",
      table: {
        type: { summary: "{ id: string, to: string, src: string, alt: string }[]" },
      },
    },
  },
} satisfies Meta<typeof MainVisual>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { id: "1", to: "/items/1", src: "https://via.placeholder.com/1200x400", alt: "メインビジュアル1" },
  { id: "2", to: "/items/2", src: "https://via.placeholder.com/1200x400", alt: "メインビジュアル2" },
  { id: "3", to: "/items/3", src: "https://via.placeholder.com/1200x400", alt: "メインビジュアル3" },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { id: "1", to: "/items/1", src: "https://via.placeholder.com/1200x400", alt: "メインビジュアル1" },
    ],
  },
};
