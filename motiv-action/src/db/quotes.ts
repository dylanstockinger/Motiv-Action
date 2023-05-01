import { supabase } from "@/lib/supabase";

export async function getQuotes() {
  const {
    data: quotes,
    error,
    count,
  } = await supabase.from("quotes").select(`*`);
  if (error) throw error;
  return {
    quotes,
    count,
  };
}

export type QuotesResponse = Awaited<ReturnType<typeof getQuotes>>;
