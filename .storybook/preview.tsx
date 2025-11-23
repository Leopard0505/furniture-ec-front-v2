import type { Preview } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { store } from "../src/stores/store";
import { config } from "../src/constants/cookie";
import "../src/assets/scss/_reset.scss";
import "../src/index.css";
import "../src/assets/css/variables.css";
import "../src/assets/css/color.css";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <CookiesProvider defaultSetOptions={config}>
          <Story />
        </CookiesProvider>
      </Provider>
    ),
  ],
};

export default preview;
