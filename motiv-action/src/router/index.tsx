/** Router package */
import { Route, Routes, useLocation } from "react-router";
import ProtectedRoute from "./ProtectedRoutes";
/** routesMap */
import routesMap from "./routesMap";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      {routesMap.map(({ Element, path, isProtected, index }, key) => (
        <Route
          element={
            isProtected ? (
              <ProtectedRoute>
                <Element />
              </ProtectedRoute>
            ) : (
              <Element />
            )
          }
          path={path}
          index={index}
          key={key}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
