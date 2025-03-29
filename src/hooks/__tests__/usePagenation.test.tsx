import { renderHook, act } from '@testing-library/react';
import { usePagenation } from '../usePagenation';
import { useQueryParams } from '../useQueryParams';

// useQueryParamsのモック
jest.mock('../useQueryParams', () => ({
  useQueryParams: jest.fn(),
}));

describe('usePagenation', () => {
  const mockUpdateSearchParams = jest.fn();

  beforeEach(() => {
    (useQueryParams as jest.Mock).mockReturnValue({
      updateSearchParams: mockUpdateSearchParams,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('ページ番号の配列が正しく生成されること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 3,
        totalPages: 10,
      })
    );

    expect(result.current.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it('最初のページ付近で正しくページ番号が生成されること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 1,
        totalPages: 10,
      })
    );

    expect(result.current.pages).toEqual([1, 2, 3, 4, 5]);
  });

  it('最後のページ付近で正しくページ番号が生成されること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 9,
        totalPages: 10,
      })
    );

    expect(result.current.pages).toEqual([6, 7, 8, 9, 10]);
  });

  it('前のページに移動できること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 3,
        totalPages: 10,
      })
    );

    act(() => {
      result.current.handlePrevPage();
    });

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '2');
  });

  it('次のページに移動できること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 3,
        totalPages: 10,
      })
    );

    act(() => {
      result.current.handleNextPage();
    });

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '4');
  });

  it('特定のページを選択できること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 3,
        totalPages: 10,
      })
    );

    act(() => {
      result.current.handleSelectPage(5);
    });

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '5');
  });

  it('ページ数が5ページ未満の場合でも正しく動作すること', () => {
    const { result } = renderHook(() =>
      usePagenation({
        currentPage: 1,
        totalPages: 3,
      })
    );

    expect(result.current.pages).toEqual([1, 2, 3]);
  });
});
