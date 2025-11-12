import { ReactNode } from "react";

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
  islogged: boolean;
}

export interface LoginState {
  islogged: boolean;
  messagee: string;
}

export type Inputs = {
  email: string;
  password: string;
};

export interface LocalStorageUser {
  email: string;
  token: string;
  // Add any additional properties you need for local storage
}

// Define the shape of your authentication context
export interface AuthContextType {
  user: { token: string; email: string } | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Auth Provider Component
export interface AuthProviderProps {
  children: ReactNode;
}
