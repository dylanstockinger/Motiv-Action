import * as React from "react";
import "./Navbar.css";
import SvgLogo from "../../assets/images/logo.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="topnav">
      {" "}
      <img src={SvgLogo} alt="logo" />
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
