const fs = require('fs');

try {
  const data = fs.readFileSync('strings.txt', 'utf8');
  const parsedData = data.split('\r\n');

} catch (error) {
  console.error(error);
}
