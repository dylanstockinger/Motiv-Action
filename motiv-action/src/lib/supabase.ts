import { Database } from "@/types/supabase";
import { createClient } from "../../node_modules/@supabase/supabase-js/dist/module/index";
import SupabaseClient from "../../node_modules/@supabase/supabase-js/dist/module/SupabaseClient";
import { storageConfig } from "./storage";

class DBConnection {
  private supabase: SupabaseClient<Database>;
  constructor() {
    this.supabase = createClient(
      import.meta.env.VITE_PUBLIC_SUPABASE_URI,
      import.meta.env.VITE_PUBLIC_SUPABASE_KEY,
      {
        db: {
          schema: "public",
        },
        ...storageConfig,
      }
    );
  }

  get db() {
    return this.supabase;
  }
}

export const supabase = new DBConnection().db;
