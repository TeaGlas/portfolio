export const LANGUAGES = {
  nl: "NL",
  en: "EN",
};

const sharedProfile = {
  name: "Tessel Glas",
  brand: "TESSEL GLAS",
};

const sharedCv = {
  href: "/documents/CV - Tessel Glas.pdf",
  download: "Tessel-Glas-CV.pdf"
};

export const CONTENT = {
  nl: {
    profile: {
      ...sharedProfile,
      role: "Fullstack developer",
      location: "Gevestigd in Den Haag, Nederland",
    },
    nav: {
      about: "Over mij",
      skills: "Skills",
      work: "Werk",
      contact: "Contact",
    },
    hero: {
      status: "Portfolio & projecten",
      intro:
        "Ik bouw interfaces die prettig aanvoelen met aandacht voor de details die software fijn maken om te gebruiken.",
      cta: "Bekijk mijn werk",
    },
    about: {
      label: "Over mij",
      paragraphs: [
        "Ik ben een fullstack developer met een voorkeur voor frontend. Ik bouw graag schone, goed gestructureerde interfaces en hecht veel waarde aan gebruikerservaring en codekwaliteit.",
        "Als ik niet werk, sta ik op het rugbyveld, in de keuken, of bouw ik aan kleine projecten voor de lol.",
      ],
    },
    skills: {
      label: "Tech stack",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Tools: "Tools",
      },
    },
    work: {
      label: "Werk",
      intro:
        "Professioneel werk is intern - daarom toon ik het met context. Persoonlijke projecten zijn live en klikbaar.",
      liveLabel: "Live",
      projects: [
        {
          title: "Interne Applicatie",
          type: "Professioneel",
          year: "2026",
          live: false,
          desc: "Een interne tool die gebruikers hielp data te berekenen, samen te vatten en te rapporteren. Ik bouwde verder aan een componentenbibliotheek, implementeerde real-time data en verbeterde de gebruikerservaring.",
          tagLabels: ["TypeScript", "React", "Python", "Intern"],
        },
        {
          title: "Intern Test Tool",
          type: "Professioneel",
          year: "2025",
          live: false,
          desc: "Dit verving een bestaande applicatie in Mendix met een custom React app. Ik bouwde een componentenbibliotheek, implementeerde real-time data en verbeterde de gebruikerservaring.",
          tagLabels: ["TypeScript", "React", "Intern"],
        },
        {
          title: "Recepten Website",
          type: "Hobby",
          year: "2025",
          live: true,
          href: "https://teaglas.github.io/recepten/",
          desc: "Een website die ik bouwde om mijn favoriete recepten online te delen. Het kan worden bijgewerkt, gefilterd en doorzocht via een eenvoudige interface.",
          tagLabels: ["TypeScript", "React"],
        },
        {
          title: "UX UI Trainingsvoorbeeld",
          type: "Hobby",
          year: "2026",
          live: true,
          href: "https://teaglas.github.io/UX-UI-Training/",
          desc: "Een klein project dat ik bouwde om goede vs slechte UX UI-praktijken te illustreren. Het werd gebruikt in een interne trainingssessie voor mijn bedrijf.",
          tagLabels: ["TypeScript", "React"],
        },
        {
          title: "Setlist Schrijver",
          type: "Hobby",
          year: "2025",
          live: true,
          href: "https://teaglas.github.io/setlist-schrijver/",
          desc: "Een weekend project dat ik bouwde om setlists te genereren voor mijn moeders koor. Het leest een Excel-bestand in en genereert een tabel met de setlist.",
          tagLabels: ["JavaScript"],
        },
      ],
    },
    cv: {
      ...sharedCv,
      label: "CV",
      title: "Wil je het volledige beeld?",
      copy: "In mijn CV staat de complete tijdlijn: ervaring, opleiding en alles daartussen.",
      cta: "Download CV",
    },
    contact: {
      label: "Contact",
      title: "Laten we praten.",
      intro:
        "Voor vragen, samenwerkingen of gewoon een bericht: neem gerust contact op.",
    },
    footer: {
      builtBy: "Gebouwd door",
    },
  },
  en: {
    profile: {
      ...sharedProfile,
      role: "Fullstack Developer",
      location: "Based in The Hague, Netherlands",
    },
    nav: {
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      status: "Portfolio & projects",
      intro:
        "I build interfaces that feel good to use. I care about the details that make software enjoyable.",
      cta: "See my work",
    },
    about: {
      label: "About me",
      paragraphs: [
        "I'm a fullstack developer with a preference for frontend. I love building clean, well-structured interfaces and care deeply about user experience and code quality.",
        "When I'm not working I'm usually on the rugby field, in the kitchen, or working on small projects for fun.",
      ],
    },
    skills: {
      label: "Tech stack",
      categories: {
        Frontend: "Frontend",
        Backend: "Backend",
        Tools: "Tools",
      },
    },
    work: {
      label: "Work",
      intro:
        "Professional work is internal - shown with context. Personal projects are live and linkable.",
      liveLabel: "Live",
      projects: [
        {
          title: "Internal Application",
          type: "Professional",
          year: "2026",
          live: false,
          desc: "I built on and improved upon an internal tool that helped users calculate, summarize, and report data. I built a component library, implemented real-time data, and improved the user experience.",
          tagLabels: ["TypeScript", "React", "Python", "Internal"],
        },
        {
          title: "Internal Testing Tool",
          type: "Professional",
          year: "2025",
          live: false,
          desc: "I replaced an existing application in Mendix with a custom React app. I built a component library, implemented real-time data, and improved the user experience.",
          tagLabels: ["TypeScript", "React", "Internal"],
        },
        {
          title: "Recepten Website",
          type: "Hobby",
          year: "2025",
          live: true,
          href: "https://teaglas.github.io/recepten/",
          desc: "I built a website to share my favorite recipes online. It can be updated, filtered, and searched through a simple interface.",
          tagLabels: ["TypeScript", "React"],
        },
        {
          title: "UX UI Training Example",
          type: "Hobby",
          year: "2026",
          live: true,
          href: "https://yourproject.dev",
          desc: "A small project I built to illustrate good vs bad UX UI practices. It was used in an internal training session for my company.",
          tagLabels: ["TypeScript", "React"],
        },
        {
          title: "Setlist Writer",
          type: "Hobby",
          year: "2025",
          live: true,
          href: "https://teaglas.github.io/setlist-schrijver/",
          desc: "A weekend project I built to generate setlists for my mother's choir. It reads an Excel file and generates a table with the setlist.",
          tagLabels: ["JavaScript"],
        },
      ],
    },
    cv: {
      ...sharedCv,
      label: "CV",
      title: "Want the full picture?",
      copy: "My CV has the complete timeline - experience, education, and everything in between.",
      cta: "Download CV",
    },
    contact: {
      label: "Contact",
      title: "Let's talk.",
      intro:
        "For questions, collaborations, or a quick note, feel free to reach out.",
    },
    footer: {
      builtBy: "Built by",
    },
  },
};

