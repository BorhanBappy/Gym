import React from "react";

function Gallery() {
  return (
    <div>
      <div>
        <h1 className=" text-black text-4xl text-center p-2">
          Welcome to Our Gym Gallery
        </h1>
        <p className=" text-center text-lg m-4">
          Our gym is more than just a place to work up a sweat; it's a community
          where fitness meets inspiration. In our Gallery section, we showcase
          the heart and soul of our fitness haven, where dedication and hard
          work yield incredible transformations and memorable moments.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <img
          src="src/images/gallery1.png"
          alt="Gallery 1"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery2.jpg"
          alt="Gallery 2"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery3.jpg"
          alt="Gallery 3"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery4.jpg"
          alt="Gallery 4"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery5.jpg"
          alt="Gallery 5"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery6.jpg"
          alt="Gallery 6"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery7.jpg"
          alt="Gallery 7"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery8.jpg"
          alt="Gallery 8"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery9.jpg"
          alt="Gallery 9"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery10.jpg"
          alt="Gallery 10"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery11.jpg"
          alt="Gallery 11"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery12.jpg"
          alt="Gallery 12"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery13.jpg"
          alt="Gallery 13"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery14.jpg"
          alt="Gallery 14"
          className="max-w-full h-auto"
        />
        <img
          src="src/images/gallery15.jpg"
          alt="Gallery 14"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Gallery;
