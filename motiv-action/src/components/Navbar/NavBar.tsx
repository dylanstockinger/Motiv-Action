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
      <h1 className="text-3xl font-bold text-orange-400	underline"> Ho</h1>
    </nav>
  );
};

export default NavBar;
