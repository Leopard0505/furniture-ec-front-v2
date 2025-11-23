import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portal } from "./Portal";
import { useEffect } from "react";

const meta = {
  title: "Features/Shared/Portal",
  component: Portal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        const portalEl = document.createElement("div");
        portalEl.id = "portal";
        document.body.appendChild(portalEl);
        return () => {
          document.body.removeChild(portalEl);
        };
      }, []);
      return <Story />;
    },
  ],
  argTypes: {
    children: {
      control: "object",
      description: "ポータルに表示するコンテンツ",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ padding: "20px", background: "white", border: "1px solid #ccc" }}>ポータルコンテンツ</div>,
  },
};
