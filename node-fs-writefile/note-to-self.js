const fs = require('fs');
fs.writeFile('note.txt', process.argv[2] + '\n', (err, data) => {
  if (err) throw err;
});
