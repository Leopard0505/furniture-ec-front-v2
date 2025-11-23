import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { RadioGroup } from "./RadioGroup";
import type { RadioType } from "../Radio/Radio";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: "text",
      description: "ラジオボタンのグループ名",
      table: {
        type: { summary: "string" },
      },
    },
    options: {
      control: "object",
      description: "ラジオボタンのオプション配列",
      table: {
        type: { summary: "RadioType[]" },
      },
    },
    onChangeSelectOption: {
      action: "option-selected",
      description: "オプション選択時のハンドラ",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions: RadioType[] = [
  { id: "option1", checked: false, label: "オプション1" },
  { id: "option2", checked: false, label: "オプション2" },
  { id: "option3", checked: false, label: "オプション3" },
];

export const Default: Story = {
  args: {
    name: "options",
    options: defaultOptions,
    onChangeSelectOption: fn(),
  },
};

export const WithManyOptions: Story = {
  args: {
    name: "options",
    options: [
      { id: "option1", checked: false, label: "オプション1" },
      { id: "option2", checked: false, label: "オプション2" },
      { id: "option3", checked: false, label: "オプション3" },
      { id: "option4", checked: false, label: "オプション4" },
      { id: "option5", checked: false, label: "オプション5" },
    ],
    onChangeSelectOption: fn(),
  },
};
