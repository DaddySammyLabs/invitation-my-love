import axios from "axios";

const api = axios.create({
  baseURL: "https://ccb86f677f8f41cf.mokky.dev",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

export default api;
