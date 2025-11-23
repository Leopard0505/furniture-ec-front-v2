import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { FavoriteButton } from "./FavoriteButton";

const meta = {
  title: "Features/Favorite/FavoriteButton",
  component: FavoriteButton,
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
} satisfies Meta<typeof FavoriteButton>;

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

export const NotFavorite: Story = {
  args: {
    item: {
      id: 2,
      name: "リクライニングソファ",
      price: 80000,
      image: {
        url: "https://via.placeholder.com/300",
        alt: "リクライニングソファ",
      },
      variation: {
        size: "L",
        color: "blue",
      },
    },
  },
};
