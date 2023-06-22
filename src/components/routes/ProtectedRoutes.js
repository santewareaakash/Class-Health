import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import React from "react";

const ProtectedRoutes = ({ allowedRoles }) => {
  const location = useLocation();
  const { roles } = useAuth();

  const content =
    roles && roles?.some((role) => allowedRoles?.includes(role)) ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );

  return content;
};

export default ProtectedRoutes;
