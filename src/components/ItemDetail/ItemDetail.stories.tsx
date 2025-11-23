import type { Meta, StoryObj } from "@storybook/react-vite";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../../stores/store";
import ItemDetail from "./ItemDetail";
import type { ItemType } from "./ItemDetail.type";

const meta = {
  title: "Components/ItemDetail",
  component: ItemDetail,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  argTypes: {
    item: {
      control: "object",
      description: "商品データ",
      table: {
        type: { summary: "ItemType" },
      },
    },
  },
} satisfies Meta<typeof ItemDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItem: ItemType = {
  id: 1,
  image: {
    url: "https://via.placeholder.com/500",
    alt: "商品画像",
  },
  subImages: [
    { url: "https://via.placeholder.com/150", alt: "サブ画像1" },
    { url: "https://via.placeholder.com/150", alt: "サブ画像2" },
  ],
  category: {
    id: 1,
    name: "ソファ",
  },
  brand: {
    id: 1,
    name: "ブランド名",
  },
  name: "コンフォートソファ",
  price: 50000,
  stock: true,
  overview: "快適な座り心地のソファです",
  description: "詳細な商品説明がここに入ります。",
  width: "200cm",
  height: "90cm",
  weight: "50kg",
  seller: {
    id: 1,
    name: "販売者名",
    about: "販売者についての説明",
  },
  shipping: {
    method: "宅配便",
    fee: "送料無料",
    area: "全国",
    days: 3,
  },
  materials: [
    { id: 1, name: "レザー" },
  ],
  handling: {
    return: true,
    returnDays: "7日以内",
    returnCondition: "未使用",
    returnFee: "送料無料",
    cancellation: true,
    cancellationDays: "発送前",
  },
  reviews: {
    average: "4.5",
    count: 120,
    items: [],
  },
  togetherItems: [],
};

export const Default: Story = {
  args: {
    item: mockItem,
  },
};
