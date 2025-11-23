import type { Meta, StoryObj } from "@storybook/react-vite";
import { FooterCopyright } from "./FooterCopyright";

const meta = {
  title: "Features/Shared/FooterCopyright",
  component: FooterCopyright,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FooterCopyright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
