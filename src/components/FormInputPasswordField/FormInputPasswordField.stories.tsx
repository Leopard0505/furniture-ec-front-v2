import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInputPasswordField } from "./FormInputPasswordField";

const meta = {
  title: "Components/FormInputPasswordField",
  component: FormInputPasswordField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const schema = z.object({
        [context.args.name]: z.string().min(1, "必須です"),
      });
      const methods = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          [context.args.name]: "",
        },
      });
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
  argTypes: {
    name: {
      control: "text",
      description: "フィールド名",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: "text",
      description: "ラベルテキスト",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof FormInputPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "password",
    label: "パスワード",
  },
};

export const ConfirmPassword: Story = {
  args: {
    name: "confirmPassword",
    label: "パスワード（確認）",
  },
};
