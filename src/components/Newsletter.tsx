import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Newsletter = () => {
  const { t } = useLanguage();
  return <section id="newsletter" className="bg-white dark:bg-black py-0 relative overflow-hidden">
      {/* Orange half-circle design element similar to hero section */}
      <div className="absolute -bottom-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>{t('newsletter.badge')}</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left">{t('newsletter.title')}</h2>
          <p className="text-xl text-gray-700 mb-10 text-left">
            {t('newsletter.description')}
          </p>
          
          {/* Subscription form hidden as requested */}
        </div>
      </div>
    </section>;
};
export default Newsletter;