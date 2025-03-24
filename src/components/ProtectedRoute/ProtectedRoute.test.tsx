import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAccessToken } from "../../hooks/useAccessToken";
import { TestBrowserRouter } from '../../test/utils/TestBrowserRouter';

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
      <TestBrowserRouter>
        <ProtectedRoute>
          <div data-testid={DATA_TESTID}>保護されたコンテンツ</div>
        </ProtectedRoute>
      </TestBrowserRouter>
    );

    expect(screen.queryByTestId(DATA_TESTID)).not.toBeInTheDocument();
  });

  it("未認証ユーザーは子要素を表示する", () => {
    const DATA_TESTID = "not-empty";
    // 未認証の状態をモック
    (useAccessToken as jest.Mock).mockReturnValue({ token: {} });

    render(
      <TestBrowserRouter>
        <ProtectedRoute>
          <div data-testid={DATA_TESTID}>保護されたコンテンツ</div>
        </ProtectedRoute>
      </TestBrowserRouter>
    );

    expect(screen.getByTestId(DATA_TESTID)).toBeInTheDocument();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
