import axios from "axios";

const axiosInstance = (baseUrl: string, timeout?: number) =>
  axios.create({
    baseURL: baseUrl,
    timeout: timeout || 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

export default axiosInstance;
