import React, { createContext, useContext } from "react";

import { AuthContextType } from "../(src)/common/types";

// Create the Auth Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<{ email: string; token: string } | null>(
//     null
//   );
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   // Simulate a logout function
// //   const logout = () => {
// //     setUser(null);
// //     setIsAuthenticated(false);
// //     localStorage.removeItem("user"); // Clear user data
// //   };

//   // Check for stored user on component mount
// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       setUser(JSON.parse(storedUser));
// //       setIsAuthenticated(true);
// //     }
// //   }, []);

//   const value = {
//     user,
//     isAuthenticated,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// Custom useAuth hook
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
