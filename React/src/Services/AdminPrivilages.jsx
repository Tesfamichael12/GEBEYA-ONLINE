import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SERVICE_ROLE_KEY;
export const supabaseadmin = createClient(supabaseUrl, supabaseKey);
