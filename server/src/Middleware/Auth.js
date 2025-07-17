import User from "../Models/Usermodels.js";
import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken || req.headers.authorization?.split(" ")[1];
    
 

    if (!token) {
      return res.status(401).json({ message: "Access token missing" });
    }

    const decoded =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log( "Decoded token:", decoded);
    console.log("Decoded token ID:", decoded.i);

    const user = await User.findById(decoded).select("-password -refreshToken -createdAt -updatedAt");
     console.log("Authenticated user:", user);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
req.user = user;
    
   
    next();
  } catch (error) {
    console.log("error in auth", error);
    return res.status(401).json({
      message: "Unauthorized: Invalid or expired token",
      error: error.message,
    });
  }
};
