import { Navigate } from 'react-router';
import { useAccessToken } from "../../../auth/hooks/useAccessToken";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAccessToken();

  if (Object.keys(token).length !== 0) {
    // user is not authenticated
    return <Navigate to="/" />;
  }

  return children;
};
