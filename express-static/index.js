const path = require('path');
const express = require('express');

const app = express();

const join = path.join(__dirname, 'public');
const serve = express.static(join);
app.use(serve);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
