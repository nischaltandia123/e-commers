import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="aspect-[1375/495] w-full m-auto rounded-s relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div
        className="absolute top-[50%] left-2 md:left-5 transform -translate-y-[50%] cursor-pointer text-white z-10"
        onClick={prevSlide}
      >
        &#10094;
      </div>
      <div
        className="absolute top-[50%] right-2 md:right-5 transform -translate-y-[50%] cursor-pointer text-white z-10"
        onClick={nextSlide}
      >
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
