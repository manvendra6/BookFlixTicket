import mongoose from "mongoose";
 
import { DBNAME } from "../../utils.js";

 

 
const DatabaseConnection = async () => {
  try {
   const {connection}= await mongoose.connect(`${process.env.MONGO_URI}and${DBNAME}`);
  //  console.log( connection)
   console.log(`mongodbconnection have ${connection.host}`)
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(` MongoDB connection error: ${error.message}`);
  }
};

export default DatabaseConnection;
