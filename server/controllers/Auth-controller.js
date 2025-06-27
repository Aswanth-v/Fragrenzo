import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../model/User.js';


//register
export const userRegister=async(req,res)=>{
    const {userName,email,password}=req.body;
    try{
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



//logout



//auth middleware