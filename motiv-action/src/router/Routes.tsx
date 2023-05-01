import * as React from "react";

export default interface Router {
  path: string;
  Element: React.FC;
  index?: boolean;
  isProtected?: boolean;
}

export enum Routes {
  Home = "/",
  Quotes = "/quotes",
  Profile = "/user/profile",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Testimonials = "/testimonials",
  VoiceNotes = "/voice-notes",
}
