import * as React from "react";
import "./Navbar.css";
const NavBar: React.FC = () => {
  return (
    <nav className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#profile">Profile</a>
      <a href="#citation">Citation</a>
      <a href="#voicenote">Voice note</a>
      <a href="#testimonials">Testimonials</a>
    </nav>
  );
};

export default NavBar;
