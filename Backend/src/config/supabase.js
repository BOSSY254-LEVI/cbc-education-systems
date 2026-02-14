const { createClient } = require('@supabase/supabase-js');

// Supabase credentials - using environment variables with fallback to default values
const supabaseUrl = process.env.SUPABASE_URL || 'https://flkgcmrrpgcpemcitzht.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_CUT57nvkYqc79TK757BuHQ_6Zxxe0t8';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.warn('⚠️  Using default Supabase credentials from config. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env to override.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
