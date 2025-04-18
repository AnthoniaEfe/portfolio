import React from 'react'
import { useState } from 'react';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImage from "../assets/about-image.jpeg"  
import bannerImage from "../assets/banner-image.jpeg"  
import HorizontalLine from './HorizontalLine';
   
const slides = [
  {bookmark: "lorem ipsum",
    background: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    bannerImage: [aboutImage, "banner image"],
    staticPreviewImage: [ aboutImage, bannerImage]
  },
  {bookmark: "lorem ipsum",
    background: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    bannerImage: [aboutImage, "banner image"],
    staticPreviewImage: [ aboutImage, bannerImage]
  },

];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
  return (
    <div className="w-full overflow-hidden ">
    {/* Slides container */}
    <div
      className="flex transition-transform duration-500 ease-in-out w-full"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="w-full flex-shrink-0 flex flex-col p-4 md:p-8 lg:p-10">
          <div className='w-full h-full p-4'>
            <img src={slide.bannerImage[0]} alt={slide.bannerImage[1]} className='w-full h-full 
            max-h-[70vh] px-6 md:px-20 object-cover object-top'/>
          </div>

          <div className='flex flex-row gap-4 md:gap-8 justify-stretch items-center'>
          <div className='w-full h-full p-4'>
            <HorizontalLine/>
            <h1 className='font-dm-serif-text font-extrabold'>Bookmark</h1>
            <p>{slide.bookmark}</p>
            <a href="#">Visit Website</a>
            <HorizontalLine/>
          </div>

          <div className='w-full h-full p-4'>
            <h2 className='font-dm-serif-text font-bold'>Project Background</h2>
            <p>{slide.background}</p>

            <h2 className='font-dm-serif-text font-bold'>Static Previews</h2>
            <img src={slide.staticPreviewImage[0]} alt="static preview image" />
            <img src={slide.staticPreviewImage[1]} alt="static preview image" />
          </div>
          </div>
        </div>
      ))}
    </div>

    {/* Arrows */}
    <button
      onClick={prevSlide}
      className=" p-2 "
    >
      
      <FontAwesomeIcon icon={faChevronLeft} />previous project
    </button>
    <button
      onClick={nextSlide}
      className="p-2"
    >
      next project
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
  )
}
