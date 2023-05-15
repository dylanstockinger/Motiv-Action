import { useToken } from "@/hooks/useAuth";
import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Routes } from "./Routes";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  const token = useToken();
  if (!token && location.pathname !== Routes.SignIn) {
    // Redirect them to the /authentication page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate
        to={Routes.SignIn}
        state={{ from: location.pathname }}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoute;
