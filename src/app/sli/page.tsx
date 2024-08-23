'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // This import is unused in the current code, consider removing if not used

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla mx-auto max-w-lg relative">
      <div className="embla__viewport h-56 border" ref={emblaRef}>
        <div className="embla__container h-full">
          <div className="embla__slide flex items-center justify-center">
            <img src="ProductImage.png" alt="Product" className="w-full" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <video controls className="w-full h-auto">
              <source src="SnapSave.io-Docker Tutorial for Beginners [FULL COURSE in 3 Hours]-(1080p).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="embla__slide flex items-center justify-center">
            Slide 3
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent p-2 text-white"
        onClick={scrollPrev}
        aria-label="Previous Slide"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20px"
          >
            <circle cx="256" cy="256" r="246" fill="none" />
            <polyline points="333.82 100.37 178.18 256 333.82 411.63" fill="none" />
          </g>
        </svg>
      </button>


      {/* Next Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent p-2 text-white"
        onClick={scrollNext}
        aria-label="Next Slide"
      >
        <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <circle cx="256" cy="256" r="246" fill="none" stroke="black" strokeWidth="20" />
          <polyline points="178.18 411.63 333.82 256 178.18 100.37" fill="none" stroke="black" strokeWidth="20" />
        </svg>
      </button>
    </div>


  );
}
