import React from 'react';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { YouTubeIcon } from '../components/icons/YouTubeIcon';

const CoreValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-brand-pink">
        <h3 className="text-xl font-bold font-playfair text-brand-charcoal mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const AboutPage: React.FC = () => {
    return (
        <div className="py-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-playfair font-bold text-brand-charcoal">
                        Blending Luxury Design with Smart Strategy
                    </h1>
                </div>

                {/* Founder Section */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img 
                            src="image/meeee.png" 
                            alt="Palani Durai (RPD), Founder of Luxefiz" 
                            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-playfair font-bold mb-4">Meet Our Founder</h2>
                        <h3 className="text-6xl text-brand-purple font-semibold mb-6">Palani Durai (RPD)</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            A student entrepreneur with a passion for technology, design, and brand strategy — Palani Durai founded Luxefiz from Tamil Nadu with <b>one vision in mind: to make premium digital services accessible for every business.</b>
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            With a background in Information Technology, he identified a gap between high-end agencies and ambitious startups who needed the same quality — but couldn’t afford the traditional agency pricing.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            His mission is simple: 
                            <br></br>
                            <b>Democratize world-class design and digital growth.</b>
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Luxefiz exists to prove that premium doesn’t have to mean expensive — every business, whether a small startup or a growing brand, deserves modern design, intelligent marketing, and technology-driven solutions without barriers.
                        </p>
                         {/* Social Media Links for Founder */}
                        <div className="mt-6 flex space-x-4">
                            <a href="https://www.linkedin.com/in/palani-durai-5aa942284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors duration-300">
                                <LinkedInIcon />
                            </a>
                            <a href="https://instagram.com/rp_duraii__" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors duration-300">
                                <InstagramIcon />
                            </a>
                            <a href="https://www.youtube.com/@rp_durai" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors duration-300">
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>
                    
                </section>

                {/* Mission & Vision */}
                <section className="mb-20 text-center">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <h3 className="text-3xl font-playfair font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To deliver premium-quality digital solutions that combine luxury aesthetics with smart affordability.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-2xl">
                            <h3 className="text-3xl font-playfair font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To become India’s leading creative tech partner blending design, strategy, and technology.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section>
                    <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                       <CoreValueCard title="Quality with Class" description="We are committed to excellence and elegance in every pixel and line of code."/>
                       <CoreValueCard title="Affordable Innovation" description="We make cutting-edge technology and creative solutions accessible to everyone."/>
                       <CoreValueCard title="Creative Logic" description="Our strategies are a perfect blend of artistic vision and data-driven insights."/>
                       <CoreValueCard title="Long-term Relationships" description="We believe in growing with our clients, acting as a true partner in their success."/>
                       <CoreValueCard title="Continuous Learning" description="The digital world is always evolving, and so are we. We stay ahead of the curve."/>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;