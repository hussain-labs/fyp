import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import { getDb } from './database.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Initialize DB and start server
async function startServer() {
  try {
    await getDb(); // Ensure DB is initialized
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();
