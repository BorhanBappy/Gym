import React from "react";

function Gallery() {
  return (
    <>
      <div>
        <div className="pt-10">
          <h1 className="text-4xl py-4 relative text-center">
            <span className="text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text">
              Welcome to Our Gym Gallery
            </span>
          </h1>
          <p className=" text-lg m-4 text-[#14DCEB] text-justify font-semibold">
            Our gym is more than just a place to work up a sweat; it&apos;s a
            community where fitness meets inspiration. In our Gallery section,
            we showcase the heart and soul of our fitness haven, where
            dedication and hard work yield incredible transformations and
            memorable moments.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 15 }, (_, index) => (
            <img
              key={`gallery-image-${index + 1}`}
              src={`/images/gallery${index + 1}.jpg`}
              alt={`Gallery ${index + 1}`}
              className="max-w-full h-auto"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
