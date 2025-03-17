import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

function getJwtToken() {}
async function refreshJwtToken() {}

export const apiClient = async <T, R = AxiosResponse<T>>(
  requestConfig: AxiosRequestConfig<T>
): Promise<R> => {
  // if (!user) {
  //   throw new Error("undefined currentuser");
  // }
  const jwtToken = getJwtToken(); // 👈 任意の方法で保持しているJWT

  const config: AxiosRequestConfig = {
    ...requestConfig,
    url: requestConfig.url,
    method: requestConfig.method,
    data: requestConfig.data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
      ...requestConfig.headers,
    },
  };

  const customAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  });

  let isRetry = false;
  customAxios.interceptors.response.use(
    (res: AxiosResponse<T>) => res,
    async (error: AxiosError) => {
      if (error.response?.status === 401 && isRetry) {
        // 👈 JWT有効期限切れかつ一回目のリクエストである時
        isRetry = true;
        await refreshJwtToken();

        const originalRequestConfig = error.config!;
        return customAxios.request(originalRequestConfig); // 👈 再度リクエスト
      } else {
        return Promise.reject(error);
      }
    }
  );
  return customAxios.request(config);
};
