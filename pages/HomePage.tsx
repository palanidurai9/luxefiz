import React from 'react';
import { NavLink } from 'react-router-dom';
import { PremiumDesignIcon } from '../components/icons/PremiumDesignIcon';
import { SmartMarketingIcon } from '../components/icons/SmartMarketingIcon';
import { ScalableSassIcon } from '../components/icons/ScalableSassIcon';

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <h3 className="text-2xl font-bold font-playfair text-brand-charcoal mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="flex justify-center items-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative text-white py-32 px-6 bg-gradient-to-r from-brand-purple to-brand-pink bg-200% animate-gradient-flow">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-playfair font-black leading-tight mb-4">
            Marketing with Class, Easy on Cash.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Luxury-quality digital marketing, web, and SaaS solutions made affordable.
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              to="/contact"
              className="px-8 py-3 bg-white text-brand-purple font-semibold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Get a Free Quote
            </NavLink>
            <NavLink
              to="/portfolio"
              className="px-8 py-3 bg-transparent border-2 border-white font-semibold rounded-full hover:bg-white hover:text-brand-purple transform hover:scale-105 transition-all duration-300"
            >
              See Our Work
            </NavLink>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Web Development" description="Crafting stunning, responsive websites that convert visitors into customers." />
            <ServiceCard title="SaaS Development" description="Building scalable and robust software-as-a-service applications from scratch." />
            <ServiceCard title="Digital Marketing" description="Driving growth with data-driven strategies across all digital channels." />
          </div>
          <div className="text-center mt-12">
            <p className="text-lg">We blend luxury design with smart strategy to help startups grow.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Luxefiz */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold mb-12">Why Choose Luxefiz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<PremiumDesignIcon />} title="Premium Design" description="Elegant and modern aesthetics that elevate your brand's presence." />
            <FeatureCard icon={<SmartMarketingIcon />} title="Smart Marketing" description="Logical, result-oriented strategies that maximize your ROI." />
            <FeatureCard icon={<ScalableSassIcon />} title="Scalable SaaS Solutions" description="Future-proof applications that grow with your business needs." />
          </div>
        </div>
      </section>

      {/* Client Logos / Testimonials Placeholder */}
      <section className="py-20 px-6 bg-gray-50">
  <div className="container mx-auto text-center">
    <h3 className="text-2xl font-bold text-gray-500 mb-8">
      Trusted by growing brands
    </h3>
    <div className="flex flex-wrap justify-center items-center gap-40">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-2xl p-2 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
        <img
          src="image/clientlogo/pklogo.png"
          alt="Client Logo 1"
          className="h-12 object-contain"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-2xl p-0.1 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
        <img
          src="image/clientlogo/skrstalogo.png"
          alt="Client Logo 2"
          className="h-12 object-contain"
        />
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-2xl p-0.5 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
        <img
          src="image/clientlogo/svetlogo.png"
          alt="Client Logo 3"
          className="h-12 object-contain"
        />
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-2xl p-0.3 flex justify-center items-center w-40 h-28 hover:shadow-xl transition-all duration-300">
        <img
          src="image/clientlogo/spllogo.png"
          alt="Client Logo 4"
          className="h-12 object-contain"
        />
      </div>
    </div>
  </div>
</section>



      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-playfair font-bold mb-4">Ready to grow your brand with class?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let's collaborate to create something extraordinary that drives real business results.</p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-brand-purple to-brand-pink hover:shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;