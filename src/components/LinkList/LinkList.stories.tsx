import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { LinkList } from "./LinkList";

const meta = {
  title: "Components/LinkList",
  component: LinkList,
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
      description: "リンクアイテムの配列",
      table: {
        type: { summary: "{ id: string, to: string, src: string, alt: string }[]" },
      },
    },
  },
} satisfies Meta<typeof LinkList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { id: "1", to: "/items/1", src: "", alt: "商品1" },
  { id: "2", to: "/items/2", src: "", alt: "商品2" },
  { id: "3", to: "/items/3", src: "", alt: "商品3" },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};
