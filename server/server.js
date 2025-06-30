import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth/Auth-routes.js';

dotenv.config();

const app = express();

// ✅ Correct CORS config FIRST
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Cache-Control"],
  credentials: true
}));


// ✅ Other middlewares
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRouter);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((err) => console.error(err));

// ✅ Start the server
app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
);
