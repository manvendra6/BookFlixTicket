import Addshow from "../Models/Addshowmodels.js";
import uploadCloudinary from "../../utills/claudinary.js";


export const ShowDetails = async (req, res) => {
  try {
    const { title, year, duration, genre, rating,rate, description } = req.body;
    const poster = req.file?.path;
    console.log( "this is poster",poster)
    
    if (!title || !year || !duration || !genre || !rating ||!rate|| !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
 
    if (!req.file) {
      return res.status(400).json({ message: "Poster image is required" });
    }
 
       const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif','image/webp'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ message: "Invalid file type. Only JPG, PNG and GIF are allowed." });
    }


    const existingMovie = await Addshow.findOne({ title });
    if (existingMovie) {
      return res.status(409).json({ message: "A movie with this title already exists" });
    }
    const uploadResult = await uploadCloudinary(poster);
     console.log( uploadResult)
    const photoPath = uploadResult.secure_url;

    const newMovie = new Addshow({
      title,
      year,
      duration,
      genre,
      rating,
      poster: photoPath, 
      description,
      rate
    });

    await newMovie.save();

    return res.status(201).json({
      message: "Movie added successfully",
      movie: newMovie
    });

  } catch (error) {
    console.error("Error adding movie:", error);
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};



export const GetShowDetails = async (req, res) => {
  try {
    const Getmovie = await Addshow.find();

    if (!Getmovie || Getmovie.length === 0) {
      return res.status(404).json({ message: "No movies found" });
    }

    return res.status(200).json({ Getmovie });
  } catch (error) {
    console.error("Error fetching movies:", error);
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

