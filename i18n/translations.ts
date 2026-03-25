export type Lang = "it" | "en" | "fr" | "de" | "zh" | "sw" | "ql"

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "sw", label: "Kiswahili", flag: "🇰🇪" },
  { code: "ql", label: "Quenya", flag: "🧝" },
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
      "15+ anni di esperienza internazionale in pianificazione vendite B2B, partnership strategiche e sviluppo del business a livello globale",
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
      partners: "Partner Reclutati",
      revenue: "Fatturato Gestito",
      teams: "Team Coordinati",
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
          "Riporto diretto al CEO, responsabile del coordinamento dei team di vendita a livello mondiale e dei programmi di crescita strategica.",
        highlights: [
          "Coordinato 21 team regionali, fungendo da collegamento chiave tra il Top Management e i team per il dispiegamento delle strategie globali",
          "Preparato il Piano Strategico quinquennale e definito obiettivi di vendita e piani incentivi per 300 persone di vendita",
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
          "Completato 10 progetti per 6 clienti, specializzandosi in change management, vendite & marketing, strategia & operazioni, miglioramento dei processi e pianificazione aziendale",
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
    cta: "Aperto a discutere opportunità nelle vendite, nella strategia commerciale, nella pianificazione e nella sales leadership — in qualsiasi settore, in tutto il mondo",
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
      "15+ years of international experience in B2B sales planning, strategic partnerships, and global business development",
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
      partners: "Partners Recruited",
      revenue: "Revenue Managed",
      teams: "Teams Coordinated",
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
          "Direct report of the CEO, in charge of the coordination of the sales teams world-wide, and the strategic growth programs.",
        highlights: [
          "Coordinated 21 regional teams, serving as a key connection between Top Management and teams for deploying global strategies",
          "Prepared the 5-year Strategic Plan and set sales targets & incentive plans for 300 sales people",
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
          "Coordinated network of 25 dealers for indirect sales channel",
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
    cta: "Open to discussing opportunities in sales, sales strategy, sales planning, and sales leadership — across any industry, worldwide",
    rights: "All rights reserved",
  },
  contact: {
    show: "Show Contact",
    challenge: "What's",
    challengeQ: "?",
    error: "Wrong answer, try again",
  },
}

