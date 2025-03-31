import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../test/utils/renderWithRouter';
import Items from '../Items';

// useQueryParamsのモック
jest.mock('../../../hooks/useQueryParams', () => ({
  useQueryParams: () => ({
    getQueryParamPage: () => 1,
    updateSearchParams: jest.fn(),
    getQueryParamSort: jest.fn(),
    getQueryParamOrder: jest.fn(),
  })
}));

describe('Items', () => {
  it('初期状態で正しくレンダリングされること', () => {
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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('../../../hooks/useQueryParams'), 'useQueryParams').mockImplementation(() => ({
      getQueryParamPage: () => 1,
      updateSearchParams: mockUpdateSearchParams,
      getQueryParamSort: jest.fn(),
      getQueryParamOrder: jest.fn(),
    }));

    renderWithRouter(<Items />);

    // ページ変更ボタンをクリック
    const nextPageButton = screen.getByText('2');
    fireEvent.click(nextPageButton);

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '2');
  });
});
