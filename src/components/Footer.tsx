import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const Footer = () => {
  const { t } = useLanguage();
  return <footer className="w-full bg-white py-0 relative overflow-hidden">
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
    </footer>;
};
export default Footer;
