import {UserLogin, UserRegister,UserLogout,refreshacesstoken } from "../Controllers/User.controller.js";
import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router=Router();

//User Register
router.route("/register").post(UserRegister)

//User Login

router.route("/login").post(UserLogin)
// router.route("/auth/send-otp").post(SendOTP)

//secured route

router.route("/logout").post(verifyJWT,UserLogout)
router.route("/refreshtoken").post(refreshacesstoken)

//OTP rote


export default router