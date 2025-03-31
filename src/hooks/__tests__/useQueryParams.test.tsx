import { renderHook, act } from '@testing-library/react';
import { useQueryParams } from '../useQueryParams';
import { useSearchParams } from 'react-router';
import { QUERY_PARAM_SORT, QUERY_PARAM_ORDER } from '../useItemSort';

// Mock react-router
jest.mock('react-router', () => ({
  useSearchParams: jest.fn(),
}));

describe('useQueryParams', () => {
  const mockSetSearchParams = jest.fn();
  let mockSearchParams: URLSearchParams;

  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchParams = new URLSearchParams();
    (useSearchParams as jest.Mock).mockReturnValue([mockSearchParams, mockSetSearchParams]);
  });

  describe('getQueryParamPage', () => {
    it('有効なページ番号を正しく取得できること', () => {
      mockSearchParams.set('page', '3');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamPage()).toBe(3);
    });

    it('ページパラメータが存在しない場合、デフォルト値1を返すこと', () => {
      mockSearchParams.delete('page');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamPage()).toBe(1);
    });

    it('無効なページ番号の場合、デフォルト値1を返すこと', () => {
      mockSearchParams.set('page', 'invalid');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamPage()).toBe(1);
    });

    it('0以下のページ番号の場合、デフォルト値1を返すこと', () => {
      mockSearchParams.set('page', '0');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamPage()).toBe(1);
    });

    it('NaNとなるページ番号の場合、デフォルト値1を返すこと', () => {
      mockSearchParams.set('page', 'abc123');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamPage()).toBe(1);
    });
  });

  describe('getQueryParamSort', () => {
    it('ソートパラメータを正しく取得できること', () => {
      mockSearchParams.set(QUERY_PARAM_SORT, 'price');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamSort()).toBe('price');
    });

    it('ソートパラメータが存在しない場合、nullを返すこと', () => {
      mockSearchParams.delete(QUERY_PARAM_SORT);
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamSort()).toBeNull();
    });
  });

  describe('getQueryParamOrder', () => {
    it('オーダーパラメータを正しく取得できること', () => {
      mockSearchParams.set(QUERY_PARAM_ORDER, 'asc');
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamOrder()).toBe('asc');
    });

    it('オーダーパラメータが存在しない場合、nullを返すこと', () => {
      mockSearchParams.delete(QUERY_PARAM_ORDER);
      const { result } = renderHook(() => useQueryParams());
      expect(result.current.getQueryParamOrder()).toBeNull();
    });
  });

  describe('updateSearchParams', () => {
    it('既存のパラメータを保持しながら新しいパラメータを更新できること', () => {
      mockSearchParams.set('page', '1');
      mockSearchParams.set('sort', 'price');

      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.updateSearchParams('page', '2');
      });

      expect(mockSetSearchParams).toHaveBeenCalledWith(expect.any(Function));
      const updateFunction = mockSetSearchParams.mock.calls[0][0];
      const newParams = new URLSearchParams();
      newParams.set('page', '1');
      newParams.set('sort', 'price');
      const updatedParams = updateFunction(newParams);
      expect(updatedParams.get('page')).toBe('2');
      expect(updatedParams.get('sort')).toBe('price');
    });

    it('新しいパラメータを追加できること', () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.updateSearchParams('filter', 'new');
      });

      expect(mockSetSearchParams).toHaveBeenCalledWith(expect.any(Function));
      const updateFunction = mockSetSearchParams.mock.calls[0][0];
      const newParams = new URLSearchParams();
      const updatedParams = updateFunction(newParams);
      expect(updatedParams.get('filter')).toBe('new');
    });

    it('パラメータを削除できること', () => {
      mockSearchParams.set('page', '1');
      mockSearchParams.set('sort', 'price');

      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.updateSearchParams('sort', null);
      });

      expect(mockSetSearchParams).toHaveBeenCalledWith(expect.any(Function));
      const updateFunction = mockSetSearchParams.mock.calls[0][0];
      const newParams = new URLSearchParams();
      newParams.set('page', '1');
      newParams.set('sort', 'price');
      const updatedParams = updateFunction(newParams);
      expect(updatedParams.get('page')).toBe('1');
      expect(updatedParams.get('sort')).toBeNull();
    });

    it('複数のパラメータを同時に更新できること', () => {
      const { result } = renderHook(() => useQueryParams());

      act(() => {
        result.current.updateSearchParams('page', '2');
        result.current.updateSearchParams('sort', 'price');
      });

      expect(mockSetSearchParams).toHaveBeenCalledTimes(2);

      // 1回目の更新を確認
      const firstUpdateFunction = mockSetSearchParams.mock.calls[0][0];
      const firstParams = new URLSearchParams();
      const firstUpdatedParams = firstUpdateFunction(firstParams);
      expect(firstUpdatedParams.get('page')).toBe('2');

      // 2回目の更新を確認
      const secondUpdateFunction = mockSetSearchParams.mock.calls[1][0];
      const secondParams = new URLSearchParams();
      secondParams.set('page', '2'); // 1回目の更新結果を設定
      const secondUpdatedParams = secondUpdateFunction(secondParams);
      expect(secondUpdatedParams.get('page')).toBe('2');
      expect(secondUpdatedParams.get('sort')).toBe('price');
    });
  });
});
