
import { app } from "./app.js";

import dotenv from "dotenv";
import DatabaseConnection from "./src/DB/index.js";
dotenv.config({
  path:"./.env"
})
const port =process.env.PORT;

DatabaseConnection()
.then(()=>{
  app.listen(port,()=>{
    console.log(`server listing port ${port}`);
  })
 })
 