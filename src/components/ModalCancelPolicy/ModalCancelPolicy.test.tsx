import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { ModalCancelPolicy } from "./ModalCancelPolicy";

// Portalコンポーネントのモック
jest.mock('../Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("ModalCancelPolicy", () => {
  it("should not render when isOpen is false", () => {
    renderWithRouter(<ModalCancelPolicy isOpen={false} onRequestClose={jest.fn()} />);
    expect(screen.queryByText("キャンセルポリシー")).toBeNull();
  });

  it("should render when isOpen is true", () => {
    renderWithRouter(<ModalCancelPolicy isOpen={true} onRequestClose={jest.fn()} />);
    expect(screen.getByText("キャンセルポリシー")).toBeInTheDocument();
  });

  it("should call onRequestClose when the close button is clicked", () => {
    const onRequestClose = jest.fn();
    renderWithRouter(<ModalCancelPolicy isOpen={true} onRequestClose={onRequestClose} />);
    const closeButton = screen.getByText("閉じる");
    fireEvent.click(closeButton);
    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });
});
