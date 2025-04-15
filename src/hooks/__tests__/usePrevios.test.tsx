import { renderHook } from '@testing-library/react';
import { usePrevious } from '../usePrevios';

describe('usePrevious', () => {
  it('should return the previous value after update', () => {
    const { result, rerender } = renderHook((props) => usePrevious(props), {
      initialProps: 0,
    });

    rerender(1);
    expect(result.current).toBe(0);

    rerender(2);
    expect(result.current).toBe(1);
  });
});
