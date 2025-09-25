import axios, { type AxiosInstance } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

class ApiService {
    apiUrl: string;
    api: AxiosInstance;

    constructor(body: {
        apiInstance: AxiosInstance;
        API_URL: string;
    }) {
        this.apiUrl = body.API_URL;
        this.api = axiosInstance;
    }

    setAuthorizationHeader(token: string) {
        this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    deleteAuthorizationHeader() {
        delete this.api.defaults.headers.common.Authorization;
    }
}

const apiService = new ApiService({
    apiInstance: axiosInstance,
    API_URL: import.meta.env.VITE_APP_API_URL,
});

const { api, apiUrl } = apiService;

export { api, apiService, apiUrl };
