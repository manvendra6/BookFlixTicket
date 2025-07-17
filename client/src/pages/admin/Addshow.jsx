
import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Addshow = () => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    duration: '',
    genre: '',
    rating: '',
    rate: '',  
    description: '',
    poster: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePosterChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      poster: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.poster) {
      toast.error("Please upload a poster image");
      return;
    }

    const uploadData = new FormData();
    for (const key in formData) {
      uploadData.append(key, formData[key]);
    }

    try {
      const res = await axios.post("http://localhost:7000/api/show/movies", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Movie added successfully!");
      setFormData({
        title: '',
        year: '',
        duration: '',
        genre: '',
        rating: '',
        rate: '',  
        description: '',
        poster: null,
      });
    } catch (err) {
      console.error("Error uploading movie:", err);
      toast.error("Failed to add movie");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Toaster />
      <div className="bg-[#1E293B] w-full max-w-2xl p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-6 text-center flex justify-center gap-2">
          <p className='text-red-500'>Add</p>a New Movie
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
          <div>
            <label className="block mb-1 text-sm font-semibold">Title</label>
            <input type="text" name="title" placeholder="Title..." value={formData.title} onChange={handleChange} className="w-full p-3 rounded bg-[#0F172A] focus:outline-none focus:ring-[#D63854]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">Year</label>
              <input type="text" name="year" placeholder="Year..." value={formData.year} onChange={handleChange} className="w-full p-3 rounded bg-[#0F172A] focus:outline-none focus:ring-[#D63854]" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Duration</label>
              <input type="text" name="duration" placeholder="Duration..." value={formData.duration} onChange={handleChange} className="w-full p-3 rounded bg-[#0F172A] focus:outline-none focus:ring-[#D63854]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-semibold">Genre</label>
              <input type="text" name="genre" placeholder="Genre..." value={formData.genre} onChange={handleChange} className="w-full p-3 rounded bg-[#0F172A] focus:outline-none focus:ring-[#D63854]" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Rating</label>
              <input type="text" name="rating" placeholder="Rating..." value={formData.rating} onChange={handleChange} className="w-full p-3 rounded bg-[#0F172A] focus:outline-none focus:ring-[#D63854]" />
            </div>
          </div>
 
          <div>
            <label className="block mb-1 text-sm font-semibold">Price</label>
            <input
              type="number"
              name="rate"
              placeholder="Price per ticket..."
              value={formData.rate}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#0F172A] focus:outline-none focus:ring-[#D63854]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Description</label>
            <textarea name="description" placeholder="Short movie description..." value={formData.description} onChange={handleChange} className="w-full h-28 p-3 rounded bg-[#0F172A] resize-none focus:outline-none focus:ring-[#D63854]" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Poster Image</label>
            <input type="file" name="poster" onChange={handlePosterChange} className="w-full text-white p-2 file:bg-[#D63854] file:text-white file:font-semibold file:rounded file:px-4 file:py-2 file:border-0 bg-[#0F172A] rounded cursor-pointer" />
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="bg-[#D63854] hover:bg-[#b12f45] transition-all duration-200 px-8 py-3 rounded text-white font-semibold">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addshow;
