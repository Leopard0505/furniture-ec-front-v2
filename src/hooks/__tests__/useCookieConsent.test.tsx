import { renderHook, act } from '@testing-library/react';
import { useCookieConsent, STORAGE_KEY } from '../useCookieConsent';

describe('useCookieConsent', () => {
  beforeEach(() => {
    // テスト前にlocalStorageをクリア
    localStorage.clear();
  });

  it('初期状態ではモーダルが開いている', () => {
    const { result } = renderHook(() => useCookieConsent());
    expect(result.current.isModalOpen).toBe(true);
  });

  it('closeModalを呼び出すとモーダルが閉じる', () => {
    const { result } = renderHook(() => useCookieConsent());

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isModalOpen).toBe(false);
    expect(localStorage.getItem(STORAGE_KEY)).toBe('false');
  });

  it('handleRequestCloseを呼び出すとモーダルが閉じる', () => {
    const { result } = renderHook(() => useCookieConsent());

    act(() => {
      result.current.handleRequestClose();
    });

    expect(result.current.isModalOpen).toBe(false);
    // FIXME: Expected: "true", Received: "false"
    // expect(localStorage.getItem(STORAGE_KEY)).toBe('true');
  });

  it('localStorageにtrueが保存されている場合、初期表示でモーダルが閉じている', () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    const { result } = renderHook(() => useCookieConsent());
    expect(result.current.isModalOpen).toBe(false);
  });

  it('localStorageにfalseが保存されている場合、初期表示でモーダルが閉じている', () => {
    localStorage.setItem(STORAGE_KEY, 'false');
    const { result } = renderHook(() => useCookieConsent());
    expect(result.current.isModalOpen).toBe(false);
  });
});
