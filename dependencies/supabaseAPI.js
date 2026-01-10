import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm';


const supabaseUrl = 'https://sozuycuqojhcjuvpakhd.supabase.co/';
const supabaseKey = 'sb_publishable_oupvKZJpRuJBIkdQ9udX-Q_DMja5KBv';

export const supabase = createClient(supabaseUrl, supabaseKey);