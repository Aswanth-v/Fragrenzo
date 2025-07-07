import multer from "multer";
import cloudinaryModule from "cloudinary";

const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: "ds79netzy",
  api_key:"885731781185259",
  api_secret:"24DIqSQWkP4CNboDXC97JZZqbeY"
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
