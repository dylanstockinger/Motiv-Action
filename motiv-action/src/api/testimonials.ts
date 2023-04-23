import { supabase } from "@/lib/supabase";

export async function getTestimonials() {
  const {
    data: testimonials,
    error,
    count,
  } = await supabase.from("testimonials").select(`*`);
  if (error) throw error;
  return {
    testimonials,
    count,
  };
}

export type TestimonialsResponse = Awaited<ReturnType<typeof getTestimonials>>;
