import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInputField } from "./FormInputField";

const meta = {
  title: "Features/Shared/FormInputField",
  component: FormInputField,
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
    role: {
      control: "text",
      description: "ロール属性",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof FormInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "email",
    label: "メールアドレス",
  },
};

export const WithRole: Story = {
  args: {
    name: "username",
    label: "ユーザー名",
    role: "username-input",
  },
};
