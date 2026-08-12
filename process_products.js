const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load env
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
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

// 1. Read Excel file
const excelPath = path.join(__dirname, 'public', 'Soltronic_Product_Master_Clean_12AUG.xlsx');
if (!fs.existsSync(excelPath)) {
  console.error('Excel file not found at:', excelPath);
  process.exit(1);
}

const workbook = xlsx.readFile(excelPath);
console.log('Sheet Names:', workbook.SheetNames);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rawData = xlsx.utils.sheet_to_json(sheet);

console.log('Total rows found in Excel:', rawData.length);
if (rawData.length > 0) {
  console.log('Sample Row Headers:', Object.keys(rawData[0]));
  console.log('Sample Row 1:', rawData[0]);
}

// 2. Scan Products-images directory
const imgDir = path.join(__dirname, 'public', 'Products-images');
const webpOutDir = path.join(__dirname, 'public', 'products-webp');

if (!fs.existsSync(webpOutDir)) {
  fs.mkdirSync(webpOutDir, { recursive: true });
}

const files = fs.readdirSync(imgDir);
console.log(`Found ${files.length} images in public/Products-images`);

function slugify(text) {
  return text.toString().toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Helper to determine category
function getCategory(title, rowCategory) {
  if (rowCategory) {
    const rc = rowCategory.toString().toUpperCase();
    if (rc.includes('PANEL') || rc.includes('SOLAR')) return 'SOLAR PANELS';
    if (rc.includes('INVERTER')) return 'HYBRID INVERTERS';
    if (rc.includes('BATTER')) return 'BATTERIES';
    if (rc.includes('WASHER') || rc.includes('PRESSURE')) return 'PRESSURE WASHERS';
    if (rc.includes('CHARGER') || rc.includes('EV')) return 'EV CHARGERS';
    if (rc.includes('MOUNT')) return 'MOUNTINGS';
    if (rc.includes('ELEC') || rc.includes('SENSOR') || rc.includes('DONGLE')) return 'ELECTRICALS';
  }

  const t = title.toLowerCase();
  if (t.includes('panel') || t.includes('bifacial') || t.includes('risen') || t.includes('canadian') || t.includes('740w') || t.includes('625w')) return 'SOLAR PANELS';
  if (t.includes('inverter') || t.includes('hybrid') || t.includes('on-grid') || t.includes('ongrid') || t.includes('solis') || t.includes('huawei sun') || t.includes('goodwe') || t.includes('grovolt')) return 'HYBRID INVERTERS';
  if (t.includes('battery') || t.includes('lithium') || t.includes('pylontech') || t.includes('volnex') || t.includes('fidus') || t.includes('armor') || t.includes('alpha')) return 'BATTERIES';
  if (t.includes('washer') || t.includes('ingco')) return 'PRESSURE WASHERS';
  if (t.includes('sensor') || t.includes('dongle') || t.includes('smart energy')) return 'ELECTRICALS';
  return 'SOLAR EQUIPMENT';
}

function getVendor(title, rowVendor) {
  if (rowVendor) return rowVendor.toString().trim();
  const t = title.toLowerCase();
  if (t.includes('huawei')) return 'Huawei';
  if (t.includes('solis')) return 'Solis';
  if (t.includes('risen')) return 'Risen Energy';
  if (t.includes('canadian')) return 'Canadian Solar';
  if (t.includes('pylontech')) return 'Pylontech';
  if (t.includes('volnex')) return 'Volnex';
  if (t.includes('grovolt')) return 'Grovolt';
  if (t.includes('goodwe')) return 'GoodWe';
  if (t.includes('ingco')) return 'INGCO';
  return 'Soltronic';
}

console.log('Script prepared.');
