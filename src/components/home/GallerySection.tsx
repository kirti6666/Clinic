"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  const images = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-mist">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-forest font-bold mb-4">Inside Our Clinic</h2>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full" />
        </div>

        <div className="relative group w-full max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="w-full overflow-hidden rounded-2xl relative aspect-[4/3] md:aspect-[16/9] bg-mist border border-sage-light shadow-md group/carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={`/gallery-${images[currentIndex]}.jpg`}
                  alt={`Clinic Gallery ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover transition-transform duration-700 group-hover/carousel:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 md:w-12 md:h-12 bg-sage text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg hover:bg-forest focus:opacity-100 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 md:w-12 md:h-12 bg-sage text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg hover:bg-forest focus:opacity-100 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-4 md:gap-3 mt-6 md:mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`min-w-[44px] min-h-[24px] flex items-center justify-center transition-all ${
                i === currentIndex ? "text-sage" : "text-sage-light"
              }`}
              aria-label={`Go to image ${i + 1}`}
            >
              <span className={`block rounded-full transition-all ${
                i === currentIndex ? "bg-sage w-6 md:w-8 h-3 md:h-2" : "bg-sage-light w-3 md:w-2 h-3 md:h-2"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
