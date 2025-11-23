import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../../test/utils/renderWithRouter';
import { ModalItemAddedToCart } from './ModalItemAddedToCart';
import { useCart } from '../../hooks/useCart';

jest.mock('../../hooks/useCart');
const mockUseCart = useCart as jest.Mock;

// Portalコンポーネントのモック
jest.mock('../../../shared/components/Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('ModalItemAddedToCart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    mockUseCart.mockReturnValue({
      cartItems: [],
      cartItemCount: 1,
      lastAddedItem: {
        id: 1,
        name: '商品名１',
        quantity: 1,
        price: 1000,
        image: {
          id: 1,
          url: 'https://example.com/image.jpg',
          alt: '商品画像１',
        },
        variation: {
          size: 'S',
          color: 'Red',
        },
        stock: true,
      },
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    });

    renderWithRouter(<ModalItemAddedToCart />);

    expect(screen.getByText('Item added to cart:')).toBeInTheDocument();
    expect(screen.getByText('商品名１')).toBeInTheDocument();
  });

  it('does not render the component', () => {
    mockUseCart.mockReturnValue({
      cartItems: [],
      cartItemCount: 0,
      lastAddedItem: null,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    });

    const { container } = renderWithRouter(<ModalItemAddedToCart />);

    expect(container.firstChild).toBeNull();
  });

  it('closes the modal when overlay is clicked', () => {
    mockUseCart.mockReturnValue({
      cartItems: [],
      cartItemCount: 1,
      lastAddedItem: {
        id: 1,
        name: '商品名１',
        quantity: 1,
        price: 1000,
        image: {
          id: 1,
          url: 'https://example.com/image.jpg',
          alt: '商品画像１',
        },
        variation: {
          size: 'S',
          color: 'Red',
        },
        stock: true,
      },
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    });

    renderWithRouter(<ModalItemAddedToCart />);

    const overlay = screen.getByText('Item added to cart:').parentElement;
    fireEvent.click(overlay!);

    expect(overlay).not.toBeInTheDocument();
  });

  it('closes the modal when Enter key is pressed', () => {
    mockUseCart.mockReturnValue({
      cartItems: [],
      cartItemCount: 1,
      lastAddedItem: {
        id: 1,
        name: '商品名１',
        quantity: 1,
        price: 1000,
        image: {
          id: 1,
          url: 'https://example.com/image.jpg',
          alt: '商品画像１',
        },
        variation: {
          size: 'S',
          color: 'Red',
        },
        stock: true,
      },
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    });

    renderWithRouter(<ModalItemAddedToCart />);

    const overlay = screen.getByText('Item added to cart:').parentElement;
    fireEvent.keyUp(overlay!, { key: 'Enter', code: 'Enter' });

    expect(overlay).not.toBeInTheDocument();
  });
});
