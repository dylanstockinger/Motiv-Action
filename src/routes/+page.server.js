  import { supabase } from "$lib/supabase";

  export async function load() {
    const { data } = await supabase.from("user").select();
    return {
      users: data ?? [],
    };
  }