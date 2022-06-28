const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.use(express.json());
app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
    `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.post('/api/grades', (req, res) => {
  const course = req.body.course;
  const name = req.body.name;
  const score = req.body.score;
  if (!course) {
    res.status(400).json({
      error: 'Missing \'course\' information.'
    });
  }
  if (!name) {
    res.status(400).json({
      error: 'Missing \'name\' information.'
    });
  }
  if (!score) {
    res.status(400).json({
      error: 'Missing \'score\' information.'
    });
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
     `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.put('/api/grades/:gradeId', (req, res) => {
  const course = req.body.course;
  const name = req.body.name;
  const score = req.body.score;
  if (!course) {
    res.status(400).json({
      error: 'Missing new \'course\' information.'
    });
    return;
  }
  if (!name) {
    res.status(400).json({
      error: 'Missing new \'name\' information.'
    });
    return;
  }
  if (!score) {
    res.status(400).json({
      error: 'Missing new \'score\' information.'
    });
    return;
  }
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
  update "grades"
    set "course" = $1,
        "name" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
  `;
  const params = [course, name, score, gradeId];
  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      if (!newGrade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(newGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {

  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const dltGrade = result.rows[0];
      if (!dltGrade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(dltGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
