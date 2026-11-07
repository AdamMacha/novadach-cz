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
  seoKeywords: string[];
  referenceIds: string[];
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface TechnicalCluster {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'stresne-plaste',
    slug: 'stresne-plaste',
    title: 'Střešní pláště, ploché a fóliové střechy',
    shortDesc: 'Kompletní montáž střešních plášťů, ploché a fóliové střechy (mPVC, TPO, Fatrafol), asfaltové pásy SBS/APP, parozábrana, montáž trapézových plechů a zateplení střech (PIR, minerální vata MW, EPS, XPS).',
    iconName: 'ShieldAlert',
    longDesc: 'Zajišťujeme kompletní návrh, dodávku a montáž střešních plášťů pro průmyslové haly, logistická centra, obchodní centra, administrativní budovy i rezidenční objekty. Realizujeme jednoplášťové i dvouplášťové ploché střechy, fóliové střechy z měkčeného PVC (mPVC, Fatrafol, Sika, Bauder) a polyolefinových fólií TPO/FPO, střechy z modifikovaných asfaltových pásů SBS a APP (včetně samolepicích asfaltových pásů a parotěsných vrstev), montáž nosných trapézových plechů i kompletní tepelné izolace a zateplení střech (minerální vlna MW / kamenná vata, PIR desky, pěnový polystyren EPS a extrudovaný polystyren XPS).',
    benefits: [
      'Komplexní montáž střešních plášťů od nosného trapézového plechu po finální hydroizolaci',
      'Diagnostika a sanace plochých střech (jiskrové a vakuové zkoušky, sondy, termovize)',
      'Certifikovaná pokládka hydroizolačních fólií mPVC (Fatrafol), TPO/FPO a asfaltových pásů SBS/APP',
      'Vysoká energetická úspora díky zateplení střech materiály PIR, minerální vata (MW / kamenná vata), EPS a XPS'
    ],
    features: [
      'Dodávka a montáž trapézových plechů (nosné střešní profily TR 85–TR 200, akustické perforované plechy)',
      'Parotěs a parozábrana (PE fólie, hliníkové parozábrany, samolepicí asfaltový pás na trapézový plech)',
      'Tepelné izolace a zateplení střech: minerální vata / minerální vlna (MW), kamenná vata, PIR panely, polystyren EPS, XPS a spádové klíny',
      'Fóliové střechy a fóliová izolace z mPVC (PVC-P, Fatrafol) a ekologických fólií TPO / FPO',
      'Modifikované asfaltové pásy SBS a APP (natavované i samolepicí asfaltové pásy, vícevrstvé systémy)',
      'Zelené střechy (extenzivní a intenzivní vegetační souvrství), přitížené střechy a izolace balkonů a teras'
    ],
    materials: [
      'Trapézové plechy (ArcelorMittal, Ruukki, Voestalpine, Kovové profily)',
      'Fóliová izolace mPVC & TPO (Fatrafol, Sika Sarnafil, Bauder, FDT Rhenofol)',
      'Asfaltové pásy SBS / APP & samolepicí asfaltové pásy (Bauder, Icopal, Vedag, Soprema)',
      'Tepelné izolace: PIR (Kingspan, Bauder, Recticel), minerální a kamenná vata MW (Rockwool, Isover), polystyren EPS a XPS'
    ],
    seoKeywords: [
      'ploché střechy', 'fóliové střechy', 'montáž střešních plášťů', 'montáž trapézových plechů', 'trapézové plechy',
      'fóliová izolace', 'PVC fólie', 'mPVC', 'TPO fólie', 'Fatrafol', 'asfaltové pásy', 'SBS', 'APP', 'samolepicí asfaltový pás',
      'parotěs', 'parozábrana', 'tepelné izolace', 'zateplení střech', 'minerální vata', 'minerální vlna', 'MW', 'kamenná vata',
      'PIR', 'polystyren', 'EPS', 'XPS', 'zelené střechy', 'izolace balkonů'
    ],
    referenceIds: ['volkswagen-bratislava', 'eurovea-2', 'as-nivy', 'volvo-cars-valaliky', 'lp-kunice-praha']
  },
  {
    id: 'fasady',
    slug: 'fasady',
    title: 'Fasády, obvodové pláště a sendvičové panely',
    shortDesc: 'Kompletní obvodový plášť a opláštění hal: fasádní panely, sendvičové panely (stěnový a střešní panel Kingspan, Ruukki, Brucha) s jádrem PIR nebo minerální vata (MW) a skládané fasády.',
    iconName: 'Building2',
    longDesc: 'Realizujeme moderní obvodový plášť a kompletní opláštění budov (opláštenie průmyslových hal, logistických parků, výrobních závodů, obchodních center a administrativních budov). Provádíme odbornou montáž panelů všech typů: stěnový panel (horizontální i vertikální kladení), střešní panel a fasádní panely se skrytým i přiznaným kotvením. Pracujeme s certifikovanými sendvičovými panely Kingspan, Ruukki, Brucha a Balex s izolačním jádrem z tuhé PIR pěny nebo nehořlavé minerální vlny (MW / kamenná vata), stejně jako se skládanými kazetovými fasádami.',
    benefits: [
      'Rychlá celoroční montáž panelů a kompletní opláštění průmyslových objektů',
      'Špičkové tepelněizolační parametry (PIR jádro) a požární odolnost až EI 180 (minerální vata MW)',
      'Certifikovaná montáž systémů Kingspan, Brucha, Ruukki a Balex',
      'Kompletní systémové detaily, lemování, klempířské prvky a napojení na střešní plášť'
    ],
    features: [
      'Montáž panelů pro obvodový plášť: sendvičový panel stěnový i střešní panel',
      'Fasádní panely Kingspan s izolačním jádrem PIR / IPN (QuadCore) a minerální vlnou (MW)',
      'Skládané obvodové pláště z konstrukčních C kazet, minerální vaty a trapézových plechů',
      'Požární stěny a příčky ze sendvičových panelů s jádrem z kamenné vaty',
      'Montáž ocelových výměn pro okna, fasádní prosklení, sekční vrata a dokovací límce'
    ],
    materials: [
      'Sendvičové panely Kingspan (stěnové a střešní panely PIR / QuadCore / MW)',
      'Sendvičové a fasádní panely Brucha, Ruukki, Balex Metal, Trimo',
      'Skládané fasádní C-kazety, minerální vlna MW a fasádní trapézové plechy'
    ],
    seoKeywords: [
      'obvodový plášť', 'opláštění', 'opláštenie', 'fasádní panely', 'sendvičový panel',
      'stěnový panel', 'střešní panel', 'montáž panelů', 'Kingspan', 'PIR panely', 'minerální vata MW'
    ],
    referenceIds: ['as-nivy', 'volvo-cars-valaliky', 'lp-kunice-praha', 'ikea-malacky', 'the-mill']
  },
  {
    id: 'izolacie',
    slug: 'izolacie',
    title: 'Hydroizolace spodní stavby, tlaková voda, radon a tunelové izolace',
    shortDesc: 'Speciální hydroizolace základů, izolace proti tlakové vodě a radonu, systém Dualproof, HDPE (PE-HD) a mPVC fólie, tunelové izolace primárního ostění a izolace průmyslových objektů.',
    iconName: 'Droplets',
    longDesc: 'Specializujeme se na vysoce náročné hydroizolace spodní stavby, izolace základů, podzemních garáží, kolektorů a inženýrských děl. Provádíme certifikované izolace proti tlakové vodě, agresivní podzemní vodě, zemní vlhkosti a izolace proti radonu a metanu. Jsme specialisté na tunelové izolace (silniční, železniční a metrové tunely – např. Tunel Blanka v Praze), kde realizujeme izolace primárního ostění (deštníkové a plnoplošné vakuově testované systémy). Aplikujeme moderní spřažené membrány Dualproof s mechanickou vazbou do čerstvého železobetonu, zemní fólie mPVC (Fatrafol), vysokohustotní polyetylenové fólie HDPE / PE-HD i modifikované asfaltové pásy SBS.',
    benefits: [
      'Ověřené reference z největších podzemních a dopravních staveb v ČR a SR (Tunel Blanka Praha, Eurovea 2, Nivy)',
      'Stoprocentní ochrana spodní stavby: izolace proti tlakové vodě, radonu a ropným látkám',
      'Aplikace pre-aplikovaných systémů Dualproof přímo pod železobetonové základové desky a stěny',
      'Dvoustopé horkovzdušné svary s kontrolním kanálkem pro tlakové, jiskrové a vakuové zkoušky těsnosti'
    ],
    features: [
      'Izolace základů, základových desek, pilotových hlav a podzemních stěn (bílé a černé vany)',
      'Izolace proti tlakové vodě a izolace proti radonu (radonová bariéra s protiradonovým posudkem)',
      'Systém Dualproof (kompozitní hydroizolační membrána pevně spřažená s betonem proti podtékání vody)',
      'Tunelové izolace: izolace primárního ostění ražených (NRTM) i hloubených tunelů, osazování spárových pásů',
      'Fóliová izolace z mPVC (PVC-P, Fatrafol zemní fólie), HDPE / PE-HD fólie a TPO membrány',
      'Izolace průmyslových objektů, záchytných jímek, nádrží, mostovek, pochozích teras a izolace balkonů'
    ],
    materials: [
      'Speciální membrány Dualproof (pre-applied systém do betonu)',
      'Zemní a tunelové PVC-P / mPVC fólie (Fatrafol, Sikaplan, Bauder)',
      'Vysokohustotní polyetylenové fólie HDPE / PE-HD a TPO/FPO',
      'Modifikované asfaltové pásy SBS proti radonu a tlakové vodě, bentonitové rohože, těsnicí pásy a injektáže'
    ],
    seoKeywords: [
      'hydroizolace', 'tlaková voda', 'izolace proti tlakové vodě', 'izolace proti radonu',
      'Dualproof', 'izolace základů', 'tunelové izolace', 'tunel', 'izolace primárního ostění',
      'HDPE', 'PE-HD', 'PVC', 'mPVC', 'Fatrafol', 'fóliová izolace', 'izolace průmyslových objektů', 'izolace balkonů'
    ],
    referenceIds: ['tunel-blanka', 'eurovea-2', 'as-nivy']
  },
  {
    id: 'fasadne-obklady',
    slug: 'fasadne-obklady',
    title: 'Architektonické fasádní obklady a provětrávané fasády',
    shortDesc: 'Designové provětrávané fasády z hliníkových kompozitních fasádních panelů (BOND), kazet, HPL desek a profilovaných plechů se zateplením minerální vatou (MW).',
    iconName: 'Layers',
    longDesc: 'Dáváme budovám reprezentativní architektonickou tvář. Navrhujeme a montujeme provětrávané fasády a architektonické obvodové pláště s tepelnou izolací z hydrofobizované minerální vlny (MW / kamenná vata). Specializujeme se na kompozitní fasádní panely typu BOND (Alucobond, Reynobond, Larson), velkoformátové i maloformátové hliníkové kazety, HPL kompaktní desky a designové lamelové systémy.',
    benefits: [
      'Reprezentativní architektonický vzhled pro administrativní budovy, showroomy a vstupy hal',
      'Provětrávaná vzduchová mezera s tepelnou izolací z minerální vaty (MW) zaručuje ideální difuzi a klima',
      'Vlastní CNC frézování a ohýbání kompozitních kazet BOND na míru projektu',
      'Dlouhá životnost, barevná stálost a nulové nároky na údržbu'
    ],
    features: [
      'Kompozitní hliníkové fasádní panely a kazety (BOND, Alucobond, Reynobond)',
      'Kompletní hliníkové a ocelové podkonstrukce včetně tepelné izolace z minerální vlny (MW)',
      'Reprezentativní obklady atik, sloupů, vstupních portálů a fasádních říms',
      'Designové slunolamy, hliníkové lamely a provětrávané obklady'
    ],
    materials: [
      'Kompozitní panely BOND (Alucobond, Reynobond, Etalbond)',
      'Tepelná izolace fasád: minerální vata / kamenná vata MW s černou sklotextilií',
      'Certifikovaný hliníkový nosný rošt a nerezové kotvení'
    ],
    seoKeywords: [
      'fasádní panely', 'BOND obklady', 'provětrávané fasády', 'obvodový plášť', 'minerální vata', 'minerální vlna MW'
    ],
    referenceIds: ['unipharma-bojnice', 'rd-marianka', 'btc-pradiaren']
  },
  {
    id: 'ocelove-konstrukcie',
    slug: 'ocelove-konstrukcie',
    title: 'Ocelové konstrukce, montáž ocelových výměn a tenkostěnné výměny',
    shortDesc: 'Výroba a montáž ocelových konstrukcí, montáž ocelových výměn pro světlíky a VZT, tenkostěnné výměny (Z, C, U profily), sekundární rošty pro fasádní panely a trapézové plechy.',
    iconName: 'Hammer',
    longDesc: 'Kvalitní střešní a obvodový plášť vyžaduje staticky spolehlivou podkonstrukci. Zajišťujeme výrobu a montáž ocelových konstrukcí, sekundárních fasádních roštů a střešních nadstaveb. Specializujeme se na montáž ocelových výměn (pod střešní světlíky, RWA klapky, vzduchotechnické jednotky a prostupy střechou) a na tenkostěnné výměny a paždíky z pozinkovaných profilů Z, C a U pro kotvení trapézových plechů, stěnových a střešních sendvičových panelů.',
    benefits: [
      'Kompletní dodávka: ocelové konstrukce, tenkostěnné výměny i finální opláštění od jednoho dodavatele',
      'Rychlá montáž ocelových výměn přímo při pokládce trapézových plechů bez prostojů na stavbě',
      'Vlastní dílenská příprava, žárové zinkování a certifikované svářečské postupy',
      'Statické posouzení a návrh optimálních profilů pro úsporu hmotnosti oceli'
    ],
    features: [
      'Montáž ocelových výměn pro střešní světlíky, kouřové klapky, VZT strojovny a prostupy ve střešním plášti',
      'Tenkostěnné výměny, vaznice a paždíky z válcovaných pozinkovaných profilů Z, C, U a L',
      'Sekundární ocelové konstrukce a nosné rošty pro stěnové sendvičové panely a fasádní panely',
      'Ocelové konstrukce atik, markýz, technologických plošin, revizních lávek a žebříků'
    ],
    materials: [
      'Tenkostěnné pozinkované profily a výměny (Z, C, U, Sigma profily)',
      'Válcované ocelové konstrukce a profily (HEA, HEB, IPE, UPN, jakly)',
      'Žárově zinkované ocelové výměny a certifikovaný kotvicí materiál'
    ],
    seoKeywords: [
      'ocelové konstrukce', 'montáž ocelových výměn', 'tenkostěnné výměny', 'ocelové výměny',
      'podkonstrukce pro sendvičové panely', 'paždíky a vaznice'
    ],
    referenceIds: ['volkswagen-bratislava', 'volvo-cars-valaliky', 'the-mill']
  },
  {
    id: 'klampiarske-konstrukcie',
    slug: 'klampiarske-konstrukcie',
    title: 'Klempířské prvky a vlastní zakázková klempířská výroba',
    shortDesc: 'Vlastní CNC výroba a odborná montáž klempířských prvků: oplechování atik, říms, parapetů, lemování sendvičových panelů a prvky z poplastovaného plechu (PVC/TPO), hliníku, titanzinku a mědi.',
    iconName: 'Wrench',
    longDesc: 'Disponujeme vlastní moderně vybavenou klempířskou dílnou s CNC ohýbačkami a dělicími linkami. Vyrábíme a montujeme veškeré klempířské prvky nezbytné pro stoprocentní funkčnost a estetiku plochých střech i fasád. Zhotovujeme lemování pro fóliové střechy z poplastovaných plechů (Viplanyl, Fatrafol, TPO plechy), systémové klempířské prvky pro sendvičové panely a fasádní panely v barvách RAL, oplechování atik, požárních stěn, dilatačních spár i okapové systémy.',
    benefits: [
      'Vlastní CNC výroba klempířských prvků až do délky 6 metrů – nulové čekací lhůty na stavbě',
      'Přesné systémové lemování pro sendvičové panely (Kingspan aj.), trapézové plechy a fóliové střechy',
      'Poplastované klempířské prvky přímo svařitelné s hydroizolační fólií mPVC (Fatrafol) a TPO',
      'Zpracování lakovaného ocelového plechu, hliníku, titanzinku (Rheinzink), mědi a nerezu'
    ],
    features: [
      'Klempířské prvky z poplastovaného plechu (mPVC Viplanyl / Fatrafol, TPO poplastovaný plech) pro fóliové střechy',
      'Systémové klempířské lemování pro stěnové a střešní sendvičové panely (rohy, špalety, okapy, hřebeny)',
      'Velkoformátové oplechování atik, nika, dilatačních spár a parapetů',
      'Klempířské prvky z lakovaného hliníku, pozinku v odstínech RAL, titanzinku a mědi',
      'Kompletní odvodňovací systémy, žlaby, svody a pojistné přepady plochých střech'
    ],
    materials: [
      'Poplastované plechy mPVC a TPO (Fatrafol, Viplanyl, Sikaplan, Bauder)',
      'Lakované ocelové a hliníkové plechy v odstínech RAL (pro sendvičové panely)',
      'Titanzinek (Rheinzink, NedZink), měď a nerezový plech'
    ],
    seoKeywords: [
      'klempířské prvky', 'klempířské konstrukce', 'oplechování atiky', 'poplastovaný plech',
      'Fatrafol plech', 'lemování sendvičových panelů'
    ],
    referenceIds: ['eurovea-2', 'btc-pradiaren', 'as-nivy', 'unipharma-bojnice']
  }
];

