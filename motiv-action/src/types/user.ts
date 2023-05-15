import { Session } from "@supabase/supabase-js";

export type SupabaseUser = {
  user: Session["user"] | null;
};
export type SupabaseSession = { session: Session | null };

export type SupabaseAuth = SupabaseUser & SupabaseSession;

export type User = {
  created_at: string | null;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
};

export type SupabaseUsers = {
  users: User[];
  count: number | null;
};
