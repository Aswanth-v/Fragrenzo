import express from 'express'

import { addToCart,fetchCart,updateCartQuantity,deleteCart } from '../../controllers/shop/cart-controller.js';

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCart);
router.put("/update-cart", updateCartQuantity);
router.delete("/:userId/:productId", deleteCart);

export default router