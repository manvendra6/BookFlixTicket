import express from "express";
 
import router from "./src/Routs/Userrouts.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true}))


app.use("/api",router);
 

 
export { app };
