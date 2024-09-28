import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType } from '../shared/interfaces/common.type';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  const login = (token: string, user: object) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticated(true);
  }

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
