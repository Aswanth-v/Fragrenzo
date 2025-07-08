import { imageUploadUtil } from "../../helpers/cloudinary.js";
import Product from '../../model/product.js'


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



//add new Product

export const addProduct=async(req,res)=>{
try{

const {image,title,description,category,brand,Price,salePrice,totalStock,volium}=req.body
const newestProduct= new Product({
  image,title,description,category,brand,Price,salePrice,totalStock,volium
})

await newestProduct.save()
res.status(200).json({
  success:true,
  data:newestProduct
})


}catch(error){
  console.log(error);
  res.status(500).json({
    success:false,
    message:"error came up"

  })
  
}
}


//fetchProduct

export const fetchProduct=async(req,res)=>{
try{
  const listOfProduct=await Product.find({})
  res.status(200).json({
    success:true,
    data:listOfProduct
  })
}catch(error){
  console.log(error);
  res.status(500).json({
    success:false,
    message:"error came up"

  })
  
}
}


//editProduct

export const editProduct=async(req,res)=>{
try{

}catch(error){
  console.log(error);
  res.status(500).json({
    success:false,
    message:"error came up"

  })
  
}
}

//deleteProduct

export const deleteProduct=async(req,res)=>{
try{

}catch(error){
  console.log(error);
  res.status(500).json({
    success:false,
    message:"error came up"

  })
  
}
}