import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth/Auth-routes.js';
import adminProductsRouter from './routes/admin/products-routes.js'
import shopProductrouter from './routes/shop/products-route.js'
import shopCartrouter from './routes/shop/cart-route.js';
import shopAddressrouter from './routes/shop/adress-route.js';
dotenv.config();

const app = express();
app.use(cookieParser());
// ✅ Correct CORS config FIRST
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


// ✅ Other middlewares
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shop/products", shopProductrouter);
app.use("/api/shop/cart", shopCartrouter);
app.use("/api/shop/address", shopAddressrouter);


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
