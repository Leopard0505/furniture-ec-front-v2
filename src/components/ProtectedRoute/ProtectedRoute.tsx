import { Navigate } from "react-router-dom";
import { useAccessToken } from "../../hooks/useAccessToken";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAccessToken();

  if (token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }

  return children;
};
