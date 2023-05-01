import { supabase } from "@/lib/supabase";

export async function getFamousQuotes() {
  const {
    data: famousQuotes,
    error,
    count,
  } = await supabase.from("famous_quotes").select(`*`);
  if (error) throw error;
  return {
    famousQuotes,
    count,
  };
}

export async function getRandomFamousQuotes() {
  const {
    data: randomFamousQuotes,
    error,
    count,
  } = await supabase.from("random_famous_quote").select().single();
  if (error && !randomFamousQuotes) throw error;
  console.log(randomFamousQuotes);
  return {
    randomFamousQuotes,
    count,
  };
}

export type QuotesResponse = Awaited<ReturnType<typeof getFamousQuotes>>;
