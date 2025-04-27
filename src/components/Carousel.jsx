import React from 'react'
import { useState } from 'react';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImage from "../assets/about-image.jpeg"  
import bannerImage from "../assets/banner-image.jpeg"  
import {motion} from "framer-motion"
   
const slides = [
  {bookmark: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    background: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    bannerImage: [aboutImage, "banner image"],
    staticPreviewImage: [ aboutImage, bannerImage],
    tags: ['interactive design', 'responsive design', 'front end dev'],
    stack: ['HTML', 'css', 'js']
  },
  {bookmark: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    background: "Lorem ipsum dolor sit amet consaerat quia nobis quasi, nisi nihil numquam placeat tempore, atque obcaecati, possimus labore.",
    bannerImage: [aboutImage, "banner image"],
    staticPreviewImage: [ aboutImage, bannerImage],
    tags: ['interactive design', 'responsive design', ],
    stack: ['css', 'js']
  },

];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const MotionDiv = motion.div;
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
  return (
    <motion.div className="w-full overflow-hidden ">
    {/* Slides container */}
    <div
      className="flex transition-transform duration-500 ease-in-out w-full"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="w-full flex-shrink-0 flex flex-col p-4 md:p-8 lg:p-10 gap-10 md:gap-12">
          <div className='w-full h-full p-4'>
            <img src={slide.bannerImage[0]} alt={slide.bannerImage[1]} className='w-full h-full 
            max-h-[60vh] px-6 md:px-20 object-fill object-center '/>
          </div>

          <div className='flex flex-col md:flex-row gap- justify-stretch items-center'>
          <div className='w-[50%] h-full p-8 flex flex-col gap-4 '>
           <hr></hr>
            <h2>Project</h2>
            <p className='mt-4'>{slide.bookmark}</p>
            <p className='text-purple-light capitalize text-xs'>{slide.tags.join(' / ')}</p>
            <p className='text-purple-light uppercase text-xs'>{slide.stack.join(' / ')}</p>
            <a href="#" className='hollow-button text-xs tracking-wider'>Visit Website</a>
           <hr className='mt-4'></hr>
          </div>

          <div className='w-full h-full flex flex-col gap-6 p-8'>
            <h3>Project Background</h3>
            <p>{slide.background}</p>

            <h3 className='mt-4'>Static Previews</h3>
            {slide.staticPreviewImage.map((item, index)=>(
              <img key={index} src={item} alt={`static preview image ${index}`} />
            ))}
          </div>
          </div>
        </div>
      ))}
    </div>

   
    <div className='px-8 md:px-18 flex flex-row justify-between border-y-[1px] border-gray-200 items-center'>
      {/* left arrow */}
      <button onClick={prevSlide} className="carousel-button flex">
      <motion.div 
                   animate={{
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    x: -6, 
                    transition: { type: "spring", stiffness: 300, duration:0.5 }   
                  }}
              >
        <FontAwesomeIcon icon={faChevronLeft} className='h-12 mr-5 text-purple-light'/>
        </motion.div>
        previous project
      </button>
        {/* Vertical divider */}
        <div className="w-px self-stretch bg-gray-200"></div>
      {/* right arrow */}
      <button onClick={nextSlide} className="carousel-button text-right flex" >
        next project
        <motion.div 
                   animate={{
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    x: 6, 
                    transition: { type: "spring", stiffness: 300, duration:0.5 }   
                  }}
              > <FontAwesomeIcon icon={faChevronRight} className='h-12 ml-5 text-purple-light' />
      </motion.div>
      </button>
    </div>
  </motion.div>
  )
}
