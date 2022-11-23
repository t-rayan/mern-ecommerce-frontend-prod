import axios from "axios";

const user = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://mern-ecommerce-api-prod-production.up.railway.app/api",
  headers: {
    Authorization: user && `Bearer ${user?.token}`,
  },
});

const authInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://mern-ecommerce-api-prod-production.up.railway.app/api",
  headers: {
    Authorization: `Bearer ${user?.token}`,
  },
});

export { instance, authInstance };
