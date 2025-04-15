import { screen, /* fireEvent */ } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { CartItem } from './CartItem';
import { useCart } from '../../hooks/useCart';

jest.mock('../../hooks/useCart');

const mockUseCart = useCart as jest.Mock;

describe('CartItem Component', () => {
  it('renders cart item details', () => {
    const item = {
      id: 1,
      name: 'Test Item',
      price: 1000,
      quantity: 2,
      image: { url: 'https://placehold.co/400x400', alt: 'Test Image' },
      variation: { size: 'M', color: 'Red' },
      stock: true,
    };

    mockUseCart.mockReturnValue({ removeFromCart: jest.fn() });

    renderWithRouter(<CartItem item={item} />);

    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('金額：1000')).toBeInTheDocument();
    expect(screen.getByText('数量：2')).toBeInTheDocument();
  });

  // it('calls removeFromCart when remove button is clicked', () => {
  //   const item = {
  //     id: 1,
  //     name: 'Test Item',
  //     price: 1000,
  //     quantity: 2,
  //     image: { url: 'https://placehold.co/400x400', alt: 'Test Image' },
  //     variation: { size: 'M', color: 'Red' },
  //     stock: true,
  //   };

  //   const removeFromCartMock = jest.fn();
  //   mockUseCart.mockReturnValue({ removeFromCart: removeFromCartMock });

  //   renderWithRouter(<CartItem item={item} />);

  //   const removeButton = screen.getByRole('button');
  //   fireEvent.click(removeButton);

  //   expect(removeFromCartMock).toHaveBeenCalledWith(1);
  // });

  // it('calls removeFromCart when Enter key is pressed on remove button', () => {
  //   const item = {
  //     id: 1,
  //     name: 'Test Item',
  //     price: 1000,
  //     quantity: 2,
  //     image: { url: 'https://placehold.co/400x400', alt: 'Test Image' },
  //     variation: { size: 'M', color: 'Red' },
  //     stock: true,
  //   };

  //   const removeFromCartMock = jest.fn();
  //   mockUseCart.mockReturnValue({ removeFromCart: removeFromCartMock });

  //   renderWithRouter(<CartItem item={item} />);

  //   const removeButton = screen.getByRole('button');
  //   fireEvent.keyUp(removeButton, { key: 'Enter', code: 'Enter' });

  //   expect(removeFromCartMock).toHaveBeenCalledWith(1);
  // });
});
