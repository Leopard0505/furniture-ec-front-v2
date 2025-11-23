import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Dropdown } from "./Dropdown";
import type { DropdownOption } from "./Dropdown.types";

const meta = {
  title: "Features/Shared/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    options: {
      control: "object",
      description: "ドロップダウンのオプション配列",
      table: {
        type: { summary: "DropdownOption[]" },
      },
    },
    placeholder: {
      control: "text",
      description: "プレースホルダーテキスト",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "選択してください" },
      },
    },
    onChange: {
      action: "value-changed",
      description: "値変更時のハンドラ",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: DropdownOption[] = [
  { value: "option1", label: "オプション1" },
  { value: "option2", label: "オプション2" },
  { value: "option3", label: "オプション3" },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: "選択してください",
    onChange: fn(),
  },
};

export const WithManyOptions: Story = {
  args: {
    options: [
      { value: "option1", label: "オプション1" },
      { value: "option2", label: "オプション2" },
      { value: "option3", label: "オプション3" },
      { value: "option4", label: "オプション4" },
      { value: "option5", label: "オプション5" },
    ],
    placeholder: "選択してください",
    onChange: fn(),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: defaultOptions,
    placeholder: "カテゴリを選択",
    onChange: fn(),
  },
};
