import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mnjgqslwueevjatrvuid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uamdxc2x3dWVldmphdHJ2dWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2Njk4NTYsImV4cCI6MjAzNzI0NTg1Nn0.6ZwVKczQtr5aDgypfyA1i0uTNkFmcXO2EAr8Dwr4Uk0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
