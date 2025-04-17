import { renderHook, act } from '@testing-library/react';
import { getWrapper } from '../../test/utils/renderHookWithStore';
import { useFavorite } from '../useFavorite';

describe('useFavorite', () => {
  const item = {
    id: 1,
    name: 'Test Item',
    price: 1000,
    image: {
      url: 'https://example.com/image.jpg',
      alt: 'Test Image',
    },
    variation: {
      size: 'M',
      color: 'Red',
    }
  };

  it('should initialize with an empty favorites list', () => {
    const wrapper = getWrapper();
    const { result } = renderHook(() => useFavorite(), { wrapper });
    expect(result.current.favoriteItems).toEqual([]);
  });

  it('should add an item to favorites', () => {
    const wrapper = getWrapper();
    const { result } = renderHook(() => useFavorite(), { wrapper });
    act(() => {
      result.current.addToFavorite(item);
    });
    expect(result.current.favoriteItems).toContain(item);
  });

  it('should remove an item from favorites', () => {
    const wrapper = getWrapper();
    const { result } = renderHook(() => useFavorite(), { wrapper });
    act(() => {
      result.current.addToFavorite(item);
      result.current.removeFromFavorite(item.id);
    });
    expect(result.current.favoriteItems).not.toContain(item);
  });

  it('should not add duplicate items to favorites', () => {
    const wrapper = getWrapper();
    const { result } = renderHook(() => useFavorite(), { wrapper });
    act(() => {
      result.current.addToFavorite(item);
      result.current.addToFavorite(item);
    });
    expect(result.current.favoriteItems).toEqual([item]);
  });
});
