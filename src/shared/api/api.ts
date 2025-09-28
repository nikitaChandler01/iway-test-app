import axios, { AxiosError, type AxiosInstance } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

class ApiService {
  api: AxiosInstance;

  constructor(body: { apiInstance: AxiosInstance }) {
    this.api = body.apiInstance;
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  setAuthorizationHeader(token: string) {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  deleteAuthorizationHeader() {
    delete this.api.defaults.headers.common.Authorization;
  }

  private setResponseInterceptor() {
    this.api.interceptors.response.use(
      function (response) {
        return response;
      },
      (error: AxiosError) => {
        if (
          error.response?.status === 401 &&
          error.config?.headers.Authorization
        ) {
          console.log("Ошибка авторизации");
          localStorage.removeItem("access_token");
        }
        return Promise.reject(error);
      }
    );
  }

  private setRequestInterceptor() {
    this.api.interceptors.request.use((config) => {
      if (
        config.baseURL === import.meta.env.VITE_APP_API_URL &&
        !config.headers.Authorization
      ) {
        const token = localStorage.getItem("access_token");
        if (token) config.headers.Authorization = token;
      }
      return config;
    });
  }
}

const apiService = new ApiService({
  apiInstance: axiosInstance,
});

const { api } = apiService;

export { api, apiService };
