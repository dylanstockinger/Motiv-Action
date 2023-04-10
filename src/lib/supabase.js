import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URI, SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient(SUPABASE_URI, SUPABASE_KEY);

