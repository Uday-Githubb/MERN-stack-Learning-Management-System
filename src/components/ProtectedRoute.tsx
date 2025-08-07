import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthProvider";

export default function ProtectedRoute({ children, roles }: { children: React.ReactNode; roles?: ("Student"|"Instructor"|"Admin")[] }) {
  const { isAuthenticated, hasRole } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (roles && !hasRole(roles)) return <Navigate to="/" replace />;
  return <>{children}</>;
}
