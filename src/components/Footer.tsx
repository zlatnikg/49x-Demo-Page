import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const Footer = () => {
  const { t } = useLanguage();
  return <footer className="w-full bg-black py-0 relative overflow-hidden transition-colors duration-300">
      {/* Orange half-circle design element similar to hero section */}
      <div className="absolute -bottom-[10%] -left-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="section-container relative z-10">
        {/* DesignJoy attribution text hidden - uncomment to restore */}
        {/* <p className="text-center text-gray-600 text-sm">
          This template takes inspiration from{" "}
          <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            DesignJoy's
          </a>{" "}
          BUILD WARS design, built entirely with Lovable by{" "}
          <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Rezaul Arif
          </a>
        </p> */}
      </div>
      
      <div className="w-full py-10 sm:py-12 md:py-14 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-600 dark:text-[#aaa] font-sans leading-relaxed">
              49x — AI Strategy & Automation<br />
              <a 
                href="mailto:hello@49x.ai"
                className="hover:text-gray-800 dark:hover:text-[#ccc] transition-colors duration-300"
              >
                hello@49x.ai
              </a>
              {" · "}
              <a 
                href="tel:+36305045495"
                className="hover:text-gray-800 dark:hover:text-[#ccc] transition-colors duration-300"
              >
                +36 30 504 5495
              </a>
              {" · "}
              <a 
                href="https://www.49x.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 dark:hover:text-[#ccc] transition-colors duration-300"
              >
                www.49x.ai
              </a>
            </div>
            <div>
              <a 
                href="https://www.linkedin.com/company/49x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-[#aaa] font-sans hover:text-gray-800 dark:hover:text-[#ccc] transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
