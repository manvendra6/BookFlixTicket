import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config({
  path:"./.env"
})


const GetToken = async(user) => {
  console.log( user)
  const accessToken =   jwt.sign({email:user.email},process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN ,
  });

  const refreshToken = jwt.sign({email:user.email}, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
  });

  return { accessToken, refreshToken };
};
export default GetToken;