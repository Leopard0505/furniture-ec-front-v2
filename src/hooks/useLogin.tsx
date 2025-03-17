import { useEffect, useState } from "react";
import { useApiAuth } from "../api/auth";
import { usePageNavigate } from "./usePageNavigate";
import { useAccessToken } from "./useAccessToken";

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { authLoginApi } = useApiAuth();
  const { toTopNavigate } = usePageNavigate();
  const { setToken } = useAccessToken();

  const login = async (): Promise<void> => {
    try {
      const { access_token } = await authLoginApi(email, password);

      setToken(access_token);

      toTopNavigate();
    } catch (error) {
      // TODO: フロントで制御したいことがあれば書く
    }
  }

  // developmentモードで値を注入
  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      setEmail(import.meta.env.VITE_APP_EMAIL);
      setPassword(import.meta.env.VITE_APP_PASSWORD);
    }
  }, []);

  return {
    email,
    password,
    setEmail,
    setPassword,
    login
  };
};
