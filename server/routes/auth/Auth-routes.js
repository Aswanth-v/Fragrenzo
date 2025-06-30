import express from 'express';
import { userLogin, userRegister,userlogout,authMiddleware } from '../../controllers/Auth-controller.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout-user', userlogout);
router.get('/auth-check', authMiddleware,(req,res)=>{
    const user=req.user
    res.status(200).json({
        success:true,
        message:'Authenticated user',
        user
    })
});

export default router;
