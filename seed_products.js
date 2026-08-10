const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envLocal = fs.readFileSync('.env.local', 'utf8');
const env = {};
envLocal.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    env[match[1]] = match[2].trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const productsData = `https://api.gnrix.com/images/1096/thumbnails/thumb_1779567410442_143b02dc71ba9d99.png	Solis 8 kW L Plus Hybrid Inverter	• 10 seconds of 200% overload capability • Multiple inverters can operate together to form a microgrid • Generator-compatible to extend backup duration during grid power outage • Supports dual backup ports for intelligent control of critical and non-critical loads • Automatic switchover time is <4ms, providing seamless transitions from grid to backup • Ensures excellent power supply stability, keeping the load unaffected by a weak grid or generator supply fluctuations	5	325,000
https://api.gnrix.com/images/1095/thumbnails/thumb_1779567347756_e15a1e428ad1495b.jpg	Canadian Solar 625 W Solar Panel	The Canadian Solar 625W solar panel, likely the TOPBiHiKu6 N-Type Bifacial TOPCon model, is a high-efficiency monocrystalline panel designed for durability and high-power output in large-scale commercial and utility installations. Key features include its N-type TOPCon bifacial cell technology for capturing sunlight from both sides, a maximum power output of 625W, high module efficiency up to 23.1% (with potential for higher gain from the back), and robust construction to withstand extreme weather conditions like heavy snow and wind loads. It is known for its excellent low-light performance, superior temperature coefficient, and long-term reliability, backed by a substantial 30-year performance warranty.	2	27,188
https://api.gnrix.com/images/229/thumbnails/thumb_1779567394520_e624321f7ac06cbd.png	Pylontech Fidus 51.2 V/100 AH  FB-L-5.12-PK Lithium Ion Battery	The Pylontech Fidus is a robust and flexible Lithium Iron Phosphate (LFP) battery designed for solar and hybrid inverter systems, offering 5.12kWh of energy and a 51.2V nominal voltage. It features high efficiency with a 97% Depth of Discharge (DOD), over 6,000 life cycles, and remarkable durability, including corrosion resistance and cell-level heating for extreme conditions. The Fidus battery is scalable from 5kWh to 600kWh, compatible with many inverters, and can be mounted on walls, floors, or racks, making it suitable for residential, commercial, and industrial applications. Key Features High Efficiency: Achieves a 97% Depth of Discharge (DOD) for maximized energy use. Long Lifespan: Boasts over 6,000 charge/discharge cycles, providing lasting performance. Scalable System: Easily expand from a 5kWh base unit to a total of 600kWh with multiple modules. Wide Compatibility: Seamlessly integrates with over 50 inverter brands. Durability & Resilience: Built to withstand harsh conditions with anti-corrosion features and cell-level heating for cold environments. Smart BMS: Equipped with a built-in Smart Battery Management System (BMS) for safe and stable operation. Versatile Installation: Can be wall-mounted, floor-standing, or installed in a rack. Ideal Applications Residential: Ideal for homes needing reliable solar backup power and energy independence. Commercial & Industrial: Suitable for small businesses and industrial setups requiring robust and large-scale energy storage. Demanding Environments: Designed to operate effectively in various conditions, including humid, dusty, or cold locations. Benefits of the Pylontech Fidus Uninterrupted Power: Ensures consistent energy supply, even during grid outages. Lower Energy Costs: Allows for peak-shaving and off-peak energy usage to reduce electricity bills. Increased Energy Independence: Provides reliable access to energy from renewable sources. Long-Term Investment: With its long lifespan and robust design, it offers a smart, durable solution for energy storage.	1	260,000
https://api.gnrix.com/images/228/thumbnails/thumb_1779567329097_be94918dffb7895c.jpg	Huawei 115KW Sun2000-M2 Ongrid Inverter	Huawei 115KW Sun2000-M2 Ongrid Inverter The Huawei 115KW Sun2000-M2 Ongrid Inverter delivers exceptional efficiency up to 98.8%, 10 MPP trackers with smart string-level management, AI powered arc fault protection, Smart I-V Curve Diagnosis, MBUS support, Smart String Level Disconnector, and IP66 protection for large-scale solar projects.	2	1,300,000
https://api.gnrix.com/images/227/thumbnails/thumb_1779567329317_24a84b659967ef97.jpg	Huawei 12kW Sun2000-M5 Ongrid Inverter	Huawei 12kW Sun2000-M5 Ongrid Inverter The Huawei 12kW Ongrid Inverter offers 98.4% efficiency, dual MPPT, and AI powered monitoring, ensuring maximum solar energy utilization with grid stability.	2	285,000
https://api.gnrix.com/images/226/thumbnails/thumb_1784057655583_7ee1544e757b82d3.jpg	Grovolt Ragnar 8.2kW Hybrid Solar Inverter	The Grovolt Ragnar 8.2kW is a high-performance single-phase hybrid solar inverter optimized for flexible residential configurations. It is designed around a battery-independent topology that allows it to operate seamlessly with or without an attached 48V battery backup system. Featuring a dual MPPT tracker system and an active RGB status light bar, the inverter facilitates efficient on-grid power feedback as well as complete off-grid reliability. It comes standard with integrated Wi-Fi for remote mobile app monitoring and can be scaled in parallel up to 6 units for expanded loads	2	200,000
https://api.gnrix.com/images/225/thumbnails/thumb_1779567409576_0498b0436866907b.png	Solis 10 kW L Plus Hybrid Inverter	"• Automatic UPS switching • Up to 190A max charge/discharge current • 6 customisable charge/discharge time settings • 10 second 200% surge power backup overload capability • Supports 1ph and 3ph flexible connection with max 48kW in parallel • Supports peak shaving control in both ""self-use"" and ""generator"" mode • Generator connectivity with multiple input methods and automatic generator On/Off control • Compatible with lead-acid and lithium batteries, with multiple battery protection features"	3	395,000
https://api.gnrix.com/images/224/thumbnails/thumb_1781848746678_62de4eb6582941a9.jpg	Volnex Alpha 16 kWh Lithium Ion Battery	N/A	2	610,000
https://api.gnrix.com/images/223/thumbnails/thumb_1779567428236_bb55ef97bec2ec62.jpg	Volnex Armor 5.12 kWh Lithium Ion Battery	N/A	4	260,000
https://api.gnrix.com/images/222/thumbnails/thumb_1779567427845_5b168ea1dfe65eed.png	Volnex 2.56 kWh Lithium Ion Battery	N/A	3	135,000
https://api.gnrix.com/images/221/thumbnails/thumb_1779567411385_2b87d33ead6a291d.png	Solis 6 kW L Plus Hybrid Inverter	"• Generator Connectivity: Supports multiple input methods and automatic generator On/Off control, enhancing system flexibility. • Automatic UPS Switching: Provides quick 10-second automatic switching with 200% surge power backup, ensuring reliable power outage protection. • Flexible Connection: Supports 1ph and 3ph flexible connection with max 48kW in parallel. • Compatible with lead-acid and lithium batteries."	3	225,000
https://api.gnrix.com/images/220/thumbnails/thumb_1779567409174_dcefd1b0b4e4b122.png	Solis 50 kW Hybrid 3 Phase HV Inverter	Supports up to 2x rated PV input, maximizing solar energy utilization Supports fast battery charging with a maximum charging current of 140A Compatible with 100–280Ah battery modules, reducing overall system costs Two independent battery ports for flexible configurations and easy capacity expansion Delivers 160% overload for 2s in off-grid mode, ensuring stable startup of heavy loads 7-inch industrial-grade screen, providing a larger, user-friendly interface for local operation SolisCloud: Smart remote control, AI optimisation, and instant troubleshooting - all in one platform Supports generator input across a wide range (20%–100% of rated power), reducing investment costs Supports a maximum string input current of 20A, ensuring compatibility with high-power PV modules	5	1,485,000
https://api.gnrix.com/images/219/thumbnails/thumb_1779567408372_fbd5cb76998c9e8e.png	Solis 30 kW Hybrid 3 Phase HV Inverter	Supports up to 2x rated PV input, maximizing solar energy utilization Supports fast battery charging with a maximum charging current of 140A Compatible with 100–280Ah battery modules, reducing overall system costs Two independent battery ports for flexible configurations and easy capacity expansion Delivers 160% overload for 2s in off-grid mode, ensuring stable startup of heavy loads 7-inch industrial-grade screen, providing a larger, user-friendly interface for local operation SolisCloud: Smart remote control, AI optimisation, and instant troubleshooting - all in one platform Supports generator input across a wide range (20%–100% of rated power), reducing investment costs Supports a maximum string input current of 20A, ensuring compatibility with high-power PV modules	2	1,110,000
https://api.gnrix.com/images/218/thumbnails/thumb_1779567413739_1a1d4d63ecd6a86c.png	Solis 30 kW On Grid Inverter	Efficient ? Max. efficiency 98.7% ? String current up to 16A ? 3/4 MPPT design, supports multiple orientation system design ? Night time PID recovery function, increases overall system yield (optional) ? Wide voltage range and low startup voltage Smart ? Supports export power control ? Intelligent string monitoring, smart I-V curve scan ? Supports RS485, WiFi, GPRS ? Scan to register on SolisCloud, supports remote upgrade and control ? IP66 Safe ? AFCI protection, proactively reduces fire risk ? Globally recognised branded componentry for longer life ? Intelligent redundant fan-cooling Economic ? Supports GPRS/WiFi communication with less wiring and reduced installation costs ? > 150% DC/AC ratio ? Supports high power modules for lower installation costs ? Supports aluminium wire access to reduce cost	2	410,000
https://api.gnrix.com/images/217/thumbnails/thumb_1779567408780_b4f8320e309ece5f.png	Solis 20 kW Hybrid 3 Phase HV Inverter	S6-EH3P(12-20)K-H series three-phase energy storage inverter, suitable for large residential and small commercial PV energy storage systems. This series of products support generator networking and parallel operation of multiple inverters; 4 MPPT design, is perfect for large rooftop PV energy storage systems with more roof orientation and complex structure. Products with multiple flexible load capacity, including UPS level switching; 10second 160% surge power backup overload capability, and adapt to three-phase unbalanced load,half-wave load, more friendly and reliable power supply for the load.	3	710,000
https://api.gnrix.com/images/216/thumbnails/thumb_1779567414787_2af2be2942ce7bf6.png	Solis 15 kW Hybrid Inverter LV	Smart Energy Management AI intelligently manages charging and discharging based on TOU (Time-of-Use) tariffs Seamless integration with VPP and EMS platforms for enhanced energy optimization Built-in control for SG-ready heat pumps High Performance Supports three-phase unbalanced output, allowing up to 50% of rated inverter power per phase 160% PV input capacity to maximize solar energy utilization Switching time < 10ms Flexible & Scalable Compatible with mainstream lithium and lead-acid batteries Easily expand system capacity using parallel connections and AC coupling Simple & Fast Configuration 7-inch LCD screen for an intuitive user experience Bluetooth app support for quick and easy setup	3	635,000
https://api.gnrix.com/images/215/thumbnails/thumb_1779567410026_5abf304eb0cc0c05.png	Solis 12 kW Hybrid 3 Phase HV Inverter	S6-EH3P(12-20)K-H series three-phase energy storage inverter, suitable for large residential and small commercial PV energy storage systems. This series of products support generator networking and parallel operation of multiple inverters; 4 MPPT design, is perfect for large rooftop PV energy storage systems with more roof orientation and complex structure. Products with multiple flexible load capacity, including UPS level switching; 10second 160% surge power backup overload capability, and adapt to three-phase unbalanced load,half-wave load, more friendly and reliable power supply for the load.	2	480,000
https://api.gnrix.com/images/214/thumbnails/thumb_1779567414362_1d2fc422a4ca2b0e.png	Solis 150 kW On Grid Inverter	• 7 MPPTs, max. efficiency 98.8% • > 150% DC/AC ratio • Single MPPT maximum current 54A, perfectly match large current bifacial modules • IP66 • AFCI protection, proactively reduces fire risk • Globally recognised branded componentry for longer life • Supports export power control • Intelligent string monitoring, smart I-V curve scan • Remote firmware upgrade with simple operation	2	1,400,000
https://api.gnrix.com/images/213/thumbnails/thumb_1779567415622_7f87389a3971cba4.png	Solis 12 kW Hybrid Inverter LV	Smart Energy Management AI intelligently manages charging and discharging based on TOU (Time-of-Use) tariffs Seamless integration with VPP and EMS platforms for enhanced energy optimization Built-in control for SG-ready heat pumps High Performance Supports three-phase unbalanced output, allowing up to 50% of rated inverter power per phase 160% PV input capacity to maximize solar energy utilization Switching time < 10ms Flexible & Scalable Compatible with mainstream lithium and lead-acid batteries Easily expand system capacity using parallel connections and AC coupling Simple & Fast Configuration 7-inch LCD screen for an intuitive user experience Bluetooth app support for quick and easy setup	2	535,000
https://api.gnrix.com/images/212/thumbnails/thumb_1779567416147_8a244f7f5292c31a.png	Solis 10 kW On Grid Inverter	Efficient ? Max. efficiency 98.7% ? String current up to 16A ? Wide voltage range and low startup voltage Smart ? Supports export power control ? Supports RS485, WiFi, GPRS ? Scan to register on SolisCloud, supports remote upgrade and control 360 degree Safe ? IP66 ? AFCI protection, proactively reduces fire risk ? Automatic voltage stabilization technology in weak grid conditions Economic ? Compact design, simple installation and maintenance ? > 150% DC/AC ratio ? Supports high power modules for lower installation costs	3	210,000
https://api.gnrix.com/images/211/thumbnails/thumb_1784053443141_00ad8aa4b3b57eb1.webp	Risen Energy HJT 740W Solar Panel	The Risen HJT 740W is a premium, ultra-high-efficiency photovoltaic module engineered with next-generation n-type Heterojunction (HJT) technology . Combining crystalline silicon with advanced amorphous silicon thin-film passivation layers, it delivers industry-leading power generation, an exceptionally high bifacial factor (90 ± 5%) , and a market-leading temperature coefficient. It is purpose-built to maximize solar yield in hot climates and large-scale residential, commercial, or utility-scale environments.	1	31,080`;

