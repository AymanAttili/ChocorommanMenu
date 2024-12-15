import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ncrmmrcorodshkfkxxwp.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcm1tcmNvcm9kc2hrZmt4eHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyOTAwMjMsImV4cCI6MjA0OTg2NjAyM30.yxn7P9aic6Bx2I3aLAWaogHahckoc6jc2XoL1BPzrIs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;