const t_fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    education: "Formation",
    skills: "Compétences",
  },
  hero: {
    subtitle: "Directeur Senior",
    description:
      "Plus de 15 ans d'expérience internationale en planification des ventes B2B, partenariats stratégiques et développement commercial mondial",
    location: "Milan, Italie",
  },
  about: {
    heading: "Profil",
    lead: "Directeur Senior avec une vaste expérience internationale dans la conduite de la croissance grâce à des initiatives B2B stratégiques et au développement d'écosystèmes.",
    p1: "Fort de plus de 15 ans d'expérience dans plusieurs secteurs et géographies, je suis spécialisé dans la planification des ventes B2B, le développement commercial et la gestion des comptes et des partenaires. Mon expertise réside dans la construction et l'exécution de stratégies go-to-market directes et indirectes qui produisent des résultats mesurables.",
    p2: "J'ai un track record avéré dans la croissance du chiffre d'affaires grâce aux alliances stratégiques et au développement des écosystèmes, soutenu par de solides compétences en négociation et en gestion des parties prenantes. Mon approche combine la prise de décision basée sur les données avec la capacité à diriger des équipes transversales sur des marchés très concurrentiels.",
    p3: "Actuellement focalisé sur la maximisation des performances de sell-out grâce à des initiatives basées sur le ROI, j'apporte une combinaison unique de rigueur analytique et de vision stratégique à chaque défi.",
    stats: {
      yearsExp: "Ans d'expérience",
      partners: "Partenaires recrutés",
      revenue: "CA géré",
      teams: "Équipes coordonnées",
    },
  },
  experience: {
    heading: "Expérience",
    jobs: [
      {
        role: "Planification des ventes & Stratégie (Sud EU)",
        description:
          "Piloter la croissance à deux chiffres du marché B2B d'Alibaba.com en Europe du Sud via une stratégie de ventes directes et de canaux.",
        highlights: [
          "Dirigé des initiatives transversales entre les équipes Ventes, Marketing et Opérations pour améliorer l'excellence opérationnelle – incluant des lancements de produits, le déploiement de CRM & Data Platform, la tarification régionale, la transformation du modèle de revenus, la localisation de l'expérience client et la revue globale des performances",
          "Géré la performance commerciale et le ROI des partenaires, supervisant la conception des incentives, le suivi des ventes et les indicateurs de performance pour garantir transparence et responsabilité dans l'écosystème commercial",
          "Responsable du budget et des négociations financières avec le siège, soutenant la planification et la gestion des revenus, des effectifs et des objectifs P&L, tout en surveillant les indicateurs de performance et d'efficacité",
          "Développé des comptes stratégiques et des partenariats, en engageant des parties prenantes C-level pour co-concevoir des plans d'affaires communs garantissant la rentabilité des partenaires et l'alignement avec la stratégie de croissance régionale d'Alibaba.com (revenus >2,0M USD, 10 HC directs, 3 partenaires de canaux, 35+ HC indirects)",
          "Piloté le déploiement du Programme Partenaires Alibaba.com, recrutant, intégrant et habilitant avec succès 125+ nouveaux partenaires en 12 mois en Europe du Sud",
          "Servi de liaison principale entre le siège en Chine et la direction locale, assurant l'alignement stratégique, le transfert de connaissances et l'excellence d'exécution",
        ],
      },
      {
        role: "Responsable Développement Commercial & CRM Global",
        description:
          "Rapport direct au PDG, chargé de la coordination des équipes de vente mondiales et des programmes de croissance stratégique.",
        highlights: [
          "Coordonné 21 équipes régionales, servant de lien clé entre la Direction Générale et les équipes pour le déploiement des stratégies globales",
          "Élaboré le Plan Stratégique sur 5 ans et fixé les objectifs de vente et les plans d'incentives pour 300 commerciaux",
          "Administré Salesforce.com pour 10 BU, 21 équipes et 500+ utilisateurs, pilotant la conception, l'implémentation et la maintenance de la plateforme, y compris la formation et l'intégration des nouvelles équipes",
        ],
      },
      {
        role: "Responsable Grands Comptes & Développeur Commercial",
        description:
          "Responsable de la division automatisation industrielle dans le nord de l'Italie, pilotant les activités de ventes B2B directes et indirectes.",
        highlights: [
          "Atteint une croissance des ventes de +30% en glissement annuel",
          "Géré environ 300 clients directs",
          "Coordonné un réseau de 25 distributeurs pour le canal de vente indirect",
        ],
      },
      {
        role: "Senior Consultant en Amélioration des Performances",
        description:
          "Réalisé des projets de conseil stratégique dans plusieurs secteurs, en pilotant la transformation organisationnelle et l'excellence opérationnelle.",
        highlights: [
          "Complété 10 projets pour 6 clients, spécialisé en change management, ventes & marketing, stratégie & opérations, amélioration des processus et planification d'entreprise",
        ],
      },
    ],
  },
  education: {
    heading: "Formation",
    academicBg: "Parcours académique",
    languages: "Langues",
    degrees: [
      { degree: "Master en Ingénierie du Management" },
      { degree: "Licence en Ingénierie du Management" },
      { degree: "Anglais des Affaires" },
    ],
    langLevels: { native: "Natif", fluent: "Courant" },
  },
  skills: {
    heading: "Compétences",
    core: "Compétences clés",
    technical: "Maîtrise technique",
    focus: "Domaines de spécialisation",
    competencies: [
      "Planification des ventes B2B",
      "Partenariats stratégiques",
      "Stratégie go-to-market",
      "Croissance du chiffre d'affaires",
      "Gestion des parties prenantes",
      "Leadership transversal",
      "Développement de l'écosystème partenaires",
      "Gestion P&L",
      "Administration CRM",
      "Analyse des performances",
      "Gestion des incentives commerciaux",
    ],
    interests: [
      "Modélisation Business & Data",
      "Stratégies de vente data-driven",
      "IA & Technologie",
      "Optimisation du sell-out",
      "Leadership & Coaching d'équipe",
    ],
  },
  interests: {
    heading: "En dehors du travail",
    passions: [
      {
        title: "Coach de Tennis",
        description:
          "Passionné de tennis, à la fois comme joueur et entraîneur, alliant discipline physique et pensée stratégique.",
      },
      {
        title: "Joueur d'Échecs",
        description:
          "Amateur de jeux de stratégie, appliquant la réflexion analytique et la planification à long terme sur l'échiquier.",
      },
      {
        title: "Technologies émergentes & IA",
        description:
          "Profondément intéressé par l'intelligence artificielle et les tendances technologiques émergentes qui reconfigurent les entreprises et la société.",
      },
      {
        title: "Exploration culturelle",
        description:
          "Voyageur passionné, avide de découvrir de nouvelles cultures, perspectives et façons de faire des affaires à l'échelle mondiale.",
      },
    ],
  },
  footer: {
    connect: "Restons en contact",
    cta: "Ouvert à discuter d'opportunités dans la vente, la stratégie commerciale, la planification et le leadership commercial — dans tout secteur, partout dans le monde",
    rights: "Tous droits réservés",
  },
  contact: {
    show: "Afficher le contact",
    challenge: "Combien font",
    challengeQ: " ?",
    error: "Mauvaise réponse, réessayez",
  },
}

