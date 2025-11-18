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
    details: {
      beforeTitle: 'The reality of most companies today',
      beforeBullet1: 'Manual, repetitive tasks',
      beforeBullet2: 'Rising costs and time constraints',
      beforeBullet3: 'Ad-hoc ChatGPT usage (emails, small tasks)',
      beforeBullet4: 'Intuition-based decision making',
      beforeBullet5: 'Fragmented systems, chaotic operations',
      afterTitle: 'What they achieved with 49x',
      afterBullet1: 'Automated processes → 20+ hours freed per week',
      afterBullet2: 'Smart optimization → up to 41% cost reduction',
      afterBullet3: 'Structured AI usage → measurable results',
      afterBullet4: 'Data-driven decisions → faster, more accurate pivoting',
      afterBullet5: 'Integrated, company-tailored systems → stable operations',
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
      badge: 'Process',
      title: 'What does your company get during the AI Strategy Sprint?',
      description: 'An intensive, practical process where leaders and teams create tangible results: new directions, prototypes, and a real strategic plan.',
      feature1: {
        title: 'AI Opportunity Discovery',
        description: 'Identifying new revenue sources in their own industry.',
      },
      feature2: {
        title: 'Strategic Direction Setting',
        description: 'Clear, company-tailored path: what is the right direction, what needs to be introduced and in what order.',
      },
      feature3: {
        title: 'Rapid Prototype Creation',
        description: 'Working AI solution or workflow within 2 hours that shows the real value of ideas.',
      },
      feature4: {
        title: 'System and Process Optimization',
        description: 'Exploring automation and integration opportunities that free up 20+ hours per week.',
      },
      feature5: {
        title: 'Decision Support Analysis',
        description: 'Data-driven recommendations: risks, resources, costs and expected results transparently.',
      },
      feature6: {
        title: '30-90 Day Action Plan',
        description: 'Concrete roadmap for next steps that the team can use immediately.',
      },
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Partners Say',
      description: 'Hear from organizations already working with Atlas.',
      testimonial1: {
        text: '49x\'s automations completely transformed our sales systems. Our operations became faster, more transparent, and significantly more efficient.',
        author: 'Solomon Bhandari-Young',
        role: 'Head of Growth, PIF',
      },
      testimonial2: {
        text: '49x elevated our organization to a new level: our internal and external communication, as well as our systems, operate much more smoothly.',
        author: 'Rudolf Magocsi',
        role: 'CEO, BudapestLivings',
      },
      testimonial3: {
        text: '49x not only provided strategic guidance, but also offered outstanding professional support in AI training for our employees.',
        author: 'Dr. Daniel Molnos',
        role: 'Secretary General, MABISZ',
      },
      testimonial4: {
        text: 'The AI Strategy Sprint gave our team and our entire business strategy a completely new direction. It was a real breakthrough for us, and we\'ll have plenty to work on in the coming months.',
        author: 'Sara Volom',
        role: 'CEO, Photon',
      },
    },
    newsletter: {
      badge: 'Let\'s Dive In',
      title: 'Lead Your Company into the AI Era',
      description: 'Book a free consultation with the 49x team and we\'ll help you design the right AI Strategy Sprint for your company.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
    },
    bookACall: {
      badge: 'Get Started',
      title: 'Book a Free Consultation',
      description: 'Schedule a call with our team to discuss how we can help transform your business with AI.',
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
    details: {
      beforeTitle: 'A legtöbb cég valósága ma',
      beforeBullet1: 'Manuális, ismétlődő feladatok',
      beforeBullet2: 'Növekvő költségek és időhiány',
      beforeBullet3: 'ChatGPT ad-hoc használata (emailek, apró feladatok)',
      beforeBullet4: 'Megérzés-alapú döntéshozatal',
      beforeBullet5: 'Széttöredezett rendszerek, kaotikus működés',
      afterTitle: 'Amit elértek a 49x segítségével',
      afterBullet1: 'Automatizált folyamatok → heti 20+ felszabadult óra',
      afterBullet2: 'Okos optimalizáció → akár 41% költségcsökkenés',
      afterBullet3: 'Struktúrált AI-használat → kimutatható eredmények',
      afterBullet4: 'Adatalapú döntések → gyorsabb, pontosabb irányváltás',
      afterBullet5: 'Integrált, cégre szabott rendszerek → stabil működés',
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
      badge: 'Folyamat',
      title: 'Mit kap a cége az AI Strategy Sprint során?',
      description: 'Egy intenzív, gyakorlati folyamat, ahol a vezetők és a csapatok kézzelfogható eredményeket alkotnak: új irányokat, prototípusokat és egy valós stratégiai tervet.',
      feature1: {
        title: 'AI-lehetőségfeltárás',
        description: 'Új bevételi források azonosítása a saját iparágukban.',
      },
      feature2: {
        title: 'Stratégiai iránykijelölés',
        description: 'Tiszta, cégre szabott útvonal: mi a megfelelő irány, mit kell bevezetni és milyen sorrendben.',
      },
      feature3: {
        title: 'Rapid prototípus készítés',
        description: '2 órán belül működő AI-megoldás vagy workflow, amely megmutatja az ötletek valódi értékét.',
      },
      feature4: {
        title: 'Rendszer- és folyamatoptimalizálás',
        description: 'Automatizálási és integrációs lehetőségek feltárása, amelyek 20+ órát szabadítanak fel hetente.',
      },
      feature5: {
        title: 'Döntéstámogató elemzés',
        description: 'Adatalapú javaslatok: kockázatok, erőforrások, költségek és várható eredmények átláthatóan.',
      },
      feature6: {
        title: '30–90 napos cselekvési terv',
        description: 'Konkrét roadmap a következő lépésekhez, amelyet a csapat azonnal tud használni.',
      },
    },
    testimonials: {
      badge: 'Sikertörténetek',
      title: 'Mit mondanak partnereink',
      description: 'Hallja meg azokat a szervezeteket, amelyek már dolgoznak az Atlasszal.',
      testimonial1: {
        text: 'A 49x automatizációi teljesen átalakították az értékesítési rendszereinket. Gyorsabb, átláthatóbb és jóval hatékonyabb lett a működésünk.',
        author: 'Bhandari-Young Solomon',
        role: 'Head of Growth, PIF',
      },
      testimonial2: {
        text: 'A 49x új szintre emelte a szervezetünket: belső és külső kommunikációnk, valamint rendszereink sokkal gördülékenyebben működnek.',
        author: 'Mágocsi Rudolf',
        role: 'CEO, BudapestLivings',
      },
      testimonial3: {
        text: 'A 49x nemcsak stratégiai iránymutatást adott, hanem a dolgozóink AI-képzésében is kiemelkedő szakmai támogatást nyújtott.',
        author: 'Dr. Molnos Dániel',
        role: 'Főtitkár, MABISZ',
      },
      testimonial4: {
        text: 'Az AI Strategy Sprint teljesen új irányt adott a csapatunknak és az egész üzleti stratégiánknak. Igazi áttörés volt számunkra, lesz min dolgozni a következő hónapokban.',
        author: 'Volom Sára',
        role: 'CEO, Photon',
      },
    },
    newsletter: {
      badge: 'Vágjunk Bele',
      title: 'Vezesd át a céged az AI korszakba',
      description: 'Foglalj ingyenes konzultációt a 49x csapatával és mi segítünk megtervezni a céged számára megfelelő AI Strategy Sprintet.',
      placeholder: 'Adja meg e-mail címét',
      button: 'Feliratkozás',
    },
    bookACall: {
      badge: 'Vágjunk Bele',
      title: 'Foglalj Ingyenes Konzultációt',
      description: 'Foglalj időpontot csapatunkkal, hogy megbeszéljük, hogyan segíthetünk átalakítani a vállalkozásodat az AI-val.',
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
    details: {
      beforeTitle: 'Die Realität der meisten Unternehmen heute',
      beforeBullet1: 'Manuelle, repetitive Aufgaben',
      beforeBullet2: 'Steigende Kosten und Zeitmangel',
      beforeBullet3: 'Ad-hoc ChatGPT-Nutzung (E-Mails, kleine Aufgaben)',
      beforeBullet4: 'Intuitionsbasierte Entscheidungsfindung',
      beforeBullet5: 'Fragmentierte Systeme, chaotischer Betrieb',
      afterTitle: 'Was sie mit 49x erreicht haben',
      afterBullet1: 'Automatisierte Prozesse → 20+ Stunden pro Woche freigesetzt',
      afterBullet2: 'Intelligente Optimierung → bis zu 41% Kostensenkung',
      afterBullet3: 'Strukturierte KI-Nutzung → messbare Ergebnisse',
      afterBullet4: 'Datenbasierte Entscheidungen → schnellere, präzisere Kurswechsel',
      afterBullet5: 'Integrierte, unternehmensspezifische Systeme → stabiler Betrieb',
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
      badge: 'Prozess',
      title: 'Was erhält Ihr Unternehmen während des AI Strategy Sprint?',
      description: 'Ein intensiver, praxisorientierter Prozess, bei dem Führungskräfte und Teams greifbare Ergebnisse schaffen: neue Richtungen, Prototypen und einen echten strategischen Plan.',
      feature1: {
        title: 'KI-Chancenidentifikation',
        description: 'Identifizierung neuer Umsatzquellen in der eigenen Branche.',
      },
      feature2: {
        title: 'Strategische Richtungsbestimmung',
        description: 'Klarer, unternehmensspezifischer Weg: Was ist die richtige Richtung, was muss eingeführt werden und in welcher Reihenfolge.',
      },
      feature3: {
        title: 'Rapid-Prototyp-Erstellung',
        description: 'Funktionierende KI-Lösung oder Workflow innerhalb von 2 Stunden, die den echten Wert von Ideen zeigt.',
      },
      feature4: {
        title: 'System- und Prozessoptimierung',
        description: 'Erkundung von Automatisierungs- und Integrationsmöglichkeiten, die 20+ Stunden pro Woche freisetzen.',
      },
      feature5: {
        title: 'Entscheidungsunterstützende Analyse',
        description: 'Datenbasierte Empfehlungen: Risiken, Ressourcen, Kosten und erwartete Ergebnisse transparent.',
      },
      feature6: {
        title: '30-90 Tage Aktionsplan',
        description: 'Konkrete Roadmap für die nächsten Schritte, die das Team sofort nutzen kann.',
      },
    },
    testimonials: {
      badge: 'Referenzen',
      title: 'Was unsere Partner sagen',
      description: 'Hören Sie von Organisationen, die bereits mit Atlas arbeiten.',
      testimonial1: {
        text: 'Die Automatisierungen von 49x haben unsere Vertriebssysteme vollständig transformiert. Unser Betrieb wurde schneller, transparenter und deutlich effizienter.',
        author: 'Solomon Bhandari-Young',
        role: 'Head of Growth, PIF',
      },
      testimonial2: {
        text: '49x hat unsere Organisation auf ein neues Niveau gehoben: Unsere interne und externe Kommunikation sowie unsere Systeme funktionieren viel reibungsloser.',
        author: 'Rudolf Magocsi',
        role: 'CEO, BudapestLivings',
      },
      testimonial3: {
        text: '49x hat nicht nur strategische Anleitung gegeben, sondern auch herausragende professionelle Unterstützung bei der KI-Schulung unserer Mitarbeiter geleistet.',
        author: 'Dr. Daniel Molnos',
        role: 'Generalsekretär, MABISZ',
      },
      testimonial4: {
        text: 'Der AI Strategy Sprint gab unserem Team und unserer gesamten Geschäftsstrategie eine völlig neue Richtung. Es war ein echter Durchbruch für uns, und wir werden in den kommenden Monaten viel zu arbeiten haben.',
        author: 'Sara Volom',
        role: 'CEO, Photon',
      },
    },
    newsletter: {
      badge: 'Lass uns loslegen',
      title: 'Führen Sie Ihr Unternehmen ins KI-Zeitalter',
      description: 'Buchen Sie eine kostenlose Beratung mit dem 49x-Team und wir helfen Ihnen, den richtigen KI-Strategie-Sprint für Ihr Unternehmen zu entwickeln.',
      placeholder: 'Geben Sie Ihre E-Mail ein',
      button: 'Abonnieren',
    },
    bookACall: {
      badge: 'Loslegen',
      title: 'Kostenlose Beratung Buchen',
      description: 'Vereinbaren Sie einen Termin mit unserem Team, um zu besprechen, wie wir Ihr Unternehmen mit KI transformieren können.',
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
