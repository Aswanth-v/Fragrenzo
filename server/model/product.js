import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  category: String,
  brand: String,
  Price: Number,
  salePrice: Number,
  totalStock: Number,
    volium: String

}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

export default Product;
