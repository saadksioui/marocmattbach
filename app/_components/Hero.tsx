import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-orange-600 bg-orange-400/10 py-1 px-5 rounded-4xl text-sm md:text-base uppercase tracking-widest mb-4 font-light">
            Exceptional Catering Services
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Exceptional Catering for Every Occasion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl mx-auto">
            Elevate your event with our exquisite culinary creations and impeccable service
          </p>
          <div className="space-x-4">
            <Link
              href="#contact"
              className="inline-block bg-orange-600 hover:bg-opacity-90 text-white px-8 py-3 rounded transition duration-300 font-medium"
            >
              Book Now
            </Link>
            <Link
              href="#services"
              className="inline-block bg-transparent border border-white hover:border-orange-600 hover:text-orange-600 text-white px-8 py-3 rounded transition duration-300 font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <Link
          href="#about"
          className="inline-block text-white hover:text-orange-600 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;