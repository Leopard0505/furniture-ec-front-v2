import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { store } from "../../stores/store";
import { FavoriteItemList } from "./FavoriteItemList";

const meta = {
  title: "Components/FavoriteItemList",
  component: FavoriteItemList,
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
} satisfies Meta<typeof FavoriteItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