export const technicalClusters: TechnicalCluster[] = [
  {
    title: 'Hydroizolační fólie a asfaltové pásy',
    subtitle: 'Ploché střechy, fóliové střechy a parozábrany',
    description: 'Certifikovaná pokládka střešních a zemních hydroizolačních systémů pro průmyslové haly, logistické areály, obchodní centra i rezidence.',
    tags: [
      'PVC fólie', 'mPVC', 'Fóliová izolace', 'Fóliové střechy', 'Fatrafol', 'TPO / FPO',
      'Asfaltové pásy', 'SBS modifikované pásy', 'APP pásy', 'Samolepicí asfaltový pás',
      'Parotěs', 'Parozábrana', 'Ploché střechy', 'Zelené střechy', 'Izolace balkonů'
    ]
  },
  {
    title: 'Tepelné izolace a zateplení střech',
    subtitle: 'Energeticky úsporná souvrství střešních plášťů',
    description: 'Komplexní návrh a realizace tepelněizolačních a spádových vrstev plochých střech a obvodových plášťů s důrazem na požární odolnost a součinitel prostupu tepla.',
    tags: [
      'Tepelné izolace', 'Zateplení střech', 'Minerální vata', 'Minerální vlna (MW)',
      'Kamenná vata', 'PIR desky', 'Polystyren EPS', 'Extrudovaný polystyren XPS',
      'Spádové klíny', 'Izolace průmyslových objektů'
    ]
  },
  {
    title: 'Speciální hydroizolace, tunely a spodní stavba',
    subtitle: 'Tlaková voda, radon, systém Dualproof a HDPE',
    description: 'Vysoce odolné izolační systémy pro základy budov, bílé a černé vany, podzemní garáže, ražené i hloubené tunely a inženýrská díla.',
    tags: [
      'Hydroizolace', 'Tlaková voda', 'Izolace proti tlakové vodě', 'Izolace proti radonu',
      'Dualproof', 'Izolace základů', 'Tunelové izolace', 'Tunel',
      'Izolace primárního ostění', 'HDPE fólie', 'PE-HD'
    ]
  },
  {
    title: 'Opláštění budov, trapézové plechy a ocelové výměny',
    subtitle: 'Obvodové pláště, sendvičové panely Kingspan a klempířství',
    description: 'Dodávka a montáž nosných trapézových plechů, stěnových a střešních sendvičových panelů, pomocných ocelových konstrukcí a vlastních klempířských prvků.',
    tags: [
      'Montáž střešních plášťů', 'Trapézové plechy', 'Montáž trapézových plechů',
      'Obvodový plášť', 'Opláštění (opláštenie)', 'Sendvičový panel', 'Stěnový panel',
      'Střešní panel', 'Fasádní panely', 'Montáž panelů', 'Kingspan',
      'Ocelové konstrukce', 'Montáž ocelových výměn', 'Tenkostěnné výměny', 'Klempířské prvky'
    ]
  }
];

