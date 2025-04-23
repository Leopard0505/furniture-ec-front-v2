import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { CartSummary } from './CartSummary';
import { formattedPrice } from '../../utils/price';

describe('CartSummary', () => {
  it('renders correctly with given props and state', () => {
    renderWithRouter(
      <CartSummary to="/checkout" buttonText="Checkout" />
    );

    expect(screen.getByText('商品の小計：')).toBeInTheDocument();
    expect(screen.getByRole('presentation', { name: '商品の小計' })).toHaveTextContent(formattedPrice(0));
    expect(screen.getByText('配送料・サービス料：')).toBeInTheDocument();
    expect(screen.getByRole('presentation', { name: '配送料・サービス料' })).toHaveTextContent(formattedPrice(0));
    expect(screen.getByText('ご請求額：')).toBeInTheDocument();
    expect(screen.getByRole('presentation', { name: 'ご請求額' })).toHaveTextContent(formattedPrice(0));
    expect(screen.getByText('キャンセル・ポリシーについて')).toBeInTheDocument();
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });
});
