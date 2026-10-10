export type Lang = "it" | "en"

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
]

const t_it = {
  nav: {
    about: "Profilo",
    experience: "Esperienza",
    education: "Istruzione",
    skills: "Competenze",
  },
  hero: {
    subtitle: "Senior Manager",
    description:
      "15+ anni di esperienza internazionale nella pianificazione delle vendite B2B, partnership strategiche e sviluppo del business a livello globale",
    location: "Milano, Italia",
  },
  about: {
    heading: "Profilo",
    lead: "Senior Manager con ampia esperienza internazionale nel guidare la crescita attraverso iniziative B2B strategiche e sviluppo dell'ecosistema.",
    p1: "Con oltre 15 anni di esperienza in diversi settori e geografie, sono specializzato nella pianificazione delle vendite B2B, nello sviluppo commerciale e nella gestione di account e partner. La mia competenza risiede nella costruzione ed esecuzione di strategie go-to-market dirette e indirette che producono risultati misurabili.",
    p2: "Ho un track record consolidato nella crescita dei ricavi attraverso alleanze strategiche e sviluppo dell'ecosistema, supportato da solide capacità di negoziazione e gestione degli stakeholder. Il mio approccio combina il decision making basato sui dati con la capacità di guidare team interfunzionali in mercati altamente competitivi.",
    p3: "Attualmente focalizzato sulla massimizzazione delle performance di sell-out attraverso iniziative basate sul ROI, porto una combinazione unica di rigore analitico e visione strategica ad ogni sfida.",
    stats: {
      yearsExp: "Anni di Esperienza",
      teams: "Team Coordinati",
      people: "Persone Impattate",
      companies: "Aziende",
    },
  },
  experience: {
    heading: "Esperienza",
    jobs: [
      {
        role: "Pianificazione Vendite & Strategia (Sud EU)",
        description:
          "Guidare la crescita a doppia cifra del mercato B2B di Alibaba.com nell'Europa meridionale attraverso strategie di vendita diretta e canali.",
        highlights: [
          "Guidato iniziative interfunzionali tra Vendite, Marketing e Operazioni per migliorare l'eccellenza operativa – inclusi lanci di nuovi prodotti, implementazione di CRM & Data Platform, pricing regionale, trasformazione del modello di revenue, localizzazione dell'esperienza cliente e revisione delle performance aziendali",
          "Gestito le performance di vendita e il ROI dei partner, supervisionando il design degli incentivi, il tracking delle vendite e le metriche di performance per garantire piena trasparenza e responsabilità nell'ecosistema commerciale",
          "Responsabile del budget e delle negoziazioni finanziarie con l'HQ, supportando la pianificazione e la gestione di ricavi, organico e obiettivi P&L, monitorando le performance e le metriche di efficienza",
          "Sviluppato account strategici e partnership, coinvolgendo stakeholder C-level per co-progettare piani di business congiunti che garantissero la profittabilità dei partner e l'allineamento con la strategia di crescita regionale di Alibaba.com (ricavi >USD 2,0M, 10 HC diretti, 3 partner di canale, 35+ HC indiretti)",
          "Guidato il rollout del Programma Partner di Alibaba.com, reclutando, onboarding e abilitando con successo 125+ nuovi partner in 12 mesi in tutta l'Europa meridionale",
          "Agito come principale liaison tra l'HQ in Cina e la leadership locale, garantendo allineamento strategico, trasferimento di conoscenze ed eccellenza esecutiva",
        ],
      },
      {
        role: "Global Business & Commercial Development e CRM Manager",
        description:
          "Responsabile del coordinamento dei team di vendita a livello mondiale e dei programmi di crescita strategica.",
        highlights: [
          "Guidato programmi interfunzionali tra Vendite, Marketing e Operazioni per rafforzare l'eccellenza operativa, includendo lanci di prodotto, implementazione di CRM e data platform, strategia di pricing, redesign del modello di revenue, localizzazione dell'esperienza cliente e revisione delle performance aziendali",
          "Monitorato le performance commerciali e il ROI dei partner nell'ecosistema di vendita, progettando strutture incentivanti, tracciando i risultati di sell-out e definendo metriche di performance per garantire piena trasparenza e responsabilità",
          "Coordinato 21 team regionali, fungendo da collegamento chiave tra il Top Management e i team per il dispiegamento delle strategie globali",
          "Preparato il Piano Strategico quinquennale e definito obiettivi di vendita e piani di incentivi per 300 commerciali",
          "Amministrato Salesforce.com per 10 BU, 21 team e 500+ utenti, guidando la progettazione, l'implementazione e la manutenzione della piattaforma, inclusa la formazione e l'onboarding dei nuovi team",
        ],
      },
      {
        role: "Key Account Manager & Business Developer",
        description:
          "Responsabile della divisione automazione industriale nell'area del Nord Italia, guidando le attività di vendita B2B diretta e indiretta.",
        highlights: [
          "Conseguito una crescita delle vendite del +30% anno su anno",
          "Gestito circa 300 clienti diretti",
          "Coordinato una rete di 25 dealer per il canale di vendita indiretto",
        ],
      },
      {
        role: "Senior Consultant in Performance Improvements",
        description:
          "Realizzato progetti di consulenza strategica in diversi settori, guidando la trasformazione organizzativa e l'eccellenza operativa.",
        highlights: [
          "Completato 10 progetti per 6 clienti, specializzato in change management, vendite & marketing, strategia & operazioni, miglioramento dei processi e pianificazione aziendale",
        ],
      },
    ],
  },
  education: {
    heading: "Istruzione",
    academicBg: "Formazione Accademica",
    languages: "Lingue",
    degrees: [
      { degree: "Laurea Magistrale in Ingegneria Gestionale" },
      { degree: "Laurea Triennale in Ingegneria Gestionale" },
      { degree: "English for Business" },
    ],
    langLevels: { native: "Madrelingua", fluent: "Fluente" },
  },
  skills: {
    heading: "Competenze",
    core: "Competenze Chiave",
    technical: "Competenze Tecniche",
    focus: "Aree di Focus Professionale",
    competencies: [
      "Pianificazione Vendite B2B",
      "Partnership Strategiche",
      "Strategia Go-to-Market",
      "Crescita dei Ricavi",
      "Gestione degli Stakeholder",
      "Leadership Interfunzionale",
      "Sviluppo dell'Ecosistema Partner",
      "Gestione P&L",
      "Amministrazione CRM",
      "Performance Analytics",
      "Gestione Incentivi Vendite",
    ],
    interests: [
      "Business & Data Modelling",
      "Strategie di Vendita Data-driven",
      "AI & Tecnologia",
      "Ottimizzazione Sell-out",
      "Leadership & Coaching dei Team",
    ],
  },
  interests: {
    heading: "Oltre il Lavoro",
    passions: [
      {
        title: "Creazione & Restyling di Siti Web",
        description:
          "Mi occupo personalmente della creazione di siti web su misura e del restyling di siti esistenti, trasformando presenze online datate in esperienze moderne, eleganti e d'impatto.",
      },
      {
        title: "Coach di Tennis",
        description:
          "Appassionato di tennis, sia come giocatore che come coach, unendo la disciplina fisica al pensiero strategico.",
      },
      {
        title: "Giocatore di Scacchi",
        description:
          "Appassionato di scacchi, applicando il pensiero analitico e la pianificazione a lungo termine sulla scacchiera.",
      },
      {
        title: "Tecnologie Emergenti & AI",
        description:
          "Profondamente interessato all'intelligenza artificiale e alle tendenze tech emergenti che stanno ridisegnando il business e la società.",
      },
      {
        title: "Esplorazione Culturale",
        description:
          "Viaggiatore appassionato con la passione per scoprire nuove culture, prospettive e modi di fare business a livello globale.",
      },
    ],
  },
  footer: {
    connect: "Connettiamoci",
    cta: "Aperto a discutere opportunità nelle vendite, nella strategia commerciale, nella pianificazione e nella sales leadership, in qualsiasi settore, in tutto il mondo",
    rights: "Tutti i diritti riservati",
  },
  contact: {
    show: "Mostra Contatto",
    challenge: "Quanto fa",
    challengeQ: "?",
    error: "Risposta errata, riprova",
  },
}

