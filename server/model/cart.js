import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',       // Refers to the User model
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product', // Refers to the Product model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,          // Quantity must be at least 1
        },
      },
    ],
  },
  {
    timestamps: true,     // Automatically adds createdAt and updatedAt fields
  }
);

// 👇 Create and export the Cart model
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
