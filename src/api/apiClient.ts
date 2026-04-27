import axios, { AxiosHeaders } from "axios";

const apiClient = axios.create({
  baseURL:
    `${import.meta.env.VITE_SUPABASE_URL}/rest/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: import.meta.env.AUTHORIZATION,
    apikey: import.meta.env.VITE_SUPABASE_ANON_KEY||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobXJvYXZvd3RiaWhnaXF5aXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyODc1MjIsImV4cCI6MjA4NTg2MzUyMn0.GEEdZTyYS1KzPLM8L_Q7NNsjgQHZmQ3BGsSvIPE7r4E",
  },
});

/**
 * Evita respuestas stale en lecturas GET del panel/cliente.
 * - Añade headers no-cache.
 * - Añade query param `_ts` para cache-busting en navegador/proxies.
 */
apiClient.interceptors.request.use((config) => {
  const method = config.method?.toLowerCase();
  if (method === "get") {
    const headers = AxiosHeaders.from(config.headers);
    headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    headers.set("Pragma", "no-cache");
    headers.set("Expires", "0");
    config.headers = headers;
    config.params = {
      ...(config.params ?? {}),
      _ts: Date.now(),
    };
  }
  return config;
});

export default apiClient;