export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  materials: string[];
  referenceIds: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'stresne-plaste',
    slug: 'stresne-plaste',
    title: 'Střešní pláště a ploché střechy',
    shortDesc: 'Kompletní dodávka a montáž nových střešních plášťů, generální opravy, sanace a zateplení plochých střech na klíč.',
    iconName: 'ShieldAlert',
    longDesc: 'Zajišťujeme návrh a kompletní realizaci střešních plášťů pro průmyslové haly, logistická centra, administrativní budovy i bytové domy. Disponujeme rozsáhlými zkušenostmi s novostavbami i náročnými rekonstrukcemi za plného provozu objektu.',
    benefits: [
      'Komplexní dodávka od posouzení po finální zkoušku těsnosti',
      'Diagnostika a expertíza stávajících střech (jehlové a jiskrové zkoušky, termovize)',
      'Záruka až 10–15 let na vybrané certifikované hydroizolační systémy',
      'Certifikovaní pracovníci pro PVC-P, TPO i asfaltové pásy'
    ],
    features: [
      'Návrh a montáž nových nosných trapézových plechů',
      'Tepelněizolační souvrství (PIR, minerální vlna, EPS, XPS, spádové klíny)',
      'Hydroizolační systémy z fólií PVC-P a TPO/FPO',
      'Asfaltové modifikované pásy (SBS, APP)',
      'Vegetační, zelené a štěrkové střechy',
      'Certifikované záchytné systémy proti pádu osob ze střechy'
    ],
    materials: ['Trapézové plechy (ArcelorMittal, Ruukki, Voestalpine)', 'PIR desky (Bauder, Kingspan, Recticel)', 'Minerální vata (Rockwool, Isover)', 'Fólie (Sika, Bauder, FDT Rhenofol, Fatrafol)'],
    referenceIds: ['volkswagen-bratislava', 'eurovea-2', 'as-nivy', 'volvo-cars-valaliky', 'lp-kunice-praha']
  },
  {
    id: 'fasady',
    slug: 'fasady',
    title: 'Fasády a opláštění budov',
    shortDesc: 'Lehké skládané fasádní konstrukce, sendvičové izolační panely a kazetové systémy pro průmysl i moderní architekturu.',
    iconName: 'Building2',
    longDesc: 'Realizujeme moderní obvodové pláště pro průmyslové haly, distribuční centra, retail parky i administrativní budovy. Spojujeme vysokou energetickou efektivitu, protipožární bezpečnost a reprezentativní architektonický vzhled.',
    benefits: [
      'Rychlá a suchá montáž nezávislá na ročním období',
      'Vysoké hodnoty tepelného odporu a akustického útlumu',
      'Vysoká požární odolnost (až EI 180 s minerálním jádrem)',
      'Dlouhá životnost a minimální nároky na údržbu'
    ],
    features: [
      'Stěnové sendvičové panely s PIR nebo minerálním izolačním jádrem',
      'Systém zateplených C kazet a trapézových plechů',
      'Architektonické vertikální i horizontální členění fasád',
      'Dodávka a osazení fasádních prosklení, světlíků a vratových límců'
    ],
    materials: ['Sendvičové panely Kingspan, Brucha, Ruukki, Balex', 'Konstrukční C kazety', 'Fasádní lamely'],
    referenceIds: ['as-nivy', 'volvo-cars-valaliky', 'lp-kunice-praha', 'ikea-malacky', 'the-mill']
  },
  {
    id: 'izolacie',
    slug: 'izolacie',
    title: 'Hydroizolace a speciální izolace',
    shortDesc: 'Izolace spodní stavby, tlakové vody, radonu, dopravních tunelů, mostů, teras a náročných inženýrských děl.',
    iconName: 'Droplets',
    longDesc: 'Izolace představují srdce životnosti každé stavby. Specializujeme se na náročné hydroizolace proti zemní vlhkosti, prosakující i tlakové vodě, izolace mostovek a tunelů, kde je vyžadována stoprocentní spolehlivost po desítky let.',
    benefits: [
      'Zkušenosti z největších inženýrských staveb v ČR a SR (Tunel Blanka, Eurovea)',
      'Certifikované postupy pro agresivní spodní vody a chemické zatížení',
      'Ochrana proti pronikání radonu z podloží',
      'Vakuové zkoušky svarů a kontrolní těsnostní měření'
    ],
    features: [
      'Izolace základových desek a podzemních stěn',
      'Tunelové hydroizolace a těsnění spár',
      'Izolace mostních objektů a viaduktů',
      'Hydroizolace bazénů, nádrží a jímek',
      'Izolace balkonů, lodžií a pochozích teras'
    ],
    materials: ['PVC-P hydroizolační fólie s signální vrstvou', 'Bentonitové rohože', 'Injektážní pryskyřice', 'Těsnicí pásy do pracovních spár'],
    referenceIds: ['tunel-blanka', 'eurovea-2', 'as-nivy']
  },
  {
    id: 'fasadne-obklady',
    slug: 'fasadne-obklady',
    title: 'Architektonické fasádní obklady',
    shortDesc: 'Designové provětrávané fasády z hliníkových kompozitů (BOND), dřevoplastu i profilovaných plechů.',
    iconName: 'Layers',
    longDesc: 'Dáváme budovám nezaměnitelnou architektonickou tvář. Provětrávané fasádní systémy zajišťují dokonalé mikroklima objektu, odvod vlhkosti a špičkový moderní vzhled odpovídající nejvyšším standardům prémiových projektů.',
    benefits: [
      'Reprezentativní a moderní vizuální dojem stavby',
      'Provětrávaná mezera zabraňuje přehřívání v létě a promrzání v zimě',
      'Skrytý systém kotvení pro čisté architektonické linie',
      'Široká škála barev, dekorů a metalických odstínů'
    ],
    features: [
      'Hliníkové kompozitní panely (BOND, Alucobond, Reynobond)',
      'Fasádní maloformátové i velkoformátové kazety',
      'Dřevěné a kompozitní WPC obklady',
      'Hliníkové lamely a designové žaluzie'
    ],
    materials: ['Hliníkové kompozitní desky BOND', 'Vysokotlaké lamináty HPL', 'Konstrukční hliníkový rošt'],
    referenceIds: ['unipharma-bojnice', 'rd-marianka', 'btc-pradiaren']
  },
  {
    id: 'ocelove-konstrukcie',
    slug: 'ocelove-konstrukcie',
    title: 'Ocelové a pomocné konstrukce',
    shortDesc: 'Nosné a pomocné ocelové konstrukce pro montáž opláštění objektů, atik, výměn a technologických nástaveb.',
    iconName: 'Hammer',
    longDesc: 'Nedílnou součástí kvalitního opláštění je spolehlivá ocelová podkonstrukce. Vyrábíme a montujeme pomocné ocelové rámy, paždíky, výměny pro světlíky a vzduchotechniku, střešní lávky i atikové konstrukce.',
    benefits: [
      'Vlastní projekční příprava a statický výpočet',
      'Povrchová úprava žárovým zinkováním nebo vysoce odolnými nátěry',
      'Rychlá montáž navazující na harmonogram hlavních stavebních prací'
    ],
    features: [
      'Podpůrné rošty pro stěnové panely',
      'Střešní obruby a výměny pro světlíky a VZT jednotky',
      'Ocelové atiky, táhla a vyztužení',
      'Obslužné lávky a schodiště pro přístup na střechu'
    ],
    materials: ['Válcované ocelové profily HEA, HEB, IPE', 'Tenkostěnné profily Z a C', 'Spojovací materiál třídy 8.8 / nerez'],
    referenceIds: ['volkswagen-bratislava', 'valaliky-volvo', 'the-mill']
  },
  {
    id: 'klampiarske-konstrukcie',
    slug: 'klampiarske-konstrukcie',
    title: 'Klempířské konstrukce a výroba',
    shortDesc: 'Zakázková dílenská výroba a montáž klempířských prvků z poplastovaného plechu, hliníku, titanzinku i mědi.',
    iconName: 'Wrench',
    longDesc: 'Disponujeme moderním strojním vybavením pro přesné ohýbání a tvarování plechů. Každý detail atiky, lemování, okapového systému či dilatace je vyroben s milimetrovou přesností, což zaručuje absolutní nepropustnost v kritických bodech střechy.',
    benefits: [
      'Vlastní klempířská dílna a rychlá zakázková výroba',
      'Zpracování prvků až do délky 4–6 metrů bez zbytečných spojů',
      'Odborně vyřešené dilatační pohyby plechů zabraňující zvlnění',
      'Široký sortiment materiálů a barevných odstínů RAL'
    ],
    features: [
      'Poplastované plechy (lakoplast, Viplanyl, Alkorplan)',
      'Hliníkové eloxované a lakované profily',
      'Titanzinkové plechy (Rheinzink, NedZink)',
      'Měděné klempířské prvky pro historické a reprezentativní objekty',
      'Oplechování atik, říms, parapetů, závětrných lišt a okapů'
    ],
    materials: ['Poplastovaný plech', 'Titanzinek', 'Lakovaný hliník', 'Měď'],
    referenceIds: ['eurovea-2', 'btc-pradiaren', 'as-nivy', 'unipharma-bojnice']
  }
];
