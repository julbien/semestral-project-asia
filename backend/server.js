import express from 'express';
import cors from 'cors';
import router from './routes/api.js';
import { db } from './db.js';

const app = express();

app.use(cors());
app.use(express.json());

// Test database connection
try {
  await db.getConnection();
  console.log('Database connected successfully');
} catch (error) {
  console.error('Database connection failed:', error);
  process.exit(1);
}

app.use('/api', router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
