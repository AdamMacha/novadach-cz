export interface ReferenceProject {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  country: 'CZ' | 'SK';
  year: string;
  category: 'Průmysl & Logistika' | 'Obchod & Retail' | 'Dopravní & Inženýrské stavby' | 'Rezidence & Administrativa';
  image: string;
  badge?: string;
  featured?: boolean;
  services: string[];
  description: string;
  details?: {
    scope?: string;
    area?: string;
    technologies?: string[];
  };
}

export const referencesData: ReferenceProject[] = [
  {
    id: 'tunel-blanka',
    title: 'Tunel Blanka, Praha',
    subtitle: 'Specializované hydroizolace dopravní stavby',
    location: 'Praha, Česká republika',
    country: 'CZ',
    year: '2014 – 2015',
    category: 'Dopravní & Inženýrské stavby',
    image: '/images/referencie/blanka_razba12-1.jpg',
    badge: '🇨🇿 Klíčová reference v ČR',
    featured: true,
    services: [
      'Speciální hydroizolace podzemních a dopravních konstrukcí',
      'Těsnění dilatačních a pracovních spár',
      'Izolační souvrství odolávající agresivním podzemním vodám'
    ],
    description: 'Jedna z nejvýznamnějších infrastrukturních staveb v ČR. Realizace vysoce náročných hydroizolací podzemních tunelových úseků městského okruhu v Praze.',
    details: {
      scope: 'Komplexní hydroizolace ražených a hloubených úseků',
      technologies: ['Hydroizolační fóliové systémy', 'Bentonitové a tlakové izolace', 'Injektážní systémy']
    }
  },
  {
    id: 'volkswagen-bratislava',
    title: 'VOLKSWAGEN Bratislava (Hala H1 + M6)',
    subtitle: 'Dodávka střešních plášťů a bezpečnostních systémů',
    location: 'Bratislava, Slovensko',
    country: 'SK',
    year: '2022 – 2023',
    category: 'Průmysl & Logistika',
    image: '/images/referencie/VW-H1_1.jpg',
    badge: 'Automobilový gigant',
    featured: true,
    services: [
      'Dodávka a montáž střešních trapézových plechů',
      'Komplexní izolace střešních plášťů',
      'Dodávka a montáž certifikovaného záchytného systému proti pádu osob ze střechy'
    ],
    description: 'Výstavba a modernizace výrobních hal pro automobilový koncern Volkswagen. Práce za přísných bezpečnostních a technologických podmínek automobilového průmyslu.',
    details: {
      scope: 'Opláštění a izolace plochých střech výrobních hal H1 a M6',
      technologies: ['Nosné trapézové profily', 'Minerální vlna + PIR', 'PVC-P hydroizolační fólie']
    }
  },
  {
    id: 'eurovea-2',
    title: 'EUROVEA 2, Bratislava',
    subtitle: 'První slovenský mrakodrap a nákupní centrum',
    location: 'Bratislava, Slovensko',
    country: 'SK',
    year: '2021 – 2023',
    category: 'Rezidence & Administrativa',
    image: '/images/referencie/Eurovea-1.jpg',
    badge: 'Ikonický mrakodrap',
    featured: true,
    services: [
      'Dodávka a montáž střešních plášťů',
      'Dodávka a montáž izolace spodní stavby proti tlakové vodě',
      'Kompletní dodávka a montáž klempířských konstrukcí'
    ],
    description: 'Prestižní polyfunkční nábřežní komplex včetně prvního mrakodrapu na Slovensku Eurovea Tower (168 m). Vysoce náročná realizace izolací spodní stavby a střešních souvrství.',
    details: {
      scope: 'Spodní stavba, terasy, střechy nákupní galerie a věže',
      technologies: ['Vysokozátěžové hydroizolace', 'Pochůzné terasové systémy', 'Zakázková klempířská výroba']
    }
  },
  {
    id: 'as-nivy',
    title: 'Autobusové nádraží Mlynské Nivy',
    subtitle: 'Podzemní autobusové nádraží se zelenou střechou',
    location: 'Bratislava, Slovensko',
    country: 'SK',
    year: '2020 – 2023',
    category: 'Dopravní & Inženýrské stavby',
    image: '/images/referencie/AS-NIVY_3.jpg',
    badge: 'Megaprojekt dopravy',
    featured: true,
    services: [
      'Dodávka a montáž střešních plášťů zelené střechy',
      'Opláštění fasád sendvičovými panely',
      'Dodávka a montáž izolace podlah a spodní stavby',
      'Klempířské konstrukce a odvodnění'
    ],
    description: 'Unikátní projekt spojující mezinárodní autobusové nádraží, moderní nákupní centrum a rozsáhlou zelenou veřejnou střechu s běžeckou dráhou a parkem.',
    details: {
      scope: 'Střešní souvrství vegetační střechy, fasádní pláště a podlahy',
      technologies: ['Vegetační souvrství', 'PIR sendvičové panely', 'Kompozitní atiky']
    }
  },
  {
    id: 'volvo-cars-valaliky',
    title: 'VOLVO CARS Valaliky (Košice)',
    subtitle: 'Nová gigafactory elektromobilů Volvo',
    location: 'Valaliky, Slovensko',
    country: 'SK',
    year: '2023 – 2024',
    category: 'Průmysl & Logistika',
    image: '/images/referencie/Valaliky_2023_10_9.jpg',
    badge: 'Nejnovější Gigafactory',
    featured: true,
    services: [
      'Dodávka a montáž průmyslových střešních plášťů',
      'Montáž velkoformátových trapézových plechů',
      'Opláštění a energeticky úsporné izolace'
    ],
    description: 'Výstavba jednoho z nejmodernějších výrobních závodů na elektromobily v Evropě pro prémiovou automobilku Volvo Cars.',
    details: {
      scope: 'Průmyslové haly hlavního výrobního areálu',
      technologies: ['Velkorozponové trapézové plechy', 'Protipožární izolace', 'Střešní světlíky']
    }
  },
  {
    id: 'lp-kunice-praha',
    title: 'Logistický park KUNICE u Prahy',
    subtitle: 'Skladové a distribuční centrum D1',
    location: 'Kunice u Prahy, Česká republika',
    country: 'CZ',
    year: 'Česká republika',
    category: 'Průmysl & Logistika',
    image: '/images/referencie/20240722_073656-scaled.jpg',
    badge: '🇨🇿 Reference v ČR',
    featured: true,
    services: [
      'Dodávka a montáž lehkého střešního pláště',
      'Fasádní opláštění ze sendvičových panelů',
      'Klempířské zaplechování haly a vratových otvorů'
    ],
    description: 'Výstavba moderní logistické haly u dálnice D1 nedaleko Prahy s vysokými nároky na tepelnou stabilitu a protipožární odolnost.',
    details: {
      scope: 'Kompletní obvodový a střešní plášť logistického centra'
    }
  },
  {
    id: 'lp-zdiby',
    title: 'Logistický areál ZDIBY',
    subtitle: 'Distribuční centrum u dálnice D8',
    location: 'Zdiby u Prahy, Česká republika',
    country: 'CZ',
    year: 'Česká republika',
    category: 'Průmysl & Logistika',
    image: '/images/referencie/THE-MILL_1.jpg',
    badge: '🇨🇿 Reference v ČR',
    featured: false,
    services: [
      'Izolace plochých střešních plášťů',
      'Opláštění stěnovými sendvičovými panely',
      'Klempířské konstrukce'
    ],
    description: 'Realizace střešních a fasádních systémů pro distribuční a logistické zázemí na severním okraji Prahy u dálnice D8.',
    details: {
      scope: 'Střešní plášť a fasádní prvky'
    }
  },
  {
    id: 'oc-cerny-most-praha',
    title: 'Obchodní centrum ČERNÝ MOST Praha',
    subtitle: 'Rozsáhlé nákupní a zábavní centrum',
    location: 'Praha, Česká republika',
    country: 'CZ',
    year: 'Česká republika',
    category: 'Obchod & Retail',
    image: '/images/referencie/PHOTO-2024-03-04-10-35-09.jpg',
    badge: '🇨🇿 Reference v ČR',
    featured: true,
    services: [
      'Střešní izolace a rekonstrukce částí pláště',
      'Hydroizolace a klempířské detaily atik',
      'Opravy a zateplení střešních konstrukcí'
    ],
    description: 'Odborné práce na střešních konstrukcích a hydroizolacích jednoho z nejfrekventovanějších nákupních center v České republice.',
    details: {
      scope: 'Hydroizolace a klempířské práce na střeše nákupního centra'
    }
  },
  {
    id: 'oc-valasske-mezirici',
    title: 'Obchodní centrum Valašské Meziříčí',
    subtitle: 'Retail park a obchodní zóna',
    location: 'Valašské Meziříčí, Česká republika',
    country: 'CZ',
    year: 'Česká republika',
    category: 'Obchod & Retail',
    image: '/images/referencie/BCT-PRADIAREN_1.jpg',
    badge: '🇨🇿 Reference v ČR',
    featured: false,
    services: [
      'Dodávka a montáž střešních trapézů a izolací',
      'Fasádní sendvičové panely',
      'Oplechování atik a svody'
    ],
    description: 'Komplexní dodávka obvodového pláště a střechy pro obchodní centrum na Moravě.',
    details: {
      scope: 'Kompletní střešní a fasádní plášť'
    }
  },
  {
    id: 'btc-pradiaren',
    title: 'BTC Pradiareň 1900, Bratislava',
    subtitle: 'Památkově chráněná konverze industriální architektury',
    location: 'Bratislava, Slovensko',
    country: 'SK',
    year: '2018 – 2021',
    category: 'Rezidence & Administrativa',
    image: '/images/referencie/BTC-Pradiaren-Bratislava-2019-2021.jpg',
    badge: 'Oceněná architektura',
    featured: true,
    services: [
      'Dodávka a montáž atypických střešních plášťů',
      'Klempířské konstrukce a historizující detaily',
      'Izolace střešních světlíků a teras'
    ],
    description: 'Citlivá obnova národní kulturní památky z roku 1900. Spojení historické industriální architektury s nejmodernějšími nízkoenergetickými standardy (certifikace BREEAM Outstanding).',
    details: {
      scope: 'Atypické střešní konstrukce a historizující klempířské prvky'
    }
  },
  {
    id: 'the-mill',
    title: 'Administrativní komplex THE MILL',
    subtitle: 'Nová dominantní budova Mlynské Nivy',
    location: 'Bratislava, Slovensko',
    country: 'SK',
    year: '2022 – 2023',
    category: 'Rezidence & Administrativa',
    image: '/images/referencie/THE-MILL_2.jpg',
    badge: 'Moderní administrativa',
    featured: false,
    services: [
      'Dodávka a montáž střešních plášťů',
      'Dodávka a montáž klempířských konstrukcí',
      'Izolace teras a střešních technických nástaveb'
    ],
    description: 'Výstavba prémiového kancelářského objektu s certifikací LEED Gold.',
    details: {
      scope: 'Střešní pláště, technologické podesty a atiky'
    }
  },
  {
    id: 'ikea-malacky',
    title: 'IKEA Malacky (Výrobní závod)',
    subtitle: 'Výrobní a logistický areál nábytkářského koncernu',
    location: 'Malacky, Slovensko',
    country: 'SK',
    year: '2016 – 2017',
    category: 'Průmysl & Logistika',
    image: '/images/referencie/IKEA-MALACKY-r.2016.jpg',
    badge: 'Globální brand',
    featured: false,
    services: [
      'Dodávka střešních trapézových plechů',
      'Izolace střešního pláště rozsáhlých výrobních hal',
      'Fasádní sendvičové opláštění'
    ],
    description: 'Výstavba výrobního a zpracovatelského závodu pro koncern IKEA Industry.',
    details: {
      scope: 'Rozsáhlé střešní a fasádní souvrství'
    }
  },
  {
    id: 'unipharma-bojnice',
    title: 'UNIPHARMA Bojnice',
    subtitle: 'Farmaceutické distribuční a logistické centrum',
    location: 'Bojnice, Slovensko',
    country: 'SK',
    year: '2015 – 2016',
    category: 'Průmysl & Logistika',
    image: '/images/referencie/UNIPHARMA-Bojnice-2015-2016.jpg',
    badge: 'Farmacie & Přísné klima',
    featured: false,
    services: [
      'Dodávka a montáž střešních trapézových plechů',
      'Izolace střešního pláště s přísnou regulací teplot',
      'Obklad atik moderním kompozitním systémem BOND'
    ],
    description: 'Farmaceutické distribuční centrum vyžadující absolutní těsnost a vysokou tepelnou stabilitu pro skladování léčiv.',
    details: {
      scope: 'Střecha a designové fasádní atiky BOND'
    }
  },
  {
    id: 'rd-marianka',
    title: 'Rezidenční vila Marianka',
    subtitle: 'Luxusní moderní rezidence',
    location: 'Marianka, Slovensko',
    country: 'SK',
    year: '2023',
    category: 'Rezidence & Administrativa',
    image: '/images/referencie/RD-MARIANKA-2.jpg',
    badge: 'Prémiová architektura',
    featured: false,
    services: [
      'Komplexní izolace plochých střech a teras',
      'Dodávka kompozitních fasádních obkladů',
      'Precizní klempířské detaily skrytých svodů'
    ],
    description: 'Ukázka prémiové individuální architektury s plochou střechou, pochozími terasami a designovými obklady.',
    details: {
      scope: 'Ploché střechy, terasy a fasádní obklady'
    }
  }
];
