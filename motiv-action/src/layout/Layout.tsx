import NavBar from "@/components/Navbar/NavBar";
import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
