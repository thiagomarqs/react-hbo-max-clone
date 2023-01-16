import { AxiosRequestConfig } from "axios";

export const requestConfig: AxiosRequestConfig = {
  headers: {'Authorization': `${import.meta.env.VITE_API_TOKEN}`}
};