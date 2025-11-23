import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../../stores/store";
import { CartSummary } from "./CartSummary";

const meta = {
  title: "Components/CartSummary",
  component: CartSummary,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
  argTypes: {
    to: {
      control: "text",
      description: "リンク先のパス",
      table: {
        type: { summary: "string" },
      },
    },
    buttonText: {
      control: "text",
      description: "ボタンのテキスト",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof CartSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/checkout",
    buttonText: "注文手続きへ",
  },
};

export const ToCart: Story = {
  args: {
    to: "/cart",
    buttonText: "カートを見る",
  },
};
