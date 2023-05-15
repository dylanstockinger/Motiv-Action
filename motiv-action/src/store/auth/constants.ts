import { User } from "@supabase/supabase-js";

export type AuthState = {
  token: string | null;
  user: User | null;
};

export const initialState: AuthState = {
  token: null,
  user: null,
};
