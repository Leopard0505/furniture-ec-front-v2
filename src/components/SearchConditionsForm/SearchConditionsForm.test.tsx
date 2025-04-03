import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { SearchConditionsForm } from './SearchConditionsForm';

// useQueryParamsのモック
jest.mock('../../hooks/useQueryParams', () => ({
  useQueryParams: () => ({
    updateSearchParams: jest.fn(),
    updateMultipleSearchParams: jest.fn(),
    getQueryParamPage: jest.fn(),
    getQueryParamSort: jest.fn(),
    getQueryParamOrder: jest.fn(),
    getQueryParamReviewScore: jest.fn(),
    getQueryParamCondition: jest.fn(),
    getQueryParamStock: jest.fn(),
    getQueryParamShipping: jest.fn(),
    getQueryParamMinPrice: jest.fn(),
    getQueryParamMaxPrice: jest.fn(),
    getQueryParamCategory: jest.fn(),
  }),
  QUERY_PARAM_REVIEW_SCORE: 'review_score',
  QUERY_PARAM_PRODUCT_CONDITION: 'product_condition',
  QUERY_PARAM_STOCK: 'stock',
  QUERY_PARAM_SHIPPING: 'shipping',
  QUERY_PARAM_MIN_PRICE: 'min_price',
  QUERY_PARAM_MAX_PRICE: 'max_price',
  QUERY_PARAM_CATEGORY: 'category',
  QUERY_PARAM_PAGE: 'page',
}));

describe('SearchConditionsForm', () => {
  describe('カテゴリ機能', () => {
    it('カテゴリボタンが正しく表示されること', () => {
      renderWithRouter(<SearchConditionsForm />);

      expect(screen.getByText('スマホ')).toBeInTheDocument();
      expect(screen.getByText('タブレット')).toBeInTheDocument();
      expect(screen.getByText('PC')).toBeInTheDocument();
    });

    it('カテゴリボタンをクリックするとhandleButtonClickが呼ばれること', () => {
      const mockHandleButtonClick = jest.fn();
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      jest.spyOn(require('../../hooks/useCategory'), 'useCategory').mockImplementation(() => ({
        buttons: [
          { value: 'smartphone', text: 'スマホ', pressed: false },
          { value: 'tablet', text: 'タブレット', pressed: false },
          { value: 'pc', text: 'PC', pressed: false },
        ],
        handleButtonClick: mockHandleButtonClick,
        clear: jest.fn(),
      }));

      renderWithRouter(<SearchConditionsForm />);

      fireEvent.click(screen.getByText('スマホ'));
      expect(mockHandleButtonClick).toHaveBeenCalledWith('smartphone');
    });

    it('クリアボタンをクリックするとclearが呼ばれること', () => {
      const mockClear = jest.fn();
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      jest.spyOn(require('../../hooks/useCategory'), 'useCategory').mockImplementation(() => ({
        buttons: [
          { value: 'smartphone', text: 'スマホ', pressed: false },
          { value: 'tablet', text: 'タブレット', pressed: false },
          { value: 'pc', text: 'PC', pressed: false },
        ],
        handleButtonClick: jest.fn(),
        clear: mockClear,
      }));

      renderWithRouter(<SearchConditionsForm />);

      fireEvent.click(screen.getByText('クリア'));
      expect(mockClear).toHaveBeenCalled();
    });

    it('検索ボタンをクリックすると選択されたカテゴリがクエリパラメータに含まれること', async () => {
      const mockUpdateMultipleSearchParams = jest.fn();
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      jest.spyOn(require('../../hooks/useQueryParams'), 'useQueryParams').mockImplementation(() => ({
        updateSearchParams: jest.fn(),
        updateMultipleSearchParams: mockUpdateMultipleSearchParams,
        getQueryParamPage: jest.fn(),
        getQueryParamSort: jest.fn(),
        getQueryParamOrder: jest.fn(),
        getQueryParamReviewScore: jest.fn(),
        getQueryParamCondition: jest.fn(),
        getQueryParamStock: jest.fn(),
        getQueryParamShipping: jest.fn(),
        getQueryParamMinPrice: jest.fn(),
        getQueryParamMaxPrice: jest.fn(),
        getQueryParamCategory: jest.fn(),
      }));

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      jest.spyOn(require('../../hooks/useCategory'), 'useCategory').mockImplementation(() => ({
        buttons: [
          { value: 'smartphone', text: 'スマホ', pressed: true },
          { value: 'tablet', text: 'タブレット', pressed: false },
          { value: 'pc', text: 'PC', pressed: false },
        ],
        handleButtonClick: jest.fn(),
        clear: jest.fn(),
      }));

      renderWithRouter(<SearchConditionsForm />);

      fireEvent.click(screen.getByText('この条件で検索する'));
      expect(mockUpdateMultipleSearchParams).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            key: 'category',
            value: 'smartphone',
          }),
        ])
      );
    });
  });
});
