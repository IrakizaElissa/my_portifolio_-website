export type Language = "en" | "fr" | "rw"

export type PortfolioContent = {
  personal: {
    name: string
    title: string
    greeting: string
    tagline: string
    specializations: string[]
    email: string
    phone: string
    github: string
    linkedin: string
    x: string
    instagram: string
    location: string
    availability: string
    profileImage: string
    resume: string
    copyright: string
  }
  navigation: Array<{ name: string; href: string }>
  about: {
    sectionTitle: string
    heading: string
    paragraphs: string[]
    highlights: string[]
    stats: Array<{ value: string; label: string }>
  }
  skills: {
    sectionTitle: string
    heading: string
    categories: Array<{ title: string; skills: string[] }>
  }
  experience: {
    sectionTitle: string
    heading: string
    items: Array<{
      type: "work" | "education"
      title: string
      company: string
      period: string
      description: string[]
    }>
  }
  projects: {
    sectionTitle: string
    heading: string
    items: Array<{
      title: string
      description: string
      tags: string[]
      featured: boolean
      github: string
      demo: string
    }>
  }
  contact: {
    sectionTitle: string
    heading: string
    description: string
  }
  ui: {
    loadingPortfolio: string
    skillsPanelTitle: string
    welcomeTitle: string
    welcomeLine: string
    profileLabel: string
    downloadCv: string
    openCv: string
    connectWithMe: string
    languageLabel: string
    instructions: string
    roomNames: string[]
    languages: Record<Language, string>
  }
}

const sharedPersonal = {
  name: "Irakiza Elissa",
  email: "elisiirakiza@gmail.com",
  phone: "+250 798 295 923",
  github: "",
  linkedin: "",
  x: "https://x.com/eli_iraq?s=21",
  instagram: "https://www.instagram.com/irak_eli?igsh=cnZ3cHMxaWUxZXBm&utm_source=qr",
  location: "Kigali, Rwanda",
  availability: "Open to internships and junior opportunities",
  profileImage: "/elissa-profile.png",
  resume: "/Professional_CV_Elissa.docx",
}

