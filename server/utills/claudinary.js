import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config({
  path:"./.env"
});
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET  
});

const uploadCloudinary =async (localFilePath)=>{
  if(!localFilePath)
    return null
const fileupload= await  cloudinary.uploader.upload(localFilePath ,{
    resource_type:'auto'
  })
  console.log(`file is uploaded in claudeniry ${fileupload.url}`)
  return fileupload;
 }
 

export default uploadCloudinary;