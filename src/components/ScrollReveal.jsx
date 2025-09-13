import React, { useState, useEffect, useRef } from 'react';
import {motion as Motion} from 'framer-motion'

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  blurAmount = 10,
  slideDistance = 50,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Remove blur effect after a short delay
          setTimeout(() => setIsScrolled(true), 200);
        }
      },
      { 
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Motion.div
      ref={elementRef}
      className={className}
      initial={{ 
        opacity: 0, 
        y: slideDistance,
        filter: `blur(${blurAmount}px)`
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : slideDistance,
        filter: isScrolled ? 'blur(0px)' : `blur(${blurAmount}px)`
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;
