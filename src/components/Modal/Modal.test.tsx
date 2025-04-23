import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { Modal } from "./Modal";

describe("Modal Component", () => {
  const onCloseMock = jest.fn();

  const renderModal = () =>
    renderWithRouter(
      <Modal title="Test Modal" onClose={onCloseMock}>
        <p>Modal Content</p>
      </Modal>
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the modal with title and children", () => {
    renderModal();
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    renderModal();
    const closeButton = screen.getByRole("close-button");
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the escape key is pressed", () => {
    renderModal();
    fireEvent.keyUp(screen.getByRole("overlay"), { key: "Escape", code: "Escape" });
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("disables body scroll when the modal is open", () => {
    renderModal();
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores body scroll when the modal is unmounted", () => {
    const { unmount } = renderModal();
    unmount();
    expect(document.body.style.overflow).toBe("auto");
  });
});
