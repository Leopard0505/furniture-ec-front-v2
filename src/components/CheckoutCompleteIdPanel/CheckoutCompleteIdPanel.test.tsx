import { render, screen } from '@testing-library/react';
import { CheckoutCompleteIdPanel } from './CheckoutCompleteIdPanel';
import { generateId } from './generateId';

jest.mock('./generateId', () => ({
  generateId: jest.fn(),
}));

describe('CheckoutCompleteIdPanel', () => {
  it('renders correctly with the generated ID', () => {
    const mockId = '12345';
    (generateId as jest.Mock).mockReturnValue(mockId);

    render(<CheckoutCompleteIdPanel className="test-class" />);

    expect(screen.getByText('購入ID')).toBeInTheDocument();
    expect(screen.getByText(mockId)).toBeInTheDocument();
    expect(
      screen.getByText(/お問い合わせ時に、こちらの番号をお伺いする場合がございます。/)
    ).toBeInTheDocument();
    expect(screen.getByText(/お手元に保存をお願いいたします。/)).toBeInTheDocument();
  });
});
