import { Apierror } from "../utils/apiError.js";
import { Register } from "../models/registerUser.models.js";
import jwt from "jsonwebtoken"
export const verifyJWT=async (req,_,next)=>{
  try {
    //find token of user
    const token=req.cookies?.acesstoken || req.header("Authorization")?.replace("Bearer ","");
    //checck for a token
    if(!token){
      throw new Apierror(401,"Unotrization token");
    }
  
    //decode a token
    const uncodedtoken=jwt.verify(token,process.env.ACESS_TOKEN);
    //find id in data base 
    const user=await Register.findById(uncodedtoken._id).select("-refreshToken")
  
    if(!user){
      throw new Apierror(400,"Invalid acess token")
    }
  
    req.user=user;
    next();
  } catch (error) {
    throw new Apierror(401,error)
  }
}