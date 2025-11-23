import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModalCookieConsent } from "./ModalCookieConsent";
import { useEffect } from "react";

const meta = {
  title: "Features/Shared/ModalCookieConsent",
  component: ModalCookieConsent,
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
} satisfies Meta<typeof ModalCookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
