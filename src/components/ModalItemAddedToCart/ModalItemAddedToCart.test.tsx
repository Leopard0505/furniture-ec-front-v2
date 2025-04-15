import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { ModalItemAddedToCart } from './ModalItemAddedToCart';

// Mock useCart
jest.mock('../../hooks/useCart', () => ({
  useCart: jest.fn(() => ({
    cartItems: [],
    cartItemCount: 0,
    lastAddedItem: null,
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  })),
}));

// Portalコンポーネントのモック
jest.mock('../Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('ModalItemAddedToCart', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('../../hooks/useCart'), 'useCart').mockImplementation(() => ({
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
    }));

    renderWithRouter(<ModalItemAddedToCart />);

    expect(screen.getByText('Item added to cart:')).toBeInTheDocument();
    expect(screen.getByText('商品名１')).toBeInTheDocument();
  });

  it('does not render the component', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('../../hooks/useCart'), 'useCart').mockImplementation(() => ({
      cartItems: [],
      cartItemCount: 0,
      lastAddedItem: null,
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
    }));

    const { container } = renderWithRouter(<ModalItemAddedToCart />);

    expect(container.firstChild).toBeNull();
  });
});
