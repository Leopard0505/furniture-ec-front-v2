import { screen, fireEvent, waitFor } from "@testing-library/react";
import { renderWithRouter } from "../../../../test/utils/renderWithRouter";
import { ModalDeliveryAddressChange } from "./ModalDeliveryAddressChange";

// Portalコンポーネントのモック
jest.mock('../../../shared/components/Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("ModalDeliveryAddressChange", () => {
  const mockOnRequestClose = jest.fn();
  const mockOnSubmit = jest.fn();

  const defaultProps = {
    isOpen: true,
    onRequestClose: mockOnRequestClose,
    onSubmit: mockOnSubmit,
  };

  it("renders the modal with all input fields when open", () => {
    renderWithRouter(<ModalDeliveryAddressChange {...defaultProps} />);

    // Check if the modal title is rendered
    expect(screen.getByText("お届け先の変更")).toBeInTheDocument();

    // Check if all input fields are rendered
    expect(screen.getByText("氏名")).toBeInTheDocument();
    expect(screen.getByText("電話番号")).toBeInTheDocument();
    expect(screen.getByText("郵便番号（半角数字）")).toBeInTheDocument();
    expect(screen.getByText("都道府県")).toBeInTheDocument();
    expect(screen.getByText("市区町村")).toBeInTheDocument();
    expect(screen.getByText("丁目・番地・号（数字は半角数字）")).toBeInTheDocument();
    expect(screen.getByText("建物名")).toBeInTheDocument();
    expect(screen.getByText("部屋番号（数字は半角数字）")).toBeInTheDocument();
  });

  it("does not render the modal when isOpen is false", () => {
    renderWithRouter(<ModalDeliveryAddressChange {...defaultProps} isOpen={false} />);

    // Check that the modal is not rendered
    expect(screen.queryByText("お届け先の変更")).not.toBeInTheDocument();
  });

  it("calls onRequestClose when the modal close button is clicked", () => {
    renderWithRouter(<ModalDeliveryAddressChange {...defaultProps} />);

    // Simulate clicking the close button
    fireEvent.click(screen.getByRole("close-button")); // Assuming "閉じる" is the close button text
    expect(mockOnRequestClose).toHaveBeenCalled();
  });

  it("calls onSubmit with valid form data", async () => {
    renderWithRouter(<ModalDeliveryAddressChange {...defaultProps} />);

    // Fill out the form
    fireEvent.change(screen.getByRole("name"), { target: { value: "山田花子" } });
    fireEvent.change(screen.getByRole("phonenumber"), { target: { value: "080-9876-5432" } });
    fireEvent.change(screen.getByRole("postcode"), { target: { value: "123-4567" } });
    fireEvent.change(screen.getByRole("prefecture"), { target: { value: "大阪府" } });
    fireEvent.change(screen.getByRole("municipality"), { target: { value: "大阪市" } });
    fireEvent.change(screen.getByRole("ding"), { target: { value: "2-2-2" } });
    fireEvent.change(screen.getByRole("buildname"), { target: { value: "大阪ビル" } });
    fireEvent.change(screen.getByRole("roomname"), { target: { value: "202" } });

    // Submit the form
    fireEvent.submit(screen.getByRole("submit-button"));
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  it("displays validation errors for invalid input", async () => {
    renderWithRouter(<ModalDeliveryAddressChange {...defaultProps} />);

    // Submit the form without filling out fields
    fireEvent.submit(screen.getByRole("submit-button"));

    // Check for validation error messages
    await waitFor(() => {
      expect(screen.getByText("氏名を入力してください")).toBeInTheDocument();
      expect(screen.getByText("電話番号を入力してください")).toBeInTheDocument();
    })
  });
});
