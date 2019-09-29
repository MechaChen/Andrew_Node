const fs = require('fs');

// 
// Challenge
// 
// 1. Load and parse JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in JSON file

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Benson',
user.age = 25;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);