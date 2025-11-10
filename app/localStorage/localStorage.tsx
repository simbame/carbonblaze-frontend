import { LocalStorageUser } from "../(src)/common/types";

export const saveUser = (users: LocalStorageUser) => {
  try {
    localStorage.setItem("user", JSON.stringify(users));
  } catch (error) {
    console.error("Error saving user:", error);
  }
};

export const getUser = (): LocalStorageUser | null => {
  try {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error getting user:", error);
  }
  return null;
};

export const clearUser = () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Error clearing user:", error);
  }
};
