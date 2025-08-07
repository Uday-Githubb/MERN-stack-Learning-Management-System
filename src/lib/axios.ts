import axios from "axios";

// Axios instance with JWT interceptor
// Replace baseURL with your Express API when wiring backend
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    const headers = (config.headers ?? {}) as Record<string, string>;
    headers.Authorization = `Bearer ${token}`;
    config.headers = headers as any;
  }
  return config;
});

api.interceptors.response.use(
  (r) => r,
  async (error) => {
    if (error.response?.status === 401) {
      // Attempt refresh (demo). In real app, call /auth/refresh
      const refresh = localStorage.getItem("refresh_token");
      if (refresh) {
        try {
          // const { data } = await axios.post("/auth/refresh", { refresh });
          // localStorage.setItem("token", data.token);
          // error.config.headers.Authorization = `Bearer ${data.token}`;
          // return api.request(error.config);
          localStorage.removeItem("token");
        } catch (_) {
          localStorage.removeItem("token");
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
