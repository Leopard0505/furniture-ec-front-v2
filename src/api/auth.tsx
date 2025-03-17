import { AxiosResponse } from "axios";
import { apiClient } from "../modules/axios/middleware";
import { useLogging } from "../hooks/useLogging";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

interface SignupRequest {
  username: string;
  password: string;
  password_confirm: string;
}

export const useApiAuth = () => {
  const { report, errorReport } = useLogging();

  const authLoginApi = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      // FIXME: src/modules/axios/middleware.ts に寄せたい。
      report({ name: 'login', message: 'login', data: { email, password } });

      const response = await apiClient<
        LoginRequest,
        AxiosResponse<LoginResponse>
      >({
        url: "/auth/login",
        method: "POST",
        data: { username: email, password: password },
      });
      return response.data;
    } catch (error) {
      // FIXME: src/modules/axios/middleware.ts に寄せたい。
      if (error instanceof Error) {
        errorReport(error);
      }
      throw error;
    }
  };

  const authSignupApi = async (
    email: string,
    password: string
  ): Promise<void> => {
    try {
      // FIXME: src/modules/axios/middleware.ts に寄せたい。
      report({ name: 'signup', message: 'signup', data: { email, password } });

      await apiClient<SignupRequest, AxiosResponse<void>>({
        url: "/auth/signup",
        method: "POST",
        data: {
          username: email,
          password: password,
          password_confirm: password,
        },
      });
      return;
    } catch (error) {
      // FIXME: src/modules/axios/middleware.ts に寄せたい。
      if (error instanceof Error) {
        errorReport(error);
      }
      throw error;
    }
  };

  return {
    authLoginApi,
    authSignupApi,
  };
}
