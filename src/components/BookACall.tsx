import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    Cal: any;
  }
}

const BookACall = () => {
  const { t } = useLanguage();
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Cal.com embed loader
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal - these calls will be queued if script hasn't loaded yet
    window.Cal("init", "49x-ai-sprint-konzultacio", { origin: "https://app.cal.com" });

    window.Cal.ns["49x-ai-sprint-konzultacio"]("inline", {
      elementOrSelector: "#my-cal-inline-49x-ai-sprint-konzultacio",
      config: { layout: "month_view" },
      calLink: "greg-49x/49x-ai-sprint-konzultacio",
    });

    window.Cal.ns["49x-ai-sprint-konzultacio"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, []);
  
  return (
    <section id="book-a-call" className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Orange half-circle design element similar to hero section */}
      <div className="absolute -bottom-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
              <span>{t('bookACall.badge')}</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-display font-bold mb-4 text-left text-gray-900 dark:text-white">{t('bookACall.title')}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 text-left">
            {t('bookACall.description')}
          </p>
          
          {/* Cal.com Calendar Embed */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg bg-black">
            <div 
              ref={calRef}
              style={{ width: '100%', height: '100%', overflow: 'scroll', minHeight: '700px' }} 
              id="my-cal-inline-49x-ai-sprint-konzultacio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookACall;