export const portfolioContent: Record<Language, PortfolioContent> = {
  en: {
    personal: {
      ...sharedPersonal,
      title: "Junior Web Developer",
      greeting: "Hello, I'm",
      tagline:
        "Motivated and adaptable developer with growing expertise in computer technology, digital tools, and modern web development.",
      specializations: ["React", "Node.js", "Tailwind CSS", "Computer Networking"],
      copyright: "(c) 2026 Irakiza Elissa. All rights reserved.",
    },
    navigation: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projects" },
      { name: "Honors", href: "#honors" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
    ],
    about: {
      sectionTitle: "About Me",
      heading: "Growing through technology and practical learning",
      paragraphs: [
        "I am a motivated and adaptable individual with a strong academic background and growing expertise in computer technology and digital tools.",
        "My current focus includes web development with HTML, CSS, Tailwind CSS, React, Node.js, and programming foundations in C, C++, Java, and JavaScript.",
        "I enjoy practical learning, teamwork, and using problem-solving skills to build useful digital experiences.",
      ],
      highlights: ["strong academic background", "problem-solving skills", "practical learning"],
      stats: [
        { value: "4+", label: "Web Technologies" },
        { value: "5+", label: "Core Strengths" },
        { value: "3", label: "Education Levels" },
        { value: "2", label: "Languages" },
      ],
    },
    skills: {
      sectionTitle: "Skills",
      heading: "Tools and Technologies I Use",
      categories: [
        { title: "Programming", skills: ["C", "C++", "Java", "JavaScript"] },
        { title: "Web Development", skills: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js"] },
        { title: "Digital Tools", skills: ["Microsoft Word", "Excel", "PowerPoint", "Publisher"] },
        { title: "IT & Systems", skills: ["LAN", "WLAN", "Windows 7", "Windows 10", "Windows Server"] },
      ],
    },
    experience: {
      sectionTitle: "Experience",
      heading: "Education Journey",
      items: [
        {
          type: "education",
          title: "Computer Science Student",
          company: "University of Rwanda, College of Science and Technology",
          period: "2023 - Present",
          description: [
            "Pursuing Bachelor's degree in Computer Science.",
            "Developing advanced skills in software development, programming, and computer systems.",
            "Gaining practical experience in modern technologies and industry practices.",
          ],
        },
        {
          type: "education",
          title: "Training Program",
          company: "Africa Silicon Valley",
          period: "2024 - Present",
          description: [
            "Participating in intensive training on emerging technologies and startup ecosystem.",
            "Building entrepreneurship and innovation skills.",
            "Networking with professionals and innovators in the tech industry.",
          ],
        },
        {
          type: "education",
          title: "Advanced Level (A2)",
          company: "GS St Philippe Neri, Gisagara",
          period: "2020 - 2023",
          description: [
            "Completed upper secondary studies.",
            "Strengthened communication, teamwork, and leadership skills.",
            "Built a solid academic foundation for technology learning.",
          ],
        },
        {
          type: "education",
          title: "Ordinary Level",
          company: "ASPADE Ngororero",
          period: "2016 - 2019",
          description: [
            "Developed discipline and adaptability through academic studies.",
            "Gained confidence working independently and in teams.",
          ],
        },
        {
          type: "education",
          title: "Primary Education",
          company: "GS Karama",
          period: "2010 - 2015",
          description: [
            "Established foundational learning skills and curiosity.",
            "Began building the habits that support long-term growth.",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Portfolio",
      heading: "Focus Areas",
      items: [
        {
          title: "Responsive Web Interfaces",
          description:
            "Building modern frontend experiences with HTML, CSS, Tailwind CSS, and React while learning strong layout and component fundamentals.",
          tags: ["HTML", "CSS", "Tailwind", "React"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Programming Foundations",
          description:
            "Growing software development skills through JavaScript, Java, C, and C++ while strengthening logic, structure, and problem-solving.",
          tags: ["JavaScript", "Java", "C", "C++"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "IT Support and Networking",
          description:
            "Understanding local area networking, wireless networking, and Windows operating environments for practical technology support.",
          tags: ["LAN", "WLAN", "Windows", "Support"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Digital Productivity",
          description:
            "Using Microsoft Office tools to create organized documents, presentations, and communication materials.",
          tags: ["Word", "Excel", "PowerPoint"],
          featured: false,
          github: "",
          demo: "",
        },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      heading: "Let's Connect",
      description: "I am open to internships, junior roles, and opportunities to grow in web development and technology.",
    },
    ui: {
      loadingPortfolio: "Loading portfolio...",
      skillsPanelTitle: "MY SKILLS",
      welcomeTitle: "WELCOME",
      welcomeLine: "Ready to build useful digital experiences...",
      profileLabel: "Portfolio Profile",
      downloadCv: "Download CV",
      openCv: "Open CV",
      connectWithMe: "CONNECT WITH ME",
      languageLabel: "Language",
      instructions: "Drag to look around • Scroll to zoom • Click rooms to navigate",
      roomNames: ["Entrance", "About", "Skills", "Experience", "Projects", "Contact"],
      languages: {
        en: "English",
        fr: "French",
        rw: "Kinyarwanda",
      },
    },
  },
  fr: {
    personal: {
      ...sharedPersonal,
      title: "Developpeuse Web Junior",
      greeting: "Bonjour, je suis",
      tagline:
        "Developpeuse motivee et adaptable, avec une experience croissante en technologie informatique, outils numeriques et developpement web moderne.",
      specializations: ["React", "Node.js", "Tailwind CSS", "Reseaux informatiques"],
      copyright: "(c) 2026 Irakiza Elissa. Tous droits reserves.",
    },
    navigation: [
      { name: "A propos", href: "#about" },
      { name: "Competences", href: "#skills" },
      { name: "Parcours", href: "#experience" },
      { name: "Portfolio", href: "#projects" },
      { name: "Honors", href: "#honors" },
      { name: "Galerie", href: "#gallery" },
      { name: "Contact", href: "#contact" },
    ],
    about: {
      sectionTitle: "A propos",
      heading: "Evoluer grace a la technologie et a l'apprentissage pratique",
      paragraphs: [
        "Je suis une personne motivee et adaptable, avec une bonne base academique et une experience croissante en technologie informatique et outils numeriques.",
        "Je me concentre actuellement sur le developpement web avec HTML, CSS, Tailwind CSS, React, Node.js, ainsi que sur les bases de programmation en C, C++, Java et JavaScript.",
        "J'aime l'apprentissage pratique, le travail en equipe et l'utilisation de la resolution de problemes pour creer des experiences numeriques utiles.",
      ],
      highlights: ["bonne base academique", "resolution de problemes", "apprentissage pratique"],
      stats: [
        { value: "4+", label: "Technologies Web" },
        { value: "5+", label: "Forces Principales" },
        { value: "3", label: "Niveaux d'etudes" },
        { value: "2", label: "Langues" },
      ],
    },
    skills: {
      sectionTitle: "Competences",
      heading: "Outils et technologies que j'utilise",
      categories: [
        { title: "Programmation", skills: ["C", "C++", "Java", "JavaScript"] },
        { title: "Developpement Web", skills: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js"] },
        { title: "Outils Numeriques", skills: ["Microsoft Word", "Excel", "PowerPoint", "Publisher"] },
        { title: "IT et Systemes", skills: ["LAN", "WLAN", "Windows 7", "Windows 10", "Windows Server"] },
      ],
    },
    experience: {
      sectionTitle: "Parcours",
      heading: "Parcours educatif",
      items: [
        {
          type: "education",
          title: "Etudiante en Informatique",
          company: "Universite du Rwanda, College of Science and Technology",
          period: "2023 - Present",
          description: [
            "Poursuivre un diplome de baccalaureat en informatique.",
            "Developper des competences avancees en developpement logiciel, programmation et systemes informatiques.",
            "Acquerir une experience pratique dans les technologies modernes et les pratiques de l'industrie.",
          ],
        },
        {
          type: "education",
          title: "Programme de formation",
          company: "Africa Silicon Valley",
          period: "2024 - Present",
          description: [
            "Participer a une formation intensive sur les technologies emergentes et l'ecosysteme des startups.",
            "Developper des competences en entrepreneuriat et en innovation.",
            "Creer un reseau avec des professionnels et des innovateurs de l'industrie technologique.",
          ],
        },
        {
          type: "education",
          title: "Niveau avance (A2)",
          company: "GS St Philippe Neri, Gisagara",
          period: "2020 - 2023",
          description: [
            "Fin des etudes secondaires avancees.",
            "Renforcement des competences en communication, travail d'equipe et leadership.",
            "Construction d'une base academique solide pour l'apprentissage technologique.",
          ],
        },
        {
          type: "education",
          title: "Niveau ordinaire",
          company: "ASPADE Ngororero",
          period: "2016 - 2019",
          description: [
            "Developpement de la discipline et de l'adaptabilite grace aux etudes.",
            "Confiance accrue dans le travail individuel et en equipe.",
          ],
        },
        {
          type: "education",
          title: "Etudes primaires",
          company: "GS Karama",
          period: "2010 - 2015",
          description: [
            "Mise en place des bases d'apprentissage et de curiosite.",
            "Debut des habitudes qui soutiennent une croissance durable.",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Portfolio",
      heading: "Domaines de concentration",
      items: [
        {
          title: "Interfaces web responsives",
          description:
            "Creation d'experiences frontend modernes avec HTML, CSS, Tailwind CSS et React, tout en renforcant les bases des composants et des mises en page.",
          tags: ["HTML", "CSS", "Tailwind", "React"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Bases de programmation",
          description:
            "Progression en developpement logiciel avec JavaScript, Java, C et C++ tout en renforcant la logique, la structure et la resolution de problemes.",
          tags: ["JavaScript", "Java", "C", "C++"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Support IT et reseaux",
          description:
            "Comprendre les reseaux locaux, les reseaux sans fil et les environnements Windows pour un support technologique pratique.",
          tags: ["LAN", "WLAN", "Windows", "Support"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Productivite numerique",
          description:
            "Utilisation des outils Microsoft Office pour produire des documents, presentations et supports de communication bien organises.",
          tags: ["Word", "Excel", "PowerPoint"],
          featured: false,
          github: "",
          demo: "",
        },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      heading: "Restons en contact",
      description:
        "Je suis ouverte aux stages, postes juniors et opportunites de progression en developpement web et en technologie.",
    },
    ui: {
      loadingPortfolio: "Chargement du portfolio...",
      skillsPanelTitle: "MES COMPETENCES",
      welcomeTitle: "BIENVENUE",
      welcomeLine: "Prete a creer des experiences numeriques utiles...",
      profileLabel: "Profil Portfolio",
      downloadCv: "Telecharger le CV",
      openCv: "Ouvrir le CV",
      connectWithMe: "CONTACTEZ-MOI",
      languageLabel: "Langue",
      instructions: "Glissez pour regarder • Faites defiler pour zoomer • Cliquez sur les pieces pour naviguer",
      roomNames: ["Entree", "A propos", "Competences", "Parcours", "Projets", "Contact"],
      languages: {
        en: "Anglais",
        fr: "Francais",
        rw: "Kinyarwanda",
      },
    },
  },
  rw: {
    personal: {
      ...sharedPersonal,
      title: "Umutekinisiye wa Web W'Intangiriro",
      greeting: "Muraho, ndi",
      tagline:
        "Ndi umuntu ufite ubushake kandi ushobora kwihindura uko bikenewe, nkiri gukura mu ikoranabuhanga rya mudasobwa, ibikoresho by'ikoranabuhanga, no gukora imbuga za web zigezweho.",
      specializations: ["React", "Node.js", "Tailwind CSS", "Imiyoboro ya mudasobwa"],
      copyright: "(c) 2026 Irakiza Elissa. Uburenganzira bwose bwihariwe.",
    },
    navigation: [
      { name: "Ibyanjye", href: "#about" },
      { name: "Ubumenyi", href: "#skills" },
      { name: "Amashuri", href: "#experience" },
      { name: "Portfolio", href: "#projects" },
      { name: "Icyubahiro", href: "#honors" },
      { name: "Amasanamu", href: "#gallery" },
      { name: "Twandikire", href: "#contact" },
    ],
    about: {
      sectionTitle: "Ibyanjye",
      heading: "Gukura binyuze mu ikoranabuhanga no kwiga bikorwa",
      paragraphs: [
        "Ndi umuntu ufite ubushake kandi ushobora kwihindura uko bikenewe, mfite umusingi mwiza mu myigire ndetse n'ubumenyi buri gukura mu ikoranabuhanga rya mudasobwa n'ibikoresho by'ikoranabuhanga.",
        "Ubu nibanda ku gukora web nkoresheje HTML, CSS, Tailwind CSS, React, Node.js, hamwe n'ishingiro rya programming muri C, C++, Java na JavaScript.",
        "Nkunda kwiga binyuze mu bikorwa, gukorera mu itsinda, no gukoresha ubuhanga bwo gukemura ibibazo mu gukora ibisubizo bya digital bifite akamaro.",
      ],
      highlights: ["umusingi mwiza mu myigire", "gukemura ibibazo", "kwiga bikorwa"],
      stats: [
        { value: "4+", label: "Tekinoloji za Web" },
        { value: "5+", label: "Imbaraga z'ingenzi" },
        { value: "3", label: "Ibyiciro by'amashuri" },
        { value: "2", label: "Indimi" },
      ],
    },
    skills: {
      sectionTitle: "Ubumenyi",
      heading: "Ibikoresho na tekinoloji nkoresha",
      categories: [
        { title: "Programming", skills: ["C", "C++", "Java", "JavaScript"] },
        { title: "Gukora Web", skills: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js"] },
        { title: "Ibikoresho bya Digital", skills: ["Microsoft Word", "Excel", "PowerPoint", "Publisher"] },
        { title: "IT na Sisitemu", skills: ["LAN", "WLAN", "Windows 7", "Windows 10", "Windows Server"] },
      ],
    },
    experience: {
      sectionTitle: "Amashuri",
      heading: "Urugendo rw'amashuri",
      items: [
        {
          type: "education",
          title: "A2",
          company: "GS St Philippe Neri, Gisagara",
          period: "2020 - 2023",
          description: [
            "Narangiye amashuri yisumbuye.",
            "Nongereye ubumenyi mu kuvugana, gukorera hamwe no kuyobora.",
            "Nubatse umusingi mwiza wo gukomeza kwiga ikoranabuhanga.",
          ],
        },
        {
          type: "education",
          title: "O-Level",
          company: "ASPADE Ngororero",
          period: "2016 - 2019",
          description: [
            "Nateje imbere disipuline no kwihinduranya n'ibikenewe mu myigire.",
            "Nabonye icyizere cyo gukora njyenyine no gukorana n'abandi.",
          ],
        },
        {
          type: "education",
          title: "Amashuri abanza",
          company: "GS Karama",
          period: "2010 - 2015",
          description: [
            "Nashyizeho umusingi wo kwiga neza no kugira amatsiko.",
            "Natangiye kubaka imico ifasha gukura mu gihe kirekire.",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Portfolio",
      heading: "Ibice ndimo kwibandaho",
      items: [
        {
          title: "Imigaragarire ya web ijyana n'ibikoresho byose",
          description:
            "Kubaka frontend zigezweho ukoresheje HTML, CSS, Tailwind CSS na React, nkiri gushimangira uburyo bwo gutegura layout na components.",
          tags: ["HTML", "CSS", "Tailwind", "React"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Imfatiro za programming",
          description:
            "Gukomeza gukura mu gukora software nkoresheje JavaScript, Java, C na C++ no kongera logic, structure no gukemura ibibazo.",
          tags: ["JavaScript", "Java", "C", "C++"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "IT support n'imiyoboro",
          description:
            "Gusobanukirwa imiyoboro yo mu karere, wireless networks n'ibidukikije bya Windows kugira ngo mfashe mu bikorwa bya tekinoloji.",
          tags: ["LAN", "WLAN", "Windows", "Support"],
          featured: true,
          github: "",
          demo: "",
        },
        {
          title: "Gutunganya akazi ka digital",
          description:
            "Gukoresha Microsoft Office mu gutegura inyandiko, presentations n'ibikoresho by'itumanaho biteguye neza.",
          tags: ["Word", "Excel", "PowerPoint"],
          featured: false,
          github: "",
          demo: "",
        },
      ],
    },
    contact: {
      sectionTitle: "Twandikire",
      heading: "Reka tuvugane",
      description:
        "Niteguye kwakira internship, junior roles, n'andi mahirwe yo gukura mu gukora web no mu ikoranabuhanga.",
    },
    ui: {
      loadingPortfolio: "Portfolio iri gufunguka...",
      skillsPanelTitle: "UBUMENYI BWAJYE",
      welcomeTitle: "MURAKAZA NEZA",
      welcomeLine: "Niteguye kubaka ibisubizo bya digital bifite akamaro...",
      profileLabel: "Umwirondoro wa Portfolio",
      downloadCv: "Manura CV",
      openCv: "Fungura CV",
      connectWithMe: "TWANDIKIRE",
      languageLabel: "Ururimi",
      instructions: "Kurura urebe hirya no hino • Koresha scroll kugira ngo wegere • Kanda ku byumba kugira ngo ujyemo",
      roomNames: ["Kwinjira", "Ibyanjye", "Ubumenyi", "Amashuri", "Imishinga", "Twandikire"],
      languages: {
        en: "Icyongereza",
        fr: "Igifaransa",
        rw: "Ikinyarwanda",
      },
    },
  },
}
