import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';


//register
export const userRegister=async(req,res)=>{
    const {userName,email,password}=req.body;
    try{
        const checkUser=await User.findOne({email})
        if(checkUser) return res.json({
            success:false,
            message:"Email alredy exist"
        })

        const hashPassword= await bcrypt.hash(password,13)
        const newUser=new User({
            userName,
            email,
            password:hashPassword
        })
        await newUser.save() 

        res.status(200).json({
               success:true,
            message:"registration success"
        })
        
    }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Eror occured"
        })
        
    }
}




//login
export const userLogin=async(req,res)=>{
    const {email,password}=req.body;
      
    try{
           const checkUser=await User.findOne({email})
       if(!checkUser) return res.json({
        success:false,
        message:'user dosnt exist! register first'
       })

    const checkpassword= await bcrypt.compare(password,checkUser.password)
    if(!checkpassword)return res.json({
        success:false,
        message:'password dosnt match'
         })
    const token=jwt.sign({
        id:checkUser._id,
        role:checkUser.role,
        email:checkUser.email,
        userName:checkUser.userName
    },'CLIENT_KEY',{expiresIn:'60m'})

    res.cookie('token',token,{httpOnly:true,secure:false}).json({
        success:true,
        message:'Logged in successfully',
        user:{
            email:checkUser.email,
            role:checkUser.role,
            id:checkUser._id,
             userName:checkUser.userName
        }
    })
    }catch(error){
        console.log(error);
        res.status(404).json({
            success:false,
            message:"Eror occured"
        })
        
    }
}


//logout
export const userlogout=(req,res)=>{
    res.clearCookie('token').json({
        success:true,
        message:"Logout Success"
    })
}


//auth middleware
export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });

  try {
    const tokenDecode = jwt.verify(token, 'CLIENT_KEY'); // 👈 make sure this matches the one used in login
    req.user = tokenDecode;
    next();
  } catch (error) {
    console.log("JWT Verify Error:", error); // 👈 ADD THIS
    res.status(401).json({
      success: false,
      message: " Unauthorized user!",
    });
  }
};
