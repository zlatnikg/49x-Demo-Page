import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hu' | 'de';

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
  const [language, setLanguage] = useState<Language>('hu');

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
      title: 'Your company\'s future depends on AI',
      subtitle: 'We show the way',
      description: 'We help you build real business advantage from AI, so you don\'t fall behind in the new era. Quickly, risk-free, with measurable results.',
      cta: 'Book Free Consultation',
    },
    specs: {
      badge: 'Specs',
      description: 'The market is changing faster than ever: new technologies, new competitors, new customer demands. We help your company not just react to this, but also set the direction. We make opportunities transparent, uncover hidden risks, train your team, and help you develop the business direction that allows you to confidently step into the coming years.',
    },
    humanoid: {
      title: 'Why 49x',
      card1: 'We\'re giving AI a way to navigate the physical world',
      card2: 'We\'re bringing adaptive intelligence to where humans work',
      card3: 'We\'re creating companions, not replacements',
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
      copyright: '© 2024 AI Strategy Sprint. All rights reserved.',
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
      description: 'Segítünk valódi üzleti előnyt építeni az AI-ból, hogy ne maradj le az új korszakban. Gyorsan, kockázatmentesen, mérhető eredményekkel.',
      cta: 'Foglalj Ingyenes Konzultációt',
    },
    specs: {
      badge: 'Specifikációk',
      description: 'A piac gyorsabban változik, mint valaha: új technológiák, új versenytársak, új ügyféligények. Mi abban segítünk, hogy a céged ne csak reagáljon erre, hanem irányt is mutasson. Átláthatóvá tesszük a lehetőségeket, feltárjuk a rejtett kockázatokat, képezzük a csapatodat, és segítünk kialakítani azt az üzleti irányt, amellyel magabiztosan léphetsz a következő évekbe.',
    },
    humanoid: {
      title: 'Miért a 49x',
      card1: 'Segítünk eligazodni az AI-korszakban',
      card2: 'Az AI-t ott vezetjük be, ahol a csapatodnak a legnagyobb előrelépést hozza',
      card3: 'Eszközöket adunk és rendszereket építünk, nem helyettesítünk',
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
      copyright: '© 2024 AI Strategy Sprint. Minden jog fenntartva.',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Die Zukunft Ihres Unternehmens hängt von KI ab',
      subtitle: 'Wir zeigen den Weg',
      description: 'Wir helfen Ihnen, echten Geschäftsvorteil aus KI aufzubauen, damit Sie im neuen Zeitalter nicht zurückbleiben. Schnell, risikofrei, mit messbaren Ergebnissen.',
      cta: 'Kostenlose Beratung buchen',
    },
    specs: {
      badge: 'Spezifikationen',
      description: 'Der Markt verändert sich schneller als je zuvor: neue Technologien, neue Wettbewerber, neue Kundenanforderungen. Wir helfen Ihrem Unternehmen nicht nur, darauf zu reagieren, sondern auch die Richtung vorzugeben. Wir machen Chancen transparent, decken verborgene Risiken auf, bilden Ihr Team aus und helfen Ihnen, die Geschäftsrichtung zu entwickeln, mit der Sie selbstbewusst in die kommenden Jahre treten können.',
    },
    humanoid: {
      title: 'Warum 49x',
      card1: 'Wir helfen Ihnen, sich im KI-Zeitalter zurechtzufinden',
      card2: 'Wir führen KI dort ein, wo sie Ihrem Team den größten Fortschritt bringt',
      card3: 'Wir geben Werkzeuge und bauen Systeme, wir ersetzen nicht',
    },
    showcase: {
      title: 'Erleben Sie die Zukunft heute',
      description: 'Unser hochmoderner humanoider Roboter wurde entwickelt, um zu transformieren, wie wir mit Technologie in alltäglichen Umgebungen interagieren.',
      cardTitle: 'Robotik der nächsten Generation',
      cardDescription: 'Gebaut mit Präzisionsingenieurwesen und ausgeklügelter KI, integrieren sich unsere Roboter nahtlos in verschiedene Umgebungen, von Häusern bis zu Krankenhäusern, und bieten Unterstützung und bereichern menschliche Erfahrungen.',
    },
    features: {
      title: 'Warum Atlas wählen?',
      description: 'Entdecken Sie die fortschrittlichen Funktionen, die unseren humanoiden Roboter zur perfekten Ergänzung für Ihr Team machen.',
      feature1: {
        title: 'Fortschrittliche KI',
        description: 'Angetrieben von modernster künstlicher Intelligenz für natürliche Interaktionen',
      },
      feature2: {
        title: 'Menschenähnliche Bewegung',
        description: 'Flüssige, natürliche Bewegungen, die menschliche Bewegungsmuster widerspiegeln',
      },
      feature3: {
        title: 'Adaptives Lernen',
        description: 'Lernt und verbessert sich kontinuierlich aus jeder Interaktion',
      },
      feature4: {
        title: '24/7 Betrieb',
        description: 'Zuverlässige Leistung rund um die Uhr ohne Ermüdung',
      },
      feature5: {
        title: 'Sichere Zusammenarbeit',
        description: 'Gebaut mit Sicherheitsfunktionen für nahtlose Mensch-Roboter-Zusammenarbeit',
      },
      feature6: {
        title: 'Einfache Integration',
        description: 'Integriert sich nahtlos in bestehende Workflows und Systeme',
      },
    },
    testimonials: {
      title: 'Was unsere Partner sagen',
      description: 'Hören Sie von Organisationen, die bereits mit Atlas arbeiten.',
      testimonial1: {
        text: 'Atlas hat unsere Lagerbetriebe revolutioniert. Die Effizienzsteigerungen sind bemerkenswert.',
        author: 'Sarah Johnson',
        role: 'Operationsdirektorin',
      },
      testimonial2: {
        text: 'Die adaptive Lernfähigkeit ist beeindruckend. Atlas wird jeden Tag besser.',
        author: 'Michael Chen',
        role: 'CTO',
      },
      testimonial3: {
        text: 'Sicherheit war unsere oberste Priorität, und Atlas hat alle unsere Erwartungen in dieser Hinsicht übertroffen.',
        author: 'Emma Williams',
        role: 'Sicherheitsmanagerin',
      },
    },
    newsletter: {
      title: 'Bleiben Sie auf dem Laufenden',
      description: 'Abonnieren Sie unseren Newsletter für die neuesten Updates zu Atlas und humanoiden Robotik.',
      placeholder: 'Geben Sie Ihre E-Mail ein',
      button: 'Abonnieren',
    },
    madeByHumans: {
      title: 'Von Menschen gemacht',
      subtitle: 'Für Menschen',
      description: 'Jeder Atlas-Roboter wird sorgfältig von unserem Team aus Ingenieuren, Designern und KI-Spezialisten entwickelt, die leidenschaftlich daran arbeiten, Technologie zu schaffen, die das menschliche Potenzial erweitert.',
    },
    footer: {
      description: 'Führen Sie die Zukunft der humanoiden Robotik mit Innovation und Exzellenz an.',
      product: 'Produkt',
      features: 'Funktionen',
      pricing: 'Preise',
      resources: 'Ressourcen',
      company: 'Unternehmen',
      about: 'Über uns',
      blog: 'Blog',
      careers: 'Karriere',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Bedingungen',
      copyright: '© 2024 AI Strategy Sprint. Alle Rechte vorbehalten.',
    },
  },
};
