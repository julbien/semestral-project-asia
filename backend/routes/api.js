import express from 'express';
import { db } from '../db.js';

const router = express.Router();

router.get('/total-students', async (req, res) => {
  const [rows] = await db.execute('SELECT COUNT(*) AS total FROM students');
  res.json(rows[0]);
});

router.get('/total-female', async (req, res) => {
  const [rows] = await db.execute("SELECT COUNT(*) AS total FROM students WHERE gender = 'female'");
  res.json(rows[0]);
});

router.get('/total-male', async (req, res) => {
  const [rows] = await db.execute("SELECT COUNT(*) AS total FROM students WHERE gender = 'male'");
  res.json(rows[0]);
});

router.get('/attendance-rate', async (req, res) => {
  const [rows] = await db.execute(`SELECT status, COUNT(*) AS count FROM attendance GROUP BY status`);
  res.json(rows);
});

router.get('/grades-trend', async (req, res) => {
  const [rows] = await db.execute(`
    SELECT 
      CASE 
        WHEN grade >= 90 THEN '90-100'
        WHEN grade >= 80 THEN '80-89'
        WHEN grade >= 70 THEN '70-79'
        WHEN grade >= 60 THEN '60-69'
        ELSE 'Below 60'
      END as grade_range,
      COUNT(*) as count
    FROM students 
    GROUP BY grade_range
    ORDER BY 
      CASE grade_range
        WHEN '90-100' THEN 1
        WHEN '80-89' THEN 2
        WHEN '70-79' THEN 3
        WHEN '60-69' THEN 4
        ELSE 5
      END
  `);
  res.json(rows);
});

router.get('/pass-fail', async (req, res) => {
  const [rows] = await db.execute(`SELECT passed, COUNT(*) AS count FROM students GROUP BY passed`);
  res.json(rows);
});

router.get('/student-subject', async (req, res) => {
  const [rows] = await db.execute(`SELECT subject, COUNT(*) AS count FROM students GROUP BY subject`);
  res.json(rows);
});

export default router;
