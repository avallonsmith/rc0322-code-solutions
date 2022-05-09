const express = require('express');
const app = express();
const grades = {};
let nextIndex = 1;

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextIndex;
  grades[nextIndex] = grade;
  nextIndex++;
  res.status(201).json(grade);
});

app.get('/api/grades', (req, res) => {
  const holdArray = [];
  for (const property in grades) {
    holdArray.push(grades[property]);
  }
  res.json(holdArray);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
