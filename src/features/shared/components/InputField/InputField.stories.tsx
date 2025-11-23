import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta = {
  title: "Features/Shared/InputField",
  component: InputField,
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
        defaultValue: { summary: "undefined" },
      },
    },
    placeholder: {
      control: "text",
      description: "プレースホルダーテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    errors: {
      control: "object",
      description: "エラーメッセージの配列",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "入力してください",
  },
};

export const WithLabel: Story = {
  args: {
    label: "メールアドレス",
    placeholder: "example@email.com",
  },
};

export const WithError: Story = {
  args: {
    label: "メールアドレス",
    placeholder: "example@email.com",
    errors: ["メールアドレスの形式が正しくありません"],
  },
};

export const WithMultipleErrors: Story = {
  args: {
    label: "パスワード",
    placeholder: "パスワードを入力",
    errors: [
      "8文字以上で入力してください",
      "英数字を含めてください",
    ],
  },
};
