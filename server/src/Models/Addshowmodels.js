import mongoose from "mongoose";

const Addshowschema= mongoose.Schema({
     title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  duration: {
    type: [String],  
    required: true
  },
  genre: {
    type: [String],  
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  poster: {
    type: String
  },
  description: {
    type: String
  }
},{Timestamps:true})

const Addshow = mongoose.model("Addshow",Addshowschema);

export default Addshow;