const t_de = {
  nav: {
    about: "Über mich",
    experience: "Erfahrung",
    education: "Ausbildung",
    skills: "Fähigkeiten",
  },
  hero: {
    subtitle: "Senior Manager",
    description:
      "15+ Jahre internationale Erfahrung in B2B-Vertriebsplanung, strategischen Partnerschaften und globalem Geschäftsentwicklung",
    location: "Mailand, Italien",
  },
  about: {
    heading: "Profil",
    lead: "Senior Manager mit umfangreicher internationaler Erfahrung in der Wachstumsförderung durch strategische B2B-Initiativen und Ökosystementwicklung.",
    p1: "Mit über 15 Jahren Erfahrung in mehreren Branchen und Regionen bin ich auf B2B-Vertriebsplanung, Vertriebsentwicklung sowie Account- und Partnermanagement spezialisiert. Meine Expertise liegt in der Entwicklung und Umsetzung direkter und indirekter Go-to-Market-Strategien, die messbare Ergebnisse liefern.",
    p2: "Ich habe eine nachgewiesene Erfolgsbilanz beim Umsatzwachstum durch strategische Allianzen und Ökosystementwicklung, gestützt auf starke Verhandlungs- und Stakeholder-Management-Fähigkeiten. Mein Ansatz verbindet datengetriebene Entscheidungsfindung mit der Fähigkeit, funktionsübergreifende Teams in hochkompetitiven Märkten zu führen.",
    p3: "Derzeit konzentriere ich mich auf die Maximierung der Sell-out-Performance durch ROI-basierte Initiativen und bringe eine einzigartige Kombination aus analytischer Strenge und strategischer Vision in jede Herausforderung ein.",
    stats: {
      yearsExp: "Jahre Erfahrung",
      partners: "Partner rekrutiert",
      revenue: "Umsatz verwaltet",
      teams: "Teams koordiniert",
    },
  },
  experience: {
    heading: "Erfahrung",
    jobs: [
      {
        role: "Vertriebsplanung & Strategie (Südeuropa)",
        description:
          "Zweistelliges Wachstum des B2B-Marktes von Alibaba.com in Südeuropa durch Direktvertrieb und Kanalstrategie vorantreiben.",
        highlights: [
          "Leitete funktionsübergreifende Initiativen in Vertrieb, Marketing und Operations zur Steigerung der operativen Exzellenz – darunter neue Produkteinführungen, CRM & Data Platform-Einführung, regionale Preisgestaltung, Umsatzmodell-Transformation, Lokalisierung der Customer Experience und Gesamtbewertung der Unternehmensleistung",
          "Verwaltete Vertriebsleistung und Partner-ROI, beaufsichtigte Incentive-Design, Sell-out-Tracking und Leistungskennzahlen zur Sicherstellung voller Transparenz und Verantwortlichkeit im kommerziellen Ökosystem",
          "Verantwortete Budgetierung und finanzielle Verhandlungen mit der Zentrale, unterstützte Planung und Management von Umsatz, Personalbestand und P&L-Zielen bei gleichzeitiger Überwachung der laufenden Leistungs- und Effizienzmetriken",
          "Entwickelte strategische Accounts und Partnerschaften, arbeitete mit C-Level-Stakeholdern zusammen, um gemeinsame Geschäftspläne zu entwickeln, die Partnerrentabilität und Ausrichtung auf Alibaba.coms regionale Wachstumsstrategie sicherstellten (USD 2,0M+ Umsatz, 10 direkte HC, 3 Kanalpartner, 35+ indirekte HC)",
          "Leitete die Einführung des Alibaba.com-Partnerprogramms und rekrutierte, integrierte und befähigte erfolgreich 125+ neue Partner in 12 Monaten in Südeuropa",
          "Fungierte als primäre Schnittstelle zwischen der Zentrale in China und der lokalen Führung und stellte strategische Ausrichtung, Wissenstransfer und Ausführungsexzellenz sicher",
        ],
      },
      {
        role: "Global Business & Commercial Development und CRM Manager",
        description:
          "Direkter Bericht an den CEO, verantwortlich für die Koordination der weltweiten Vertriebsteams und der strategischen Wachstumsprogramme.",
        highlights: [
          "Koordinierte 21 regionale Teams als Schlüsselverbindung zwischen Top-Management und Teams für die Umsetzung globaler Strategien",
          "Erstellte den 5-Jahres-Strategieplan und legte Vertriebsziele & Incentive-Pläne für 300 Vertriebsmitarbeiter fest",
          "Administrierte Salesforce.com für 10 Geschäftsbereiche, 21 Teams und 500+ Nutzer, leitete Plattformdesign, -implementierung und -wartung einschließlich Schulung und Onboarding neuer Teams",
        ],
      },
      {
        role: "Key Account Manager & Business Developer",
        description:
          "Verantwortlich für den Bereich Fabrikautomation in Norditalien, Steuerung von B2B-Direkt- und Indirektvvertriebsaktivitäten.",
        highlights: [
          "+30% Umsatzwachstum im Jahresvergleich erzielt",
          "Rund 300 Direktkunden betreut",
          "Netzwerk von 25 Händlern für den indirekten Vertriebskanal koordiniert",
        ],
      },
      {
        role: "Senior Consultant für Performance Improvements",
        description:
          "Strategische Beratungsprojekte in mehreren Branchen durchgeführt, organisatorische Transformation und operative Exzellenz vorangetrieben.",
        highlights: [
          "10 Projekte bei 6 Kunden abgeschlossen, spezialisiert auf Change Management, Vertrieb & Marketing, Strategie & Operations, Prozessverbesserungen und Unternehmensplanung",
        ],
      },
    ],
  },
  education: {
    heading: "Ausbildung",
    academicBg: "Akademischer Werdegang",
    languages: "Sprachen",
    degrees: [
      { degree: "Master in Wirtschaftsingenieurwesen" },
      { degree: "Bachelor in Wirtschaftsingenieurwesen" },
      { degree: "Englisch für den Geschäftsbereich" },
    ],
    langLevels: { native: "Muttersprache", fluent: "Fließend" },
  },
  skills: {
    heading: "Fähigkeiten & Expertise",
    core: "Kernkompetenzen",
    technical: "Technische Kenntnisse",
    focus: "Fachliche Schwerpunkte",
    competencies: [
      "B2B-Vertriebsplanung",
      "Strategische Partnerschaften",
      "Go-to-Market-Strategie",
      "Umsatzwachstum",
      "Stakeholder-Management",
      "Funktionsübergreifende Führung",
      "Partner-Ökosystementwicklung",
      "P&L-Management",
      "CRM-Administration",
      "Performance Analytics",
      "Vertriebsincentive-Management",
    ],
    interests: [
      "Business & Data Modelling",
      "Datengetriebene Vertriebsstrategien",
      "KI & Technologie",
      "Sell-out-Optimierung",
      "Team-Führung & Coaching",
    ],
  },
  interests: {
    heading: "Jenseits der Arbeit",
    passions: [
      {
        title: "Tennis-Coach",
        description:
          "Leidenschaftlicher Tennisspieler und -trainer, der körperliche Disziplin mit strategischem Denken verbindet.",
      },
      {
        title: "Schachspieler",
        description:
          "Begeisterter Brettspieler, der analytisches Denken und langfristige Planung auf dem Schachbrett anwendet.",
      },
      {
        title: "Emerging Technologies & KI",
        description:
          "Tiefes Interesse an künstlicher Intelligenz und neuen Technologietrends, die Wirtschaft und Gesellschaft neu gestalten.",
      },
      {
        title: "Kulturelle Entdeckungen",
        description:
          "Begeisterter Reisender mit einer Leidenschaft für neue Kulturen, Perspektiven und globale Geschäftspraktiken.",
      },
    ],
  },
  footer: {
    connect: "Vernetzen wir uns",
    cta: "Offen für Gespräche über Möglichkeiten in Vertrieb, Vertriebsstrategie, Vertriebsplanung und Vertriebsführung — branchenübergreifend und weltweit",
    rights: "Alle Rechte vorbehalten",
  },
  contact: {
    show: "Kontakt anzeigen",
    challenge: "Was ist",
    challengeQ: "?",
    error: "Falsche Antwort, nochmal versuchen",
  },
}

