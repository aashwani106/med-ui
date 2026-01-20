const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = path.resolve(__dirname, '../src/assets/all_medicine_products.xlsx');
const outputPath = path.resolve(__dirname, '../temp_products.json');

console.log(`Reading file from: ${excelPath}`);

try {
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    console.log(`Found ${data.length} records.`);

    // Save to temp file to read
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${outputPath}`);

    // Log first item to see structure
    if (data.length > 0) {
        console.log('Sample item:', data[0]);
    }

} catch (error) {
    console.error('Error processing excel file:', error);
}
