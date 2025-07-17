import Booking from "../Models/Bookingmodels";

export const BookShow = async (req, res) => {
  try {
    const { email, user_name, time, seats, price, day, month, title } = req.body;

    if (!email || !user_name || !time || !seats || !price || !day || !month || !title) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = new Booking({
      email,
      user_name,
      time,
      seats,
      price,
      day,
      month,
      title
    });

    await newBooking.save();

    return res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("Error booking show:", error);
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
}