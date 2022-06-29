const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');
const jsonMiddleware = express.json();
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const property in data.notes) {
    notesArray.push(data.notes[property]);
  }
  res.json(notesArray);
});
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    res.status(400).json('error: id must be a positive integer');
  } else if (!data.notes[id]) {
    res.status(404).json(`error: no note found with id ${id}`);
  } else {
    res.json(data.notes[id]);
  }
});
app.use(jsonMiddleware);
app.post('/api/notes', (req, res) => {
  const content = req.body.content;
  if (!content) {
    res.status(400).json('error: content is a required field');
  } else {
    const newNote = {};
    newNote.id = data.nextId;
    newNote.content = content;
    data.notes[data.nextId] = newNote;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        res.status(500).json('error: an unexpected error occured');
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    res.status(400).json('error: id must be a positive integer');
  } else if (!data.notes[id]) {
    res.status(404).json(`error: no note found with id ${id}`);
    return;
  }
  delete data.notes[id];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      res.status(500).json('error: an unexpected error occured');
    } else {
      res.sendStatus(204);
    }
  });
});
app.put('/api/notes/:id', (req, res) => {
  const content = req.body.content;
  const id = Number(req.params.id);
  if (!content) {
    res.status(400).json('error: content is a required field');
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json(`error: no note found with id ${id}`);
    return;
  }
  const note = {
    id: id,
    content: content
  };
  data.notes[note.id] = note;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      res.status(500).json('error: an unexpected error occured');
    } else {
      res.json(note);
    }
  });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
