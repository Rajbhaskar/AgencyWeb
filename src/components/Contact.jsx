import React from "react";
import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: {
      scale: 0.95
    }
  };

  const handleEmailClick = () => {
    try {
      window.open('https://mail.google.com/mail/?view=cm&to=seetimaarfilms21@gmail.com&su=Portfolio%20Contact', '_blank');
    } catch {
      navigator.clipboard.writeText('seetimaarfilms21@gmail.com').then(() => {
        alert('Email address copied to clipboard: seetimaarfilms21@gmail.com');
      }).catch(() => {
        prompt('Copy this email address:', 'seetimaarfilms21@gmail.com');
      });
    }
  };

  return (
    <section className="bg-black text-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
        >
          Let's Work Together
        </Motion.h2>
        
        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4"
        >
          Ready to elevate your brand? Get in touch and let's discuss how we can help your business grow smarter, not harder.
        </Motion.p>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Email Button */}
          <Motion.button
            onClick={handleEmailClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center bg-[#111] px-4 py-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full"
          >
            {/* Email Icon */}
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300 mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-xs md:text-sm text-gray-400">seetimaarfilms21@gmail.com</p>
            </div>
          </Motion.button>

          {/* WhatsApp Button */}
          <Motion.a
            href="https://wa.me/9993035739"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center bg-[#111] px-4 py-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 h-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* WhatsApp Icon */}
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300 mb-4">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-xs md:text-sm text-gray-400">+91-9993035739</p>
            </div>
          </Motion.a>

          {/* LinkedIn Button */}
          <Motion.a
            href="https://www.linkedin.com/in/chitransh-bhaskar-025341218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center bg-[#111] px-4 py-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 h-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* LinkedIn Icon */}
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center group-hover:bg-blue-400/30 transition-colors duration-300 mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-xs md:text-sm text-gray-400">Connect with us</p>
            </div>
          </Motion.a>

          {/* Call Us Button */}
          <Motion.a
            href="tel:+919039030652"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center bg-[#111] px-4 py-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 h-full"
          >
            {/* Phone Icon */}
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300 mb-4">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-xs md:text-sm text-gray-400">+91-8109127059</p>
            </div>
          </Motion.a>
        </div>

        {/* Additional Info */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 p-4 md:p-6 bg-[#111] rounded-xl border border-gray-700 max-w-2xl mx-auto"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Quick Response Guaranteed</h3>
          <p className="text-sm md:text-base text-gray-400">
            We typically respond within 2-4 business days. 
            For urgent inquiries, WhatsApp is the fastest way to reach us.
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
