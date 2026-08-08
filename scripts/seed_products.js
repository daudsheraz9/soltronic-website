
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const content = fs.readFileSync('src/data/products.ts', 'utf8');
  const tsMatch = content.match(/export const productsData: Product\[\] = (\[[\s\S]*?\]);\n\nexport const/);
  
  if (!tsMatch) {
    console.error("Failed to parse productsData");
    process.exit(1);
  }

  const data = JSON.parse(tsMatch[1]);
  console.log(`Found ${data.length} products to seed...`);

  const { data: insertedData, error } = await supabase
    .from('products')
    .upsert(data, { onConflict: 'slug' });

  if (error) {
    console.error("Error inserting products:", error);
  } else {
    console.log("Successfully seeded products table.");
  }
}

seed();
