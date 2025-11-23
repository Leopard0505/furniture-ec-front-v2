import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../../../../app/store";
import { Cart } from "./Cart";

const meta = {
  title: "Features/Cart/Cart",
  component: Cart,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
