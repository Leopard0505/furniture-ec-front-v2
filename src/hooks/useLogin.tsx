import { useEffect, useState } from "react";


export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = (): Promise<void> => {
    console.log('login', { email, password });
    return Promise.resolve();
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
