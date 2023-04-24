import * as React from "react";

import SvgLogo from "../../assets/images/logo.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="overflow-hidden	w-full h-full	flex justify-evenly m-10 ">
      {" "}
      <img className="w-20" src={SvgLogo} alt="logo" />
      <a
        className="float-lef text-red-400 text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 active:text-black"
        href="#home"
      >
        Home
      </a>
      <a
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 "
        href="#profile"
      >
        Profile
      </a>
      <a
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 "
        href="#citation"
      >
        Citation
      </a>
      <a
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 "
        href="#voicenote"
      >
        Voice note
      </a>
      <a
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400"
        href="#testimonials"
      >
        Testimonials
      </a>
    </nav>
  );
};

export default NavBar;
