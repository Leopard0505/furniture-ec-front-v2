import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test/utils/renderWithRouter";
import { DeliveryAddressPanel } from "./DeliveryAddressPanel";

describe("DeliveryAddressPanel", () => {
  it("renders the delivery address panel with correct content", () => {
    renderWithRouter(<DeliveryAddressPanel />);

    expect(screen.getByText("会員情報と同じお届け先")).toBeInTheDocument();
    expect(screen.getByText("山田太郎")).toBeInTheDocument();
    expect(screen.getByText("〒000-0000 東京都○○区○○○ ○○ビル ○○○")).toBeInTheDocument();
    expect(screen.getByText("電話番号: 080-0000-0000")).toBeInTheDocument();
  });
});
