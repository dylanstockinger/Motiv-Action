import { supabase } from "@/lib/supabase";

export async function getUsers() {
  const { data: users, error, count } = await supabase.from("user").select(`*`);
  if (error) throw error;
  return {
    users,
    count,
  };
}

export type UserResponse = Awaited<ReturnType<typeof getUsers>>;
