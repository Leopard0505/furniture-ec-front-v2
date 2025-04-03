import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../test/utils/renderWithRouter';
import { SearchConditionsForm } from '../SearchConditionsForm';

// useQueryParamsのモック
jest.mock('../../../hooks/useQueryParams', () => ({
  useQueryParams: () => ({
    updateMultipleSearchParams: jest.fn(),
  }),
  QUERY_PARAM_REVIEW_SCORE: 'review_score',
  QUERY_PARAM_PRODUCT_CONDITION: 'product_condition',
  QUERY_PARAM_STOCK: 'stock',
  QUERY_PARAM_SHIPPING: 'shipping',
  QUERY_PARAM_MIN_PRICE: 'min_price',
  QUERY_PARAM_MAX_PRICE: 'max_price',
  QUERY_PARAM_PAGE: 'page',
}));

// 各hookのモック
jest.mock('../../../hooks/useReviewScore', () => ({
  useReviewScore: () => ({
    buttons: [
      { value: '5', text: '5', pressed: false },
      { value: '4', text: '4', pressed: false },
      { value: '3', text: '3', pressed: false },
      { value: '2', text: '2', pressed: false },
      { value: '1', text: '1', pressed: false },
    ],
    handleButtonClick: jest.fn(),
    clear: jest.fn(),
  }),
}));

jest.mock('../../../hooks/useProductCondition', () => ({
  useProductCondition: () => ({
    buttons: [
      { value: 'new', text: '新品', pressed: false },
      { value: 'used', text: '中古', pressed: false },
      { value: 'rental', text: 'レンタル', pressed: false },
    ],
    handleButtonClick: jest.fn(),
    clear: jest.fn(),
  }),
}));

jest.mock('../../../hooks/useStock', () => ({
  useStock: () => ({
    buttons: [
      { value: 'in_stock', text: '在庫あり', pressed: false },
      { value: 'out_of_stock', text: '在庫なし', pressed: false },
    ],
    handleButtonClick: jest.fn(),
    clear: jest.fn(),
  }),
}));

jest.mock('../../../hooks/useShipping', () => ({
  useShipping: () => ({
    buttons: [
      { value: 'free', text: '送料無料', pressed: false },
      { value: 'paid', text: '送料あり', pressed: false },
    ],
    handleButtonClick: jest.fn(),
    clear: jest.fn(),
  }),
}));

jest.mock('../../../hooks/usePrice', () => ({
  usePrice: () => ({
    price: {
      min: '',
      max: '',
    },
    handleMinPriceChange: jest.fn(),
    handleMaxPriceChange: jest.fn(),
    clear: jest.fn(),
  }),
}));

describe('SearchConditionsForm', () => {
  it('初期状態で正しくレンダリングされること', () => {
    renderWithRouter(<SearchConditionsForm />);

    // 各セクションタイトルが表示されていることを確認
    expect(screen.getByText('商品価格')).toBeInTheDocument();
    expect(screen.getByText('カテゴリ')).toBeInTheDocument();
    expect(screen.getByText('レビュー')).toBeInTheDocument();
    expect(screen.getByText('色')).toBeInTheDocument();
    expect(screen.getByText('商品状態')).toBeInTheDocument();
    expect(screen.getByText('在庫状況')).toBeInTheDocument();
    expect(screen.getByText('送料')).toBeInTheDocument();

    // 価格入力フィールドが表示されていることを確認
    expect(screen.getByText('下限価格')).toBeInTheDocument();
    expect(screen.getByText('上限価格')).toBeInTheDocument();

    // ボタンが表示されていることを確認
    expect(screen.getByText('この条件で検索する')).toBeInTheDocument();
    expect(screen.getByText('クリア')).toBeInTheDocument();
  });
});
