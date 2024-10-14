import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

export const apiInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
});
