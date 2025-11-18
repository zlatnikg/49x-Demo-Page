import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Meet Atlas',
      subtitle: 'The Future of Humanoid Robotics',
      description: 'Experience the next generation of intelligent, adaptive robots designed to work alongside humans in any environment.',
      cta: 'Learn More',
    },
    specs: {
      badge: 'Specs',
      description: 'Atlas works with your team, not instead of it. By handling repetitive tasks, improving safety conditions, and learning from every interaction, Atlas helps humans focus on what they do best: create, solve, and innovate.',
    },
    showcase: {
      title: 'Experience the Future Today',
      description: 'Our cutting-edge humanoid robot is designed to transform how we interact with technology in everyday environments.',
      cardTitle: 'Next Generation Robotics',
      cardDescription: 'Built with precision engineering and sophisticated AI, our robots seamlessly integrate into various environments, from homes to hospitals, providing assistance and enriching human experiences.',
    },
    features: {
      title: 'Why Choose Atlas?',
      description: 'Discover the advanced features that make our humanoid robot the perfect addition to your team.',
      feature1: {
        title: 'Advanced AI',
        description: 'Powered by cutting-edge artificial intelligence for natural interactions',
      },
      feature2: {
        title: 'Human-like Movement',
        description: 'Fluid, natural movements that mirror human motion patterns',
      },
      feature3: {
        title: 'Adaptive Learning',
        description: 'Continuously learns and improves from every interaction',
      },
      feature4: {
        title: '24/7 Operation',
        description: 'Reliable performance around the clock without fatigue',
      },
      feature5: {
        title: 'Safe Collaboration',
        description: 'Built with safety features for seamless human-robot collaboration',
      },
      feature6: {
        title: 'Easy Integration',
        description: 'Seamlessly integrates into existing workflows and systems',
      },
    },
    testimonials: {
      title: 'What Our Partners Say',
      description: 'Hear from organizations already working with Atlas.',
      testimonial1: {
        text: 'Atlas has revolutionized our warehouse operations. The efficiency gains are remarkable.',
        author: 'Sarah Johnson',
        role: 'Operations Director',
      },
      testimonial2: {
        text: 'The adaptive learning capability is impressive. Atlas gets better every single day.',
        author: 'Michael Chen',
        role: 'CTO',
      },
      testimonial3: {
        text: 'Safety was our top concern, and Atlas exceeded all our expectations in that regard.',
        author: 'Emma Williams',
        role: 'Safety Manager',
      },
    },
    newsletter: {
      title: 'Stay Updated',
      description: 'Subscribe to our newsletter for the latest updates on Atlas and humanoid robotics.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    },
    madeByHumans: {
      title: 'Made by Humans',
      subtitle: 'For Humans',
      description: 'Every Atlas robot is crafted with care by our team of engineers, designers, and AI specialists who are passionate about creating technology that enhances human potential.',
    },
    footer: {
      description: 'Leading the future of humanoid robotics with innovation and excellence.',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      resources: 'Resources',
      company: 'Company',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2024 Pulse Robot. All rights reserved.',
    },
  },
  hu: {
    nav: {
      home: 'Kezdőlap',
      about: 'Rólunk',
      contact: 'Kapcsolat',
    },
    hero: {
      title: 'A céged jövője az AI-tól függ',
      subtitle: 'Mutatjuk az irányt',
      description: 'Tapasztalja meg az intelligens, alkalmazkodó robotok következő generációját, amelyek az emberek oldalán dolgoznak bármilyen környezetben.',
      cta: 'Tudjon meg többet',
    },
    specs: {
      badge: 'Specifikációk',
      description: 'Az Atlas a csapatával dolgozik, nem helyette. Az ismétlődő feladatok kezelésével, a biztonsági feltételek javításával és minden interakcióból való tanulással az Atlas segít az embereknek abban, amiben a legjobbak: alkotni, megoldani és innoválni.',
    },
    showcase: {
      title: 'Tapasztalja meg a jövőt már ma',
      description: 'Élvonalbeli humanoid robotunk úgy lett megtervezve, hogy átalakítsa a technológiával való interakciónkat a mindennapi környezetekben.',
      cardTitle: 'Következő Generációs Robotika',
      cardDescription: 'Precíziós mérnöki munkával és kifinomult mesterséges intelligenciával épített robottjaink zökkenőmentesen integrálódnak különböző környezetekbe, az otthonokból a kórházakig, segítséget nyújtva és gazdagítva az emberi élményeket.',
    },
    features: {
      title: 'Miért válassza az Atlast?',
      description: 'Fedezze fel azokat a fejlett funkciókat, amelyek humanoid robotunkat tökéletes kiegészítővé teszik csapata számára.',
      feature1: {
        title: 'Fejlett MI',
        description: 'Élvonalbeli mesterséges intelligenciával működik a természetes interakciókhoz',
      },
      feature2: {
        title: 'Emberszerű Mozgás',
        description: 'Folyékony, természetes mozgások, amelyek tükrözik az emberi mozgásmintákat',
      },
      feature3: {
        title: 'Adaptív Tanulás',
        description: 'Folyamatosan tanul és fejlődik minden interakcióból',
      },
      feature4: {
        title: '24/7 Működés',
        description: 'Megbízható teljesítmény éjjel-nappal, fáradtság nélkül',
      },
      feature5: {
        title: 'Biztonságos Együttműködés',
        description: 'Biztonsági funkciókkal épített a zökkenőmentes ember-robot együttműködéshez',
      },
      feature6: {
        title: 'Könnyű Integráció',
        description: 'Zökkenőmentesen integrálódik a meglévő munkafolyamatokba és rendszerekbe',
      },
    },
    testimonials: {
      title: 'Mit mondanak partnereink',
      description: 'Hallja meg azokat a szervezeteket, amelyek már dolgoznak az Atlasszal.',
      testimonial1: {
        text: 'Az Atlas forradalmasította raktárműködésünket. A hatékonyságnövekedés figyelemre méltó.',
        author: 'Sarah Johnson',
        role: 'Műveleti Igazgató',
      },
      testimonial2: {
        text: 'Az adaptív tanulási képesség lenyűgöző. Az Atlas minden nap jobb lesz.',
        author: 'Michael Chen',
        role: 'CTO',
      },
      testimonial3: {
        text: 'A biztonság volt a fő aggodalmunk, és az Atlas minden várakozásunkat felülmúlta ebben a tekintetben.',
        author: 'Emma Williams',
        role: 'Biztonsági Vezető',
      },
    },
    newsletter: {
      title: 'Maradjon naprakész',
      description: 'Iratkozzon fel hírlevelünkre az Atlas és a humanoid robotika legfrissebb híreiért.',
      placeholder: 'Adja meg e-mail címét',
      button: 'Feliratkozás',
    },
    madeByHumans: {
      title: 'Emberek által készítve',
      subtitle: 'Emberek számára',
      description: 'Minden Atlas robot gondosan készült mérnökeink, tervezőink és MI-szakértőink csapata által, akik szenvedélyesen dolgoznak olyan technológia létrehozásán, amely növeli az emberi potenciált.',
    },
    footer: {
      description: 'A humanoid robotika jövőjének vezetése innovációval és kiválósággal.',
      product: 'Termék',
      features: 'Funkciók',
      pricing: 'Árazás',
      resources: 'Erőforrások',
      company: 'Cég',
      about: 'Rólunk',
      blog: 'Blog',
      careers: 'Karrier',
      contact: 'Kapcsolat',
      legal: 'Jogi',
      privacy: 'Adatvédelem',
      terms: 'Feltételek',
      copyright: '© 2024 Pulse Robot. Minden jog fenntartva.',
    },
  },
};
