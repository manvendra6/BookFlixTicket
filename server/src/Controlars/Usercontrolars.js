import User from "../Models/Usermodels.js";
import bcrypt from "bcrypt";
import GetToken from "../../utills/jwt.js";
import jwt from 'jsonwebtoken';
 
 export const Signup= async(req,res)=>{
 
  try {
     const {name, email, password} = req.body;
     if(!name || !email ||!password  ){
       return res.status(400).json({ message: "All fields are required" });
     }
      const existuser= await User.findOne({email})
      console.log( existuser);
      if(existuser){
        return res.status(400).json({message:"user allready exist"})
      }
      const Hashpassword = await bcrypt.hash(password,10);
      const newUser= new User({name,email,password:Hashpassword})
      await newUser.save()
      return res.status(201).json({ message: "User registered successfully ", user: newUser });
  } catch (error) {
   
    return res.status(400).json({message:"server error",error:error.message})
  }
  
}

export const Login= async(req,res)=>{
  try {
    const {email,password}=req.body;
    
  
    if(!email||!password){
      return res.status(400).json({message:"all field required"})
    }
    const user=await User.findOne({email})
    if(!user){
      return res.status(400).json({message:"user not found"})
    }
    const PasswordCompare= await bcrypt.compare(password,user.password)
    if(!PasswordCompare){
      return res.status(4002).json({message:"password in vailid"})
    }
    const {accessToken,refreshToken }=await GetToken(user);
    console.log( accessToken,refreshToken);

    
  
    if (!refreshToken || !accessToken) {
      return res.status(400).json({ message: "Token generation failed" });
    }
 
    user.refreshToken = refreshToken;
    await user.save();
 

    return res.status(201).cookie("accessToken", accessToken, {
      httpOnly: false,
       secure: true,
       sameSite:"strict"    
    }).cookie("refreshToken", refreshToken, {
      httpOnly: false,
         secure: true, 
         sameSite:"strict"      
    }).json({message:"Login succesfully and cookies is send",user:{
    _id:user._id,
    name:user.name,
    email:user.email
    },
    // token:{
    //   accessToken:accessToken,
    //   refreshToken:refreshToken
    // }
  })
    
  } catch (error) {
    return res.status(400).json({message:` server Error ${error}`})
  }
}

export const Logout = async (req,res)=>{

  try {
    const {accessToken}= req.cookies;
    if(!accessToken){
      return res.status(400).json({message:"NO access token found"});
    }
      res.clearCookie('accessToken', {
      httpOnly: false,
      secure: true,
      sameSite:"strict"

    });
    return res.status(200).json({message:"Logout successfully"})

    
  } catch (error) {
    return res.status(400).json({message:`server error ${error}`})
  }
}

export const Refreshtoken = (req,res)=>{
  
  try {
        const {refreshToken}= req.cookies;
      console.log("refresh token",  refreshToken)
  if(!refreshToken){
    return res.status(400).json({message:"No refresh token found"})
  }
 
 const verify= jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET );
  if(!verify){
    return res.status(400).json({message:"Invalid refresh token"})

  }
     const NewaccessToken =   jwt.sign({email:User.email},process.env.ACCESS_TOKEN_SECRET, {
       expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN ,
     });
    
     if(!NewaccessToken){
       return res.status(400).json({message:"Error generating new access token"})
     }
    return res.status(200).cookie("NewaccessToken", NewaccessToken, {
      httpOnly: false,
       secure: true,
    }).json({message:"New access token generated successfully", accessToken: NewaccessToken});



    
  } catch (error) {
    return res.status(400).json({message:`server error ${error}`})
  }

}