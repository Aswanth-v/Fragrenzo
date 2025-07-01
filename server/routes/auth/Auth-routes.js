import express from 'express';
import { userLogin, userRegister,userlogout,authMiddleware } from '../../controllers/Auth-controller.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout-user', userlogout);
router.get('/auth-check', authMiddleware, (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      success: true,
      message: 'Authenticated user',
      user,
    });
  } catch (err) {
    console.log("auth-check route error:", err); // ✅ Add this
    res.status(500).json({
      success: false,
      message: "Something went wrong in auth-check",
    });
  }
});


export default router;
