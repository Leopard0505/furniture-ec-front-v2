import { screen, fireEvent } from '@testing-library/react';
import { ModalCookieConsent } from './ModalCookieConsent';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { renderWithRouter } from '../../test/utils/renderWithRouter';

// useCookieConsentフックのモック
jest.mock('../../hooks/useCookieConsent');

// Portalコンポーネントのモック
jest.mock('../Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('ModalCookieConsent', () => {
  const mockCloseModal = jest.fn();
  const mockHandleRequestClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('モーダルが閉じている場合、何もレンダリングされないこと', () => {
    (useCookieConsent as jest.Mock).mockReturnValue({
      isModalOpen: false,
      closeModal: mockCloseModal,
      handleRequestClose: mockHandleRequestClose,
    });

    const { container } = renderWithRouter(<ModalCookieConsent />);
    expect(container).toBeEmptyDOMElement();
  });

  it('モーダルが開いている場合、正しいコンテンツが表示されること', () => {
    (useCookieConsent as jest.Mock).mockReturnValue({
      isModalOpen: true,
      closeModal: mockCloseModal,
      handleRequestClose: mockHandleRequestClose,
    });

    renderWithRouter(<ModalCookieConsent />);

    expect(screen.getByText('あなたのプライバシー')).toBeInTheDocument();
    expect(screen.getByText(/「同意する」をクリックすると/)).toBeInTheDocument();
    expect(screen.getByText('同意しない')).toBeInTheDocument();
    expect(screen.getByText('同意する')).toBeInTheDocument();
  });

  it('「同意する」ボタンをクリックした時、handleRequestCloseが呼ばれること', () => {
    (useCookieConsent as jest.Mock).mockReturnValue({
      isModalOpen: true,
      closeModal: mockCloseModal,
      handleRequestClose: mockHandleRequestClose,
    });

    renderWithRouter(<ModalCookieConsent />);
    fireEvent.click(screen.getByText('同意する'));
    expect(mockHandleRequestClose).toHaveBeenCalledTimes(1);
  });

  it('「同意しない」ボタンをクリックした時、closeModalが呼ばれること', () => {
    (useCookieConsent as jest.Mock).mockReturnValue({
      isModalOpen: true,
      closeModal: mockCloseModal,
      handleRequestClose: mockHandleRequestClose,
    });

    renderWithRouter(<ModalCookieConsent />);
    fireEvent.click(screen.getByText('同意しない'));
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });
});
