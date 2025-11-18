
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const DetailsSection = () => {
  const { t } = useLanguage();
  return <section id="details" className="w-full bg-white dark:bg-black py-0 transition-colors duration-300">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-transparent dark:border-white">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                {t('details.beforeTitle')}
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white dark:bg-dark-900 p-4 sm:p-8 border border-gray-200 dark:border-dark-700 transition-colors duration-300">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.beforeBullet1')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.beforeBullet2')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.beforeBullet3')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.beforeBullet4')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.beforeBullet5')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - After Outcomes */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-transparent dark:border-white">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                {t('details.afterTitle')}
              </h2>
            </div>
            
            {/* Card Content - Bullets */}
            <div className="bg-white dark:bg-dark-900 p-4 sm:p-8 border border-gray-200 dark:border-dark-700 transition-colors duration-300">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.afterBullet1')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.afterBullet2')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.afterBullet3')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.afterBullet4')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-dark-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="[&_path]:stroke-white dark:[&_path]:stroke-dark-900">
                      <path d="M1 5L5 9L13 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-lg bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm border border-gray-100 dark:border-dark-700">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">{t('details.afterBullet5')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20">
          <a 
            href="#book-a-call" 
            className="bg-[#FE5C02] hover:bg-[#e04d02] text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>;
};
export default DetailsSection;
