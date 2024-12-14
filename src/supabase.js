
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://slvudnjyniqvobkphull.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsdnVkbmp5bmlxdm9ia3BodWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0NDA4NzYsImV4cCI6MjA0OTAxNjg3Nn0.t9RxKUKZewuro7BtitgxdV5udaiJwZpcqNI2XhLisO8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;