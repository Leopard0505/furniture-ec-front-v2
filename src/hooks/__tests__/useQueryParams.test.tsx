import { renderHook, act } from '@testing-library/react';
import { useQueryParams } from '../useQueryParams';
import { useSearchParams } from 'react-router';

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

  it('初期状態で空のqueryParamsを返すこと', () => {
    const { result } = renderHook(() => useQueryParams());
    expect(result.current.queryParams).toEqual({});
  });

  it('URLパラメータが存在する場合、queryParamsに反映されること', () => {
    mockSearchParams.set('page', '2');
    mockSearchParams.set('sort', 'price');

    const { result } = renderHook(() => useQueryParams());
    expect(result.current.queryParams).toEqual({
      page: '2',
      sort: 'price',
    });
  });

  it('getQueryParamPageが正しく動作すること', () => {
    mockSearchParams.set('page', '3');
    const { result } = renderHook(() => useQueryParams());
    expect(result.current.getQueryParamPage()).toBe(3);
  });

  it('pageパラメータが存在しない場合、getQueryParamPageが1を返すこと', () => {
    mockSearchParams.delete('page');
    const { result } = renderHook(() => useQueryParams());
    expect(result.current.getQueryParamPage()).toBe(1);
  });

  it('updateSearchParamsが正しく動作すること', () => {
    mockSearchParams.set('page', '1');
    mockSearchParams.set('sort', 'price');

    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.updateSearchParams('page', '2');
    });

    expect(mockSetSearchParams).toHaveBeenCalledWith({
      page: '2',
      sort: 'price',
    });
  });
});