const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const getCategory = (title) => {
  const t = title.toLowerCase();
  if (t.includes('panel')) return 'panels';
  if (t.includes('inverter')) return 'inverters';
  if (t.includes('battery') || t.includes('batteries') || t.includes('storage')) return 'storage';
  return 'other';
};

const getBrand = (title) => {
  const t = title.toLowerCase();
  if (t.includes('solis')) return 'Solis';
  if (t.includes('canadian solar')) return 'Canadian Solar';
  if (t.includes('pylontech')) return 'Pylontech';
  if (t.includes('huawei')) return 'Huawei';
  if (t.includes('grovolt')) return 'Grovolt';
  if (t.includes('volnex')) return 'Volnex';
  if (t.includes('risen')) return 'Risen';
  return 'Unknown';
};

async function run() {
  const { data: existingProducts, error: fetchErr } = await supabase.from('products').select('title');
  if (fetchErr) {
    console.error('Error fetching existing products', fetchErr);
    return;
  }
  
  const existingTitles = new Set(existingProducts.map(p => p.title.trim()));
  const lines = productsData.split('\n').filter(Boolean);
  
  const toInsert = [];

  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length < 5) continue;
    
    const [imgUrl, title, description, rating, priceStr] = parts;
    const cleanTitle = title.trim();
    
    if (!existingTitles.has(cleanTitle)) {
      const priceNum = parseFloat(priceStr.replace(/,/g, ''));
      toInsert.push({
        title: cleanTitle,
        slug: generateSlug(cleanTitle),
        description: description,
        category: getCategory(cleanTitle),
        vendor: getBrand(cleanTitle),
        price: priceNum,
        image_url: imgUrl,
        badge: 'New',
        stock: parseInt(rating, 10) || 5, // Just mapping the 4th column to stock as it's just a number
        power: cleanTitle.match(/(\d+\.?\d*)\s*(kW|W|kWh)/i)?.[0] || 'N/A'
      });
    }
  }
  
  if (toInsert.length > 0) {
    const { data: sample } = await supabase.from('products').select('*').limit(1);
    console.log(sample ? Object.keys(sample[0]) : "No sample");
    
    const crypto = require('crypto');
    // Attempting insert with just known keys
    const filteredInsert = toInsert.map(p => ({
        id: crypto.randomUUID(),
        title: p.title,
        slug: p.slug,
        description: p.description,
        category: p.category,
        vendor: p.vendor,
        price: p.price.toString(),
        power: p.power,
        image: p.image_url 
    }));

    // We can just try one without badge, stock, power
    console.log(`Inserting ${filteredInsert.length} new products...`);
    const { data, error } = await supabase.from('products').insert(filteredInsert);
    if (error) {
      console.error('Error inserting', error);
    } else {
      console.log('Successfully inserted new products!');
    }
  } else {
    console.log('All products already exist in the database.');
  }
}

run();
