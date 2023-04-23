import { supabase } from "@/lib/supabase";

export async function getVoiceNotes() {
  const {
    data: voiceNotes,
    error,
    count,
  } = await supabase.from("voicenotes").select(`*`);
  if (error) throw error;
  return {
    voiceNotes,
    count,
  };
}

export type VoiceNotesResponse = Awaited<ReturnType<typeof getVoiceNotes>>;