export const seoFaqData: SeoFaqItem[] = [
  {
    question: 'Jaké hydroizolační systémy používáte pro ploché střechy průmyslových a komerčních objektů?',
    answer: 'Realizujeme jak fóliové střechy z certifikovaných syntetických fólií mPVC (měkčené PVC, např. Fatrafol, Sika, Bauder) a polyolefinových fólií TPO / FPO, tak střechy z modifikovaných asfaltových pásů SBS a APP (včetně samolepicích asfaltových pásů). Součástí dodávky je kompletní montáž střešních plášťů od nosných trapézových plechů přes parotěs / parozábranu a tepelné izolace až po klempířské prvky a zelené střechy.'
  },
  {
    question: 'Jaké tepelné izolace volíte pro zateplení střech a obvodových plášťů?',
    answer: 'Pro zateplení střech a průmyslových objektů navrhujeme tepelné izolace přesně podle požárních a tepelně-technických požadavků projektu: nehořlavou minerální vatu / minerální vlnu (MW, kamenná vata), vysoce účinné izolační desky PIR, pěnový polystyren EPS (včetně spádových klínů) a nenasákavý extrudovaný polystyren XPS pro inverzní střechy, terasy, sokly a izolace balkonů.'
  },
  {
    question: 'Provádíte izolace základů proti tlakové vodě, radonu a tunelové izolace?',
    answer: 'Ano, specializujeme se na náročné hydroizolace spodní stavby, izolace základů, izolace proti tlakové vodě a izolace proti radonu. Aplikujeme špičkový spřažený systém Dualproof (mechanicky a chemicky spojený s čerstvým betonem), zemní fólie mPVC (Fatrafol), vysokohustotní polyetylen HDPE (PE-HD) a asfaltové pásy SBS. Máme rozsáhlé zkušenosti s realizací tunelových izolací a izolací primárního ostění (např. Tunel Blanka v Praze).'
  },
  {
    question: 'Zajišťujete kompletní opláštění hal, sendvičové panely Kingspan a montáž trapézových plechů?',
    answer: 'Ano, provádíme kompletní montáž trapézových plechů (nosných střešních i fasádních profilů) a montáž panelů pro obvodový plášť budov. Dodáváme a montujeme stěnové panely, střešní panely a fasádní panely předních výrobců jako Kingspan, Ruukki a Brucha s izolačním jádrem PIR nebo minerální vata (MW).'
  },
  {
    question: 'Dodáváte také ocelové konstrukce, montáž ocelových výměn a klempířské prvky?',
    answer: 'Ano. Součástí naší dodávky je výroba a montáž ocelových konstrukcí, montáž ocelových výměn pro střešní světlíky, RWA klapky a vzduchotechniku, stejně jako tenkostěnné výměny a paždíky (profily Z, C, U). Ve vlastní CNC klempířské dílně navíc vyrábíme veškeré klempířské prvky, oplechování atik a systémové lemování z poplastovaných plechů (PVC/TPO), lakovaného hliníku, pozinku, titanzinku i mědi.'
  }
];
