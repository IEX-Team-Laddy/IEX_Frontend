import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tbwltqtznyhpjdbloiez.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRid2x0cXR6bnlocGpkYmxvaWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3NjcxMjEsImV4cCI6MjAyMDM0MzEyMX0.Gea9wAwallad3l6e_mPmkEVTj9D2-fCfrMLoG-t6WMA"
);
