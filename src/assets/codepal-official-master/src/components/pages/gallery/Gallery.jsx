import React from "react";
import { galleryImages } from "./data";

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-bold">
          Our
          <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
            {" "}
            Gallery.
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Explore our gallery showcasing the best moments and achievements of
          our team.
        </p>

        <div className="w-full mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg p-4">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
