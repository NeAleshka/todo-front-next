import Axios, { type AxiosRequestConfig } from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  withCredentials: true,
});

export const AppInstance = async <T>(
  config: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();

  const response = await axios.request<T>({
    ...config,
    cancelToken: source.token,
  });
  return response.data;
};
