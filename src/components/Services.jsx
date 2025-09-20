import React from "react";
import { motion as Motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import code from "../assets/code.jpeg";
import code1 from "../assets/code1.jpeg";
import automation from "../assets/automation.jpeg";

const servicesData = [
  {
    title: "IT Solutions",
    description:
      "We design and develop modern websites, mobile apps, and tailored IT solutions that help businesses grow and stay ahead in the digital era.",
    image: code1,
    alt: "IT Solutions",
  },
  {
    title: "Ad Films & Movies",
    description:
      "From cinematic ad films to AI-powered storytelling, we create compelling media that elevates brands and connects emotionally with audiences.",
    image: code,
    alt: "Ad Films",
  },
  {
    title: "AI Automation",
    description:
      "Automating repetitive tasks with AI to boost efficiency and deliver faster, smarter business solutions.",
    image: automation,
    alt: "AI Automation",
  },
];

const Services = () => {
  return (
    <div className="bg-black flex flex-col min-h-fit items-center text-center justify-center pt-20 pb-16 mx-auto">
      {/* Heading */}
      <ScrollReveal delay={0.2} blurAmount={8} slideDistance={30}>
        <div>
          <h3 className="text-gray-300 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
            Our Services
          </h3>
        </div>
        <div>
          <p className="text-gray-300 max-w-2xl mt-3 text-sm sm:text-base md:text-lg lg:text-lg mx-auto md:text-left">
            Helping businesses stand out with IT solutions, creative ad films,
            and AI-powered tools that captivate and convert effectively.
          </p>
        </div>
      </ScrollReveal>

      {/* Services List */}
      <div className="max-w-5xl mx-auto mt-16 space-y-20">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image with animation */}
            <Motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 aspect-[16/10] overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover"
              />
            </Motion.div>

            {/* Text */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h4 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-4">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
