// routes/admin/products-routes.js
import express from "express";
import { handleImageUpload } from "../../controllers/Admin/products-controller.js";
import { upload } from "../../helpers/cloudinary.js";

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);

export default router;
