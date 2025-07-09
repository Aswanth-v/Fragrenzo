// routes/admin/products-routes.js
import express from "express";
import { handleImageUpload,addProduct,editProduct,deleteProduct,fetchProduct } from "../../controllers/Admin/products-controller.js";
import { upload } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post('/add',addProduct)
router.put('/edit/:id',editProduct)
router.delete('/delete/:id',deleteProduct)
router.get('/get',fetchProduct)

export default router;
