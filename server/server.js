const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
}).catch((err) => console.error(err));

// Route placeholders
//app.use('/api/auth', require('./routes/userRoutes'));
//app.use('/api/products', require('./routes/productRoutes'));
//app.use('/api/orders', require('./routes/orderRoutes'));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
