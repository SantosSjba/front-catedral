import axios from "axios";

const apiClient = axios.create({
  baseURL:
    import.meta.env.API_URL ||
    "https://vznzemijoprwsqflcvob.supabase.co/rest/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: import.meta.env.AUTHORIZATION,
    apikey: import.meta.env.API_KEY||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bnplbWlqb3Byd3NxZmxjdm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODYzNDIsImV4cCI6MjA4NDY2MjM0Mn0.L4FhiyUXXqBlSn5M7BoxqG8s6yghJEt6TfV0k0f8taI",
  },
});

export default apiClient;
