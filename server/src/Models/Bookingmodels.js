import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  email: {
    type: String, 
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seats: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
