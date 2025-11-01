
import React from 'react';
import { StarIcon } from '../components/icons/StarIcon';
import { QuoteIcon } from '../components/icons/QuoteIcon';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  imageUrl: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Luxefiz gave our consultancy a modern, credible online presence. The website not only looked elegant but also increased our student inquiries by 30%! Their work ethic and creativity truly set them apart.",
    name: "Gokulnath",
    company: "Founder, SVET Consultancy",
    imageUrl: "public/image/gokul.png",
  },
  {
    quote: "Luxefiz completely reimagined our university’s online presence. The new design feels modern, easy to navigate, and has greatly improved student engagement. Their attention to detail and understanding of our vision were outstanding!",
    name: "Nehru Group of Institution",
    company: "P K Das University",
    imageUrl: "public/image/NGI.png",
  },
  {
    quote: "Luxefiz helped our fashion brand stand out online! Their creative marketing campaigns and aesthetic visuals grew our social media following by 50%. Truly impressed by their strategy and consistency.",
    name: "Ahmed Rashmi",
    company: "Founder, SKRSTA",
    imageUrl: "public/image/AR.png",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, company, imageUrl }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-purple relative overflow-hidden">
    <div className="absolute -top-4 -left-4 opacity-10">
      <QuoteIcon />
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-lg text-gray-700 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={imageUrl} alt={name} className="w-14 h-14 rounded-full object-cover mr-4" />
      <div>
        <p className="font-bold text-brand-charcoal">{name}</p>
        <p className="text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-brand-charcoal mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to build long-term relationships with our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
