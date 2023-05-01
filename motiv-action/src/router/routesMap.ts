import Router, { Routes } from "./Routes";
import { Home } from "@/pages/Home";
import { Quotes } from "@/pages/Quotes";
import { Testimonials } from "@/pages/Testimonials";
import { VoiceNotes } from "@/pages/VoiceNotes";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import Profile from "@/pages/user/Profile";

const routesMap: Router[] = [
  {
    index: true,
    Element: Home,
    path: Routes.Home,
  },
  {
    Element: SignIn,
    path: Routes.SignIn,
  },
  {
    Element: SignUp,
    path: Routes.SignUp,
  },
  {
    Element: Profile,
    path: Routes.Profile,
    isProtected: true,
  },
  {
    Element: Quotes,
    path: Routes.Quotes,
  },
  {
    Element: Testimonials,
    path: Routes.Testimonials,
  },
  {
    Element: VoiceNotes,
    path: Routes.VoiceNotes,
  },
];

export default routesMap;
