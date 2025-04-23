import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { CreditCardRegistered } from "./CreditCardRegistered";
import "../ModalCreditCardRegistration/ModalCreditCardRegistration";

// Portalコンポーネントのモック
jest.mock('../Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("CreditCardRegistered", () => {
  it("renders credit card information when a card is registered", () => {
    renderWithRouter(
      <CreditCardRegistered
        cardNumber="**** **** **** 4242"
        cardHolder="山田太郎"
        expirationDate="11/30"
      />
    );
    expect(screen.getByText("カード番号:")).toBeInTheDocument();
    expect(screen.getByText("**** **** **** 4242")).toBeInTheDocument();
    expect(screen.getByText("カード名義:")).toBeInTheDocument();
    expect(screen.getByText("山田太郎")).toBeInTheDocument();
    expect(screen.getByText("有効期限:")).toBeInTheDocument();
    expect(screen.getByText("11/30")).toBeInTheDocument();
  });

  it("opens the modal when the '変更する' button is clicked", () => {
    renderWithRouter(
      <CreditCardRegistered
        cardNumber="**** **** **** 4242"
        cardHolder="山田太郎"
        expirationDate="11/30"
      />
    );
    fireEvent.click(screen.getByText("変更する"));
    expect(screen.queryByRole("modal")).toBeInTheDocument();
  });

  it("closes the modal when the 'Close' button is clicked", () => {
    renderWithRouter(
      <CreditCardRegistered
        cardNumber="**** **** **** 4242"
        cardHolder="山田太郎"
        expirationDate="11/30"
      />
    );
    fireEvent.click(screen.getByText("変更する"));
    fireEvent.click(screen.getByRole("close-button"));
    expect(screen.queryByRole("modal")).not.toBeInTheDocument();
  });

  it("renders a registration button when no credit card is registered", () => {
    renderWithRouter(
      <CreditCardRegistered
        cardNumber=""
        cardHolder=""
        expirationDate=""
      />
    );
    expect(screen.getByText("クレジットカードを登録する")).toBeInTheDocument();
  });
});
