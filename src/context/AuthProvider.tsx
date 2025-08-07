import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// Types
export type Role = "Student" | "Instructor" | "Admin";
export interface AuthContextType {
  user: null | { email: string; role: Role };
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  hasRole: (roles: Role[]) => boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false,
  hasRole: () => false,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<null | { email: string; role: Role }>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    const role = localStorage.getItem("role") as Role | null;
    const email = localStorage.getItem("email");
    if (t && role && email) {
      setToken(t);
      setUser({ email, role });
    }
  }, []);

  const login = async (email: string, _password: string) => {
    // Demo: choose role by email prefix (replace with real API)
    const role: Role = email.startsWith("admin")
      ? "Admin"
      : email.startsWith("instructor")
      ? "Instructor"
      : "Student";
    const mockToken = "mock-jwt-token";
    localStorage.setItem("token", mockToken);
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);
    setToken(mockToken);
    setUser({ email, role });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      isAuthenticated: !!token,
      hasRole: (roles: Role[]) => (user ? roles.includes(user.role) : false),
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
