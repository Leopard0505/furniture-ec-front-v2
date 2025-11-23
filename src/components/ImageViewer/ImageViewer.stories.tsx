import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageViewer } from "./ImageViewer";
import type { ImageType } from "./ImageViewer.type";

const meta = {
  title: "Components/ImageViewer",
  component: ImageViewer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    mainView: {
      control: "object",
      description: "メイン画像",
      table: {
        type: { summary: "ImageType" },
      },
    },
    subView: {
      control: "object",
      description: "サブ画像の配列",
      table: {
        type: { summary: "ImageType[]" },
      },
    },
  },
} satisfies Meta<typeof ImageViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockMainView: ImageType = {
  url: "https://via.placeholder.com/500",
  alt: "メイン画像",
};

const mockSubViews: ImageType[] = [
  { url: "https://via.placeholder.com/150", alt: "サブ画像1" },
  { url: "https://via.placeholder.com/150", alt: "サブ画像2" },
  { url: "https://via.placeholder.com/150", alt: "サブ画像3" },
  { url: "https://via.placeholder.com/150", alt: "サブ画像4" },
];

export const Default: Story = {
  args: {
    mainView: mockMainView,
    subView: mockSubViews,
  },
};

export const SingleSubImage: Story = {
  args: {
    mainView: mockMainView,
    subView: [mockSubViews[0]],
  },
};

export const ManySubImages: Story = {
  args: {
    mainView: mockMainView,
    subView: [
      ...mockSubViews,
      { url: "https://via.placeholder.com/150", alt: "サブ画像5" },
      { url: "https://via.placeholder.com/150", alt: "サブ画像6" },
    ],
  },
};
