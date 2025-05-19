"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../utils/data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxIndex = testimonials.length - 1;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(current => (current === maxIndex ? 0 : current + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(current => (current === 0 ? maxIndex : current - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-500 bg-orange-400/10 py-1 px-5 rounded-4xl text-sm uppercase tracking-widest font-medium">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            We take pride in exceeding expectations and creating memorable experiences for our clients.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-beige p-8 md:p-10 rounded-lg shadow-md relative">
                    <Quote className="text-orange-500 opacity-20 absolute top-6 left-6" size={40} />
                    <div className="relative z-10">
                      <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-orange-500 text-sm">{testimonial.event}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-orange-500 focus:outline-none transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-orange-500 focus:outline-none transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-orange-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;