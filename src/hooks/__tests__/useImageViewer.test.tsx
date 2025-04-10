import { renderHook, act } from '@testing-library/react';
import { useImageViewer } from '../useImageViewer';
import { ImageType } from '../../components/ImageViewer/ImageViewer.type';

describe('useImageViewer', () => {
  const mainView: ImageType = { url: 'main.jpg', alt: 'Main Image' };
  const subView: ImageType[] = [
    { url: 'sub1.jpg', alt: 'Sub1 Image' },
    { url: 'sub2.jpg', alt: 'Sub2 Image' },
    { url: 'sub3.jpg', alt: 'Sub3 Image' },
  ];

  it('initializes with the correct main and sub images', () => {
    const { result } = renderHook(() => useImageViewer({ mainView, subView }));

    expect(result.current.mainImage).toEqual(mainView);
    expect(result.current.subImages).toEqual(subView);
  });

  it('updates mainImage and subImages when a subImage is clicked', () => {
    const { result } = renderHook(() => useImageViewer({ mainView, subView }));

    act(() => {
      result.current.handleSubImageClick(1);
    });

    expect(result.current.mainImage).toEqual(subView[1]);
    expect(result.current.subImages[1]).toEqual(mainView);
  });

  it('does not modify other subImages when a subImage is clicked', () => {
    const { result } = renderHook(() => useImageViewer({ mainView, subView }));

    act(() => {
      result.current.handleSubImageClick(0);
    });

    expect(result.current.subImages[1]).toEqual(subView[1]);
    expect(result.current.subImages[2]).toEqual(subView[2]);
  });
});