const t_zh = {
  nav: {
    about: "关于",
    experience: "工作经历",
    education: "教育背景",
    skills: "技能专长",
  },
  hero: {
    subtitle: "高级经理",
    description:
      "15年以上国际B2B销售规划、战略合作伙伴关系和全球业务发展经验",
    location: "意大利米兰",
  },
  about: {
    heading: "简介",
    lead: "拥有丰富国际经验的高级经理，通过战略性B2B举措和生态系统发展推动业务增长。",
    p1: "拥有15年以上跨多个行业和地区的工作经验，专注于B2B销售规划、销售开发以及客户与合作伙伴管理。我的专长在于构建和执行直接及间接的市场进入策略，实现可衡量的业务成果。",
    p2: "在通过战略联盟和生态系统发展推动营收增长方面拥有良好的业绩记录，具备出色的谈判能力和利益相关者管理技能。我的方法将数据驱动的决策与在高度竞争市场中领导跨职能团队的能力相结合。",
    p3: "目前专注于通过基于ROI的举措最大化销售表现，为每一个挑战带来分析严谨性与战略视野的独特结合。",
    stats: {
      yearsExp: "年工作经验",
      partners: "合作伙伴",
      revenue: "营收管理",
      teams: "团队协调",
    },
  },
  experience: {
    heading: "工作经历",
    jobs: [
      {
        role: "销售规划与策略（南欧区）",
        description:
          "通过直销和渠道策略，推动Alibaba.com南欧B2B市场的两位数增长。",
        highlights: [
          "领导跨销售、市场营销和运营部门的协作举措，提升运营卓越性——包括新产品发布、CRM及数据平台推出、区域定价、收入模式转型、客户体验本地化以及整体业务绩效审查",
          "管理销售绩效和合作伙伴ROI，监督激励方案设计、销售追踪和绩效指标，确保商业生态系统的全面透明度和问责制",
          "负责与总部的预算编制和财务谈判，支持营收、人员编制和P&L目标的规划与管理，同时监控持续的绩效和效率指标",
          "发展战略客户和合作伙伴关系，与C级利益相关者合作共同设计联合商业计划，确保合作伙伴盈利能力并与Alibaba.com区域增长策略保持一致（营收>200万美元，10名直接员工，3个渠道合作伙伴，35名以上间接员工）",
          "领导Alibaba.com合作伙伴计划的推出，在12个月内在南欧成功招募、入职并赋能125名以上新合作伙伴",
          "担任中国总部与当地领导层之间的主要联络人，确保战略一致性、知识转移和执行卓越性",
        ],
      },
      {
        role: "全球业务与商务发展及CRM经理",
        description:
          "直接向CEO汇报，负责协调全球销售团队及战略增长计划。",
        highlights: [
          "协调21个区域团队，担任高层管理与团队之间部署全球战略的关键纽带",
          "制定5年战略计划，为300名销售人员制定销售目标和激励计划",
          "管理Salesforce.com平台，覆盖10个业务部门、21个团队和500名以上用户，领导平台设计、实施和维护，包括新团队的培训和入职",
        ],
      },
      {
        role: "大客户经理及业务拓展",
        description:
          "负责意大利北部工厂自动化部门，推动B2B直接和间接销售活动。",
        highlights: [
          "实现年同比销售增长+30%",
          "管理约300个直接客户",
          "协调25家经销商组成的间接销售渠道网络",
        ],
      },
      {
        role: "绩效提升高级顾问",
        description:
          "跨多个行业提供战略咨询项目，推动组织转型和运营卓越性。",
        highlights: [
          "为6家客户完成10个项目，专注于变革管理、销售与市场营销、战略与运营、流程改进和业务规划",
        ],
      },
    ],
  },
  education: {
    heading: "教育背景",
    academicBg: "学术背景",
    languages: "语言能力",
    degrees: [
      { degree: "管理工程硕士学位" },
      { degree: "管理工程学士学位" },
      { degree: "商务英语" },
    ],
    langLevels: { native: "母语", fluent: "流利" },
  },
  skills: {
    heading: "技能与专长",
    core: "核心能力",
    technical: "技术能力",
    focus: "专业关注领域",
    competencies: [
      "B2B销售规划",
      "战略合作伙伴关系",
      "市场进入策略",
      "营收增长",
      "利益相关者管理",
      "跨职能领导力",
      "合作伙伴生态系统发展",
      "P&L管理",
      "CRM管理",
      "绩效分析",
      "销售激励管理",
    ],
    interests: [
      "业务与数据建模",
      "数据驱动的销售策略",
      "人工智能与技术",
      "销售优化",
      "团队领导与辅导",
    ],
  },
  interests: {
    heading: "工作之外",
    passions: [
      {
        title: "网球教练",
        description:
          "热爱网球，既是球员也是教练，将身体训练与战略思维相结合。",
      },
      {
        title: "国际象棋爱好者",
        description:
          "棋盘游戏策略爱好者，在棋盘上运用分析思维和长期规划。",
      },
      {
        title: "新兴技术与人工智能",
        description:
          "对人工智能和正在重塑商业与社会的新兴技术趋势有深厚兴趣。",
      },
      {
        title: "文化探索",
        description:
          "热爱旅行，热衷于发现新文化、新视角和全球不同的商业模式。",
      },
    ],
  },
  footer: {
    connect: "联系我",
    cta: "欢迎探讨销售、销售策略、销售规划和销售领导力方面的机会——跨行业，面向全球",
    rights: "版权所有",
  },
  contact: {
    show: "显示联系方式",
    challenge: "请问",
    challengeQ: " 等于多少？",
    error: "答案有误，请重试",
  },
}

