const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

const generateMockData = () => {
  const mockData = {
    accountdetails: [
      faker.person.firstName(),
      faker.person.middleName(),
      faker.person.lastName(),
    ]
  }
  const filePath = path.join(__dirname, '../../../fixtures/accountdetails.json');
  fs.writeFileSync(filePath, JSON.stringify(mockData, null, 2), 'utf-8');
  return null;
}

module.exports = { generateMockData}