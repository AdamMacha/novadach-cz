export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone?: string;
  phoneSecondary?: string;
  experience: string;
  highlightProjects?: string[];
  department: 'Vedení společnosti' | 'Obchod & Příprava' | 'Výroba & Realizace' | 'Technický dozor';
}

export const teamData: TeamMember[] = [
  {
    name: 'Ing. Vladimír Benčík',
    role: 'Generální ředitel & Jednatel',
    email: 'bencik@novadach.sk',
    phone: '+421 249 309 631',
    experience: 'Vede stavební skupinu od r. 1993 (NOVAGLASS od 1993, NOVAIZOL od 2002, NOVADACH od 2002). Přes 30 let strategického řízení velkých stavebních projektů.',
    department: 'Vedení společnosti',
    highlightProjects: ['Dlouhodobý rozvoj společnosti', 'Strategická partnerství', 'Člen Cechu strechárov Slovenska']
  },
  {
    name: 'Bc. Adrián Babiš',
    role: 'Výkonný ředitel a jednatel',
    email: 'obchod@novadach.cz',
    phone: '+420 730 827 769',
    experience: 'Řídí a strategicky rozvíjí společnost NOVADACH CZ s.r.o. na českém stavebním trhu. Má na starosti obchodní vztahy s investory a koordinaci projektů.',
    department: 'Vedení společnosti',
    highlightProjects: ['Expanze NOVADACH v ČR', 'Poptávky a tendry']
  },
  {
    name: 'Ing. Peter Kelemen',
    role: 'Obchodní ředitel',
    email: 'kelemen@novadach.sk',
    phone: '+421 918 957 399',
    phoneSecondary: '+421 2 49 30 96 30',
    experience: 'V minulosti manažer v DOPRASTAV a.s. (2005–2007). V NOVADACH od roku 2007 jako projektový manažer, od 2018 obchodně-výrobní ředitel, od 2023 obchodní ředitel.',
    department: 'Obchod & Příprava',
    highlightProjects: ['LP Kunice u Prahy (ČR)', 'JE Mochovce III. a IV. blok', 'JE Jaslovské Bohunice', 'City Aréna Trnava', 'Kaufland Pezinok & Ilava', 'Continental Matador Púchov']
  },
  {
    name: 'Ing. Juraj Jamrich',
    role: 'Výrobní ředitel',
    email: 'jamrich@novadach.sk',
    phone: '+421 918 616 171',
    experience: 'Od r. 2013 projektový manažer, od 2023 výrobní ředitel NOVADACH s.r.o. Řídí realizace největších střešních a fasádních projektů.',
    department: 'Výroba & Realizace',
    highlightProjects: ['AS Mlynské Nivy Bratislava', 'VOLKSWAGEN hala H1 + M6', 'IKEA Malacky', 'Ovocné Sady Bratislava', 'IFN Malacky']
  },
  {
    name: 'Ing. Zuzana Benčíková',
    role: 'Ředitelka kontrolingu',
    email: 'bencikova@novadach.sk',
    phone: '+421 249 309 630',
    experience: 'Řízení finančních toků, controlling stavebních rozpočtů, nákladové audity a ekonomické garance pro investory.',
    department: 'Vedení společnosti'
  },
  {
    name: 'Ing. Zoltán Krecsmer',
    role: 'Manažer přípravy staveb & rozpočtář',
    email: 'krecsmer@novadach.sk',
    phone: '+421 905 986 810',
    experience: 'Od r. 2013 cenová a technická příprava výběrových řízení, tvorba položkových rozpočtů a optimalizace stavebních nákladů.',
    department: 'Obchod & Příprava',
    highlightProjects: ['EUROVEA 2 Bratislava', 'Klingerka', 'The Mill', 'Metropolis', 'Sky Park Bratislava']
  },
  {
    name: 'Jozef Kopečný',
    role: 'Senior projektový manažer',
    email: 'kopecny@novadach.sk',
    phone: '+421 917 135 660',
    experience: 'V NOVADACH od r. 2009. Řídí rozsáhlé střešní a fasádní montáže průmyslových i komerčních center.',
    department: 'Výroba & Realizace',
    highlightProjects: ['EUROVEA II', 'AS Mlynské Nivy', 'BILLA Sereď', 'Brose Prievidza', 'Hoval Istebné', 'GLS Budča']
  },
  {
    name: 'Marián Babiš',
    role: 'Vedoucí servisního oddělení & QC',
    email: 'babis@novadach.sk',
    phone: '+421 905 489 425',
    experience: 'V týmu od r. 1998 (původně NOVAGLASS s.r.o.). Zajišťuje interní kontrolu kvality (Quality Control) a záruční i pozáruční servis staveb.',
    department: 'Technický dozor'
  },
  {
    name: 'Ing. Tomáš Jamrich',
    role: 'Stavební technik & příprava',
    email: 'tomas.jamrich@novadach.sk',
    phone: '+421 905 565 625',
    experience: 'Technický dozor a realizace klíčových zahraničních a tuzemských průmyslových megaprojektů.',
    department: 'Výroba & Realizace',
    highlightProjects: ['VOLVO CARS Košice (Valaliky Gigafactory)']
  }
];

