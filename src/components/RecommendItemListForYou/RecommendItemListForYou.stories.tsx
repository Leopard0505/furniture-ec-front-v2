import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { RecommendItemListForYou } from "./RecommendItemListForYou";

const meta = {
  title: "Components/RecommendItemListForYou",
  component: RecommendItemListForYou,
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
} satisfies Meta<typeof RecommendItemListForYou>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
