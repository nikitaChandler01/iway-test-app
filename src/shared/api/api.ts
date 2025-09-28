import axios, { type AxiosInstance } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

class ApiService {
  api: AxiosInstance;

  constructor() {
    this.api = axiosInstance;
  }

  setAuthorizationHeader(token: string) {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  deleteAuthorizationHeader() {
    delete this.api.defaults.headers.common.Authorization;
  }
}

const apiService = new ApiService();
const { api } = apiService;

export { api, apiService };
