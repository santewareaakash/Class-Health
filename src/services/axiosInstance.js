import axios from "axios";
import { REACT_APP_BACKEND_URL } from "../configs/config";

export const axiosInstance = axios.create({
  baseURL: REACT_APP_BACKEND_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  var token = localStorage.getItem("accessToken");

  config.headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  if (token) config.headers.Authorization = `${token}`;

  return config;
});

// Add a response interceptor || Middleware for 401
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      localStorage.clear();
      setTimeout(() => {
        window.location.replace("/login");
      }, 500);
    } else {
      return Promise.reject(error);
    }
  }
);
