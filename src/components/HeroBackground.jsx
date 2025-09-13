import React, { useEffect, useRef, useState } from "react";

export default function HeroBackground({ children, className = "" }) {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Generate stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // Set canvas size with proper device pixel ratio
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      
      // Scale the context to match device pixel ratio
      ctx.scale(devicePixelRatio, devicePixelRatio);
      
      return { width, height };
    };

    let { width, height } = setCanvasSize();

    // Adjust star count based on device type
    const starCount = isMobile ? 50 : 100;
    
    // Initialize stars
    stars.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.8,
      size: Math.random() * (isMobile ? 0.8 : 1.2),
    }));

    const centerX = width / 2;
    const centerY = height / 2;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      stars.current.forEach((star) => {
        // Move star toward center
        const dx = centerX - star.x;
        const dy = centerY - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        star.x += (dx / dist) * star.speed;
        star.y += (dy / dist) * star.speed;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        // Reset if star reaches near center
        if (dist < 5) {
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    // Handle resize
    const handleResize = () => {
      const newSize = setCanvasSize();
      width = newSize.width;
      height = newSize.height;
      
      // Reinitialize stars for new dimensions
      stars.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.2 + Math.random() * 0.8,
        size: Math.random() * (isMobile ? 0.8 : 1.2),
      }));
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
      style={{ height: '100vh' }} // Fix for mobile viewport height
    >
      {/* Canvas for starfield */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: 'none' }} // Prevent touch scrolling on canvas
      ></canvas>

      {/* Purple glowing circle - responsive sizing */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none
                   ${isMobile ? 'w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]' : 'w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]'}`}
        style={{
          background:
            "radial-gradient(circle, rgba(129,74,200,0.8) 0%, rgba(129,74,200,0.3) 40%, transparent 70%)",
          animation: "spin 20s linear infinite, pulse 4s ease-in-out infinite",
        }}
      ></div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
