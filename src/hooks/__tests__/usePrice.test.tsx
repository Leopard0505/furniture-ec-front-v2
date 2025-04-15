import { renderHook, act } from '@testing-library/react';
import { usePrice } from '../usePrice';
import { useQueryParams } from '../useQueryParams';

jest.mock('../useQueryParams');
const mockUseQueryParams = useQueryParams as jest.Mock;

describe('usePrice', () => {
  it('初期状態で正しくレンダリングされること', () => {
    mockUseQueryParams.mockReturnValue({
      getQueryParamMinPrice: () => '',
      getQueryParamMaxPrice: () => '',
      updateSearchParams: jest.fn(),
      updateMultipleSearchParams: jest.fn(),
      getQueryParamPage: jest.fn(),
      getQueryParamSort: jest.fn(),
      getQueryParamOrder: jest.fn(),
      getQueryParamReviewScore: jest.fn(),
      getQueryParamCondition: jest.fn(),
      getQueryParamStock: jest.fn(),
      getQueryParamShipping: jest.fn(),
      getQueryParamCategory: jest.fn(),
    });

    const { result } = renderHook(() => usePrice());

    expect(result.current.price).toEqual({
      min: '',
      max: '',
    });
  });

  it('URLパラメータから初期値が設定されること', () => {
    mockUseQueryParams.mockReturnValue({
      getQueryParamMinPrice: () => '1000',
      getQueryParamMaxPrice: () => '5000',
      updateSearchParams: jest.fn(),
      updateMultipleSearchParams: jest.fn(),
      getQueryParamPage: jest.fn(),
      getQueryParamSort: jest.fn(),
      getQueryParamOrder: jest.fn(),
      getQueryParamReviewScore: jest.fn(),
      getQueryParamCondition: jest.fn(),
      getQueryParamStock: jest.fn(),
      getQueryParamShipping: jest.fn(),
      getQueryParamCategory: jest.fn(),
    });

    const { result } = renderHook(() => usePrice());

    expect(result.current.price).toEqual({
      min: '1000',
      max: '5000',
    });
  });

  it('下限価格が更新されること', () => {
    const { result } = renderHook(() => usePrice());

    act(() => {
      result.current.handleMinPriceChange('2000');
    });

    expect(result.current.price).toEqual({
      min: '2000',
      max: '5000',
    });
  });

  it('上限価格が更新されること', () => {
    const { result } = renderHook(() => usePrice());

    act(() => {
      result.current.handleMaxPriceChange('8000');
    });

    expect(result.current.price).toEqual({
      min: '1000',
      max: '8000',
    });
  });

  it('クリア機能が動作すること', () => {
    mockUseQueryParams.mockReturnValue({
      getQueryParamMinPrice: () => '1000',
      getQueryParamMaxPrice: () => '5000',
      updateSearchParams: jest.fn(),
      updateMultipleSearchParams: jest.fn(),
      getQueryParamPage: jest.fn(),
      getQueryParamSort: jest.fn(),
      getQueryParamOrder: jest.fn(),
      getQueryParamReviewScore: jest.fn(),
      getQueryParamCondition: jest.fn(),
      getQueryParamStock: jest.fn(),
      getQueryParamShipping: jest.fn(),
      getQueryParamCategory: jest.fn(),
    });

    const { result } = renderHook(() => usePrice());

    // クリアを実行
    act(() => {
      result.current.clear();
    });

    expect(result.current.price).toEqual({
      min: '',
      max: '',
    });
  });
});
