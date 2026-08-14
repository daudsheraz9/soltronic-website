export type ProductCategoryKey = 
  | 'solar_panel'
  | 'solar_inverter'
  | 'solar_battery'
  | 'pressure_washer'
  | 'solar_accessory';

export interface FieldDefinition {
  key: string;
  label: string;
  unit?: string;
  type?: 'text' | 'number' | 'boolean' | 'select' | 'dimensions';
  options?: string[];
}

export interface SpecificationSection {
  title: string;
  fields: FieldDefinition[];
}

export interface CategorySchema {
  categoryKey: ProductCategoryKey;
  label: string;
  sections: SpecificationSection[];
}

export const CATEGORY_SCHEMAS: Record<ProductCategoryKey, CategorySchema> = {
  solar_panel: {
    categoryKey: 'solar_panel',
    label: 'Solar Panel',
    sections: [
      {
        title: 'Specifications',
        fields: [
          { key: 'powerW', label: 'Power', unit: 'W', type: 'number' },
          { key: 'cellTechnology', label: 'Cell Technology', type: 'text' },
          { key: 'cellType', label: 'Cell Type', type: 'text' },
          { key: 'cellConfiguration', label: 'Cell', type: 'text' },
          { key: 'frameThicknessMm', label: 'Frame Thickness', unit: 'mm', type: 'number' },
          { key: 'connector', label: 'Connector', type: 'text' },
          { key: 'frameColor', label: 'Frame Color', type: 'text' },
          { key: 'cecModel', label: 'CEC Model', type: 'text' },
        ],
      },
      {
        title: 'Shipping Information',
        fields: [
          { key: 'weightKg', label: 'Weight', unit: 'kg', type: 'number' },
          { key: 'qtyPerPallet', label: 'Qty per Pallet', type: 'number' },
          { key: 'dimensionsMm', label: 'Dimensions', unit: 'mm', type: 'dimensions' },
        ],
      },
      {
        title: 'Warranty Information',
        fields: [
          { key: 'productWarrantyYears', label: 'Product Warranty', unit: 'Years', type: 'text' },
          { key: 'performanceWarrantyYears', label: 'Performance Warranty', unit: 'Years', type: 'text' },
        ],
      },
    ],
  },
  solar_inverter: {
    categoryKey: 'solar_inverter',
    label: 'Solar Inverter',
    sections: [
      {
        title: 'Specifications',
        fields: [
          { key: 'ratingKw', label: 'Rating', unit: 'kW', type: 'number' },
          { 
            key: 'inverterType', 
            label: 'Type', 
            type: 'select', 
            options: [
              'Hybrid', 
              'On-Grid', 
              'Off-Grid', 
              'Hybrid / Low Voltage', 
              'Hybrid / High Voltage', 
              'String Inverter', 
              'Energy Storage Inverter', 
              'Smart PV Controller'
            ] 
          },
          { key: 'phase', label: 'Phase', type: 'select', options: ['Single Phase', 'Three Phase'] },
          { key: 'mpptCount', label: 'MPPT', type: 'number' },
          { key: 'ipRating', label: 'IP Rating', type: 'text' },
          { key: 'useApplication', label: 'Use Application', type: 'text' },
          { key: 'cecModel', label: 'CEC Model', type: 'text' },
          { key: 'ieee2030CsipAus', label: 'IEEE 2030.5 CSIP-AUS', type: 'text' },
        ],
      },
      {
        title: 'Shipping Information',
        fields: [
          { key: 'weightKg', label: 'Weight', unit: 'kg', type: 'number' },
          { key: 'dimensionsMm', label: 'Dimensions', unit: 'mm', type: 'dimensions' },
        ],
      },
      {
        title: 'Warranty Information',
        fields: [
          { key: 'productWarrantyYears', label: 'Product Warranty', unit: 'Years', type: 'text' },
        ],
      },
    ],
  },
  solar_battery: {
    categoryKey: 'solar_battery',
    label: 'Solar Battery',
    sections: [
      {
        title: 'Specifications',
        fields: [
          { key: 'batteryCapacityKwh', label: 'Battery Capacity', unit: 'kWh', type: 'number' },
          { key: 'usableEnergyKwh', label: 'Usable Energy', unit: 'kWh', type: 'number' },
          { key: 'ratedVoltageV', label: 'Rated Voltage', unit: 'V', type: 'number' },
          { key: 'capacityAh', label: 'Capacity', unit: 'Ah', type: 'number' },
          { 
            key: 'batteryType', 
            label: 'Battery Type', 
            type: 'select', 
            options: [
              'Lithium Iron Phosphate (LiFePO4 / LFP)', 
              'Lithium Ion', 
              'Lead Acid', 
              'AGM', 
              'Gel'
            ] 
          },
          { key: 'voltageClass', label: 'Voltage Class', type: 'select', options: ['LV', 'HV'] },
          { key: 'ipRating', label: 'IP Rating', type: 'text' },
          { key: 'depthOfDischargePercent', label: 'Depth of Discharge', unit: '%', type: 'number' },
          { key: 'cycleLife', label: 'Cycle Life', type: 'text' },
          { key: 'maxChargeCurrentA', label: 'Max Charge Current', unit: 'A', type: 'number' },
          { key: 'maxDischargeCurrentA', label: 'Max Discharge Current', unit: 'A', type: 'number' },
          { key: 'peakCurrentA', label: 'Peak Current', unit: 'A', type: 'number' },
          { key: 'communication', label: 'Communication', type: 'text' },
          { key: 'bms', label: 'BMS', type: 'text' },
          { key: 'maxParallelUnits', label: 'Parallel Units', type: 'text' },
          { key: 'operatingTemperature', label: 'Operating Temperature', type: 'text' },
          { key: 'cecModel', label: 'CEC Model', type: 'text' },
        ],
      },
      {
        title: 'Shipping Information',
        fields: [
          { key: 'weightKg', label: 'Weight', unit: 'kg', type: 'number' },
          { key: 'dimensionsMm', label: 'Dimensions', unit: 'mm', type: 'dimensions' },
        ],
      },
      {
        title: 'Warranty Information',
        fields: [
          { key: 'productWarrantyYears', label: 'Product Warranty', unit: 'Years', type: 'text' },
        ],
      },
    ],
  },
  pressure_washer: {
    categoryKey: 'pressure_washer',
    label: 'Pressure Washer',
    sections: [
      {
        title: 'Specifications',
        fields: [
          { key: 'powerW', label: 'Power', unit: 'W', type: 'number' },
          { key: 'maxPressureBar', label: 'Maximum Pressure', unit: 'Bar', type: 'number' },
          { key: 'maxPressurePsi', label: 'Maximum Pressure', unit: 'PSI', type: 'number' },
          { key: 'flowRateLpm', label: 'Flow Rate', unit: 'L/min', type: 'text' },
          { key: 'voltageV', label: 'Voltage', unit: 'V', type: 'text' },
          { key: 'frequencyHz', label: 'Frequency', unit: 'Hz', type: 'text' },
          { key: 'hoseLengthM', label: 'Hose Length', unit: 'm', type: 'number' },
          { key: 'ipRating', label: 'IP Rating', type: 'text' },
          { key: 'motorType', label: 'Motor Type', type: 'text' },
          { key: 'useApplication', label: 'Use Application', type: 'text' },
        ],
      },
      {
        title: 'Shipping Information',
        fields: [
          { key: 'weightKg', label: 'Weight', unit: 'kg', type: 'number' },
          { key: 'dimensionsMm', label: 'Package Dimensions', unit: 'mm', type: 'dimensions' },
        ],
      },
      {
        title: 'Warranty Information',
        fields: [
          { key: 'productWarrantyYears', label: 'Product Warranty', unit: 'Years', type: 'text' },
        ],
      },
    ],
  },
  solar_accessory: {
    categoryKey: 'solar_accessory',
    label: 'Solar Accessory',
    sections: [
      {
        title: 'Specifications',
        fields: [
          { key: 'accessoryType', label: 'Accessory Type', type: 'text' },
          { key: 'model', label: 'Model', type: 'text' },
          { key: 'useApplication', label: 'Use Application', type: 'text' },
          { key: 'gridType', label: 'Grid Type', type: 'text' },
          { key: 'voltageRange', label: 'Voltage Range', type: 'text' },
          { key: 'currentRange', label: 'Current Range', type: 'text' },
          { key: 'ctRatio', label: 'CT Ratio', type: 'text' },
          { key: 'ipRating', label: 'IP Rating', type: 'text' },
          { key: 'interface', label: 'Interface', type: 'text' },
          { key: 'communication', label: 'Communication', type: 'text' },
          { key: 'protocol', label: 'Protocol', type: 'text' },
          { key: 'supportedDevices', label: 'Supported Devices', type: 'text' },
          { key: 'powerConsumption', label: 'Power Consumption', type: 'text' },
          { key: 'measurementAccuracy', label: 'Measurement Accuracy', type: 'text' },
        ],
      },
      {
        title: 'Shipping Information',
        fields: [
          { key: 'weightKg', label: 'Weight', unit: 'kg', type: 'number' },
          { key: 'dimensionsMm', label: 'Dimensions', unit: 'mm', type: 'dimensions' },
        ],
      },
      {
        title: 'Warranty Information',
        fields: [
          { key: 'productWarrantyYears', label: 'Product Warranty', unit: 'Years', type: 'text' },
        ],
      },
    ],
  },
};

export function mapCategoryToKey(categoryName: string): ProductCategoryKey {
  if (!categoryName) return 'solar_panel';
  const norm = categoryName.toUpperCase().trim();
  if (norm.includes('PANEL')) return 'solar_panel';
  if (norm.includes('INVERTER') || norm.includes('HYBRID') || norm.includes('ON-GRID')) return 'solar_inverter';
  if (norm.includes('BATTERY') || norm.includes('BATTERIES') || norm.includes('LITHIUM')) return 'solar_battery';
  if (norm.includes('WASHER') || norm.includes('INGCO') || norm.includes('PRESSURE')) return 'pressure_washer';
  return 'solar_accessory';
}
