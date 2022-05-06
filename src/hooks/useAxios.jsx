import { useContext } from "react";
import axios from "axios";
import AuthContext from "../services/AuthContext";

import { BASE_URL } from "../services/API";

const url = BASE_URL;

export default function useAxios() {
  const [auth] = useContext(AuthContext);
  // console.log(auth)
  const apiClient = axios.create({
    baseURL: url,
  });

  apiClient.interceptors.request.use(function (config) {
    const token = auth.jwt;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return apiClient;
}
