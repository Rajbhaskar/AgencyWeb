import React, { useState, useCallback, useMemo, useEffect } from "react";
import seetimaar1 from '../assets/seetimaar1.jpeg'
import missileman from "../assets/missileman.jpeg"
import logoseet from "../assets/logoseet.jpeg"
import seetiad from "../assets/seetiad.jpeg"
import zoho from "../assets/zoho.jpeg"
import scheme from "../assets/scheme.jpeg"
import sprite from "../assets/sprite.jpeg"
import roboArm from "../assets/roboArm.png"

const projects = [
  {
    title: "Bhaskar Engineering Website",
    image: roboArm,
    liveLink: "https://bhaskarengineering.in/"
  },
  {
    title: "SeetiMaar Films Website", 
    image: logoseet,
    liveLink: "https://seetimaarfilms.com"
  },
  {
    title: "Seeti Maar Films Theatrical theme video",
    image: seetimaar1, 
    liveLink: "https://www.instagram.com/reel/DLP2c5czlQO/?igsh=d3NsbW81cGdmN2t3"
  },
  {
    title: "The Missile Man - Biopic of exPresident of India",
    image: missileman, 
    liveLink: "https://drive.google.com/file/d/1o0kb64bUd6nCwuEvHMq9GK_RCrtJiyt5/view?usp=drivesdk"
  },
  {
    title: "Announcement SeetiMaar 2.0 Ad",
    image: seetiad, 
    liveLink: "https://www.instagram.com/reel/DM-2NasP-cc/?igsh=a3Z5cXZ1MmxwN3pv"
  },
  {
    title: "Zobo - The cute little alien",
    image: zoho, 
    liveLink: "https://www.instagram.com/reel/DMugqdzPeM7/?igsh=MXRuZHVyZGZkcm1pNw=="
  },
  {
    title: "Scheme Announcement Ad",
    image: scheme, 
    liveLink: "https://www.instagram.com/reel/DOvyCiOggwx/?igsh=MXdrd3MxZm1xNDlnaw=="
  },
  {
    title: "CoCo-Cola Sprite Ad",
    image: sprite, 
    liveLink: "https://www.instagram.com/reel/DM5n6dMvTkD/?igsh=MXFzYjI1MmVvd3R5Yg=="
  },
];

// Memoized styles to prevent recreation on every render
const cardStyles = {
  background: `
    linear-gradient(135deg, 
      rgba(17, 17, 17, 0.95), 
      rgba(0, 0, 0, 0.8)
    ),
    rgba(129, 74, 200, 0.05)
  `,
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  boxShadow: `
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(129, 74, 200, 0.1),
    0 8px 32px rgba(129, 74, 200, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05)
  `,
};

