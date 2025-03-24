import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAccessToken } from "../../hooks/useAccessToken";

// useAccessTokenフックのモック
jest.mock("../../hooks/useAccessToken");

describe("ProtectedRoute", () => {
  const mockNavigate = jest.fn();

  // react-router-domのNavigateコンポーネントをモック
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: () => {
      mockNavigate();
      return null;
    },
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("認証済みユーザーはホームページにリダイレクトされる", () => {
    const DATA_TESTID = "empty";

    // 認証済みの状態をモック
    (useAccessToken as jest.Mock).mockReturnValue({ token: { accessToken: "test-token" } });

    render(
      <BrowserRouter
        future={{
          // https://reactrouter.com/6.30.0/upgrading/future#v7_starttransition
          v7_startTransition: true,
          // https://reactrouter.com/6.30.0/upgrading/future#v7_relativesplatpath
          v7_relativeSplatPath: true,
        }}
      >
        <ProtectedRoute>
          <div data-testid={DATA_TESTID}>保護されたコンテンツ</div>
        </ProtectedRoute>
      </BrowserRouter>
    );

    expect(screen.queryByTestId(DATA_TESTID)).not.toBeInTheDocument();
  });

  it("未認証ユーザーは子要素を表示する", () => {
    const DATA_TESTID = "not-empty";
    // 未認証の状態をモック
    (useAccessToken as jest.Mock).mockReturnValue({ token: {} });

    render(
      <BrowserRouter
        future={{
          // https://reactrouter.com/6.30.0/upgrading/future#v7_starttransition
          v7_startTransition: true,
          // https://reactrouter.com/6.30.0/upgrading/future#v7_relativesplatpath
          v7_relativeSplatPath: true,
        }}
      >
        <ProtectedRoute>
          <div data-testid={DATA_TESTID}>保護されたコンテンツ</div>
        </ProtectedRoute>
      </BrowserRouter>
    );

    expect(screen.getByTestId(DATA_TESTID)).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