export const companyData = {
  name: 'NOVADACH',
  legalName: 'NOVADACH CZ s.r.o.',
  foundingYear: 1993,
  tagline: 'Specialisté na střešní pláště, skládané fasády a speciální izolace',
  cz: {
    title: 'Centrála společnosti pro Českou republiku',
    companyName: 'NOVADACH CZ s.r.o.',
    address: 'Naskové 1189/1u, Košíře, 150 00 Praha 5',
    ico: '24531448',
    dic: 'CZ24531448',
    dataBox: '329vcpw',
    phone: '+420 730 827 769',
    phoneFormatted: '+420 730 827 769',
    email: 'obchod@novadach.cz',
    director: 'Bc. Adrián Babiš',
    directorRole: 'Výkonný ředitel a jednatel',
    note: 'Realizace projektů v celé ČR se zázemím skupiny působící od roku 1993.'
  },
  sk: {
    title: 'Centrála společnosti (Slovensko)',
    address: 'Stará Vajnorská 27, 831 04 Bratislava, Slovensko',
    phone: '+421 249 309 611',
    phoneCommercial: '+421 918 957 399',
    email: 'info@novadach.sk',
    web: 'https://www.novadach.sk',
    ico: '35846151',
    dic: '2020239177',
    icDph: 'SK2020239177'
  },
  certificates: [
    {
      code: 'ISO 9001:2015',
      name: 'Systém managementu kvality',
      desc: 'Záruka přísné kontroly technologických postupů a jakosti na každé stavbě.',
      image: '/images/certifikaty/ISO-9001.png'
    },
    {
      code: 'ISO 14001:2015',
      name: 'Environmentální management',
      desc: 'Ohleduplnost k životnímu prostředí, recyklace stavebních odpadů a zelené střechy.',
      image: '/images/certifikaty/ISO14001.png'
    },
    {
      code: 'ISO 45001:2018',
      name: 'Bezpečnost a ochrana zdraví (BOZP)',
      desc: 'Nejvyšší bezpečnostní standardy práce ve výškách a při montáži velkých konstrukcí.',
      image: '/images/certifikaty/ISO45001.png'
    }
  ],
  stats: [
    { value: '30+', label: 'Let zkušeností', sub: 'Na trhu od roku 1993' },
    { value: '250+', label: 'Dokončených velkých projektů', sub: 'V Česku a na Slovensku' },
    { value: '1 500 000+ m²', label: 'Realizovaných střech a fasád', sub: 'Průmyslových a komerčních' },
    { value: '3x ISO', label: 'Mezinárodní certifikace', sub: 'ISO 9001, 14001, 45001' }
  ]
};
