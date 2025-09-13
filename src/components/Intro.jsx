import React from "react";
import ScrollReveal from "./ScrollReveal";
import HeroBackground from "./HeroBackground";

const Intro = () => {
  return (
    <HeroBackground>
      <div className="pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 xl:pt-32 xl:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)] xl:min-h-[calc(100vh-8rem)]">
          <ScrollReveal delay={0.2} blurAmount={8} slideDistance={30}>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-2xl leading-tight">
              Where Creativity Meets Technology
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4} blurAmount={6} slideDistance={40}>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 text-center max-w-2xl mx-auto font-bold">
              We Create Ad Films, Apps, Websites and AI solutions that shape the
              future of Businesses
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6} blurAmount={4} slideDistance={50}>
            <div className="flex flex-row gap-3 sm:gap-4 mt-8">
              <button className="text-white text-sm sm:text-base lg:text-sm xl:text-base bg-[#814AC8] px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-lg sm:rounded-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#814AC8]">
                Get In Touch
              </button>
              <button className="text-gray-300 border-2 border-[#814AC8] text-sm sm:text-base lg:text-sm xl:text-base px-3 py-2 sm:px-4 sm:py-3 lg:px-4 lg:py-3 xl:px-6 xl:py-4 rounded-lg sm:rounded-xl hover:scale-105 hover:bg-[#814AC8] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#814AC8]">
                View Services
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </HeroBackground>
  );
};

export default Intro;