export const SKILLS = {
  Frontend: [
    { label: "React", bg: "#DBEAFE", fg: "#1E40AF" },
    { label: "Next.js", bg: "#E5E7EB", fg: "#111827" },
    { label: "TypeScript", bg: "#DBEAFE", fg: "#1D4ED8" },
    { label: "CSS / Tailwind", bg: "#D1FAE5", fg: "#065F46" },
  ],
  Backend: [
    { label: "Node.js", bg: "#D1FAE5", fg: "#065F46" },
    { label: "PostgreSQL", bg: "#E0E7FF", fg: "#3730A3" },
    { label: "REST APIs", bg: "#FEF3C7", fg: "#92400E" },
    { label: "Python", bg: "#DBEAFE", fg: "#1E40AF" },
  ],
  Tools: [
    { label: "Git", bg: "#FEE2E2", fg: "#991B1B" },
    { label: "VS Code", bg: "#DBEAFE", fg: "#1D4ED8" },
    { label: "Jira", bg: "#E0E7FF", fg: "#3730A3" },
    { label: "Figma", bg: "#FCE7F3", fg: "#9D174D" },
  ],
};

export const TAG_COLORS = {
  React: { bg: "#DBEAFE", fg: "#1E40AF" },
  TypeScript: { bg: "#E0E7FF", fg: "#3730A3" },
  JavaScript: { bg: "#FEF3C7", fg: "#92400E" },
  Python: { bg: "#DBEAFE", fg: "#1E40AF" },
  Internal: { bg: "#F3F4F6", fg: "#374151" },
  Intern: { bg: "#F3F4F6", fg: "#374151" },
  "Next.js": { bg: "#E5E7EB", fg: "#111827" },
  "Node.js": { bg: "#D1FAE5", fg: "#065F46" },
  "Open source": { bg: "#FCE7F3", fg: "#9D174D" },
};

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "tesselglas@outlook.com",
    href: "mailto:tesselglas@outlook.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tessel-glas",
    href: "https://www.linkedin.com/in/tessel-glas",
  },
  {
    label: "GitHub",
    value: "github.com/TeaGlas",
    href: "https://github.com/TeaGlas",
  },
];
