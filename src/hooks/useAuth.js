import React, { useState, useEffect, createContext, useContext } from "react";
import { getUserType } from "../helpers/UserTypeHelper";
import AuthService from "../services/AuthService";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Cargando",
    email: "Cargando",
    role: getUserType(),
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true);
      const response = await AuthService.getUserInfoById();

      setLoading(false);
      if (response.status === 200) {
        const user = response.data.user;
        setUser({
          name: user.firstName + " " + user.lastName,
          email: user.email,
          role: getUserType(),
        });
      } else {
        setError("Error 404, no encontrado");
      }
    };
    getUserInfo();
  }, []);

  return (
    <AuthContext.Provider value={[user, loading, error]}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be within a AuthProvider");
  }
  return context;
}
