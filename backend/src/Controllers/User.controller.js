import { Apierror } from "../utils/apiError.js";
import { Apiresponse } from "../utils/apiResponse.js";
import { Register } from "../models/registerUser.models.js";
import jwt from "jsonwebtoken"
import crypto from "crypto"
import twilio from "twilio"
const genrateacessTokenandrefreshtoken=async (userid)=>{
  try {
    const user=await Register.findById(userid);
    const acesstoken=user.genrateacesstoken();
    const refreshToken=user.genraterefrencetoken();
    user.refreshToken=refreshToken
    await user.save({validateBeforeSave:false});
    return {acesstoken,refreshToken};
  } catch (error) {
    throw new Apierror(500,"Something went wrong when we genrate acess token and refresh token")
  }
}

const UserRegister = async (req, res) => {
  try {
    // Destructure user data from body
    const { name, email, mobileNumber, BuyerType, Address, gstNumber, creditLimit } = req.body;

    // Validate required fields
    if (!name || !email || !mobileNumber || !Address) {
      throw new Apierror(400, "All required fields must be provided");
    }
    if (!mobileNumber || mobileNumber.trim() === '') {
      throw new Apierror(400, "Mobile number is required and cannot be empty");
    }

    // Check if user already exists
    const checkUserexist = await Register.findOne({ mobileNumber });
    if (checkUserexist) {
      throw new Apierror(409, "User already exists");
    }

    // Create new user
    const CreatedUser = await Register.create({
      name: name.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      mobileNumber,
      BuyerType:BuyerType.toLowerCase().trim(),
      Address:Address.trim(),
      gstNumber:gstNumber?.trim(),
      creditLimit
    });

    // Fetch the created user without sensitive fields
    const userCreated = await Register.findById(CreatedUser._id).select(" -refreshToken");

    if (!userCreated) {
      throw new Apierror(500, "Something went wrong while registering user");
    }

    // Send response
    return res.status(201).json(
      new Apiresponse(201, userCreated, "User created successfully")
    );

  } catch (err) {
    // If you’re not using global error handler, handle here
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
};


const UserLogin=async(req,res)=>{
  try {
    console.log("SID:", process.env.TWILIO_SID);
    console.log("Auth Token:", process.env.TWILIO_AUTH_TOKEN);
    console.log("From Number:", process.env.TWILIO_FROM);
    const client = twilio(
      process.env.TWILIO_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    // console.log(process.env.TWILIO_SID,process.env.TWITIO_AUTH_TOKEN)
    //req body->data
    const {mobileNumber}=req.body
    if(!mobileNumber){
      throw new Apierror(400,"mobile number is required")
    }
    //find mobilenumber
    const user=await Register.findOne({mobileNumber})
    if(!user){
      throw new Apierror(400,"mobileNumber is not register")
    }
    console.log(mobileNumber)
    //send OTP
    const OTPis=crypto.randomInt(100000,1000000).toString();
    console.log(OTPis);
    //save in Data base hash OTP
    const otp=crypto.createHash("sha256").update(OTPis).digest("hex");
    const otpExpire=Date.now()+5*60*1000; //expire in 5 min
    const otpResendAt=Date.now()+60*1000; //in 1 min

    await Register.findByIdAndUpdate(user._id,{otp,otpExpire,otpResendAt})
    //send OTP
    const message=await client.messages.create({
      body:`Your Apni Dukan OTP is ${OTPis}. it expire in 5 min`,
      from:process.env.TWILIO_FROM,
      to:mobileNumber
    })
    console.log("Twilio SID:", message.sid);

    return res
    .status(200)
    .json({
      success: true,
      message: "OTP sent successfully",
      sid: message.sid
    })


  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success:false,
      message:error.message||"internal server error"
    });
  }
}

const verifyUser=async(req,res)=>{
  try {
    //get OTP from User
    const {otp}=req.body
    if(!otp){
      throw new Apierror(400,"OTP is required")
    }
    //find user and check otp
    const hashotp=crypto.createHash("sha256").update(otp).digest("hex")
    const user=await Register.findOne({otp:hashotp})
    if(!user){
      throw new Apierror(400,"OTP is not valid")
    }
    //check time 
    if(Date.now()>user.otpExpire){
      throw new Apierror(400,"OTP is expire")
    }
    //Send response
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpire = undefined;
    user.otpResendAt = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: "User verified successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success:false,
      message:error.message|| "Internal server error"
    });
  }
}
const UserLogout=async(req,res)=>{
  await Register.findByIdAndUpdate(
    req.user._id,
    {
      $set:{
        refreshtoken:undefined
      }
    }
  )

  const option={
    httpOnly:true,
    secure:true
  }

  return res.
  status(200)
  .clearCookie("acesstoken",option)
  .clearCookie("refreshtoken",option)
  .json(
    new Apiresponse(200,"Logout sucessfully")
  )
}

const refreshacesstoken=async (req,res)=>{
  try {
    const incomingtoken=req.cookies.refreshToken || req.body.refreshToken
    if(!incomingtoken){
      throw new Apierror(401,"unothorized acess")
    }
    const uncoded=jwt.verify(
      incomingtoken,
      process.env.REFRESH_TOKEN
    )

    const user=Register.findById(uncoded?._id)
    if(!user){
      throw new Apierror(200,"invalid refresh token")
    }
    if(incomingtoken !== user?.refreshToken){
      throw new Apierror(400,"Refresh token is expired")
    }

    const option={
      httpOnly:true,
      secure:true
    }
    const {acesstoken,refreshToken}=await genrateacessTokenandrefreshtoken(user._id)


    return res.status(200)
    .cookie("acesstoken",acesstoken,option)
    .cookie("refreshToken",refreshToken,option)
    .json(
      new Apiresponse(200,"refresh token is match")
    )
  } catch (error) {
    throw new Apierror(400,error?.message)
  }
}

export { UserRegister,UserLogin,UserLogout,refreshacesstoken,verifyUser };
