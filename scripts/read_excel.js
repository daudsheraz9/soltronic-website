const xlsx = require('xlsx');

const workbook = xlsx.readFile('public/Soltronic_Products_By_Category.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

console.log("Columns:", Object.keys(data[0] || {}));
console.log("First row data:", data[0]);
