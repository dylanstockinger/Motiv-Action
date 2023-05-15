import { supabase } from "@/lib/supabase";
import { SupabaseAuth, SupabaseUsers, User } from "@/types/user";
import { User as AuthUser } from "@supabase/supabase-js";

export async function signUp(values: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}): Promise<SupabaseAuth> {
  const { data, error: authError } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  });
  if (authError) {
    throw new Error(authError.message);
  }
  if (data.user) {
    const { error: userError } = await supabase.from("user").insert(values);
    if (userError) throw new Error(userError.message);
  }
  return data;
}

export async function signIn(values: {
  email: string;
  password: string;
}): Promise<SupabaseAuth> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function getAllUsers(): Promise<SupabaseUsers> {
  const { data: users, error, count } = await supabase.from("user").select(`*`);
  if (error) throw error;
  return {
    users,
    count,
  };
}

export async function getUser(id: number): Promise<User> {
  const { data: user, error } = await supabase
    .from("user")
    .select(`*`)
    .eq("id", id)
    .single();
  if (error) throw error;
  return user;
}

// create a function to get authenticated user from supabase
export async function getAuthenticatedUser(): Promise<AuthUser> {
  const { data: user, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user.user;
}

export type UserResponse = Awaited<ReturnType<typeof getAllUsers>>;
