import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rkjteopehcrsgiteljtj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJranRlb3BlaGNyc2dpdGVsanRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1OTU4ODUsImV4cCI6MjAwNTE3MTg4NX0.0Vw9YvZSxL5HMmC-qFmxrdJ96RiihieFMZTkG316BzM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
