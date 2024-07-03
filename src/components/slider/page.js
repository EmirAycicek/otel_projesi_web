"use client";
import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const images = [
  'https://www.hilton.com/im/en/GYDHBHI/4680159/entrance-1-.jpg?impolicy=crop&cw=4256&ch=2382&gravity=NorthWest&xposition=0&yposition=224&rw=768&rh=430',
  'https://www.hilton.com/im/en/GYDHBHI/17880498/-dsf2014-1-.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=475&rw=768&rh=430',
  'https://www.hilton.com/im/en/GYDHBHI/17880495/-dsf2026-1-.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=475&rw=768&rh=430',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='flex justify-center mt-6'>
      <div className='relative w-full max-w-4xl'>
        {images.map((img, index) => (
          <div
            className={
              index === current ? 'opacity-100 duration-700' : 'opacity-0'
            }
            key={index}
          >
            {index === current && (
              <img src={img} alt={`Slide ${index}`} className='w-full h-auto' />
            )}
          </div>
        ))}
        <button
          onClick={prevSlide}
          className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
        >
          <FaAngleLeft className='h-8 w-8' />
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2'
        >
          <FaAngleRight className='h-8 w-8' />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