const t_sw = {
  nav: {
    about: "Kuhusu",
    experience: "Uzoefu",
    education: "Elimu",
    skills: "Ujuzi",
  },
  hero: {
    subtitle: "Meneja Mkuu",
    description:
      "Uzoefu wa zaidi ya miaka 15 wa kimataifa katika mipango ya mauzo ya B2B, ushirikiano wa kimkakati, na maendeleo ya biashara ya kimataifa",
    location: "Milan, Italia",
  },
  about: {
    heading: "Wasifu",
    lead: "Meneja Mkuu mwenye uzoefu mkubwa wa kimataifa katika kuendesha ukuaji kupitia mipango ya kimkakati ya B2B na maendeleo ya mfumo wa biashara.",
    p1: "Nikina uzoefu wa zaidi ya miaka 15 katika sekta na maeneo mengi, nimebobea katika mipango ya mauzo ya B2B, maendeleo ya mauzo, na usimamizi wa akaunti na washirika. Utaalamu wangu uko katika kujenga na kutekeleza mikakati ya kwenda sokoni ya moja kwa moja na isiyo ya moja kwa moja inayotoa matokeo yanayopimika.",
    p2: "Nina rekodi ya mafanikio iliyothibitishwa katika kukuza mapato kupitia ushirikiano wa kimkakati na maendeleo ya mfumo, yanayoungwa mkono na ujuzi wa mazungumzo na usimamizi wa wadau. Mbinu yangu inachanganya uamuzi unaotokana na data na uwezo wa kuongoza timu zinazofanya kazi mbalimbali katika masoko yenye ushindani mkubwa.",
    p3: "Kwa sasa ninalenga kupitisha utendaji wa mauzo kupitia mipango inayozingatia ROI, nakileta mchanganyiko wa kipekee wa uchambuzi wa kina na maono ya kimkakati kwa kila changamoto.",
    stats: {
      yearsExp: "Miaka ya Uzoefu",
      partners: "Washirika Walioajiriwa",
      revenue: "Mapato Yaliyosimamiwa",
      teams: "Timu Zilizoratibiwa",
    },
  },
  experience: {
    heading: "Uzoefu",
    jobs: [
      {
        role: "Mipango ya Mauzo & Mkakati (Kusini mwa EU)",
        description:
          "Kuendesha ukuaji wa tarakimu mbili wa soko la B2B la Alibaba.com katika Ulaya ya Kusini kupitia mauzo ya moja kwa moja na mkakati wa njia za usambazaji.",
        highlights: [
          "Kuongoza mipango ya mseto kati ya Mauzo, Masoko na Uendeshaji ili kuimarisha ubora wa uendeshaji – ikiwa ni pamoja na uzinduzi wa bidhaa mpya, uwekaji wa CRM & Data Platform, bei za kikanda, mabadiliko ya mfumo wa mapato, ubinafsi wa uzoefu wa mteja na mapitio ya jumla ya utendaji wa biashara",
          "Kusimamia utendaji wa mauzo na ROI ya washirika, ukisimamia muundo wa motisha, ufuatiliaji wa mauzo, na vipimo vya utendaji ili kuhakikisha uwazi kamili na uwajibikaji katika mfumo wa kibiashara",
          "Kusimamia uandaaji wa bajeti na mazungumzo ya kifedha na makao makuu, kusaidia upangaji na usimamizi wa mapato, wafanyakazi, na malengo ya P&L, huku ukifuatilia vipimo vya utendaji na ufanisi vinavyoendelea",
          "Kuendeleza akaunti za kimkakati na ushirikiano, kwa kujihusisha na wadau wa kiwango cha C ili kuunda pamoja mipango ya biashara ya pamoja iliyohakikisha faida ya washirika na mwelekeo wa mkakati wa ukuaji wa kikanda wa Alibaba.com (mapato >USD 2.0M, HC 10 za moja kwa moja, washirika 3 wa njia, HC 35+ za kwa njia isiyo ya moja kwa moja)",
          "Kuongoza uwekaji wa Programu ya Washirika wa Alibaba.com, kuajiri, kujumuisha, na kuwezesha kwa mafanikio washirika 125+ wapya katika miezi 12 katika Ulaya ya Kusini",
          "Kutenda kama msuluhishi mkuu kati ya makao makuu nchini China na uongozi wa ndani, kuhakikisha mwelekeo wa kimkakati, uhamishaji wa maarifa, na ubora wa utekelezaji",
        ],
      },
      {
        role: "Meneja wa Maendeleo ya Biashara ya Kimataifa na CRM",
        description:
          "Ripoti ya moja kwa moja kwa Mkurugenzi Mtendaji, anayehusika na uratibu wa timu za mauzo ulimwenguni kote, na programu za ukuaji wa kimkakati.",
        highlights: [
          "Kuratibu timu 21 za kikanda, kutumikia kama unganisho muhimu kati ya Menejimenti ya Juu na timu kwa ajili ya kupeleka mikakati ya kimataifa",
          "Kuandaa Mpango wa Kimkakati wa miaka 5 na kuweka malengo ya mauzo na mipango ya motisha kwa watu wa mauzo 300",
          "Kusimamia Salesforce.com kwa BU 10, timu 21, na watumiaji 500+, kuongoza muundo wa jukwaa, utekelezaji, na matengenezo, ikiwa ni pamoja na mafunzo na ujumuishaji wa timu mpya",
        ],
      },
      {
        role: "Meneja wa Akaunti Kuu na Mtengenezaji wa Biashara",
        description:
          "Kuwajibika kwa mgawanyo wa otomesheni ya kiwanda katika eneo la Kaskazini mwa Italia, kuendesha shughuli za mauzo ya moja kwa moja na isiyo ya moja kwa moja za B2B.",
        highlights: [
          "Kufikia ukuaji wa +30% katika mauzo kwa mwaka hadi mwaka",
          "Kusimamia takriban wateja wa moja kwa moja 300",
          "Kuratibu mtandao wa mawakala 25 kwa njia ya usambazaji wa mauzo isiyo ya moja kwa moja",
        ],
      },
      {
        role: "Mshauri Mkuu katika Uboreshaji wa Utendaji",
        description:
          "Kutoa miradi ya ushauri wa kimkakati katika sekta nyingi, kuendesha mabadiliko ya kiorganizational na ubora wa uendeshaji.",
        highlights: [
          "Kukamilisha miradi 10 kwa wateja 6, ukijitaalamu katika usimamizi wa mabadiliko, mauzo na masoko, mkakati na uendeshaji, uboreshaji wa mchakato, na upangaji wa biashara",
        ],
      },
    ],
  },
  education: {
    heading: "Elimu",
    academicBg: "Historia ya Kitaaluma",
    languages: "Lugha",
    degrees: [
      { degree: "Shahada ya Uzamili katika Uhandisi wa Usimamizi" },
      { degree: "Shahada ya Kwanza katika Uhandisi wa Usimamizi" },
      { degree: "Kiingereza cha Biashara" },
    ],
    langLevels: { native: "Lugha ya Mama", fluent: "Fasaha" },
  },
  skills: {
    heading: "Ujuzi na Utaalamu",
    core: "Ujuzi wa Msingi",
    technical: "Ujuzi wa Kiufundi",
    focus: "Maeneo ya Kazi",
    competencies: [
      "Mipango ya Mauzo ya B2B",
      "Ushirikiano wa Kimkakati",
      "Mkakati wa Kwenda Sokoni",
      "Ukuaji wa Mapato",
      "Usimamizi wa Wadau",
      "Uongozi wa Mseto",
      "Maendeleo ya Mfumo wa Washirika",
      "Usimamizi wa P&L",
      "Utawala wa CRM",
      "Uchambuzi wa Utendaji",
      "Usimamizi wa Motisha za Mauzo",
    ],
    interests: [
      "Uundaji wa Biashara na Data",
      "Mikakati ya Mauzo inayotokana na Data",
      "AI na Teknolojia",
      "Uboreshaji wa Mauzo",
      "Uongozi na Mafunzo ya Timu",
    ],
  },
  interests: {
    heading: "Nje ya Kazi",
    passions: [
      {
        title: "Mkufunzi wa Tenisi",
        description:
          "Mwenye shauku ya tenisi, kama mchezaji na mkufunzi, akichanganya nidhamu ya kimwili na fikira za kimkakati.",
      },
      {
        title: "Mchezaji wa Chesi",
        description:
          "Mpenda mchezo wa bodi wa kimkakati, akitumia fikira za uchanganuzi na upangaji wa muda mrefu kwenye ubao wa chesi.",
      },
      {
        title: "Teknolojia Zinazojitokeza na AI",
        description:
          "Mwenye nia ya kina katika akili bandia na mwelekeo wa teknolojia unaoibadilisha biashara na jamii.",
      },
      {
        title: "Uchunguzi wa Utamaduni",
        description:
          "Msafiri mkubwa mwenye shauku ya kugundua tamaduni mpya, mitazamo, na njia za kufanya biashara duniani kote.",
      },
    ],
  },
  footer: {
    connect: "Tuungane",
    cta: "Niko wazi kujadili fursa katika mauzo, mkakati wa mauzo, mipango ya mauzo, na uongozi wa mauzo — katika sekta yoyote, duniani kote",
    rights: "Haki zote zimehifadhiwa",
  },
  contact: {
    show: "Onyesha Mawasiliano",
    challenge: "Ngapi ni",
    challengeQ: "?",
    error: "Jibu si sahihi, jaribu tena",
  },
}

