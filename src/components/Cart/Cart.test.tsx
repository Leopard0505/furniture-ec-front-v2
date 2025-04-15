import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { Cart } from './Cart';
import { useCart } from '../../hooks/useCart';

jest.mock('../../hooks/useCart');

const mockUseCart = useCart as jest.Mock;

describe('Cart Component', () => {
  it('renders empty cart message when cart is empty', () => {
    mockUseCart.mockReturnValue({ cartItems: [] });

    renderWithRouter(<Cart recommendedItems={[]} />);

    expect(screen.getByAltText('Empty Cart')).toBeInTheDocument();
    expect(screen.getByText('カート')).toBeInTheDocument();
  });

  it('renders cart items and summary when cart is not empty', () => {
    mockUseCart.mockReturnValue({
      cartItems: [
        { id: 1, name: 'Item 1', quantity: 1, price: 1000, image: { url: 'https://placehold.co/400x400', alt: 'Image 1' }, variation: {}, stock: true },
        { id: 2, name: 'Item 2', quantity: 2, price: 2000, image: { url: 'https://placehold.co/400x400', alt: 'Image 2' }, variation: {}, stock: true },
      ],
    });

    renderWithRouter(<Cart recommendedItems={[]} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('カート')).toBeInTheDocument();
  });

  it('renders recommended items', () => {
    mockUseCart.mockReturnValue({ cartItems: [] });

    const recommendedItems = [
      {
        id: 1, // Changed to number
        name: 'Recommended Item 1',
        image: { url: 'https://placehold.co/400x400', alt: 'Image 1' },
        description: 'Description 1',
        review: "4.5",
      },
      {
        id: 2, // Changed to number
        name: 'Recommended Item 2',
        image: { url: 'https://placehold.co/400x400', alt: 'Image 2' },
        description: 'Description 2',
        review: "4.0",
      },
    ];

    renderWithRouter(<Cart recommendedItems={recommendedItems} />);

    expect(screen.getByText('Recommended Item 1')).toBeInTheDocument();
    expect(screen.getByText('Recommended Item 2')).toBeInTheDocument();
    expect(screen.getByText('閲覧履歴に基づくおすすめ商品')).toBeInTheDocument();
  });
});
