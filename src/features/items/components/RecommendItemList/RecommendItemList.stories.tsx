import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { RecommendItemList } from "./RecommendItemList";
import type { LinkedImageType } from "../../../shared/components/LinkedImage/LinkedImage";

const meta = {
  title: "Features/Items/RecommendItemList",
  component: RecommendItemList,
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
      description: "おすすめ商品の配列",
      table: {
        type: { summary: "LinkedImageType[]" },
      },
    },
  },
} satisfies Meta<typeof RecommendItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems: LinkedImageType[] = [
  {
    id: "1",
    to: "/items/1",
    src: "https://via.placeholder.com/200",
    alt: "おすすめ商品1",
  },
  {
    id: "2",
    to: "/items/2",
    src: "https://via.placeholder.com/200",
    alt: "おすすめ商品2",
  },
  {
    id: "3",
    to: "/items/3",
    src: "https://via.placeholder.com/200",
    alt: "おすすめ商品3",
  },
  {
    id: "4",
    to: "/items/4",
    src: "https://via.placeholder.com/200",
    alt: "おすすめ商品4",
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};
