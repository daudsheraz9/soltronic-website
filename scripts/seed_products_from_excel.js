const xlsx = require('xlsx');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in process.env.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function seed() {
  console.log("Reading Excel file...");
  const workbook = xlsx.readFile('public/Soltronic_Products_By_Category.xlsx');
  let allProducts = [];
  let globalIndex = 1;

  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const rawData = xlsx.utils.sheet_to_json(sheet);
    
    // Map sheet name to category
    let category = "GENERAL";
    if (sheetName.toLowerCase() === 'inverters') category = "inverters";
    else if (sheetName.toLowerCase() === 'batteries') category = "storage";
    else if (sheetName.toLowerCase() === 'panels') category = "panels";

    const mappedData = rawData.map((row) => {
      const title = row['Product Name'] || 'Unknown Product';
      
      let powerVal = "N/A";
      if (row['Rating (kW)']) powerVal = `${row['Rating (kW)']} kW`;
      else if (row['Battery Capacity (kWh)']) powerVal = `${row['Battery Capacity (kWh)']} kWh`;
      else if (row['Power (W)']) powerVal = `${row['Power (W)']} W`;
      
      const specs = {
        power: powerVal,
        frameThickness: row['Frame Thickness (mm)'] || "N/A",
        cellType: row['Cell Type'] || row['Type'] || "N/A",
        connector: row['Connector'] || "N/A",
        frameColor: row['Frame Color'] || "N/A",
        cell: row['Cell'] || "N/A",
        cellTechnology: row['Cell Technology'] || "N/A",
        cecModel: row['CEC Model'] || "N/A",
        mppt: row['MPPT'] ? row['MPPT'].toString() : "N/A",
        ipRating: row['IP Rating'] || "N/A",
        phase: row['Phase'] || "N/A",
        useApplication: row['Use Application'] || "N/A",
        usableEnergy: row['Usable Energy (kWh)'] ? `${row['Usable Energy (kWh)']} kWh` : "N/A",
        ratedVoltage: row['Rated Voltage (V)'] ? `${row['Rated Voltage (V)']} V` : "N/A",
        batteryType: row['Battery Type'] || "N/A"
      };

      const shipping = {
        weight: row['Weight (kg)'] ? `${row['Weight (kg)']} kg` : "N/A",
        qtyPerPallet: row['Qty per Pallet'] ? row['Qty per Pallet'].toString() : "N/A",
        dimension: row['Dimension (L*W*H mm)'] || "N/A"
      };

      const warrantyInfo = {
        productWarranty: row['Product Warranty (Years)'] ? `${row['Product Warranty (Years)']} Years` : "Standard",
        performanceWarranty: row['Performance Warranty (Years)'] ? `${row['Performance Warranty (Years)']} Years` : "Standard"
      };
      
      let priceStr = row['Prices'] ? row['Prices'].toString() : "Contact for price";
      if (priceStr && !priceStr.startsWith("Contact") && !priceStr.startsWith("$") && !priceStr.startsWith("Rs")) {
         priceStr = `Rs ${priceStr}`;
      }

      const imageLinks = row['Product Image Link'] 
        ? row['Product Image Link'].split(',').map(s => s.trim()).filter(Boolean) 
        : ["https://via.placeholder.com/300"];
      
      const prod = {
        id: globalIndex.toString(),
        slug: slugify(title),
        category: category,
        title: title,
        vendor: "By SOLTRONIC",
        description: row['Product Details'] || "",
        power: powerVal,
        efficiency: "N/A",
        warranty: warrantyInfo.productWarranty,
        image: imageLinks[0] || "https://via.placeholder.com/300",
        gallery: imageLinks.length > 0 ? imageLinks : ["https://via.placeholder.com/300"],
        price: priceStr,
        specifications: specs,
        shipping: shipping,
        warrantyInfo: warrantyInfo,
      };
      
      globalIndex++;
      return prod;
    });

    allProducts = allProducts.concat(mappedData);
  });

  console.log(`Found ${allProducts.length} products across all sheets to seed...`);

  console.log("Clearing existing products...");
  const { error: delError } = await supabase.from('products').delete().gt('id', '0');
  if (delError) {
    console.error("Error clearing existing products:", delError);
  }

  console.log("Inserting new products...");
  const { data, error } = await supabase
    .from('products')
    .upsert(allProducts, { onConflict: 'slug' });

  if (error) {
    console.error("Error inserting products:", error);
  } else {
    console.log("Successfully seeded products table from Excel.");
  }
}

seed();
