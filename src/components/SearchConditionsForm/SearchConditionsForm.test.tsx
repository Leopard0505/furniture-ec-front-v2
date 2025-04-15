import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { SearchConditionsForm } from './SearchConditionsForm';
import * as HookUseCategory from '../../hooks/useCategory';
import * as HookUseQueryParams from '../../hooks/useQueryParams';

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
      jest.spyOn(HookUseCategory, 'useCategory').mockImplementation(() => ({
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
      jest.spyOn(HookUseCategory, 'useCategory').mockImplementation(() => ({
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
      jest.spyOn(HookUseQueryParams, 'useQueryParams').mockImplementation(() => ({
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

      jest.spyOn(HookUseCategory, 'useCategory').mockImplementation(() => ({
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
