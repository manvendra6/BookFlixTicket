import { Router } from "express";
import upload from "../Middleware/middleware.js";
 
import { Login, Signup } from "../Controlars/Usercontrolars.js";
import { ShowDetails } from "../Controlars/Addshowcontrolars.js";
import { GetShowDetails } from "../Controlars/Addshowcontrolars.js";
import { Logout } from "../Controlars/Usercontrolars.js";
import { Refreshtoken } from "../Controlars/Usercontrolars.js";
 
 
const router= Router();
router.post("/signup",Signup);
router.post("/login",  Login);
router.get("/logout",Logout);
router.get("/refresh",Refreshtoken);
 

router.post("/show/movies",upload.single("poster"),ShowDetails);
router.get("/get/movies", GetShowDetails)

export default router;