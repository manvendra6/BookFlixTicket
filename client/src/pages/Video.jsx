import React, { useState } from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    "https://www.youtube.com/embed/WpW36ldAqnM",
    "https://www.youtube.com/embed/-sAOWhvheK8",
    "https://www.youtube.com/embed/1pHDWnXmK7Y",
    "https://www.youtube.com/embed/umiKiW4En9g"
  ];

  const thumbnails = [
    "video1.jpg",
    "video2.jpg",
    "video3.jpg",
    "video4.jpg",
  ];

  const handleVideoClick = (index) => {
    setSelectedVideo(index);
  };

  return (
    <div className="h-full w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 bg-[#09090B] text-white pb-[150px]">
      <div className="max-w-[1000px] mx-auto space-y-10">
      
        <h2 className='font-semibold text-xl'>Trailers</h2>
 
        <div className="aspect-video w-full">
          <iframe
            src={videos[selectedVideo]}
            title={`Trailer ${selectedVideo + 1}`}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[800px] mx-auto mt-10">
          {thumbnails.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer relative transition-transform duration-300 hover:-translate-y-1 opacity-50 hover:opacity-100"
            >
              <img
                src={src}
                alt={`Video Thumbnail ${index + 1}`}
                className="w-full h-20 sm:h-24 md:h-28 object-cover rounded-lg"
                onClick={() => handleVideoClick(index)}
              />
              <FaRegPlayCircle className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
