import { renderHook, act } from '@testing-library/react';
import { useProductCondition } from '../useProductCondition';

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

describe('useProductCondition', () => {
  it('初期状態でボタンが3つ存在すること', () => {
    const { result } = renderHook(() => useProductCondition());
    expect(result.current.buttons.length).toBe(3);
  });

  it('初期状態でボタンが押されていないこと', () => {
    const { result } = renderHook(() => useProductCondition());
    expect(result.current.buttons.every(button => !button.pressed)).toBe(true);
  });

  it('ボタンを押すとpressedがtrueになること', () => {
    const { result } = renderHook(() => useProductCondition());
    act(() => {
      result.current.handleButtonClick('new');
    });
    expect(result.current.buttons[0].pressed).toBe(true);
  });

  it('別のボタンを押すとpressedがtrueになること', () => {
    const { result } = renderHook(() => useProductCondition());
    act(() => {
      result.current.handleButtonClick('used');
    });
    expect(result.current.buttons[1].pressed).toBe(true);
  });

  it('clearを実行するとpressedがfalseになること', () => {
    const { result } = renderHook(() => useProductCondition());
    act(() => {
      result.current.handleButtonClick('new');
      result.current.clear();
    });
    expect(result.current.buttons.every(button => !button.pressed)).toBe(true);
  });
});
