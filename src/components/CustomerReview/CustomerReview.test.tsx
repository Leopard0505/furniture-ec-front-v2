import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { CustomerReview } from './CustomerReview';
import { useCustomerReview } from '../../hooks/useCustomerReview';
import { Reviews } from './CustomerReview.types';

jest.mock('../../hooks/useCustomerReview');

const mockUseCustomerReview = useCustomerReview as jest.MockedFunction<typeof useCustomerReview>;

describe('CustomerReview', () => {
  const mockReviews: Reviews = {
    average: "4.5",
    count: 10,
    items: [
      {
        id: 1,
        user: { id: 1, name: 'John Doe', avatar: 'avatar1.png' },
        rating: "5",
        comment: 'Great product!',
        createdAt: '2025-01-01'
      },
      {
        id: 2,
        user: { id: 2, name: 'Jane Smith', avatar: 'avatar2.png' },
        rating: "4",
        comment: 'Very useful.',
        createdAt: '2025-01-02'
      }
    ]
  };

  it('renders customer reviews correctly', () => {
    mockUseCustomerReview.mockReturnValue({
      showReviews: mockReviews.items,
      hasNextReviews: false,
      handleShowMoreReviews: jest.fn()
    });

    renderWithRouter(<CustomerReview reviews={mockReviews} />);

    expect(screen.getByText('平均評価: 4.5 (10件)')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Great product!')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Very useful.')).toBeInTheDocument();
  });

  it('calls handleShowMoreReviews when the button is clicked', () => {
    const handleShowMoreReviews = jest.fn();
    mockUseCustomerReview.mockReturnValue({
      showReviews: mockReviews.items,
      hasNextReviews: true,
      handleShowMoreReviews
    });

    renderWithRouter(<CustomerReview reviews={mockReviews} />);

    const button = screen.getByText('もっとレビューを見る');
    fireEvent.click(button);

    expect(handleShowMoreReviews).toHaveBeenCalled();
  });
});
