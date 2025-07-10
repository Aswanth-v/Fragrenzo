import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  category: String,
  brand: String,
  price: Number,         // ✅ lowercase "price"
  salePrice: Number,
  stock: Number,         // ✅ changed from totalStock to stock
  volume: String         // ✅ typo fixed from volium to volume
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

export default Product;