// Quenya (Tolkien's Elvish) — celebratory easter egg, poetic & approximate
const t_ql = {
  nav: {
    about: "Anwa",
    experience: "Carwë",
    education: "Istya",
    skills: "Curwë",
  },
  hero: {
    subtitle: "Taura Haryon",
    description:
      "Yéni neldëquain i carë nórë rimbë — malta, toron, ar ando hildë",
    location: "Mílano, Italiandor",
  },
  about: {
    heading: "Anwa Nar",
    lead: "Taura Haryon i carna lanta malta nórëo rimbë, carë mardë ar hirë toron rimbë.",
    p1: "Yéni cainen ar neldë i sercë nórëo quenyaron, noldë curwë indo vanyë — macil-ranthaina, maltë hirna, ar ando hildë rimbë.",
    p2: "Quetë malta meldë ar faina toron. Rimbë nossë ranthaina; Istya onóro ar carna mírë ondolissë yaimëo.",
    p3: "Sí tirë malta-sout ar ROI — carna mírë ar istya sanya, cormë ilye yaimëo.",
    stats: {
      yearsExp: "Yéni Carwëo",
      partners: "Toron Hirini",
      revenue: "Malta Tirna",
      teams: "Nossë Ranthainë",
    },
  },
  experience: {
    heading: "Carwë",
    jobs: [
      {
        role: "Malta-Ranta & Telpë (Hyarmen EU)",
        description:
          "Carë lanta malta Alibaba-nórëo hyarmendë, malta-ranta ar ando-telpë.",
        highlights: [
          "Rantha i nossë rimbë: Malta, Cormë ar Telpë — carna anwa mírë ar Malta-Jukwa hildë",
          "Tirë malta-sout ar toron-ROI, carna incentivë ar metriki rimbë",
          "Tirë maltë HQ, carna P&L ar yéni-ranta sanya",
          "Hir toron C-ranta, carna malta-plan yaimëo Alibaba (USD 2.0M+, nossë 10, ando 3, nossë 35+)",
          "Rantha Partner-Program, hir 125+ toron yéni minquë",
          "Liaison Sinë-Italiandor, tirë istya ar telpë onórëo",
        ],
      },
      {
        role: "Global Carwë & Telpë ar CRM-Haryon",
        description:
          "Ondolissë CEO, rantha nossë malta-rimbë ar mardë ukuajio kimkakati.",
        highlights: [
          "Rantha nossë neldequain ar minquë, carna liaison Top-Haryon ar nossë",
          "Carna Malta-Plan cainen-yéni, seti malengo 300 malta-quenyaron",
          "Tir Salesforce neldëquain BU, nossë neldëquain ar minquë, ar quenyar neldë-rimbë",
        ],
      },
      {
        role: "Haryon Malta-Coirëo & Telpë-Caryon",
        description:
          "Tirë malta-otomesheni Italiandor-formenissë, carë B2B malta rimbë.",
        highlights: [
          "+30% malta-lanta yéni-minquë",
          "Tirë quenyar neldë-rimbë meldë",
          "Rantha nossë cainen ar neldë malta-ando isiyo ya moja kwa moja",
        ],
      },
      {
        role: "Taura Quetya i Carwë-Vanya",
        description:
          "Carna telpë-mirë nórëo rimbë, carë anwa mardë ar carwë vanya.",
        highlights: [
          "Carna neldëquain mirë cainen quenyaron, istya change-management, malta ar cormë, telpë ar carwë",
        ],
      },
    ],
  },
  education: {
    heading: "Istya",
    academicBg: "Istya Undu",
    languages: "Lambë",
    degrees: [
      { degree: "Silmaril Istya i Carwë-Haryon" },
      { degree: "Ondol Istya i Carwë-Haryon" },
      { degree: "Lambë Angle Telpëo" },
    ],
    langLevels: { native: "Coivëa", fluent: "Quetëa" },
  },
  skills: {
    heading: "Curwë & Mírë",
    core: "Nórë Curwë",
    technical: "Tëa Mírë",
    focus: "Mardë Telpë",
    competencies: [
      "B2B Malta-Ranta",
      "Toron Rimbë",
      "Ando-Telpë Mardë",
      "Malta Lanta",
      "Nossë-Ranta",
      "Curwë Yaimëo",
      "Toron-Mardë Carë",
      "P&L Tirë",
      "CRM Ondolë",
      "Carwë Metriki",
      "Malta Incentivë",
    ],
    interests: [
      "Mardë & Data Carwë",
      "Data-rantha Malta",
      "AI & Cormë",
      "Malta-sout Vanyë",
      "Nossë Haryon & Istya",
    ],
  },
  interests: {
    heading: "Yaimë Eä",
    passions: [
      {
        title: "Tenisi Haryon",
        description:
          "Meldë tenisi, malta-quetya ar haryon — nórë ronyo ar telpë indo.",
      },
      {
        title: "Chesi Quetya",
        description:
          "Meldë mardë-cormë, carë istya ar malta-ranta ondolissë.",
      },
      {
        title: "Cormë Mírë & AI",
        description:
          "Meldë AI ar cormë-mírë yaimëo — carë mardë ar nórë rimbë anwa.",
      },
      {
        title: "Nórëo Ando Hildë",
        description:
          "Hir nórëo rimbë, lambë rimbë, ar telpë-ando rimbë yaimëo ondolë.",
      },
    ],
  },
  footer: {
    connect: "Nai Hiruvalmë",
    cta: "Meldë quetë malta-ando rimbë — nórëo rimbë, yaimëo ilye",
    rights: "Ilye rimbë nótë",
  },
  contact: {
    show: "Cen i Quenta",
    challenge: "Man",
    challengeQ: "?",
    error: "Voro lá mára — rehtë",
  },
}

export const translations = {
  it: t_it,
  en: t_en,
  fr: t_fr,
  de: t_de,
  zh: t_zh,
  sw: t_sw,
  ql: t_ql,
}

export type Translations = typeof t_en
