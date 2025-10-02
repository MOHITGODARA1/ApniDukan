import mongoose,{Schema} from "mongoose";
import JWT from "jsonwebtoken"
const RegisterUser=new Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    lowercase:true,
    trim:true,
    unique:true
  },
  mobileNumber:{
    type:String,
    required:true,
    unique:true
  },
  BuyerType:{
    type:Boolean,
    required:true
  },
  Address:{
    type:String,
    required:true,
    trim:true
  },
  gstNumber:{
    type:String,
  },
  otp:{
    type:String,
  },
  otpExpire:{
    type:Date
  },
  otpResendAt:{
    type:Date
  },
  creditLimit:{
    type:Boolean,
    required:true
  },
  refreshToken:{
    type:String
  }
},{timestamps:true});

RegisterUser.methods.genrateacesstoken=function(){
  return JWT.sign(
    {
      _id:this._id,
      name:this.name,
      email:this.email
    },
    process.env.ACESS_TOKEN,
    {
      expiresIn:process.env.ACESS_TOKEN_EXPIRE
    }
  )
}
RegisterUser.methods.genraterefrencetoken=function(){
  return JWT.sign(
    {
      _id:this._id,
    },
    process.env.REFRESH_TOKEN,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRE
    }
  )
}



export const Register=mongoose.model("Register",RegisterUser)