import React from 'react';
import { NavLink } from 'react-router-dom';

interface ServiceItemProps {
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title }) => (
  <li className="flex items-center">
    <svg className="w-5 h-5 text-brand-pink mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
    <span>{title}</span>
  </li>
);

interface ServiceSectionProps {
  title: string;
  description: string;
  services: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, services }) => (
  <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
    <h2 className="text-4xl font-playfair font-bold text-brand-purple mb-4">{title}</h2>
    <p className="text-gray-600 mb-8">{description}</p>
    <ul className="space-y-4 text-lg text-gray-700">
      {services.map((service, index) => <ServiceItem key={index} title={service} />)}
    </ul>
  </div>
);

const ServicesPage: React.FC = () => {
  const webServices = [
    "Custom responsive websites",
    "UI/UX for web & mobile",
    "SEO architecture & setup",
    "Content Management Systems (CMS)"
  ];
  const saasServices = [
    "Full-stack cloud applications",
    "API integrations & payment gateways",
    "User dashboards & analytics",
    "MVP and scalable architecture"
  ];
  const marketingServices = [
    "Social media & paid advertising",
    "Content strategy & creation",
    "Search Engine Optimization (SEO)",
    "Email marketing & automation",
    "Comprehensive branding"
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-brand-charcoal mb-4">Our Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to build, market, and scale your brand.
          </p>
        </div>
        
        <div className="space-y-12">
          <ServiceSection 
            title="Web Development & Design"
            description="We build beautiful, high-performing websites that provide an exceptional user experience and drive conversions."
            services={webServices}
          />
          <ServiceSection 
            title="SaaS Development"
            description="From concept to launch, we develop robust and scalable Software-as-a-Service platforms tailored to your business goals."
            services={saasServices}
          />
          <ServiceSection 
            title="Digital Marketing"
            description="Our data-driven marketing strategies are designed to increase your visibility, engage your audience, and boost your bottom line."
            services={marketingServices}
          />
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center bg-gradient-to-r from-brand-purple to-brand-pink text-white py-16 px-6 rounded-3xl">
          <h2 className="text-4xl font-playfair font-bold mb-4">Let’s Build Your Digital Success Story</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Ready to transform your vision into reality? We're here to help you every step of the way.</p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-brand-purple font-semibold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote Now
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;