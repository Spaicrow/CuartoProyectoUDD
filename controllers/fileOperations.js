
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'reservas.json');

const readDataFromFile = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeDataToFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

module.exports = { readDataFromFile, writeDataToFile };
