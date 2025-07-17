import mongoose from "mongoose";

const Userschema = mongoose.Schema({
    name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Email format is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  refreshToken:{
    type:String
  }
},{timestamps: true })

const User = mongoose.model("User", Userschema);
export default User;