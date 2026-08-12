import { ProductCategoryKey } from './specificationSchemas';

export interface ProductSpec {
  [key: string]: any;
}

export interface ShippingInfo {
  [key: string]: any;
}

export interface WarrantyInfo {
  [key: string]: any;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  categoryKey?: ProductCategoryKey;
  title: string;
  vendor: string;
  description: string;
  power: string;
  efficiency: string;
  warranty: string;
  status?: string;
  labels?: string[];
  image: string;
  gallery?: string[];
  price: string;
  brandImage?: string;
  specifications: Record<string, any>;
  shipping: Record<string, any>;
  warrantyInfo: Record<string, any>;
}

export const productsData: Product[] = [
  {
    "id": "1",
    "slug": "canadian-solar-topbihiku7-625w-n-type-bifacial-topcon-panel",
    "category": "SOLAR PANELS",
    "title": "Canadian Solar TOPBiHiKu7 625W N-Type Bifacial TOPCon Panel",
    "vendor": "Canadian Solar",
    "description": "High-power bifacial N-type TOPCon module designed for utility, commercial and large rooftop PV systems, with double-glass construction and high bifacial energy yield.\n\nModel: CS7L-625TB-AG",
    "power": "625 W",
    "efficiency": "22.5%",
    "warranty": "12 years",
    "image": "/products-webp/canadian625v1.webp",
    "gallery": [
      "/products-webp/canadian625v1.webp",
      "/products-webp/canadian625v2.webp",
      "/products-webp/canadian625v3.webp",
      "/products-webp/canadian625v4.webp"
    ],
    "price": "Rs. 27,000",
    "specifications": {
      "powerW": 625,
      "frameThicknessMm": 33,
      "cellType": "TOPCon cells",
      "connector": "T6 / MC4-EVO2 / MC4-EVO2A",
      "frameColor": "Natural anodized aluminium",
      "cellConfiguration": "120 [2 \u00d7 (10 \u00d7 6)]",
      "cellTechnology": "N-type Bifacial TOPCon",
      "cecModel": "CS7L-625TB-AG"
    },
    "shipping": {
      "weightKg": 34.5,
      "qtyPerPallet": 33,
      "dimensionsMm": "2172 \u00d7 1303 \u00d7 33 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "12 years",
      "performanceWarrantyYears": "30 years"
    },
    "categoryKey": "solar_panel"
  },
  {
    "id": "2",
    "slug": "solis-10-kw-l-plus-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 10 kW L Plus Hybrid Inverter",
    "vendor": "Solis",
    "description": "Single-phase low-voltage hybrid inverter for residential solar-plus-storage systems, with fast backup switching, generator support and intelligent energy management.\n\nModel: S6-EH1P10K-L-PLUS",
    "power": "10 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/solis10kwlplusv1.webp",
    "gallery": [
      "/products-webp/solis10kwlplusv1.webp",
      "/products-webp/solis10kwlplusv2.webp",
      "/products-webp/solis10kwlplusv3.webp",
      "/products-webp/solis10kwlplusv4.webp"
    ],
    "price": "Rs. 385,000",
    "specifications": {
      "ratingKw": 10,
      "phase": "Single Phase",
      "inverterType": "Hybrid / Low Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Residential Solar Storage",
      "cecModel": "S6-EH1P10K-L-PLUS series",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 23.8,
      "dimensionsMm": "335 \u00d7 560 \u00d7 253 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "3",
    "slug": "goodwe-50-kw-on-grid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "GoodWe 50 kW On-Grid Inverter",
    "vendor": "GoodWe",
    "description": "Three-phase commercial on-grid inverter for medium and large PV systems. The stocked 50 kW configuration falls within the GoodWe MT / SDT-C30 family.\n\nModel: GW50KS-MT / GW50K-SDT-C30",
    "power": "50 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/goodwe50kwongridv1.webp",
    "gallery": [
      "/products-webp/goodwe50kwongridv1.webp",
      "/products-webp/goodwe50kwongridv2.webp",
      "/products-webp/goodwe50kwongridv3.avif",
      "/products-webp/goodwe50kwongridv4.avif"
    ],
    "price": "Rs. 550,000",
    "specifications": {
      "ratingKw": 50,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP65",
      "useApplication": "Commercial & Industrial",
      "cecModel": "GW50KS-MT series",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 59,
      "dimensionsMm": "586 \u00d7 788 \u00d7 264 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "4",
    "slug": "grovolt-ragnar-82-kw-hybrid-solar-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Grovolt Ragnar 8.2 kW Hybrid Solar Inverter",
    "vendor": "Grovolt",
    "description": "48 V pure-sine-wave hybrid inverter with dual MPPT solar charging, built-in Wi-Fi, BMS communication and parallel operation up to six units.\n\nModel: GI-R48-8.2Kw",
    "power": "8.2 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/grovoltragnar8.2kwhybridv1.webp",
    "gallery": [
      "/products-webp/grovoltragnar8.2kwhybridv1.webp",
      "/products-webp/grovoltragnar8.2kwhybridv2.webp",
      "/products-webp/grovoltragnar8.2kwhybridv3.webp",
      "/products-webp/grovoltragnar8.2kwhybridv4.webp"
    ],
    "price": "Rs. 170,000",
    "specifications": {
      "ratingKw": 8.2,
      "phase": "Single Phase",
      "inverterType": "Hybrid / Low Voltage",
      "mpptCount": 2,
      "ipRating": "IP65",
      "useApplication": "Residential Solar Storage",
      "cecModel": "Ragnar 8.2 / GI-R48-8.2Kw",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 14.2,
      "dimensionsMm": "500 \u00d7 300 \u00d7 140 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "5",
    "slug": "huawei-sun2000-115ktl-m2-on-grid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Huawei SUN2000-115KTL-M2 On-Grid Inverter",
    "vendor": "Huawei",
    "description": "Commercial and industrial smart PV controller with high-efficiency three-phase conversion, string-level management and multiple MPPT channels.\n\nModel: SUN2000-115KTL-M2",
    "power": "N/A",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/HuaweiSUN2000-115KTL-M2On-Gridv1.webp",
    "gallery": [
      "/products-webp/HuaweiSUN2000-115KTL-M2On-Gridv1.webp",
      "/products-webp/HuaweiSUN2000-115KTL-M2On-Gridv2.webp",
      "/products-webp/HuaweiSUN2000-115KTL-M2On-Gridv3.webp",
      "/products-webp/HuaweiSUN2000-115KTL-M2On-Gridv4.webp"
    ],
    "price": "Rs. 1,300,000",
    "specifications": {
      "ratingKw": 115,
      "phase": "Three Phase",
      "inverterType": "On-Grid String Inverter / Smart PV Controller",
      "mpptCount": 2,
      "ipRating": "IP65",
      "useApplication": "Commercial & Industrial",
      "cecModel": "SUN2000-115KTL-M2",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 93,
      "dimensionsMm": "1035 \u00d7 700 \u00d7 365 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "6",
    "slug": "huawei-sun2000-12ktl-m5-on-grid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Huawei SUN2000-12KTL-M5 On-Grid Inverter",
    "vendor": "Huawei",
    "description": "Compact three-phase grid-tied solar inverter with dual MPPT tracking, integrated monitoring connectivity and IP66 outdoor protection.\n\nModel: SUN2000-12KTL-M5",
    "power": "N/A",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/HuaweiSUN2000-12KTL-M5On-Gridv1.webp",
    "gallery": [
      "/products-webp/HuaweiSUN2000-12KTL-M5On-Gridv1.webp",
      "/products-webp/HuaweiSUN2000-12KTL-M5On-Gridv2.webp",
      "/products-webp/HuaweiSUN2000-12KTL-M5On-Gridv3.webp",
      "/products-webp/HuaweiSUN2000-12KTL-M5On-Gridv4.webp"
    ],
    "price": "Rs. 290,000",
    "specifications": {
      "ratingKw": 12,
      "phase": "Three Phase",
      "inverterType": "On-Grid String Inverter",
      "mpptCount": 2,
      "ipRating": "IP65",
      "useApplication": "Residential Solar Storage",
      "cecModel": "SUN2000-12KTL-M5",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 21,
      "dimensionsMm": "546 \u00d7 460 \u00d7 228 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "7",
    "slug": "huawei-smart-dongle-wlan-fe",
    "category": "ELECTRICALS",
    "title": "Huawei Smart Dongle WLAN-FE",
    "vendor": "Huawei",
    "description": "Plug-and-play communication dongle for compatible Huawei inverters, providing WLAN and Fast Ethernet monitoring and remote plant connectivity.\n\nModel: SDongleA-05",
    "power": "2.5 W",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/HuaweiSmartDongleWLAN-FEv1.webp",
    "gallery": [
      "/products-webp/HuaweiSmartDongleWLAN-FEv1.webp",
      "/products-webp/HuaweiSmartDongleWLAN-FEv2.webp",
      "/products-webp/HuaweiSmartDongleWLAN-FEv3.webp",
      "/products-webp/HuaweiSmartDongleWLAN-FEv4.webp"
    ],
    "price": "Rs. 18,000",
    "specifications": {
      "accessoryType": "Communication Dongle",
      "model": "SDongleA-05",
      "useApplication": "Huawei Inverter Monitoring",
      "ipRating": "IP65",
      "interface": "USB / Fast Ethernet",
      "communication": "WLAN + Ethernet",
      "protocol": "802.11b/g/n",
      "supportedDevices": "Huawei SUN2000 inverters",
      "powerConsumption": "2.5 W"
    },
    "shipping": {
      "weightKg": 0.09,
      "dimensionsMm": "146 \u00d7 48 \u00d7 33 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_accessory"
  },
  {
    "id": "8",
    "slug": "huawei-smart-energy-sensor",
    "category": "ELECTRICALS",
    "title": "Huawei Smart Energy Sensor",
    "vendor": "Huawei",
    "description": "Smart power and energy measurement sensor for Huawei PV systems, available in single-phase and three-phase configurations with RS485 Modbus communication.\n\nModel: DDSU666-H / DTSU666-H",
    "power": "\u22640.8 W / \u22641 W",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/HuaweiSmartEnergySensor-Specialv1.webp",
    "gallery": [
      "/products-webp/HuaweiSmartEnergySensor-Specialv1.webp",
      "/products-webp/HuaweiSmartEnergySensor-Specialv2.webp",
      "/products-webp/HuaweiSmartEnergySensor-Specialv3.webp",
      "/products-webp/HuaweiSmartEnergySensor-Specialv4.webp"
    ],
    "price": "Rs. 40,000",
    "specifications": {
      "accessoryType": "Smart Power Sensor",
      "model": "DDSU666-H / DTSU666-H",
      "useApplication": "PV Grid Energy Management",
      "gridType": "Single / Three Phase",
      "voltageRange": "176\u2013288 V",
      "currentRange": "0\u2013100 A",
      "ctRatio": "100A / 40mA",
      "interface": "RS485",
      "communication": "Modbus-RTU",
      "measurementAccuracy": "\u00b11%",
      "powerConsumption": "\u22641 W",
      "ipRating": "IP51",
      "protocol": "Modbus-RTU",
      "supportedDevices": "Huawei SUN2000 inverters, SmartLogger"
    },
    "shipping": {
      "weightKg": 1.5,
      "dimensionsMm": "72 \u00d7 100 \u00d7 65.5 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_accessory"
  },
  {
    "id": "9",
    "slug": "huawei-smart-energy-sensor-special",
    "category": "ELECTRICALS",
    "title": "Huawei Smart Energy Sensor - Special",
    "vendor": "Huawei",
    "description": "Three-phase smart power sensor intended for broader current and voltage measurement ranges, with DIN-rail mounting and RS485 Modbus communication.\n\nModel: DTSU666-HW / YDS60-80",
    "power": "\u22641.5 W",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/HuaweiSmartEnergySensor-Specialv1.webp",
    "gallery": [
      "/products-webp/HuaweiSmartEnergySensor-Specialv1.webp",
      "/products-webp/HuaweiSmartEnergySensor-Specialv2.webp",
      "/products-webp/HuaweiSmartEnergySensor-Specialv3.webp",
      "/products-webp/HuaweiSmartEnergySensor-Specialv4.webp"
    ],
    "price": "Rs. 45,000",
    "specifications": {
      "accessoryType": "Smart Power Sensor",
      "model": "DTSU666-H",
      "useApplication": "PV Grid Energy Management",
      "gridType": "Three Phase Four Wire",
      "voltageRange": "176\u2013288 V",
      "currentRange": "0\u2013100 A",
      "ctRatio": "100A / 40mA",
      "interface": "RS485",
      "communication": "Modbus-RTU",
      "measurementAccuracy": "\u00b11%",
      "powerConsumption": "\u22641.5 W",
      "ipRating": "IP51",
      "protocol": "Modbus-RTU",
      "supportedDevices": "Huawei SUN2000 M1/M2 series, SmartLogger"
    },
    "shipping": {
      "weightKg": 0.5,
      "dimensionsMm": "100 \u00d7 72 \u00d7 80 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_accessory"
  },
  {
    "id": "10",
    "slug": "ingco-high-pressure-washer-1500w",
    "category": "PRESSURE WASHERS",
    "title": "INGCO High Pressure Washer 1500W",
    "vendor": "INGCO",
    "description": "Compact 1500 W electric pressure washer for vehicle, patio, equipment and general high-pressure cleaning applications.\n\nModel: HPWR15028 / HPWR15028P",
    "power": "1500 W",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/INGCOHighPressureWasher1500Wv1.webp",
    "gallery": [
      "/products-webp/INGCOHighPressureWasher1500Wv1.webp",
      "/products-webp/INGCOHighPressureWasher1500Wv2.webp",
      "/products-webp/INGCOHighPressureWasher1500Wv3.webp",
      "/products-webp/INGCOHighPressureWasher1500Wv4.webp"
    ],
    "price": "Rs. 22,000",
    "specifications": {
      "powerW": 1500,
      "maxPressureBar": 100,
      "maxPressurePsi": 1450,
      "flowRateLpm": "6.0\u20136.7",
      "voltageV": "220\u2013240",
      "frequencyHz": "50/60",
      "hoseLengthM": 8,
      "ipRating": "IPX5",
      "motorType": "Copper-Wire Induction Motor",
      "useApplication": "High-Pressure Cleaning"
    },
    "shipping": {
      "weightKg": 5.5,
      "dimensionsMm": "approximately 420 \u00d7 130 \u00d7 100 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "1 Year"
    },
    "categoryKey": "pressure_washer"
  },
  {
    "id": "11",
    "slug": "pylontech-fidus-512-kwh-lithium-battery",
    "category": "BATTERIES",
    "title": "Pylontech Fidus 5.12 kWh Lithium Battery",
    "vendor": "Pylontech",
    "description": "Low-voltage lithium iron phosphate battery for residential solar storage, designed for long cycle life, high usable capacity and flexible parallel expansion.\n\nModel: FB-L-5.12-EU / FB-L-5.12-EU-Pro / FB-L-5.12-PK",
    "power": "5.12 kW",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/PylontechFidus5.12%20kWhLithiumv1.webp",
    "gallery": [
      "/products-webp/PylontechFidus5.12%20kWhLithiumv1.webp",
      "/products-webp/PylontechFidus5.12%20kWhLithiumv2.webp",
      "/products-webp/PylontechFidus5.12%20kWhLithiumv3.webp",
      "/products-webp/PylontechFidus5.12%20kWhLithiumv4.webp"
    ],
    "price": "Rs. 255,000",
    "specifications": {
      "batteryCapacityKwh": 5.12,
      "usableEnergyKwh": 4.86,
      "ratedVoltageV": 51.2,
      "capacityAh": 100,
      "batteryType": "Lithium Iron Phosphate (LiFePO4 / LFP)",
      "voltageClass": "LV",
      "ipRating": "IP65",
      "depthOfDischargePercent": 95,
      "cycleLife": "6000+ Cycles @ 80% DOD",
      "communication": "CAN / RS485",
      "bms": "Integrated Smart BMS",
      "maxParallelUnits": "Up to 16 Units",
      "cecModel": "FB-L-5.12 family",
      "maxChargeCurrentA": 100,
      "maxDischargeCurrentA": 100,
      "peakCurrentA": 200
    },
    "shipping": {
      "weightKg": 45,
      "dimensionsMm": "630 \u00d7 170 \u00d7 363 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_battery"
  },
  {
    "id": "12",
    "slug": "pylontech-fidus-plus-16-kwh-lithium-battery",
    "category": "BATTERIES",
    "title": "Pylontech Fidus Plus 16 kWh Lithium Battery",
    "vendor": "Pylontech",
    "description": "High-capacity low-voltage LFP battery with integrated display, Bluetooth and Wi-Fi, suitable for larger residential and commercial backup systems.\n\nModel: FB-L-16 / FB-L-16-Pro",
    "power": "16 kW",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/PylontechFidusPlus16%20kWhLithiumv1.webp",
    "gallery": [
      "/products-webp/PylontechFidusPlus16%20kWhLithiumv1.webp",
      "/products-webp/PylontechFidusPlus16%20kWhLithiumv2.webp",
      "/products-webp/PylontechFidusPlus16%20kWhLithiumv3.webp",
      "/products-webp/PylontechFidusPlus16%20kWhLithiumv4.webp"
    ],
    "price": "Rs. 680,000",
    "specifications": {
      "batteryCapacityKwh": 16.0,
      "usableEnergyKwh": 15.2,
      "ratedVoltageV": 51.2,
      "capacityAh": 312,
      "batteryType": "Lithium Iron Phosphate (LiFePO4 / LFP)",
      "voltageClass": "LV",
      "ipRating": "IP65",
      "depthOfDischargePercent": 95,
      "cycleLife": "6000+ Cycles @ 80% DOD",
      "communication": "CAN / RS485",
      "bms": "Integrated Smart BMS",
      "maxParallelUnits": "Up to 16 Units",
      "cecModel": "FB-L-16 family",
      "maxChargeCurrentA": 180,
      "maxDischargeCurrentA": 200,
      "peakCurrentA": 300
    },
    "shipping": {
      "weightKg": 130,
      "dimensionsMm": "435 \u00d7 240 \u00d7 900 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_battery"
  },
  {
    "id": "13",
    "slug": "risen-energy-hyper-ion-pro-740w-hjt-bifacial-panel",
    "category": "SOLAR PANELS",
    "title": "Risen Energy Hyper-ion Pro 740W HJT Bifacial Panel",
    "vendor": "Risen Energy",
    "description": "Ultra-high-power bifacial n-type heterojunction module designed for utility-scale and commercial PV installations with high efficiency and low degradation.\n\nModel: RSM132-8-740BHDG",
    "power": "740 W",
    "efficiency": "22.5%",
    "warranty": "15 years",
    "image": "/products-webp/RisenEnergyHyper-ionPro740WHJTBifacialv1.avif",
    "gallery": [
      "/products-webp/RisenEnergyHyper-ionPro740WHJTBifacialv1.avif",
      "/products-webp/RisenEnergyHyper-ionPro740WHJTBifacialv2.webp",
      "/products-webp/RisenEnergyHyper-ionPro740WHJTBifacialv3.webp",
      "/products-webp/RisenEnergyHyper-ionPro740WHJTBifacialv4.avif"
    ],
    "price": "Rs. 30,340",
    "specifications": {
      "powerW": 740,
      "frameThicknessMm": 35,
      "cellType": "n-type HJT",
      "connector": "PV-SY02 / compatible connector option",
      "frameColor": "Silver anodized aluminium",
      "cellConfiguration": "132 cells (6 \u00d7 11 + 6 \u00d7 11)",
      "cellTechnology": "Heterojunction (HJT), bifacial",
      "cecModel": "RSM132-8-740BHDG"
    },
    "shipping": {
      "weightKg": 40,
      "qtyPerPallet": 31,
      "dimensionsMm": "2384 \u00d7 1303 \u00d7 35 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "15 years",
      "performanceWarrantyYears": "30 years"
    },
    "categoryKey": "solar_panel"
  },
  {
    "id": "14",
    "slug": "solis-10-kw-on-grid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 10 kW On-Grid Inverter",
    "vendor": "Solis",
    "description": "Three-phase string inverter for residential and small-commercial grid-connected PV systems with dual MPPT control and high conversion efficiency.\n\nModel: S5-GR3P10K",
    "power": "10 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis10kWOn-Gridv1.webp",
    "gallery": [
      "/products-webp/Solis10kWOn-Gridv1.webp",
      "/products-webp/Solis10kWOn-Gridv2.webp",
      "/products-webp/Solis10kWOn-Gridv3.webp",
      "/products-webp/Solis10kWOn-Gridv4.webp"
    ],
    "price": "Rs. 200,000",
    "specifications": {
      "ratingKw": 10,
      "phase": "Single Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Residential Solar Storage",
      "cecModel": "S5-GR3P10K-AU (AS4777-2 2020)",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 17.8,
      "dimensionsMm": "310 \u00d7 563 \u00d7 219 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "15",
    "slug": "solis-10-kw-three-phase-hv-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 10 kW Three-Phase HV Hybrid Inverter",
    "vendor": "Solis",
    "description": "Three-phase high-voltage hybrid inverter for solar-plus-storage systems, providing backup output, battery charging and intelligent energy management.\n\nModel: S6-EH3P10K-H / S6-EH3P10K-H-EU",
    "power": "10 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis10kWThree-PhaseHVHybridv1.webp",
    "gallery": [
      "/products-webp/Solis10kWThree-PhaseHVHybridv1.webp",
      "/products-webp/Solis10kWThree-PhaseHVHybridv2.webp",
      "/products-webp/Solis10kWThree-PhaseHVHybridv3.webp",
      "/products-webp/Solis10kWThree-PhaseHVHybridv4.webp"
    ],
    "price": "Rs. 440,000",
    "specifications": {
      "ratingKw": 10,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Residential Solar Storage",
      "cecModel": "S6-EH3P(5-10)K-H series",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 30.2,
      "dimensionsMm": "600 \u00d7 500 \u00d7 230 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "16",
    "slug": "solis-125-kw-three-phase-hv-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 125 kW Three-Phase HV Hybrid Inverter",
    "vendor": "Solis",
    "description": "High-power three-phase commercial and industrial energy-storage inverter with ten MPPT channels, dual battery ports and high-voltage battery compatibility.\n\nModel: S6-EH3P125K10-NV-YD-H",
    "power": "125 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis125kWThree-PhaseHVHybridv1.webp",
    "gallery": [
      "/products-webp/Solis125kWThree-PhaseHVHybridv1.webp",
      "/products-webp/Solis125kWThree-PhaseHVHybridv2.webp",
      "/products-webp/Solis125kWThree-PhaseHVHybridv3.webp",
      "/products-webp/Solis125kWThree-PhaseHVHybridv4.webp"
    ],
    "price": "Rs. 2,900,000",
    "specifications": {
      "ratingKw": 125,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Commercial & Industrial",
      "cecModel": "S6-EH3P125K10-NV-YD-H regional grid-code variant",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 170,
      "dimensionsMm": "1174 \u00d7 814 \u00d7 400 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "17",
    "slug": "solis-12-kw-three-phase-hv-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 12 kW Three-Phase HV Hybrid Inverter",
    "vendor": "Solis",
    "description": "Three-phase high-voltage hybrid inverter for large residential and small-commercial solar storage with four MPPT channels and fast backup operation.\n\nModel: S6-EH3P12K-H",
    "power": "12 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis12kWThree-PhaseHVHybridv1.webp",
    "gallery": [
      "/products-webp/Solis12kWThree-PhaseHVHybridv1.webp",
      "/products-webp/Solis12kWThree-PhaseHVHybridv2.webp",
      "/products-webp/Solis12kWThree-PhaseHVHybridv3.webp",
      "/products-webp/Solis12kWThree-PhaseHVHybridv4.webp"
    ],
    "price": "Rs. 590,000",
    "specifications": {
      "ratingKw": 12,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Residential Solar Storage",
      "cecModel": "S6-EH3P12K-H-AU (AS4777-2 2020)",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 35.2,
      "dimensionsMm": "563 \u00d7 546 \u00d7 250 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "18",
    "slug": "solis-20-kw-three-phase-hv-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 20 kW Three-Phase HV Hybrid Inverter",
    "vendor": "Solis",
    "description": "Three-phase high-voltage hybrid inverter designed for larger residential and commercial energy-storage systems with high PV input capability and four MPPT channels.\n\nModel: S6-EH3P20K-H",
    "power": "20 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis20kWThree-PhaseHVHybridv1.webp",
    "gallery": [
      "/products-webp/Solis20kWThree-PhaseHVHybridv1.webp",
      "/products-webp/Solis20kWThree-PhaseHVHybridv2.webp",
      "/products-webp/Solis20kWThree-PhaseHVHybridv3.avif",
      "/products-webp/Solis20kWThree-PhaseHVHybridv4.webp"
    ],
    "price": "Rs. 700,000",
    "specifications": {
      "ratingKw": 20,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Commercial & Industrial",
      "cecModel": "S6-EH3P20K-H-AU (AS4777-2 2020)",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 35.2,
      "dimensionsMm": "563 \u00d7 546 \u00d7 250 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "19",
    "slug": "solis-30-kw-three-phase-hv-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 30 kW Three-Phase HV Hybrid Inverter",
    "vendor": "Solis",
    "description": "Commercial three-phase high-voltage hybrid inverter with multiple MPPTs, dual battery ports and flexible energy-storage control.\n\nModel: S6-EH3P30K-H",
    "power": "30 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis30kWThree-PhaseHVHybridv1.webp",
    "gallery": [
      "/products-webp/Solis30kWThree-PhaseHVHybridv1.webp",
      "/products-webp/Solis30kWThree-PhaseHVHybridv2.webp",
      "/products-webp/Solis30kWThree-PhaseHVHybridv3.webp",
      "/products-webp/Solis30kWThree-PhaseHVHybridv4.webp"
    ],
    "price": "Rs. 1,100,000",
    "specifications": {
      "ratingKw": 30,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Commercial & Industrial",
      "cecModel": "S6-EH3P30K-H-AU (AS4777-2 2020)",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 73,
      "dimensionsMm": "530 \u00d7 880 \u00d7 290 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "20",
    "slug": "solis-50-kw-three-phase-hv-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 50 kW Three-Phase HV Hybrid Inverter",
    "vendor": "Solis",
    "description": "Commercial and industrial high-voltage hybrid inverter with four MPPT channels, dual independently controlled battery ports and high-power storage capability.\n\nModel: S6-EH3P50K-H",
    "power": "50 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis50kWThree-PhaseHVHybridv1.webp",
    "gallery": [
      "/products-webp/Solis50kWThree-PhaseHVHybridv1.webp",
      "/products-webp/Solis50kWThree-PhaseHVHybridv2.webp",
      "/products-webp/Solis50kWThree-PhaseHVHybridv3.webp",
      "/products-webp/Solis50kWThree-PhaseHVHybridv4.avif"
    ],
    "price": "Rs. 1,465,000",
    "specifications": {
      "ratingKw": 50,
      "phase": "Three Phase",
      "inverterType": "Hybrid / High Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Commercial & Industrial",
      "cecModel": "S6-EH3P50K-H-AU (AS4777-2 2020)",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 73,
      "dimensionsMm": "530 \u00d7 880 \u00d7 290 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "21",
    "slug": "solis-6-kw-l-plus-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 6 kW L Plus Hybrid Inverter",
    "vendor": "Solis",
    "description": "Single-phase low-voltage hybrid inverter for residential solar storage with generator compatibility, smart load control and fast backup switching.\n\nModel: S6-EH1P6K-L-PLUS",
    "power": "6 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis6kWLPlusHybridv1.webp",
    "gallery": [
      "/products-webp/Solis6kWLPlusHybridv1.webp",
      "/products-webp/Solis6kWLPlusHybridv2.webp",
      "/products-webp/Solis6kWLPlusHybridv3.webp",
      "/products-webp/Solis6kWLPlusHybridv4.webp"
    ],
    "price": "Rs. 225,000",
    "specifications": {
      "ratingKw": 6,
      "phase": "Single Phase",
      "inverterType": "Hybrid / Low Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Residential Solar Storage",
      "cecModel": "S6-EH1P6K-L-PLUS-AU (AS4777-2 2020)",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 23,
      "dimensionsMm": "335 \u00d7 560 \u00d7 253 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "22",
    "slug": "solis-8-kw-l-plus-hybrid-inverter",
    "category": "HYBRID INVERTERS",
    "title": "Solis 8 kW L Plus Hybrid Inverter",
    "vendor": "Solis",
    "description": "Single-phase low-voltage hybrid inverter for higher-power residential solar-plus-storage systems, with generator support and dual MPPT tracking.\n\nModel: S6-EH1P8K-L-PLUS",
    "power": "8 kW",
    "efficiency": "98%",
    "warranty": "10 Yrs",
    "image": "/products-webp/Solis8kWLPlusHybridv1.webp",
    "gallery": [
      "/products-webp/Solis8kWLPlusHybridv1.webp",
      "/products-webp/Solis8kWLPlusHybridv2.avif",
      "/products-webp/Solis8kWLPlusHybridv3.webp",
      "/products-webp/Solis8kWLPlusHybridv4.avif"
    ],
    "price": "Rs. 325,000",
    "specifications": {
      "ratingKw": 8,
      "phase": "Single Phase",
      "inverterType": "Hybrid / Low Voltage",
      "mpptCount": 2,
      "ipRating": "IP66",
      "useApplication": "Residential Solar Storage",
      "cecModel": "S6-EH1P8K-L-PLUS regional grid-code variant",
      "ieee2030CsipAus": "Supported"
    },
    "shipping": {
      "weightKg": 23.5,
      "dimensionsMm": "335 \u00d7 560 \u00d7 253 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_inverter"
  },
  {
    "id": "23",
    "slug": "volnex-armor-512-kwh-lithium-battery",
    "category": "BATTERIES",
    "title": "Volnex Armor 5.12 kWh Lithium Battery",
    "vendor": "Volnex",
    "description": "Compact IP65 low-voltage LFP battery designed for residential solar backup with integrated BMS and multiple communication interfaces.\n\nModel: Armor 5.12",
    "power": "5.12 kW",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/VolnexArmor5.12kWhLithiumv1.webp",
    "gallery": [
      "/products-webp/VolnexArmor5.12kWhLithiumv1.webp",
      "/products-webp/VolnexArmor5.12kWhLithiumv2.webp",
      "/products-webp/VolnexArmor5.12kWhLithiumv3.webp",
      "/products-webp/VolnexArmor5.12kWhLithiumv4.webp"
    ],
    "price": "Rs. 230,000",
    "specifications": {
      "batteryCapacityKwh": 5.12,
      "usableEnergyKwh": 4.86,
      "ratedVoltageV": 51.2,
      "capacityAh": 100,
      "batteryType": "Lithium Iron Phosphate (LiFePO4 / LFP)",
      "voltageClass": "LV",
      "ipRating": "IP65",
      "depthOfDischargePercent": 95,
      "cycleLife": "6000+ Cycles @ 80% DOD",
      "communication": "CAN / RS485",
      "bms": "Integrated Smart BMS",
      "maxParallelUnits": "Up to 16 Units",
      "cecModel": "Armor 5.12",
      "maxChargeCurrentA": 100,
      "maxDischargeCurrentA": 100,
      "peakCurrentA": 200
    },
    "shipping": {
      "weightKg": 48.8,
      "dimensionsMm": "470 \u00d7 160 \u00d7 635 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_battery"
  },
  {
    "id": "24",
    "slug": "volnex-alpha-16-lithium-battery",
    "category": "BATTERIES",
    "title": "Volnex Alpha 16 Lithium Battery",
    "vendor": "Volnex",
    "description": "Floor-standing low-voltage LFP battery for residential and commercial solar backup, offering high usable energy and integrated communication interfaces.\n\nModel: Alpha 16",
    "power": "N/A",
    "efficiency": "97%",
    "warranty": "10 Yrs",
    "image": "/products-webp/VolnexAlpha16Lithiumv1.webp",
    "gallery": [
      "/products-webp/VolnexAlpha16Lithiumv1.webp",
      "/products-webp/VolnexAlpha16Lithiumv2.webp",
      "/products-webp/VolnexAlpha16Lithiumv3.webp",
      "/products-webp/VolnexAlpha16Lithiumv4.webp"
    ],
    "price": "Rs. 595,000",
    "specifications": {
      "batteryCapacityKwh": 16.0,
      "usableEnergyKwh": 15.2,
      "ratedVoltageV": 51.2,
      "capacityAh": 312,
      "batteryType": "Lithium Iron Phosphate (LiFePO4 / LFP)",
      "voltageClass": "LV",
      "ipRating": "IP65",
      "depthOfDischargePercent": 95,
      "cycleLife": "6000+ Cycles @ 80% DOD",
      "communication": "CAN / RS485",
      "bms": "Integrated Smart BMS",
      "maxParallelUnits": "Up to 16 Units",
      "cecModel": "Alpha 16",
      "maxChargeCurrentA": 200,
      "maxDischargeCurrentA": 200,
      "peakCurrentA": 300
    },
    "shipping": {
      "weightKg": 122,
      "dimensionsMm": "485 \u00d7 245 \u00d7 785 mm"
    },
    "warrantyInfo": {
      "productWarrantyYears": "10 Yrs"
    },
    "categoryKey": "solar_battery"
  }
];

export const featuredProductsData: Product[] = [
  productsData[0],  // Canadian Solar 625W Panel (id 1)
  productsData[20], // Solis 6 kW L Plus (id 21)
  productsData[10], // Pylontech Fidus 5.12 kWh Battery (id 11)
  productsData[9]   // INGCO High Pressure Washer 1500W (id 10)
];
