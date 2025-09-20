import React from "react";

export default function Company() {
  const companies = [
    "Acme Corp",
    "Pepsi",
    "Arogin",
    "SeetiMaar Films",
    "RR Constructions",
    "Bhaskar Engineering",
  ];

  return (
    <div className="relative w-full bg-black py-8 overflow-hidden mb-10">
      {/* Title */}
      <p className="text-center text-white mb-6 text-base md:text-lg font-bold">
        Over 50+ businesses trust us
      </p>

      {/* Masked container */}
      <div className="relative max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto overflow-hidden"> 
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Names Row with responsive scroll speed */}
        <div className="flex gap-12 md:gap-16 text-white text-lg md:text-xl font-semibold animate-scroll-fast md:animate-scroll-slow">
          {companies.concat(companies).map((company, idx) => (
            <span
              key={idx}
              className="whitespace-nowrap opacity-70 hover:opacity-100 transition"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
