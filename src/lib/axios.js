import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_TOKEN;

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
          Authorization: `Bearer ${API_KEY}`,
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { axiosInstance }