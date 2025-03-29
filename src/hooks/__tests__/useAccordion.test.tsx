import { renderHook, act } from '@testing-library/react';
import { useAccordion } from '../useAccordion';

describe('useAccordion', () => {
  const baseClassName = 'base-class';
  const openClassName = 'open-class';

  it('初期状態でisOpenがfalseであること', () => {
    const { result } = renderHook(() => useAccordion(baseClassName, openClassName));
    expect(result.current.convertClassName).toBe(baseClassName);
  });

  it('クリック時にisOpenの状態が切り替わること', () => {
    const { result } = renderHook(() => useAccordion(baseClassName, openClassName));

    // 初期状態
    expect(result.current.convertClassName).toBe(baseClassName);

    // クリックして開く
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.convertClassName).toBe(`${baseClassName} ${openClassName}`);

    // クリックして閉じる
    act(() => {
      result.current.handleClick();
    });
    expect(result.current.convertClassName).toBe(baseClassName);
  });
});
