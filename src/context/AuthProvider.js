import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

/*
  AuthProvider
  - Lightweight demo auth layer for MERN-style app
  - Stores JWT + role in localStorage (replace with real API calls in backend)
  Roles: "Student" | "Instructor" | "Admin"
*/

export const AuthContext = createContext({
  user: null as null | { email: string; role: "Student" | "Instructor" | "Admin" },
  token: null as string | null,
  login: async (_email: string, _password: string) => {},
  logout: () => {},
  isAuthenticated: false,
  hasRole: (_roles: string[]) => false,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<null | { email: string; role: "Student" | "Instructor" | "Admin" }>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    const role = localStorage.getItem("role") as "Student" | "Instructor" | "Admin" | null;
    const email = localStorage.getItem("email");
    if (t && role && email) {
      setToken(t);
      setUser({ email, role });
    }
  }, []);

  const login = async (email: string, _password: string) => {
    // Demo logic: choose role by email prefix. Replace with real API:
    // const res = await axios.post('/auth/login', { email, password });
    // setToken(res.data.token); setUser(res.data.user);
    const role = email.startsWith("admin")
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

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      isAuthenticated: !!token,
      hasRole: (roles: string[]) => (user ? roles.includes(user.role) : false),
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
