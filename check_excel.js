const xlsx = require('xlsx');
const workbook = xlsx.readFile('public/Soltronic_Products_By_Category.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet);
console.log(Object.keys(data[0]));
console.log(data[0]);
