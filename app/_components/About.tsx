import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Chefs preparing gourmet food"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <p className="font-serif text-2xl font-bold">8+</p>
                <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-orange-600 bg-orange-400/10 py-1 px-5 rounded-4xl text-sm uppercase tracking-widest font-medium">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
              Crafting Culinary Experiences Since 2018
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by award-winning chef Alessandra Rivera, GourmetElite began with a simple mission: to create extraordinary dining experiences that elevate any occasion. What started as a small boutique catering service has evolved into one of the city's most prestigious culinary teams.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of culinary professionals brings together diverse expertise from Michelin-starred restaurants, boutique hotels, and international culinary schools. We pride ourselves on sourcing the finest seasonal ingredients and crafting them into memorable dishes that tell a story and create lasting impressions.
            </p>
            <a
              href="#services"
              className="inline-block border-b-2 border-orange-600 text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium"
            >
              Learn More About Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;