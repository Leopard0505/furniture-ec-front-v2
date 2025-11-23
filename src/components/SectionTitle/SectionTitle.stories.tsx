import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle } from "./SectionTitle";

const meta = {
  title: "Components/SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: "text",
      description: "タイトルに表示するテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "タイトルのサイズ",
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "セクションタイトル",
  },
};

export const Small: Story = {
  args: {
    text: "小さいタイトル",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    text: "中サイズのタイトル",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    text: "大きいタイトル",
    size: "large",
  },
};
