const xlsx = require('xlsx');

const workbook = xlsx.readFile('public/Soltronic_Products_By_Category.xlsx');
console.log(`Found ${workbook.SheetNames.length} sheets:`);
workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log(`- Sheet "${sheetName}" has ${data.length} rows.`);
});
