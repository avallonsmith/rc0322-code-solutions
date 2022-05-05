const fs = require('fs');
const randomNumber = Math.random() + '' + '\n';
fs.writeFile('random.txt', randomNumber, (err, data) => {
  if (err) throw err;
});
