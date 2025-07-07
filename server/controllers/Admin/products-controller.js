import { imageUploadUtil } from "../../helpers/cloudinary.js";

export const handleImageUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Convert the file buffer to a base64 Data URL
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataUrl = `data:${req.file.mimetype};base64,${b64}`;

    const result = await imageUploadUtil(dataUrl);

    res.status(200).json({
      success: true,
      url: result.secure_url,
      result,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while uploading image",
    });
  }
};
