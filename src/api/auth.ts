import { AxiosResponse } from "axios";
import { apiClient } from "../modules/axios/middleware";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

export const authLoginApi = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
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
    // TODO: ログに吐き出す
    console.error("Error login:", error);
    throw error;
  }
};
