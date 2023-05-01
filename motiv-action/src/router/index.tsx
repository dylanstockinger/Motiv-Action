/** Router package */
import { Route, Routes, useLocation } from "react-router";
/** routesMap */
import routesMap from "./routesMap";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      {routesMap.map(({ Element, path, index }, key) => (
        <Route element={<Element />} path={path} index={index} key={key} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
