import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { ModalCreditCardRegistration } from "./ModalCreditCardRegistration";

// Portalコンポーネントのモック
jest.mock('../Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("ModalCreditCardRegistration", () => {
  const mockOnRequestClose = jest.fn();
  const mockOnSubmit = jest.fn();

  const defaultProps = {
    isOpen: true,
    onRequestClose: mockOnRequestClose,
    onSubmit: mockOnSubmit,
  };

  it("renders the modal with all input fields when open", () => {
    renderWithRouter(<ModalCreditCardRegistration {...defaultProps} />);

    // Check if the modal title is rendered
    expect(screen.getByText("クレジットカード登録")).toBeInTheDocument();

    // Check if all input fields are rendered
    expect(screen.getByText("クレジットカード番号")).toBeInTheDocument();
    expect(screen.getByText("カード名義")).toBeInTheDocument();
    expect(screen.getByText("有効期限（月/年）")).toBeInTheDocument();
    expect(screen.getByText("セキュリティコード")).toBeInTheDocument();
    expect(screen.getByText("国または地域")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    renderWithRouter(<ModalCreditCardRegistration {...defaultProps} isOpen={false} />);

    // Check that the modal is not rendered
    expect(screen.queryByText("クレジットカード登録")).not.toBeInTheDocument();
  });

  it("calls onRequestClose when the modal close button is clicked", () => {
    renderWithRouter(<ModalCreditCardRegistration {...defaultProps} />);

    // Simulate clicking the close button
    fireEvent.click(screen.getByRole("close-button"));
    expect(mockOnRequestClose).toHaveBeenCalled();
  });

  it("calls onSubmit with valid form data", async () => {
    renderWithRouter(<ModalCreditCardRegistration {...defaultProps} />);

    // Fill out the form
    fireEvent.change(screen.getByRole("cardNumber"), { target: { value: "4111111111111111" } });
    fireEvent.change(screen.getByRole("cardHolder"), { target: { value: "TARO YAMADA" } });
    fireEvent.change(screen.getByRole("expirationDate"), { target: { value: "12/25" } });
    fireEvent.change(screen.getByRole("securityCode"), { target: { value: "123" } });
    fireEvent.change(screen.getByRole("country"), { target: { value: "日本" } });

    // Submit the form
    fireEvent.submit(screen.getByRole("submit-button"));
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        cardNumber: "4111111111111111",
        cardHolder: "TARO YAMADA",
        expirationDate: "12/25",
        securityCode: "123",
        country: "日本",
      });
    });
  });

  it("displays validation errors for invalid input", async () => {
    renderWithRouter(<ModalCreditCardRegistration {...defaultProps} />);

    // Submit the form without filling out fields
    fireEvent.submit(screen.getByRole("submit-button"));
    // Check for validation error messages
    await waitFor(() => {
      expect(screen.getByText("クレジットカード番号が無効です")).toBeInTheDocument();
      expect(screen.getByText("カード名義を入力してください")).toBeInTheDocument();
    });
  });
});
