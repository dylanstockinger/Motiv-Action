import * as React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  // const { isLogged } = useSelector(authState);
  if (/*!isLogged && */ location.pathname !== "/authentication") {
    // Redirect them to the /authentication page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate
        to="/authentication"
        state={{ from: location.pathname }}
        replace
      />
    );
  }
  return children;
};

export default ProtectedRoute;
