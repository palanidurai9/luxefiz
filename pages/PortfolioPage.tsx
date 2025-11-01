import React from 'react';

interface PortfolioItem {
  name: string;
  type: 'Web' | 'SaaS' | 'Marketing';
  result: string;
  imageUrl: string;
}

const portfolioData: PortfolioItem[] = [
  {
    name: 'Website for Educational Consultancy',
    type: 'Web',
    result: 'Boosted inquiries by 30%',
    imageUrl: 'image/portfolio/SVET.png',
  },
  {
    name: 'University Website Redesign',
    type: 'Web',
    result: 'Enhanced user experience and engagement',
    imageUrl: 'image/portfolio/pkdas.png',
  },
  {
    name: 'Marketing for Fashion brand',
    type: 'Marketing',
    result: 'Grew social media following by 50%',
    imageUrl: 'image/portfolio/skrsta.png',
  },
  {
    name: 'Saas for Healthcare Management',
    type: 'SaaS',
    result: 'Streamlined operations for 100+ clinics',
    imageUrl: 'image/portfolio/SPLSaas.png',
  },
];

const PortfolioCard: React.FC<PortfolioItem> = ({ name, type, result, imageUrl }) => {
  const typeColor = type === 'Web' ? 'bg-blue-100 text-blue-800' : type === 'SaaS' ? 'bg-purple-100 text-purple-800' : 'bg-pink-100 text-pink-800';

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-brand-charcoal">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
      />
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content that appears on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${typeColor}`}>{type}</span>
        <h3 className="text-3xl font-playfair font-bold mb-2 drop-shadow-md">{name}</h3>
        <p className="font-semibold drop-shadow-sm">{result}</p>
      </div>
    </div>
  );
};

const PortfolioPage: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-brand-charcoal mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in our work. Here are some of the projects we've helped bring to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;