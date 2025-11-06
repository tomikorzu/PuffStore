"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../types/User.type";

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLogged: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
      setUser(JSON.parse(user));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
