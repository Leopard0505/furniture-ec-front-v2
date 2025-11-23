import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { z } from "zod";
import { Form } from "./Form";
import { FormInputField } from "../FormInputField/FormInputField";

const meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    submitButtonText: {
      control: "text",
      description: "送信ボタンのテキスト",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "OK" },
      },
    },
    onSubmit: {
      action: "submitted",
      description: "フォーム送信時のハンドラ",
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleSchema = z.object({
  email: z.string().min(1, "必須です"),
});

export const Default: Story = {
  args: {
    schema: simpleSchema,
    defaultValues: {
      email: "",
    },
    submitButtonText: "送信",
    onSubmit: fn(),
    children: <FormInputField label="メールアドレス" name="email" />,
  },
};

const loginSchema = z.object({
  username: z.string().min(1, "必須です"),
  password: z.string().min(1, "必須です"),
});

export const LoginForm: Story = {
  args: {
    schema: loginSchema,
    defaultValues: {
      username: "",
      password: "",
    },
    submitButtonText: "ログイン",
    onSubmit: fn(),
    children: (
      <>
        <FormInputField label="ユーザー名" name="username" />
        <FormInputField label="パスワード" name="password" />
      </>
    ),
  },
};
