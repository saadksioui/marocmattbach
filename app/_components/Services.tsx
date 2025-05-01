import React from 'react';
import { Users, Utensils, GlassWater } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a
        href="#contact"
        className="inline-block mt-6 text-gold hover:text-gold-dark transition-colors duration-300 font-medium"
      >
        Learn More →
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const serviceItems = [
    {
      title: 'Wedding Catering',
      description: 'Create unforgettable memories with our bespoke wedding menus, from intimate gatherings to grand celebrations.',
      icon: <Users size={32} />,
    },
    {
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with sophisticated menus designed for business lunches, conferences, and galas.',
      icon: <Utensils size={32} />,
    },
    {
      title: 'Private Parties',
      description: 'Transform your special occasion with personalized menus crafted to reflect your taste and style.',
      icon: <GlassWater size={32} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm uppercase tracking-widest font-medium">Our Expertise</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Tailored Catering Services
          </h2>
          <p className="text-gray-600">
            From intimate gatherings to grand celebrations, we provide bespoke catering solutions that exceed expectations and create memorable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-gold hover:bg-opacity-90 text-white px-8 py-3 rounded transition duration-300 font-medium"
          >
            Discuss Your Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;