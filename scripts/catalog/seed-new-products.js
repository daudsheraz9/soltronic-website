const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

let env = {};
if (fs.existsSync('.env.local')) {
  const envLocal = fs.readFileSync('.env.local', 'utf8');
  envLocal.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      env[match[1].trim()] = match[2].trim();
    }
  });
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log("No Supabase credentials found in .env.local, skipping DB update.");
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  console.log("--- Seeding Supabase database ---");
  
  const productsTsContent = fs.readFileSync('src/data/products.ts', 'utf8');
  const jsonMatch = productsTsContent.match(/export const productsData: Product\[\] = (\[[\s\S]*?\]);/);
  
  if (!jsonMatch) {
    console.error("Could not parse productsData from src/data/products.ts");
    process.exit(1);
  }

  const productsData = JSON.parse(jsonMatch[1]);
  console.log(`Parsed ${productsData.length} products to seed.`);

  console.log("Deleting old products from Supabase...");
  const { error: delError } = await supabase.from('products').delete().neq('title', '___NON_EXISTENT___');
  if (delError) {
    console.error("Error deleting old products:", delError);
  } else {
    console.log("Old products cleared.");
  }

  const dbRows = productsData.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    category: p.category,
    vendor: p.vendor,
    description: p.description,
    power: p.power,
    efficiency: p.efficiency,
    warranty: p.warranty,
    status: p.status || 'In Stock',
    image: p.image,
    gallery: p.gallery,
    price: p.price,
    specifications: p.specifications,
    shipping: p.shipping,
    warrantyInfo: p.warrantyInfo
  }));

  console.log("Inserting new products into Supabase...");
  const { data, error } = await supabase.from('products').insert(dbRows);
  if (error) {
    console.error("Error inserting products to Supabase:", error.message);
    if (error.message.includes("column")) {
      console.log("Retrying insertion with fallback columns...");
      const fallbackRows = dbRows.map(p => {
        const copy = { ...p };
        delete copy.warrantyInfo;
        delete copy.shipping;
        delete copy.specifications;
        delete copy.status;
        return copy;
      });
      const { error: err2 } = await supabase.from('products').insert(fallbackRows);
      if (err2) console.error("Fallback insert error:", err2.message);
      else console.log("Fallback insertion successful!");
    }
  } else {
    console.log("Successfully seeded new products in Supabase!");
  }
}

seed();
