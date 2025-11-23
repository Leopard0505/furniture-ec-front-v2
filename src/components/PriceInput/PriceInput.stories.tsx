import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { PriceInput } from "./PriceInput";

const meta: Meta<typeof PriceInput> = {
  title: "Components/PriceInput",
  component: PriceInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
      description: "ラベルテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "入力値",
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      action: "value-changed",
      description: "値変更時のハンドラ",
    },
  },
} satisfies Meta<typeof PriceInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const PriceInputWithState = (args: { label: string; value?: string; onChange?: (value: string) => void }) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <PriceInput
      label={args.label}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <PriceInputWithState {...args} />,
  args: {
    label: "価格",
    value: "0",
    onChange: fn(),
  },
};

export const WithValue: Story = {
  render: (args) => <PriceInputWithState {...args} />,
  args: {
    label: "価格",
    value: "10000",
    onChange: fn(),
  },
};

export const MinPrice: Story = {
  render: (args) => <PriceInputWithState {...args} />,
  args: {
    label: "最低価格",
    value: "0",
    onChange: fn(),
  },
};

export const MaxPrice: Story = {
  render: (args) => <PriceInputWithState {...args} />,
  args: {
    label: "最高価格",
    value: "1000000",
    onChange: fn(),
  },
};
