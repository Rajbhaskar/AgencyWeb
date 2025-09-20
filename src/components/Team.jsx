import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import bhaskar from "../assets/bhaskar.jpeg"
import chitransh from "../assets/chitransh.jpeg"
import amar from "../assets/amar.jpeg"
import sanjay from "../assets/sanjay.jpeg"

const teamData = [
  {
    name: "Chitransh Bhaskar",
    role: "Co-Founder & Managing Director",
    bio: "Chitransh Bhaskar is the Founder & Managing Director of Seetimaar Films Pvt. Ltd., an award-winning storyteller known for blending creativity with innovation. With his vision, he is merging the art of storytelling with cutting-edge corporate and creative technologies to shape the future of entertainment and branding.",
    image: chitransh,
    alt: "Founder & CEO"
  },
  {
    name: "Raj Bhaskar Singh",
    role: "Co-Founder & Head of Technology",
    bio: " Raj drives the digital backbone of the agency, leading the development of websites, apps, and tech solutions that bring creative ideas to life. With a strong focus on functionality and innovation, he ensures the agency's projects are built on solid, scalable technology.",
    image: bhaskar,
    alt: "Priya Sharma - Technical Director"
  },
  {
    name: "Amarnath Yadav",
    role: "Co-Founder & Head of Technology",
    bio: "Amarnath specializes in building smart, reliable digital solutions for the agency's projects. From apps to backend systems, he ensures every technical detail runs smoothly, helping transform creative concepts into seamless user experiences.",
    image: amar,
    alt: "Amit Patel - Production Manager"
  },
  {
    name: "Sanjay Singh",
    role: " Co-Founder & CEO",
    bio: "Sanjay Yadav is the CEO of Seetimaar Films Private Limited, where he combines his expertise in marketing, data analytics, development, and coding to drive innovation and growth. With his versatile knowledge and strategic vision, he strengthens the company's creative and technological foundation.",
    image: sanjay,
    alt: "Sunita Singh - Quality Assurance Head"
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const teamContainerRef = useRef(null);

  const toggleMember = React.useCallback((index) => {
    setSelectedMember(current => current === index ? null : index);
  }, []);

  // Close details when clicking anywhere outside the team container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedMember !== null && teamContainerRef.current && !teamContainerRef.current.contains(event.target)) {
        setSelectedMember(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedMember]);

  return (
    <div className='bg-black flex flex-col min-h-fit items-center text-center justify-center pt-20 pb-16 mx-auto'>
      {/* Heading */}
      <ScrollReveal delay={0.2} blurAmount={8} slideDistance={30}>
        <div>
          <h3 className="text-gray-300 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
            Our Team
          </h3>
        </div>
        <div>
          <p className="text-gray-300 max-w-2xl mt-3 text-sm sm:text-base md:text-lg lg:text-lg mx-auto">
            Meet the experienced professionals behind our fabrication excellence. 
            Our team brings decades of combined expertise in tank manufacturing, 
            pipeline fabrication, and structural engineering.
          </p>
        </div>
      </ScrollReveal>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div ref={teamContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamData.map((member, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)} blurAmount={8} slideDistance={30}>
              <Motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* ✅ FIXED - Team Member Card with Tailwind hover modifiers */}
                <div 
                  className="relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleMember(index);
                  }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className={`w-full h-full object-contain transition-transform duration-500 ${
                        selectedMember === index 
                          ? 'scale-110' 
                          : 'hover:scale-110'
                      }`}
                      style={{
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    
                    {/* Fallback for failed images */}
                    <div className="absolute inset-0 bg-gray-800 items-center justify-center hidden">
                      <div className="text-gray-400 text-center">
                        <div className="text-4xl mb-2">👤</div>
                        <div className="text-sm">Image unavailable</div>
                      </div>
                    </div>
                    
                    {/* ✅ FIXED - Mobile-only overlay (click state) */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 sm:hidden ${
                      selectedMember === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className={`absolute inset-0 flex flex-col justify-end p-4 text-white transition-transform duration-300 ${
                        selectedMember === index ? 'translate-y-0' : 'translate-y-4'
                      }`}>
                        <h4 className="text-lg font-bold mb-1" style={{ willChange: 'transform' }}>
                          {member.name}
                        </h4>
                        <p className="text-purple-300 text-sm font-medium mb-2" style={{ willChange: 'transform' }}>
                          {member.role}
                        </p>
                        <p className="text-gray-200 text-xs leading-relaxed" style={{ willChange: 'transform' }}>
                          {member.bio}
                        </p>
                        <div className="mt-2 text-purple-300 text-xs font-medium animate-pulse">
                          Tap again to close
                        </div>
                      </div>
                    </div>
                    
                    {/* ✅ FIXED - Desktop-only hover overlay (separated from mobile) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 hidden sm:block pointer-events-none">
                      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-lg font-bold mb-1" style={{ willChange: 'transform' }}>
                          {member.name}
                        </h4>
                        <p className="text-purple-300 text-sm font-medium mb-2" style={{ willChange: 'transform' }}>
                          {member.role}
                        </p>
                        <p className="text-gray-200 text-xs leading-relaxed" style={{ willChange: 'transform' }}>
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* ✅ FIXED - Default Content with proper visibility logic */}
                  <div className={`p-4 transition-opacity duration-300 ${
                    selectedMember === index 
                      ? 'opacity-0 sm:opacity-100' 
                      : 'opacity-100'
                  } hover:opacity-0`}>
                    <h4 
                      className="text-white font-bold text-lg mb-1"
                      style={{ 
                        willChange: 'opacity',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      {member.name}
                    </h4>
                    <p 
                      className="text-purple-300 text-sm font-medium"
                      style={{ 
                        willChange: 'opacity',
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>
              </Motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
