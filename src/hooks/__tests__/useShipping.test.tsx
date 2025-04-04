import { renderHook, act } from '@testing-library/react';
import { useShipping } from '../useShipping';

// useQueryParamsのモック
jest.mock('../useQueryParams', () => ({
  useQueryParams: () => ({
    getQueryParamMinPrice: jest.fn(),
    getQueryParamMaxPrice: jest.fn(),
    updateSearchParams: jest.fn(),
    updateMultipleSearchParams: jest.fn(),
    getQueryParamPage: jest.fn(),
    getQueryParamSort: jest.fn(),
    getQueryParamOrder: jest.fn(),
    getQueryParamReviewScore: jest.fn(),
    getQueryParamCondition: jest.fn(),
    getQueryParamStock: jest.fn(),
    getQueryParamShipping: jest.fn(),
  }),
}));

describe('useShipping', () => {
  it('初期状態でボタンが1つ存在すること', () => {
    const { result } = renderHook(() => useShipping());
    expect(result.current.buttons.length).toBe(1);
  });

  it('初期状態でボタンが押されていないこと', () => {
    const { result } = renderHook(() => useShipping());
    expect(result.current.buttons[0].pressed).toBe(false);
  });

  it('ボタンを押すとpressedがtrueになること', () => {
    const { result } = renderHook(() => useShipping());
    act(() => {
      result.current.handleButtonClick('free_shipping');
    });
    expect(result.current.buttons[0].pressed).toBe(true);
  });

  it('clearを実行するとpressedがfalseになること', () => {
    const { result } = renderHook(() => useShipping());
    act(() => {
      result.current.handleButtonClick('free_shipping');
      result.current.clear();
    });
    expect(result.current.buttons[0].pressed).toBe(false);
  });
});
