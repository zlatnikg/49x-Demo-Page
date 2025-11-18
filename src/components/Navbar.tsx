import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-3"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="AI Strategy Sprint"
        >
          <img 
            src="https://res.cloudinary.com/dc1iuuikv/image/upload/v1763485151/49x_logo_black_NB_s9eufn.png" 
            alt="AI Strategy Sprint Logo" 
            className="h-20 sm:h-24 w-auto" 
          />
          <span className="text-black font-display font-bold tracking-tight text-2xl sm:text-3xl lg:text-4xl hidden sm:block">AI Strategy Sprint</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              {t('nav.home')}
            </a>
            <a href="#features" className="nav-link">{t('nav.about')}</a>
            <a href="#details" className="nav-link">{t('nav.contact')}</a>
          </nav>
          
          {/* CTA Button */}
          <a 
            href="#get-access" 
            className="bg-[#FE5C02] hover:bg-[#e04d02] text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {t('hero.cta')}
          </a>
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Languages className="h-4 w-4" />
                <span className="uppercase">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('hu')}>
                Magyar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')}>
                Deutsch
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {t('nav.home')}
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {t('nav.about')}
          </a>
          <a 
            href="#details" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {t('nav.contact')}
          </a>
          
          {/* Mobile CTA Button */}
          <a 
            href="#get-access" 
            className="bg-[#FE5C02] hover:bg-[#e04d02] text-white font-medium py-3 px-6 w-full text-center rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 mt-4"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            {t('hero.cta')}
          </a>
          
          {/* Mobile Language Switcher */}
          <div className="pt-4 border-t border-gray-200 w-full">
            <p className="text-sm text-gray-500 text-center mb-3">Language / Nyelv / Sprache</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  language === 'en' 
                    ? "bg-pulse-500 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('hu');
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  language === 'hu' 
                    ? "bg-pulse-500 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                Magyar
              </button>
              <button
                onClick={() => {
                  setLanguage('de');
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  language === 'de' 
                    ? "bg-pulse-500 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                Deutsch
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
