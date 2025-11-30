import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://tnbgetvcabloyprkbqxp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuYmdldHZjYWJsb3lwcmticXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MTM2NjYsImV4cCI6MjA4MDA4OTY2Nn0.ElFeA5M8RtI8dY3nkmCvmKYKSNLGh15jGvI-wKHqqcU',
)

export { supabase }