const buttonStyles = {
  background: `
    linear-gradient(135deg, 
      rgba(17, 17, 17, 0.8), 
      rgba(0, 0, 0, 0.6)
    ),
    rgba(129, 74, 200, 0.1)
  `,
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)",
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(129, 74, 200, 0.2),
    0 4px 16px rgba(129, 74, 200, 0.1)
  `,
};

// Optimized Image Component with better error handling and loading
const OptimizedImage = React.memo(({ src, alt, className, style }) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    src: src
  });

  // Preload images for better UX
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    const handleLoad = () => {
      setImageState(prev => ({ ...prev, loaded: true, error: false }));
    };
    
    const handleError = () => {
      console.warn(`Failed to load image: ${src}`);
      setImageState(prev => ({ ...prev, error: true, loaded: true }));
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  if (imageState.error) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center`} style={style}>
        <div className="text-4xl mb-2">🎬</div>
        <div className="text-gray-300 text-sm text-center px-4">
          <div className="font-medium">Preview</div>
          <div className="text-xs mt-1 opacity-75">Image loading failed</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {!imageState.loaded && (
        <div className={`absolute inset-0 ${className} bg-gray-800 animate-pulse flex items-center justify-center`} style={style}>
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          imageState.loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={style}
        loading={imageState.loaded ? "eager" : "lazy"}
        onLoad={() => setImageState(prev => ({ ...prev, loaded: true, error: false }))}
        onError={() => setImageState(prev => ({ ...prev, error: true, loaded: true }))}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Carousel card component - optimized for performance
const CarouselCard = React.memo(({ project, position, isMobile = false }) => {
  const cardStyle = useMemo(() => ({
    transform: isMobile 
      ? `translateX(${position * 100}%) scale(${1 - position * 0.05})`
      : `translateX(${position * 20}%) scale(${1 - position * 0.1})`,
    zIndex: projects.length - position,
    opacity: position > (isMobile ? 1 : 2) ? 0 : 1,
    ...cardStyles,
  }), [position, isMobile]);

  // Only render images for visible cards to improve performance
  const shouldRenderImage = position <= (isMobile ? 1 : 2);

  return (
    <div
      className={`absolute ${isMobile ? 'w-full' : 'w-2/3'} h-full backdrop-blur-md rounded-xl ${isMobile ? 'p-4' : 'p-6'} transition-all duration-500 hover:shadow-[#814AC8]/30 flex-shrink-0`}
      style={cardStyle}
      role="tabpanel"
      aria-label={`Project: ${project.title}`}
    >
      <div className="flex flex-col h-full">
        {/* Project Image with optimized loading */}
        <div className={`relative w-full ${isMobile ? 'h-48 mb-4' : 'h-56 mb-6'} rounded-t-lg overflow-hidden`}>
          {shouldRenderImage ? (
            <OptimizedImage
              src={project.image}
              alt={`Screenshot of ${project.title} project`}
              className="w-full h-full object-contain"
            />
          ) : (
            // Placeholder for non-visible cards
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-gray-400 text-sm">🎬</div>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className={`flex flex-col flex-1 ${isMobile ? 'px-4 pb-4' : 'px-6 pb-6'}`}>
          {/* Project Title */}
          <h3
            className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white ${isMobile ? 'mb-4' : 'mb-6'} text-center leading-tight`}
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}
          >
            {project.title}
          </h3>

          {/* Project Link */}
          <div className="mt-auto">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full py-3 px-4 bg-gradient-to-r from-[#814AC8]/20 to-[#814AC8]/10 border border-[#814AC8]/40 rounded-lg text-[#814AC8] font-semibold text-sm hover:from-[#814AC8]/30 hover:to-[#814AC8]/20 hover:border-[#814AC8]/60 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#814AC8]/20 focus:outline-none focus:ring-2 focus:ring-[#814AC8]/50"
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.9)" }}
              aria-label={`View live project: ${project.title}`}
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

CarouselCard.displayName = 'CarouselCard';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized navigation functions
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handlePrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentIndex(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentIndex(projects.length - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Navigation button component
  const NavButton = React.memo(({ direction, onClick, className = "", ariaLabel }) => (
    <button
      onClick={onClick}
      className={`rounded-full backdrop-blur-md text-white flex items-center justify-center hover:bg-[#814AC8]/20 hover:text-white transition-all duration-200 font-bold text-lg hover:shadow-[#814AC8]/30 focus:outline-none focus:ring-2 focus:ring-[#814AC8]/50 ${className}`}
      style={buttonStyles}
      aria-label={ariaLabel}
      type="button"
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  ));

  NavButton.displayName = 'NavButton';

  return (
    <section 
      className="bg-black flex flex-col min-h-fit items-center text-center justify-center pt-20 pb-16 mx-auto px-4"
      aria-labelledby="projects-heading"
    >
      <h1 
        id="projects-heading"
        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12"
      >
        Our Portfolio
      </h1>

      {/* Mobile Carousel Container */}
      <div 
        className="block md:hidden relative w-full max-w-sm mx-auto"
        role="tabpanel"
        aria-label="Mobile project carousel"
      >
        {/* Card Container */}
        <div className="relative w-full h-[380px] overflow-hidden mb-6">
          <div className="absolute w-full h-full left-0 flex">
            {projects.map((project, index) => {
              let position = index - currentIndex;
              if (position < 0) position += projects.length;

              return (
                <CarouselCard
                  key={`mobile-${index}`} // Simplified key for better performance
                  project={project}
                  position={position}
                  isMobile={true}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <NavButton 
            direction="prev" 
            onClick={handlePrev} 
            className="w-12 h-12" 
            ariaLabel="Previous project"
          />
          <NavButton 
            direction="next" 
            onClick={handleNext} 
            className="w-12 h-12" 
            ariaLabel="Next project"
          />
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center space-x-2" role="tablist">
          {projects.map((_, index) => (
            <button
              key={`mobile-indicator-${index}`}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-white ${
                index === currentIndex ? "w-6" : "w-2"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#814AC8" : "rgba(255, 255, 255, 0.5)",
                boxShadow: index === currentIndex ? "0 0 10px rgba(129, 74, 200, 0.7)" : "none",
              }}
              aria-label={`Go to project ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Desktop Carousel Container */}
      <div 
        className="hidden md:block relative w-full max-w-4xl h-[500px] overflow-hidden"
        role="tabpanel" 
        aria-label="Desktop project carousel"
      >
        <div className="absolute w-[90%] h-[80%] left-1/2 -translate-x-1/2 flex">
          {projects.map((project, index) => {
            let position = index - currentIndex;
            if (position < 0) position += projects.length;

            return (
              <CarouselCard
                key={`desktop-${index}`} // Simplified key for better performance
                project={project}
                position={position}
                isMobile={false}
              />
            );
          })}
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex absolute bottom-4 w-[90%] max-w-5xl justify-between left-1/2 -translate-x-1/2">
          <NavButton 
            direction="prev" 
            onClick={handlePrev} 
            className="w-12 h-12" 
            ariaLabel="Previous project"
          />
          <NavButton 
            direction="next" 
            onClick={handleNext} 
            className="w-12 h-12" 
            ariaLabel="Next project"
          />
        </div>

        {/* Desktop Indicators */}
        <div className="hidden md:flex absolute bottom-16 left-1/2 -translate-x-1/2 space-x-2" role="tablist">
          {projects.map((_, index) => (
            <button
              key={`desktop-indicator-${index}`}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-white ${
                index === currentIndex ? "w-6" : "w-2"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#814AC8" : "rgba(255, 255, 255, 0.5)",
                boxShadow: index === currentIndex ? "0 0 10px rgba(129, 74, 200, 0.7)" : "none",
              }}
              aria-label={`Go to project ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Screen reader instructions */}
      <div className="sr-only">
        Use arrow keys to navigate between projects, Home key to go to first project, End key to go to last project.
      </div>
    </section>
  );
};

export default Projects;
