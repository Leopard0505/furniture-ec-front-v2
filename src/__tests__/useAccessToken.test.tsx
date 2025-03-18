import { renderHook } from '@testing-library/react';
import { useAccessToken } from '../hooks/useAccessToken';

describe('useAccessToken', () => {
  it('トークンとsetToken関数を持つオブジェクトを返す', () => {
    const { result } = renderHook(() => useAccessToken());
    expect(result.current.token).toBe('');
    expect(result.current.setToken).toBeInstanceOf(Function);
  });

  it('setTokenが呼び出されたときにトークンを設定する', () => {
    const { result } = renderHook(() => useAccessToken());
    result.current.setToken('token');
    expect(result.current.token).toBe('token');
  });
});