const t_en = {
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
  },
  hero: {
    subtitle: "Senior Manager",
    description:
      "15+ years of international experience in B2B sales planning, sales coordination, strategic partnerships and ecosystem growth as well as business development",
    location: "Milan, Italy",
  },
  about: {
    heading: "Profile",
    lead: "Senior Manager with extensive international experience driving growth through strategic B2B initiatives and ecosystem development.",
    p1: "With over 15 years of experience spanning multiple industries and geographies, I specialize in B2B sales planning, sales development, and accounts & partners management. My expertise lies in building and executing both direct and indirect go-to-market strategies that deliver measurable results.",
    p2: "I have a proven track record in driving revenue growth through strategic alliances and ecosystem development, backed by strong negotiation and stakeholder management skills. My approach combines data-driven decision making with the ability to lead cross-functional teams in highly competitive markets.",
    p3: "Currently focused on maximizing sales-out performance through ROI-based initiatives, I bring a unique combination of analytical rigor and strategic vision to every challenge.",
    stats: {
      yearsExp: "Years Experience",
      teams: "Teams Coordinated",
      people: "People Impacted",
      companies: "Companies",
    },
  },
  experience: {
    heading: "Experience",
    jobs: [
      {
        role: "Sales Planning & Strategy (South EU)",
        description:
          "Driving double-digit growth of Alibaba.com's B2B market in Southern Europe through direct sales and channels strategy.",
        highlights: [
          "Led cross-functional initiatives across Sales, Marketing and Operations to enhance operational excellence – including new product launches, CRM & Data Platform roll-out, regional pricing, revenue model transformation, customer experience localization and overall business performance review",
          "Managed sales performance and partner ROI, overseeing incentive design, sales-out tracking, and performance metrics to ensure full transparency and accountability across the commercial ecosystem",
          "Owned budgeting and financial negotiations with HQ, supporting the planning and management of revenues, headcount, and P&L targets, while monitoring ongoing performance and efficiency metrics",
          "Developed strategic accounts and partnerships, engaging with C-level stakeholders to co-design joint business plans that ensured partner profitability and alignment with Alibaba.com's regional growth strategy (USD 2.0M+ revenues, 10 direct HC, 3 channel partners, 35+ indirect HC)",
          "Led the rollout of the Alibaba.com Partner Program, successfully recruiting, onboarding, and enabling 125+ new partners in 12 months across Southern Europe",
          "Acted as the primary liaison between HQ in China and local leadership, ensuring strategic alignment, knowledge transfer, and execution excellence",
        ],
      },
      {
        role: "Global Business & Commercial Development and CRM Manager",
        description:
          "In charge of the coordination of the sales teams worldwide, and the strategic growth programs.",
        highlights: [
          "Directed end-to-end strategic initiatives across Sales, Marketing, and Operations to optimize internal workflows, managing full-cycle product rollouts, CRM and data architecture integration, revenue stream restructuring, regional user journey adaptation, and comprehensive business audits.",
          "Analyzed global sales results and organizational ROI, engineering high-impact motivation frameworks, auditing final market output, and defining success KPIs to maintain absolute visibility and departmental responsibility.",
          "Coordinated 21 regional teams, serving as a key connection between Top Management and teams for deploying global strategies",
          "Prepared the 5-year Strategic Plan and set sales targets & incentive plans for 300 salespeople",
          "Administered Salesforce.com for 10 BUs, 21 teams, and 500+ users, leading platform design, implementation, and maintenance, including training and onboarding of new teams",
        ],
      },
      {
        role: "Key Account Manager & Business Developer",
        description:
          "Accountable for the factory automation division in Northern Italy area, driving B2B direct & indirect sales activities.",
        highlights: [
          "Achieved +30% growth in sales year-over-year",
          "Managed approximately 300 direct customers",
          "Coordinated a network of 25 dealers for the indirect sales channel",
        ],
      },
      {
        role: "Senior Consultant in Performance Improvements",
        description:
          "Delivered strategic consulting projects across multiple industries, driving organizational transformation and operational excellence.",
        highlights: [
          "Completed 10 projects across 6 clients, specializing in change management, sales & marketing, strategy & operations, process improvements, and business planning",
        ],
      },
    ],
  },
  education: {
    heading: "Education",
    academicBg: "Academic Background",
    languages: "Languages",
    degrees: [
      { degree: "Master's Degree in Management Engineering" },
      { degree: "Bachelor's Degree in Management Engineering" },
      { degree: "English for Business" },
    ],
    langLevels: { native: "Native", fluent: "Fluent" },
  },
  skills: {
    heading: "Skills & Expertise",
    core: "Core Competencies",
    technical: "Technical Proficiency",
    focus: "Professional Focus Areas",
    competencies: [
      "B2B Sales Planning",
      "Strategic Partnerships",
      "Go-to-Market Strategy",
      "Revenue Growth",
      "Stakeholder Management",
      "Cross-functional Leadership",
      "Partner Ecosystem Development",
      "P&L Management",
      "CRM Administration",
      "Performance Analytics",
      "Sales Incentives Management",
    ],
    interests: [
      "Business & Data Modelling",
      "Data-driven Sales Strategies",
      "AI & Technology",
      "Sales-out Optimization",
      "Team Leadership & Coaching",
    ],
  },
  interests: {
    heading: "Beyond Work",
    passions: [
      {
        title: "Web Creation & Restyling",
        description:
          "I personally handle the creation of custom websites and the restyling of existing ones, turning outdated online presences into modern, elegant and impactful digital experiences.",
      },
      {
        title: "Tennis Coaching",
        description:
          "Passionate about tennis, both as a player and coach, combining physical discipline with strategic thinking.",
      },
      {
        title: "Chess Player",
        description:
          "Strategic board game enthusiast, applying analytical thinking and long-term planning on the chessboard.",
      },
      {
        title: "Emerging Technologies & AI",
        description:
          "Deeply interested in artificial intelligence and emerging tech trends that are reshaping business and society.",
      },
      {
        title: "Cultural Exploration",
        description:
          "Avid traveler with a passion for discovering new cultures, perspectives, and ways of doing business globally.",
      },
    ],
  },
  footer: {
    connect: "Let's Connect",
    cta: "Open to discussing opportunities in sales, sales strategy, sales planning, and sales leadership, across any industry, worldwide",
    rights: "All rights reserved",
  },
  contact: {
    show: "Show Contact",
    challenge: "What's",
    challengeQ: "?",
    error: "Wrong answer, try again",
  },
}

export const translations = {
  it: t_it,
  en: t_en,
}

export type Translations = typeof t_en
