import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { FavoriteItem } from "./FavoriteItem";

const meta = {
  title: "Features/Favorite/FavoriteItem",
  component: FavoriteItem,
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
      description: "お気に入りアイテム",
      table: {
        type: { summary: "FavoriteItem" },
      },
    },
  },
} satisfies Meta<typeof FavoriteItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: {
      id: 1,
      name: "コンフォートソファ",
      price: 50000,
      image: {
        url: "https://via.placeholder.com/300",
        alt: "コンフォートソファ",
      },
      variation: {
        size: "M",
        color: "red",
      },
    },
  },
};
