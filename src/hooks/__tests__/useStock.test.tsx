import { renderHook, act } from '@testing-library/react';
import { useStock } from '../useStock';

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

describe('useStock', () => {
  it('初期状態でボタンが1つ存在すること', () => {
    const { result } = renderHook(() => useStock());
    expect(result.current.buttons.length).toBe(1);
  });

  it('初期状態でボタンが押されていないこと', () => {
    const { result } = renderHook(() => useStock());
    expect(result.current.buttons[0].pressed).toBe(false);
  });

  it('ボタンを押すとpressedがtrueになること', () => {
    const { result } = renderHook(() => useStock());
    act(() => {
      result.current.handleButtonClick('in_stock');
    });
    expect(result.current.buttons[0].pressed).toBe(true);
  });

  it('clearを実行するとpressedがfalseになること', () => {
    const { result } = renderHook(() => useStock());
    act(() => {
      result.current.handleButtonClick('in_stock');
      result.current.clear();
    });
    expect(result.current.buttons[0].pressed).toBe(false);
  });
});
