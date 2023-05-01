import * as React from "react";
import { Routes } from "@/router/Routes";
import { Link } from "react-router-dom";
import SvgLogo from "../../assets/images/logo.svg";

const NavBar: React.FC = () => {
  return (
    <nav className="overflow-hidden	w-full h-full	flex justify-evenly m-10 ">
      <img className="w-20" src={SvgLogo} alt="logo" />
      <Link
        to={Routes.Home}
        className="float-lef text-red-400 text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 active:text-black"
      >
        Home
      </Link>
      <Link
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 "
        to={Routes.Profile}
      >
        Profile
      </Link>
      <Link
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 "
        to={Routes.Quotes}
      >
        Citation
      </Link>
      <Link
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400 "
        to={Routes.VoiceNotes}
      >
        Voice note
      </Link>
      <Link
        className="float-lef  text-center	leading-8 p-3.5 no-underline	text-base	hover:bg-yellow-600 active:bg-amber-400"
        to={Routes.Testimonials}
      >
        Testimonials
      </Link>
    </nav>
  );
};

export default NavBar;
