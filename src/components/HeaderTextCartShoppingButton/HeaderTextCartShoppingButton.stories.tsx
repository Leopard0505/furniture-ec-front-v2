import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../../stores/store";
import { HeaderTextCartShoppingButton } from "./HeaderTextCartShoppingButton";

const meta = {
  title: "Components/HeaderTextCartShoppingButton",
  component: HeaderTextCartShoppingButton,
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
} satisfies Meta<typeof HeaderTextCartShoppingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
