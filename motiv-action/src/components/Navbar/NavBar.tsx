import * as React from "react";
import "./Navbar.css";
import MyIcon from "../../assets/images/Group 1.svg";
const NavBar: React.FC = () => {
  return (
    <nav className="topnav">
      <div>
        {" "}
        <MyIcon />{" "}
      </div>

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
