"use client"
import React, { useState } from 'react';
import { menuItems, MenuCategory } from '@/utils/data';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('appetizers');

  return (
    <section id="menu" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-600 text-sm uppercase tracking-widest font-medium">Our Offerings</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Sample Menu Selections
          </h2>
          <p className="text-gray-600">
            Discover our chef's signature creations, crafted with seasonal ingredients and exceptional care.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 md:space-x-4">
          {(['appetizers', 'mains', 'desserts'] as MenuCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full mb-2 md:mb-0 capitalize transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-serif text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-orange-600 font-medium">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {item.dietary && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.dietary.map((diet, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-beige text-gray-700 text-xs rounded-full"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded transition duration-300 font-medium"
          >
            Request Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;