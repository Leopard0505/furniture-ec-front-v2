import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { SearchField } from "./SearchField";

const meta = {
  title: "Features/Items/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    word: {
      control: "text",
      description: "検索ワード",
      table: {
        type: { summary: "string" },
      },
    },
    onChange: {
      action: "word-changed",
      description: "検索ワード変更時のハンドラ",
    },
    handleSearch: {
      action: "searched",
      description: "検索実行時のハンドラ",
    },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

const SearchFieldWithState = (args: { word?: string; onChange?: (value: string) => void; handleSearch?: () => Promise<void> }) => {
  const [word, setWord] = useState(args.word || "");
  return (
    <SearchField
      word={word}
      onChange={(value) => {
        setWord(value);
        args.onChange?.(value);
      }}
      handleSearch={async () => {
        await args.handleSearch?.();
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <SearchFieldWithState {...args} />,
  args: {
    word: '',
    onChange: fn(),
    handleSearch: fn(),
  },
};

export const WithInitialValue: Story = {
  render: (args) => <SearchFieldWithState {...args} />,
  args: {
    word: "ソファ",
    onChange: fn(),
    handleSearch: fn(),
  },
};
