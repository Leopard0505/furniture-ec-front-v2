import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { CouponApplicableItemList } from "./CouponApplicableItemList";
import type { LinkedImageType } from "../LinkedImage/LinkedImage";

const meta = {
  title: "Components/CouponApplicableItemList",
  component: CouponApplicableItemList,
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
      description: "クーポン適用可能商品の配列",
      table: {
        type: { summary: "LinkedImageType[]" },
      },
    },
  },
} satisfies Meta<typeof CouponApplicableItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems: LinkedImageType[] = [
  { id: "1", to: "/items/1", src: "https://via.placeholder.com/200", alt: "商品1" },
  { id: "2", to: "/items/2", src: "https://via.placeholder.com/200", alt: "商品2" },
  { id: "3", to: "/items/3", src: "https://via.placeholder.com/200", alt: "商品3" },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};
