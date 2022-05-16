const express = require('express');
const app = express();
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = 'select * from grades';
  db.query(sql).then(result => {
    const grades = result.rows;
    res.json(grades);
  }).catch(error => {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occured.' });
  });
});

// app.post('/api/grades', (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const course = req.body.course;
//   const grade = req.body.grade;
//   const sql = `
//     insert into grades
//       (name, course, score)
//       values ($1, $2, $3)
//       returning *
//   `;
//   const params = [name, course, grade];
//   db.query(sql, params).then(result => {
//     const newGrade = result.rows[0];
//     res.status(201).json(newGrade);
//   });
// });

// app.put('/api/grades/:id', (req, res) => {
//   const name = req.body.name;
//   const course = req.body.course;
//   const grade = req.body.grade;
// });

// app.listen(3000, () => {
//   console.log('Server Running On Port 3000');
// });
