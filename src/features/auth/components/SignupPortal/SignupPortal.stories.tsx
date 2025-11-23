import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { SignupPortal } from "./SignupPortal";

const meta = {
  title: "Features/Auth/SignupPortal",
  component: SignupPortal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    email: {
      control: "text",
      description: "デフォルトのメールアドレス",
      table: {
        type: { summary: "string" },
      },
    },
    password: {
      control: "text",
      description: "デフォルトのパスワード",
      table: {
        type: { summary: "string" },
      },
    },
    signup: {
      action: "signed-up",
      description: "会員登録時のハンドラ",
    },
  },
} satisfies Meta<typeof SignupPortal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: "",
    password: "",
    name: "",
    namekana: "",
    phonenumber: "",
    postcode: "",
    prefecture: "",
    municipality: "",
    ding: "",
    buildname: "",
    roomname: "",
    signup: fn(),
  },
};
