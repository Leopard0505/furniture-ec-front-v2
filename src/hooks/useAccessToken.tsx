import { useCookies } from "react-cookie";

interface CookieValues {
  access_token?: string;
}

const key = 'ACCESS_TOKEN';

export const useAccessToken = () => {
  const [value, setCookie] = useCookies<typeof key, CookieValues>([key], { doNotParse: true });

  const setToken = (access_token: string) => {
    setCookie(key, access_token);
  };

  return {
    value,
    setToken,
  };
}
