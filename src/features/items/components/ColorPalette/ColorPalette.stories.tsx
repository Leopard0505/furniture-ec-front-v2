import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPalette } from "./ColorPalette";

const meta = {
  title: "Features/Items/ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
