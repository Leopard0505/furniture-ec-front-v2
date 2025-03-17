import { useEffect, useState } from "react";
import { authLoginApi } from "../api/auth";
import { usePageNavigate } from "./usePageNavigate";

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { toTopNavigate } = usePageNavigate();

  const login = async (): Promise<void> => {
    try {
      console.log('login', { email, password });

      const response = await authLoginApi(email, password);
      console.log('reponse', response);

      // TODO: 認証情報をstoreに保持する

      toTopNavigate();
    } catch (error) {
      alert(error);
      // TODO: エラーハンドリング
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
