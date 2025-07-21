import multer from "multer";
import cloudinaryModule from "cloudinary";
import dotenv from "dotenv";
dotenv.config();


const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const upload = multer({ storage: multer.memoryStorage() });

export  async function imageUploadUtil(dataUrl) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      dataUrl,
      {
        folder: "fragrance-shope",
        resource_type: "auto",
      },
      (err, result) => {
        if (result) resolve(result);
        else reject(err);
      }
    );
  });
}
