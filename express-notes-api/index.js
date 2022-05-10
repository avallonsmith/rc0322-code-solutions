const express = require('express');
const app = express();
const jsonData = require('./data.json');
// const post = {};

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    res.status(400).json('error: id must be a positive integer');
  } else if (!jsonData.notes[id]) {
    res.status(404).json(`error: no note found with id ${id}`);
  } else {
    res.json(jsonData.notes[id]);
  }
});

// app.post('/api/notes', (req, res) => {
//   const postRequest = req.body;
//   postRequest.id = nextIndex;
//   post[nextIndex] = postRequest;
//   nextIndex++;
//   res.status(201).json(postRequest);
// });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
