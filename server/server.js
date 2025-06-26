import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth/Auth-routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);

// Connect to Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((err) => console.error(err));

// Route placeholders
// app.use('/api/auth', import('./routes/userRoutes.js'));
// app.use('/api/products', import('./routes/productRoutes.js'));
// app.use('/api/orders', import('./routes/orderRoutes.js'));

// Start the server
app.listen(process.env.PORT || 5000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
);
