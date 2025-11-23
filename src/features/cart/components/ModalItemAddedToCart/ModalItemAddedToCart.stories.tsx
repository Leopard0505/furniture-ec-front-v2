import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { store } from "../../../../app/store";
import { ModalItemAddedToCart } from "./ModalItemAddedToCart";
import { useEffect } from "react";
import { actions } from "../../store/cart/cartSlice";

const meta = {
  title: "Features/Cart/ModalItemAddedToCart",
  component: ModalItemAddedToCart,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        const portalEl = document.createElement("div");
        portalEl.id = "portal";
        document.body.appendChild(portalEl);
        return () => {
          document.body.removeChild(portalEl);
        };
      }, []);
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ],
} satisfies Meta<typeof ModalItemAddedToCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async () => {
    store.dispatch(
      actions.addItem({
        id: 1,
        name: "テスト商品",
        price: 10000,
        quantity: 1,
        image: {
          url: "https://via.placeholder.com/300",
          alt: "テスト商品",
        },
        variation: {
          size: "M",
          color: "red",
        },
        stock: true,
      })
    );
  },
};
