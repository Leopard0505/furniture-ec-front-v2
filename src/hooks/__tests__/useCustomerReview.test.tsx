import { renderHook, act } from '@testing-library/react';
import { useCustomerReview } from '../useCustomerReview';
import type { ReviewItem } from '../../components/CustomerReview/CustomerReview.types';

describe('useCustomerReview', () => {
  const mockReviews: ReviewItem[] = [
    {
      id: 1,
      user: { id: 101, name: 'Alice', avatar: 'avatar1.png' },
      rating: '5',
      comment: 'Excellent product!',
      createdAt: '2025-04-01T10:00:00Z',
    },
    {
      id: 2,
      user: { id: 102, name: 'Bob', avatar: 'avatar2.png' },
      rating: '4',
      comment: 'Very good, but could be improved.',
      createdAt: '2025-04-02T11:00:00Z',
    },
    {
      id: 3,
      user: { id: 103, name: 'Charlie', avatar: 'avatar3.png' },
      rating: '3',
      comment: 'Average experience.',
      createdAt: '2025-04-03T12:00:00Z',
    },
    {
      id: 4,
      user: { id: 104, name: 'Diana', avatar: 'avatar4.png' },
      rating: '2',
      comment: 'Not satisfied.',
      createdAt: '2025-04-04T13:00:00Z',
    },
  ];

  it('should initialize with the first chunk of reviews', () => {
    const { result } = renderHook(() => useCustomerReview({ reviews: mockReviews }));

    expect(result.current.showReviews).toEqual(mockReviews.slice(0, 2));
    expect(result.current.hasNextReviews).toBe(true);
  });

  it('should load more reviews when handleShowMoreReviews is called', () => {
    const { result } = renderHook(() => useCustomerReview({ reviews: mockReviews }));

    act(() => {
      result.current.handleShowMoreReviews();
    });

    expect(result.current.showReviews).toEqual(mockReviews.slice(0, 4));
    expect(result.current.hasNextReviews).toBe(false);
  });

  it('should not load more reviews if all reviews are already shown', () => {
    const { result } = renderHook(() => useCustomerReview({ reviews: mockReviews }));

    act(() => {
      result.current.handleShowMoreReviews();
    });

    act(() => {
      result.current.handleShowMoreReviews();
    });

    expect(result.current.showReviews).toEqual(mockReviews);
    expect(result.current.hasNextReviews).toBe(false);
  });

  it('should handle empty reviews gracefully', () => {
    const { result } = renderHook(() => useCustomerReview({ reviews: [] }));

    expect(result.current.showReviews).toEqual([]);
    expect(result.current.hasNextReviews).toBe(false);
  });
});
