import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../test/utils/renderWithRouter';
import Items from '../Items';
import { useQueryParams } from '../../../hooks/useQueryParams';

jest.mock('../../../hooks/useQueryParams');
const mockUseQueryParams = useQueryParams as jest.Mock;

describe('Items', () => {
  it('初期状態で正しくレンダリングされること', () => {
    mockUseQueryParams.mockReturnValue({
      getQueryParamPage: () => 1,
      updateSearchParams: jest.fn(),
      updateMultipleSearchParams: jest.fn(),
      getQueryParamSort: jest.fn(),
      getQueryParamOrder: jest.fn(),
      getQueryParamReviewScore: jest.fn(),
      getQueryParamCondition: jest.fn(),
      getQueryParamStock: jest.fn(),
      getQueryParamShipping: jest.fn(),
      getQueryParamMinPrice: jest.fn(),
      getQueryParamMaxPrice: jest.fn(),
      getQueryParamCategory: jest.fn(),
    });

    renderWithRouter(<Items />);

    // ページネーションコンポーネントが表示されていることを確認
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('ページ変更時にURLのクエリパラメータが更新されること', () => {
    const mockUpdateSearchParams = jest.fn();
    mockUseQueryParams.mockReturnValue({
      getQueryParamPage: () => 1,
      updateSearchParams: mockUpdateSearchParams,
      updateMultipleSearchParams: jest.fn(),
      getQueryParamSort: jest.fn(),
      getQueryParamOrder: jest.fn(),
      getQueryParamReviewScore: jest.fn(),
      getQueryParamCondition: jest.fn(),
      getQueryParamStock: jest.fn(),
      getQueryParamShipping: jest.fn(),
      getQueryParamMinPrice: jest.fn(),
      getQueryParamMaxPrice: jest.fn(),
      getQueryParamCategory: jest.fn(),
    });

    renderWithRouter(<Items />);

    // ページ変更ボタンをクリック
    const nextPageButton = screen.getByText('2');
    fireEvent.click(nextPageButton);

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '2');
  });
});
