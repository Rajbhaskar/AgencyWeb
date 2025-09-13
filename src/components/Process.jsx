import React from "react";
import { motion as Motion } from "framer-motion";
import { AnalyzingIcon, DesignDevIcon, IntegrationIcon, OptimizationIcon } from './AnimatedIcons';

const steps = [
  {
    step: "Step 1",
    title: "Smart Analyzing",
    description:
      "We assess your needs and identify solutions to streamline workflows and improve efficiency.",
    icon: <AnalyzingIcon />
  },
  {
    step: "Step 2", 
    title: "Design & Development",
    description:
      "We craft modern websites, mobile apps, and creative ads tailored to elevate your brand.",
    icon: <DesignDevIcon />
  },
  {
    step: "Step 3",
    title: "Seamless Integration", 
    description:
      "We smoothly integrate our solutions into your business with minimal disruption.",
    icon: <IntegrationIcon />
  },
  {
    step: "Step 4",
    title: "Continuous Optimization",
    description:
      "We refine performance, analyze insights, and enhance systems for long-term growth.",
    icon: <OptimizationIcon />
  },
];

const Process = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-white mb-2"
        >
          Our Process
        </Motion.p>
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Our Simple, Smart, and Scalable Process
        </Motion.h2>
        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          We design, develop, and implement tools that help your business grow
          smarter, not harder.
        </Motion.p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] p-6 rounded-xl shadow-lg"
          >
            <p className="text-xs text-gray-400 mb-2">{step.step}</p>
            {step.icon}
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
