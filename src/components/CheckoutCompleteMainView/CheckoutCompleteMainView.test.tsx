import { render, screen } from '@testing-library/react';
import { CheckoutCompleteMainView } from './CheckoutCompleteMainView';

jest.mock('../CheckoutCompleteIdPanel/CheckoutCompleteIdPanel', () => ({
  CheckoutCompleteIdPanel: () => <div data-testid="checkout-complete-id-panel" />,
}));

describe('CheckoutCompleteMainView', () => {
  it('renders correctly with title and CheckoutCompleteIdPanel', () => {
    render(<CheckoutCompleteMainView className="test-class" />);

    expect(screen.getByText('注文が完了しました')).toBeInTheDocument();
    expect(screen.getByTestId('checkout-complete-id-panel')).toBeInTheDocument();
  });

  it('applies the provided className', () => {
    const { container } = render(<CheckoutCompleteMainView className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });
});
