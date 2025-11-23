import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { SearchConditionsForm } from "./SearchConditionsForm";

const meta = {
  title: "Components/SearchConditionsForm",
  component: SearchConditionsForm,
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
} satisfies Meta<typeof SearchConditionsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
