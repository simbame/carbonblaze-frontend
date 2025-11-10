import axios from "axios";
import { User } from "../(src)/common/types";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

// import axios from "axios";
// import { User } from "../(src)/common/types";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
//   withCredentials: true,
// });

export async function register(
  username: string,
  email: string,
  password: string
) {
  const res = await api.post<User>("/auth/register", {
    username,
    email,
    password,
  });
  return res.data;
}

export async function login(email: string, password: string) {
  const res = await api.post<User>("/auth/login", { email, password });
  return res.data;
}

export default api;
