
import React from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
    <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-white font-bold text-3xl font-playfair">
            {step}
        </div>
        <div>
            <h3 className="text-2xl font-bold font-playfair mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);


const ProcessPage: React.FC = () => {
  const steps = [
    { title: 'Discovery & Strategy', description: 'We dive deep into your goals to create a tailored roadmap for success.' },
    { title: 'Design & Prototype', description: 'Our team crafts stunning, user-centric designs and interactive prototypes.' },
    { title: 'Development & Testing', description: 'We build your project with clean code and rigorously test for perfection.' },
    { title: 'Marketing & Launch', description: 'A strategic launch plan ensures maximum impact from day one.' },
    { title: 'Optimization & Support', description: 'We analyze performance and provide ongoing support to ensure continued growth.' },
    { title: 'Scaling Up', description: 'As you grow, we help you scale your digital infrastructure and strategy.' },
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-brand-charcoal mb-4">Our Workflow</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent and collaborative process designed to deliver exceptional results, every time.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {steps.map((item, index) => (
            <ProcessStep key={index} step={index + 1} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
