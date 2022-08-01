import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'x-access-tokens': import.meta.env.VITE_API_KEY
    }
})

export default api;