import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { CartItem } from "./CartItem";

const meta = {
  title: "Features/Cart/CartItem",
  component: CartItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    item: {
      control: "object",
      description: "カートアイテム",
      table: {
        type: { summary: "CartItem" },
      },
    },
  },
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: 1,
      name: "コンフォートソファ",
      price: 50000,
      quantity: 1,
      image: {
        url: "https://via.placeholder.com/300",
        alt: "コンフォートソファ",
      },
      variation: {
        size: "M",
        color: "red",
      },
      stock: true,
    },
  },
};

export const MultipleQuantity: Story = {
  args: {
    item: {
      id: 2,
      name: "リクライニングソファ",
      price: 80000,
      quantity: 3,
      image: {
        url: "https://via.placeholder.com/300",
        alt: "リクライニングソファ",
      },
      variation: {
        size: "L",
        color: "blue",
      },
      stock: true,
    },
  },
};
