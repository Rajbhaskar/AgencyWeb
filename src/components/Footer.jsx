import React from "react";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#home",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverColor: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      href: "#home",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.752-1.333-1.752-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.335-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 013.003-.403c1.018.005 2.043.138 3.003.403 2.292-1.552 3.298-1.23 3.298-1.23.653 1.649.241 2.872.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.823 1.103.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      hoverColor: "hover:text-gray-200"
    },
    {
      name: "Twitter",
      href: "#home",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
        </svg>
      ),
      hoverColor: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="relative bg-black/20 backdrop-blur-md border-t border-white/10 text-gray-300 py-8 md:py-12 px-4 md:px-6">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* Brand/Logo Section */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Your Agency</h3>
            <p className="text-sm md:text-sm leading-relaxed text-gray-300 pr-2 md:pr-4">
              Creating digital experiences that help businesses grow smarter, not harder.
            </p>
          </Motion.div>

          {/* Quick Links */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left md:text-center"
          >
            <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Services</h4>
            <ul className="space-y-1 md:space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block py-0.5">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block py-0.5">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block py-0.5">Creative Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 block py-0.5">Brand Strategy</a></li>
            </ul>
          </Motion.div>

          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left md:text-right"
          >
            <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Get In Touch</h4>
            <div className="space-y-1 md:space-y-2 text-sm">
              <p className="flex items-center justify-start md:justify-end space-x-2 text-gray-300 py-0.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>bhaskarraj339@gmail.com</span>
              </p>
              <p className="flex items-center justify-start md:justify-end space-x-2 text-gray-300 py-0.5">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91-9039030652</span>
              </p>
            </div>
          </Motion.div>
        </div>

        {/* Divider with glass effect */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-6 md:pt-8"
        >
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <Motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-left text-gray-300 order-2 md:order-1"
            >
              &copy; {new Date().getFullYear()} Raj Bhaskar Singh All rights reserved.
            </Motion.p>

            {/* Social Links */}
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="flex justify-start md:justify-end space-x-3 order-1 md:order-2"
            >
              {socialLinks.map((social) => (
                <Motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.hoverColor} transition-all duration-300 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20`}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </Motion.a>
              ))}
            </Motion.div>
          </div>
        </Motion.div>
      </div>
    </footer>
  );
};

export default Footer;
