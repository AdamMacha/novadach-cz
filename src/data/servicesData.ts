export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  shortDesc: string;
  iconName: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  materials: string[];
  seoKeywords: string[];
  referenceIds: string[];
  serviceFaqs: SeoFaqItem[];
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
    badge: 'Ploché střechy & Trapézy',
    image: '/images/referencie/VW-H1_1.jpg',
    seoTitle: 'Ploché a fóliové střechy, zateplení, trapézy',
    seoDescription:
      'Montáž střešních plášťů, fóliových střech (PVC, mPVC, TPO, Fatrafol), asfaltových pásů SBS/APP, trapézových plechů a zateplení (PIR, MW, EPS, XPS) v ČR.',
    shortDesc:
      'Kompletní montáž střešních plášťů, ploché a fóliové střechy (mPVC, TPO, Fatrafol), asfaltové pásy SBS/APP, parozábrana, montáž trapézových plechů a zateplení střech (PIR, minerální vata MW, EPS, XPS).',
    iconName: 'ShieldAlert',
    longDesc:
      'Zajišťujeme kompletní návrh, dodávku a montáž střešních plášťů pro průmyslové haly, logistická centra, obchodní centra, administrativní budovy i rezidenční objekty. Realizujeme jednoplášťové i dvouplášťové ploché střechy, fóliové střechy z měkčeného PVC (mPVC, Fatrafol, Sika, Bauder) a polyolefinových fólií TPO/FPO, střechy z modifikovaných asfaltových pásů SBS a APP (včetně samolepicích asfaltových pásů a parotěsných vrstev), montáž nosných trapézových plechů i kompletní tepelné izolace a zateplení střech (minerální vlna MW / kamenná vata, PIR desky, pěnový polystyren EPS a extrudovaný polystyren XPS).',
    benefits: [
      'Komplexní montáž střešních plášťů od nosného trapézového plechu po finální hydroizolaci',
      'Diagnostika a sanace plochých střech (jiskrové a vakuové zkoušky, sondy, termovize)',
      'Certifikovaná pokládka hydroizolačních fólií mPVC (Fatrafol), TPO/FPO a asfaltových pásů SBS/APP',
      'Vysoká energetická úspora díky zateplení střech materiály PIR, minerální vata (MW / kamenná vata), EPS a XPS',
    ],
    features: [
      'Dodávka a montáž trapézových plechů (nosné střešní profily TR 85–TR 200, akustické perforované plechy)',
      'Parotěs a parozábrana (PE fólie, hliníkové parozábrany, samolepicí asfaltový pás na trapézový plech)',
      'Tepelné izolace a zateplení střech: minerální vata / minerální vlna (MW), kamenná vata, PIR panely, polystyren EPS, XPS a spádové klíny',
      'Fóliové střechy a fóliová izolace z mPVC (PVC-P, Fatrafol) a ekologických fólií TPO / FPO',
      'Modifikované asfaltové pásy SBS a APP (natavované i samolepicí asfaltové pásy, vícevrstvé systémy)',
      'Zelené střechy (extenzivní a intenzivní vegetační souvrství), přitížené střechy a izolace balkonů a teras',
    ],
    materials: [
      'Trapézové plechy (ArcelorMittal, Ruukki, Voestalpine, Kovové profily)',
      'Fóliová izolace mPVC & TPO (Fatrafol, Sika Sarnafil, Bauder, FDT Rhenofol)',
      'Asfaltové pásy SBS / APP & samolepicí asfaltové pásy (Bauder, Icopal, Vedag, Soprema)',
      'Tepelné izolace: PIR (Kingspan, Bauder, Recticel), minerální a kamenná vata MW (Rockwool, Isover), polystyren EPS a XPS',
    ],
    seoKeywords: [
      'ploché střechy',
      'fóliové střechy',
      'montáž střešních plášťů',
      'montáž trapézových plechů',
      'trapézové plechy',
      'fóliová izolace',
      'PVC fólie',
      'mPVC',
      'TPO fólie',
      'Fatrafol',
      'asfaltové pásy',
      'SBS',
      'APP',
      'samolepicí asfaltový pás',
      'parotěs',
      'parozábrana',
      'tepelné izolace',
      'zateplení střech',
      'minerální vata',
      'minerální vlna',
      'MW',
      'kamenná vata',
      'PIR',
      'polystyren',
      'EPS',
      'XPS',
      'zelené střechy',
      'izolace balkonů',
    ],
    referenceIds: ['volkswagen-bratislava', 'eurovea-2', 'as-nivy', 'volvo-cars-valaliky', 'lp-kunice-praha'],
    serviceFaqs: [
      {
        question: 'Kdy zvolit pro plochou střechu fólii mPVC (Fatrafol), TPO nebo asfaltové pásy SBS/APP?',
        answer:
          'Syntetické fólie mPVC (např. Fatrafol, Sika, Bauder) a ekologické fólie TPO/FPO vynikají rychlou pokládkou, nízkou hmotností a paropropustností, což je ideální pro průmyslové haly na trapézovém plechu. Modifikované asfaltové pásy SBS a APP jsou naopak vysoce odolné vůči mechanickému zatížení u pochozích, přitížených a zelených střech nebo při sanacích.',
      },
      {
        question: 'Jak probíhá zateplení střechy a volba izolace (PIR, minerální vata MW, EPS, XPS)?',
        answer:
          'Volba tepelné izolace vychází z požární klasifikace objektu a požadavků na součinitel prostupu tepla. Pro nehořlavé konstrukce hal používáme kamennou minerální vatu (MW), pro maximální tepelný odpor při malé tloušťce desky PIR, pro běžné střechy pěnový polystyren EPS včetně spádových klínů a pro inverzní či zelené střechy nenasákavý extrudovaný polystyren XPS.',
      },
      {
        question: 'Zajišťujete také montáž nosných trapézových plechů a kontrolní zkoušky těsnosti?',
        answer:
          'Ano. Realizujeme kompletní skladbu od dodávky a montáže nosných i akustických trapézových plechů, přes parozábranu (včetně samolepicích asfaltových pásů), tepelnou izolaci až po závěrečné vakuové nebo vysokonapěťové jiskrové zkoušky těsnosti hydroizolace.',
      },
    ],
  },
  {
    id: 'fasady',
    slug: 'fasady',
    title: 'Fasády, obvodové pláště a sendvičové panely',
    badge: 'Sendvičové panely PIR',
    image: '/images/referencie/THE-MILL_1.jpg',
    seoTitle: 'Sendvičové panely, skládané fasády a opláštění',
    seoDescription:
      'Kompletní obvodový plášť a opláštění průmyslových hal: stěnové a střešní sendvičové panely Kingspan, Ruukki, Brucha s jádrem PIR nebo minerální vatou MW.',
    shortDesc:
      'Kompletní obvodový plášť a opláštění hal: fasádní panely, sendvičové panely (stěnový a střešní panel Kingspan, Ruukki, Brucha) s jádrem PIR nebo minerální vata (MW) a skládané fasády.',
    iconName: 'Building2',
    longDesc:
      'Realizujeme moderní obvodový plášť a kompletní opláštění budov (opláštenie průmyslových hal, logistických parků, výrobních závodů, obchodních center a administrativních budov). Provádíme odbornou montáž panelů všech typů: stěnový panel (horizontální i vertikální kladení), střešní panel a fasádní panely se skrytým i přiznaným kotvením. Pracujeme s certifikovanými sendvičovými panely Kingspan, Ruukki, Brucha a Balex s izolačním jádrem z tuhé PIR pěny nebo nehořlavé minerální vlny (MW / kamenná vata), stejně jako se skládanými kazetovými fasádami.',
    benefits: [
      'Rychlá celoroční montáž panelů a kompletní opláštění průmyslových objektů',
      'Špičkové tepelněizolační parametry (PIR jádro) a požární odolnost až EI 180 (minerální vata MW)',
      'Certifikovaná montáž systémů Kingspan, Brucha, Ruukki a Balex',
      'Kompletní systémové detaily, lemování, klempířské prvky a napojení na střešní plášť',
    ],
    features: [
      'Montáž panelů pro obvodový plášť: sendvičový panel stěnový i střešní panel',
      'Fasádní panely Kingspan s izolačním jádrem PIR / IPN (QuadCore) a minerální vlnou (MW)',
      'Skládané obvodové pláště z konstrukčních C kazet, minerální vaty a trapézových plechů',
      'Požární stěny a příčky ze sendvičových panelů s jádrem z kamenné vaty',
      'Montáž ocelových výměn pro okna, fasádní prosklení, sekční vrata a dokovací límce',
    ],
    materials: [
      'Sendvičové panely Kingspan (stěnové a střešní panely PIR / QuadCore / MW)',
      'Sendvičové a fasádní panely Brucha, Ruukki, Balex Metal, Trimo',
      'Skládané fasádní C-kazety, minerální vlna MW a fasádní trapézové plechy',
    ],
    seoKeywords: [
      'obvodový plášť',
      'opláštění',
      'opláštenie',
      'fasádní panely',
      'sendvičový panel',
      'stěnový panel',
      'střešní panel',
      'montáž panelů',
      'Kingspan',
      'PIR panely',
      'minerální vata MW',
    ],
    referenceIds: ['as-nivy', 'volvo-cars-valaliky', 'lp-kunice-praha', 'ikea-malacky', 'the-mill'],
    serviceFaqs: [
      {
        question: 'Jaký je rozdíl mezi sendvičovými panely s jádrem PIR a minerální vatou (MW)?',
        answer:
          'Sendvičové panely s jádrem PIR / QuadCore (např. Kingspan) poskytují nejlepší tepelnou izolaci při nízké hmotnosti a tenčím profilu. Panely s jádrem z minerální vaty (MW) jsou nehořlavé (třída A2-s1,d0) a volí se pro požární stěny, evakuační trasy a objekty s přísnými požárními předpisy.',
      },
      {
        question: 'Dodáváte jak stěnové, tak střešní sendvičové panely včetně lemování?',
        answer:
          'Ano. Realizujeme horizontální i vertikální montáž stěnových panelů se skrytým či přiznaným spojem i střešních sendvičových panelů. Součástí dodávky jsou veškeré klempířské prvky v barvách RAL z naší vlastní CNC dílny a montáž ocelových výměn pro vrata či okna.',
      },
      {
        question: 'Kdy je vhodnější skládaný obvodový plášť z C-kazet oproti sendvičovým panelům?',
        answer:
          'Skládaný plášť z konstrukčních C-kazet, tepelné izolace z minerální vlny a pohledového trapézového plechu nebo architektonických lamel se uplatňuje zejména u rozměrných průmyslových hal, kde vyžadujete vysokou variabilitu akustického útlumu nebo požární odolnosti.',
      },
    ],
  },
  {
    id: 'izolacie',
    slug: 'izolacie',
    title: 'Hydroizolace spodní stavby, tlaková voda, radon a tunelové izolace',
    badge: 'Tlaková voda & Tunely',
    image: '/images/referencie/blanka_razba12-1.jpg',
    seoTitle: 'Hydroizolace základů, tlaková voda, radon a tunely',
    seoDescription:
      'Speciální hydroizolace základů proti tlakové vodě a radonu (Dualproof, HDPE, mPVC Fatrafol) a tunelové izolace primárního ostění. Reference Tunel Blanka.',
    shortDesc:
      'Speciální hydroizolace základů, izolace proti tlakové vodě a radonu, systém Dualproof, HDPE (PE-HD) a mPVC fólie, tunelové izolace primárního ostění a izolace průmyslových objektů.',
    iconName: 'Droplets',
    longDesc:
      'Specializujeme se na vysoce náročné hydroizolace spodní stavby, izolace základů, podzemních garáží, kolektorů a inženýrských děl. Provádíme certifikované izolace proti tlakové vodě, agresivní podzemní vodě, zemní vlhkosti a izolace proti radonu a metanu. Jsme specialisté na tunelové izolace (silniční, železniční a metrové tunely – např. Tunel Blanka v Praze), kde realizujeme izolace primárního ostění (deštníkové a plnoplošné vakuově testované systémy). Aplikujeme moderní spřažené membrány Dualproof s mechanickou vazbou do čerstvého železobetonu, zemní fólie mPVC (Fatrafol), vysokohustotní polyetylenové fólie HDPE / PE-HD i modifikované asfaltové pásy SBS.',
    benefits: [
      'Ověřené reference z největších podzemních a dopravních staveb v ČR a SR (Tunel Blanka Praha, Eurovea 2, Nivy)',
      'Stoprocentní ochrana spodní stavby: izolace proti tlakové vodě, radonu a ropným látkám',
      'Aplikace pre-aplikovaných systémů Dualproof přímo pod železobetonové základové desky a stěny',
      'Dvoustopé horkovzdušné svary s kontrolním kanálkem pro tlakové, jiskrové a vakuové zkoušky těsnosti',
    ],
    features: [
      'Izolace základů, základových desek, pilotových hlav a podzemních stěn (bílé a černé vany)',
      'Izolace proti tlakové vodě a izolace proti radonu (radonová bariéra s protiradonovým posudkem)',
      'Systém Dualproof (kompozitní hydroizolační membrána pevně spřažená s betonem proti podtékání vody)',
      'Tunelové izolace: izolace primárního ostění ražených (NRTM) i hloubených tunelů, osazování spárových pásů',
      'Fóliová izolace z mPVC (PVC-P, Fatrafol zemní fólie), HDPE / PE-HD fólie a TPO membrány',
      'Izolace průmyslových objektů, záchytných jímek, nádrží, mostovek, pochozích teras a izolace balkonů',
    ],
    materials: [
      'Speciální membrány Dualproof (pre-applied systém do betonu)',
      'Zemní a tunelové PVC-P / mPVC fólie (Fatrafol, Sikaplan, Bauder)',
      'Vysokohustotní polyetylenové fólie HDPE / PE-HD a TPO/FPO',
      'Modifikované asfaltové pásy SBS proti radonu a tlakové vodě, bentonitové rohože, těsnicí pásy a injektáže',
    ],
    seoKeywords: [
      'hydroizolace',
      'tlaková voda',
      'izolace proti tlakové vodě',
      'izolace proti radonu',
      'Dualproof',
      'izolace základů',
      'tunelové izolace',
      'tunel',
      'izolace primárního ostění',
      'HDPE',
      'PE-HD',
      'PVC',
      'mPVC',
      'Fatrafol',
      'fóliová izolace',
      'izolace průmyslových objektů',
      'izolace balkonů',
    ],
    referenceIds: ['tunel-blanka', 'eurovea-2', 'as-nivy'],
    serviceFaqs: [
      {
        question: 'Jak funguje pre-aplikovaný hydroizolační systém Dualproof proti podtékání vody?',
        answer:
          'Membrána Dualproof kombinuje měkčenou PVC/FPO hydroizolační vrstvu s rounem na straně betonu. Při betonáži základové desky nebo stěn se čerstvá betonová směs mechanicky i chemicky prováže s rounem, čímž vznikne celoplošné spojení bez rizika šíření tlakové vody pod hydroizolací.',
      },
      {
        question: 'Jaké technologie používáte pro izolace proti radonu a tlakové vodě?',
        answer:
          'Podle míry radonového indexu a hydrostatického tlaku volíme buď certifikované zemní fólie mPVC (Fatrafol) a vysokohustotní HDPE / PE-HD membrány s dvoustopými svary, systém Dualproof, nebo modifikované asfaltové pásy SBS s hliníkovou vložkou.',
      },
      {
        question: 'Máte certifikaci a zkušenosti pro tunelové izolace a izolace primárního ostění?',
        answer:
          'Ano, realizovali jsme rozsáhlé hydroizolace podzemních úseků Tunelu Blanka v Praze i dalších dopravních staveb. Provádíme deštníkové i plnoplošné izolace primárního ostění ražených (NRTM) a hloubených tunelů včetně osazení spárových pásů a injektážních hadiček.',
      },
    ],
  },
  {
    id: 'fasadne-obklady',
    slug: 'fasadne-obklady',
    title: 'Architektonické fasádní obklady a provětrávané fasády',
    badge: 'Kompozitní BOND',
    image: '/images/referencie/UNIPHARMA-Bojnice-2.jpg',
    seoTitle: 'Provětrávané fasády a kompozitní obklady BOND',
    seoDescription:
      'Architektonické provětrávané fasády z kompozitních panelů BOND (Alucobond), hliníkových kazet a lamel se zateplením minerální vlnou MW a vlastní CNC výrobou.',
    shortDesc:
      'Designové provětrávané fasády z hliníkových kompozitních fasádních panelů (BOND), kazet, HPL desek a profilovaných plechů se zateplením minerální vatou (MW).',
    iconName: 'Layers',
    longDesc:
      'Dáváme budovám reprezentativní architektonickou tvář. Navrhujeme a montujeme provětrávané fasády a architektonické obvodové pláště s tepelnou izolací z hydrofobizované minerální vlny (MW / kamenná vata). Specializujeme se na kompozitní fasádní panely typu BOND (Alucobond, Reynobond, Larson), velkoformátové i maloformátové hliníkové kazety, HPL kompaktní desky a designové lamelové systémy.',
    benefits: [
      'Reprezentativní architektonický vzhled pro administrativní budovy, showroomy a vstupy hal',
      'Provětrávaná vzduchová mezera s tepelnou izolací z minerální vaty (MW) zaručuje ideální difuzi a klima',
      'Vlastní CNC frézování a ohýbání kompozitních kazet BOND na míru projektu',
      'Dlouhá životnost, barevná stálost a nulové nároky na údržbu',
    ],
    features: [
      'Kompozitní hliníkové fasádní panely a kazety (BOND, Alucobond, Reynobond)',
      'Kompletní hliníkové a ocelové podkonstrukce včetně tepelné izolace z minerální vlny (MW)',
      'Reprezentativní obklady atik, sloupů, vstupních portálů a fasádních říms',
      'Designové slunolamy, hliníkové lamely a provětrávané obklady',
    ],
    materials: [
      'Kompozitní panely BOND (Alucobond, Reynobond, Etalbond)',
      'Tepelná izolace fasád: minerální vata / kamenná vata MW s černou sklotextilií',
      'Certifikovaný hliníkový nosný rošt a nerezové kotvení',
    ],
    seoKeywords: [
      'fasádní panely',
      'BOND obklady',
      'provětrávané fasády',
      'obvodový plášť',
      'minerální vata',
      'minerální vlna MW',
    ],
    referenceIds: ['unipharma-bojnice', 'rd-marianka', 'btc-pradiaren'],
    serviceFaqs: [
      {
        question: 'Proč zvolit provětrávanou fasádu z kompozitních panelů BOND?',
        answer:
          'Provětrávaná fasáda z hliníkových kompozitních panelů typu BOND (Alucobond, Reynobond) kombinuje špičkovou rovinnost, dlouhou životnost bez údržby a účinné odvětrání vlhkosti přes vzduchovou mezeru před izolací z minerální vlny.',
      },
      {
        question: 'Vyrábíte fasádní kazety BOND na míru konkrétní budovy?',
        answer:
          'Ano. Zajišťujeme zaměření stavby, zpracování kladečských výkresů i zakázkové CNC frézování a ohýbání kompozitních kazet včetně atypických obkladů atik, sloupů a vstupních portálů.',
      },
      {
        question: 'Jakou tepelnou izolaci používáte za provětrávaný fasádní obklad?',
        answer:
          'Standardně aplikujeme hydrofobizovanou nehořlavou minerální vatu (MW) s černou sklotextilní netkanou textilií, která zabraňuje vyfukování vláken v odvětrávané mezeře a splňuje přísné požární normy.',
      },
    ],
  },
  {
    id: 'ocelove-konstrukcie',
    slug: 'ocelove-konstrukcie',
    title: 'Ocelové konstrukce, montáž ocelových výměn a tenkostěnné výměny',
    badge: 'Pomocné rošty a výměny',
    image: '/images/referencie/BERGAMON-SO206-2.jpg',
    seoTitle: 'Ocelové konstrukce, ocelové a tenkostěnné výměny',
    seoDescription:
      'Výroba a montáž pomocných ocelových konstrukcí, ocelových výměn pro světlíky a VZT, tenkostěnných profilů Z, C, U a podkonstrukcí pro sendvičové panely.',
    shortDesc:
      'Výroba a montáž ocelových konstrukcí, montáž ocelových výměn pro světlíky a VZT, tenkostěnné výměny (Z, C, U profily), sekundární rošty pro fasádní panely a trapézové plechy.',
    iconName: 'Hammer',
    longDesc:
      'Kvalitní střešní a obvodový plášť vyžaduje staticky spolehlivou podkonstrukci. Zajišťujeme výrobu a montáž ocelových konstrukcí, sekundárních fasádních roštů a střešních nadstaveb. Specializujeme se na montáž ocelových výměn (pod střešní světlíky, RWA klapky, vzduchotechnické jednotky a prostupy střechou) a na tenkostěnné výměny a paždíky z pozinkovaných profilů Z, C a U pro kotvení trapézových plechů, stěnových a střešních sendvičových panelů.',
    benefits: [
      'Kompletní dodávka: ocelové konstrukce, tenkostěnné výměny i finální opláštění od jednoho dodavatele',
      'Rychlá montáž ocelových výměn přímo při pokládce trapézových plechů bez prostojů na stavbě',
      'Vlastní dílenská příprava, žárové zinkování a certifikované svářečské postupy',
      'Statické posouzení a návrh optimálních profilů pro úsporu hmotnosti oceli',
    ],
    features: [
      'Montáž ocelových výměn pro střešní světlíky, kouřové klapky, VZT strojovny a prostupy ve střešním plášti',
      'Tenkostěnné výměny, vaznice a paždíky z válcovaných pozinkovaných profilů Z, C, U a L',
      'Sekundární ocelové konstrukce a nosné rošty pro stěnové sendvičové panely a fasádní panely',
      'Ocelové konstrukce atik, markýz, technologických plošin, revizních lávek a žebříků',
    ],
    materials: [
      'Tenkostěnné pozinkované profily a výměny (Z, C, U, Sigma profily)',
      'Válcované ocelové konstrukce a profily (HEA, HEB, IPE, UPN, jakly)',
      'Žárově zinkované ocelové výměny a certifikovaný kotvicí materiál',
    ],
    seoKeywords: [
      'ocelové konstrukce',
      'montáž ocelových výměn',
      'tenkostěnné výměny',
      'ocelové výměny',
      'podkonstrukce pro sendvičové panely',
      'paždíky a vaznice',
    ],
    referenceIds: ['volkswagen-bratislava', 'volvo-cars-valaliky', 'the-mill'],
    serviceFaqs: [
      {
        question: 'K čemu slouží ocelové a tenkostěnné výměny ve střešním plášti?',
        answer:
          'Ocelové výměny přenášejí zatížení kolem otvorů v nosném trapézovém plechu – například pod střešními světlíky, odvodem kouře a tepla (RWA), prostupy vzduchotechniky (VZT) nebo technologickými jednotkami na střeše.',
      },
      {
        question: 'Jaká je výhoda dodávky ocelových konstrukcí a opláštění od jedné firmy?',
        answer:
          'Sladění montáže trapézových plechů, ocelových výměn a fasádních paždíků pod jednou smlouvou eliminuje prostoje mezi subdodavateli, snižuje chyby v rozměrových tolerancích a zrychluje harmonogram výstavby haly.',
      },
      {
        question: 'Dodáváte také sekundární rošty pro vrata, okna a prosklené fasády?',
        answer:
          'Ano, vyrábíme a montujeme jak tenkostěnné pozinkované výměny z profilů Z, C a U, tak svařované rámy z válcovaných či tenkostěnných uzavřených profilů včetně antikorozní ochrany žárovým zinkováním nebo nátěry.',
      },
    ],
  },
  {
    id: 'klampiarske-konstrukcie',
    slug: 'klampiarske-konstrukcie',
    title: 'Klempířské prvky a vlastní zakázková klempířská výroba',
    badge: 'Vlastní CNC klempírna',
    image: '/images/referencie/AS-NIVY-_2.jpg',
    seoTitle: 'Klempířské prvky a zakázková CNC výroba atik',
    seoDescription:
      'Vlastní CNC výroba a montáž klempířských prvků až do délky 6 m: poplastované plechy PVC/TPO (Fatrafol), oplechování atik, lišty a lemování v barvách RAL.',
    shortDesc:
      'Vlastní CNC výroba a odborná montáž klempířských prvků: oplechování atik, říms, parapetů, lemování sendvičových panelů a prvky z poplastovaného plechu (PVC/TPO), hliníku, titanzinku a mědi.',
    iconName: 'Wrench',
    longDesc:
      'Disponujeme vlastní moderně vybavenou klempířskou dílnou s CNC ohýbačkami a dělicími linkami. Vyrábíme a montujeme veškeré klempířské prvky nezbytné pro stoprocentní funkčnost a estetiku plochých střech i fasád. Zhotovujeme lemování pro fóliové střechy z poplastovaných plechů (Viplanyl, Fatrafol, TPO plechy), systémové klempířské prvky pro sendvičové panely a fasádní panely v barvách RAL, oplechování atik, požárních stěn, dilatačních spár i okapové systémy.',
    benefits: [
      'Vlastní CNC výroba klempířských prvků až do délky 6 metrů – nulové čekací lhůty na stavbě',
      'Přesné systémové lemování pro sendvičové panely (Kingspan aj.), trapézové plechy a fóliové střechy',
      'Poplastované klempířské prvky přímo svařitelné s hydroizolační fólií mPVC (Fatrafol) a TPO',
      'Zpracování lakovaného ocelového plechu, hliníku, titanzinku (Rheinzink), mědi a nerezu',
    ],
    features: [
      'Klempířské prvky z poplastovaného plechu (mPVC Viplanyl / Fatrafol, TPO poplastovaný plech) pro fóliové střechy',
      'Systémové klempířské lemování pro stěnové a střešní sendvičové panely (rohy, špalety, okapy, hřebeny)',
      'Velkoformátové oplechování atik, nika, dilatačních spár a parapetů',
      'Klempířské prvky z lakovaného hliníku, pozinku v odstínech RAL, titanzinku a mědi',
      'Kompletní odvodňovací systémy, žlaby, svody a pojistné přepady plochých střech',
    ],
    materials: [
      'Poplastované plechy mPVC a TPO (Fatrafol, Viplanyl, Sikaplan, Bauder)',
      'Lakované ocelové a hliníkové plechy v odstínech RAL (pro sendvičové panely)',
      'Titanzinek (Rheinzink, NedZink), měď a nerezový plech',
    ],
    seoKeywords: [
      'klempířské prvky',
      'klempířské konstrukce',
      'oplechování atiky',
      'poplastovaný plech',
      'Fatrafol plech',
      'lemování sendvičových panelů',
    ],
    referenceIds: ['eurovea-2', 'btc-pradiaren', 'as-nivy', 'unipharma-bojnice'],
    serviceFaqs: [
      {
        question: 'Proč se u fóliových střech používají klempířské prvky z poplastovaného plechu?',
        answer:
          'Poplastovaný plech (Viplanyl / Fatrafol / TPO) je z výroby opatřen vrstvou shodného plastu jako střešní hydroizolační fólie. To umožňuje přímé a dokonale vodotěsné horkovzdušné svaření fólie mPVC či TPO s oplechováním atiky, okapnice nebo prostupu.',
      },
      {
        question: 'Jaké délky klempířských profilů vyrábíte ve vlastní dílně?',
        answer:
          'Naše vlastní CNC ohýbačky zpracovávají klempířské prvky až do délky 6 metrů, což zmenšuje počet spojů na atikách a fasádách, zlepšuje těsnost a zrychluje montáž přímo na stavbě bez čekání na externí dodavatele.',
      },
      {
        question: 'Z jakých materiálů realizujete oplechování atik a lemování sendvičových panelů?',
        answer:
          'Vyrábíme prvky z lakovaných ocelových a hliníkových plechů v odstínech RAL pro sendvičové panely a trapézové plechy, dále z poplastovaného plechu, titanzinku (Rheinzink, NedZink), mědi a nerezové oceli.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug || service.id === slug);
}

export const technicalClusters: TechnicalCluster[] = [
  {
    title: 'Hydroizolační fólie a asfaltové pásy',
    subtitle: 'Ploché střechy, fóliové střechy a parozábrany',
    description:
      'Certifikovaná pokládka střešních a zemních hydroizolačních systémů pro průmyslové haly, logistické areály, obchodní centra i rezidence.',
    tags: [
      'PVC fólie',
      'mPVC',
      'Fóliová izolace',
      'Fóliové střechy',
      'Fatrafol',
      'TPO / FPO',
      'Asfaltové pásy',
      'SBS modifikované pásy',
      'APP pásy',
      'Samolepicí asfaltový pás',
      'Parotěs',
      'Parozábrana',
      'Ploché střechy',
      'Zelené střechy',
      'Izolace balkonů',
    ],
  },
  {
    title: 'Tepelné izolace a zateplení střech',
    subtitle: 'Energeticky úsporná souvrství střešních plášťů',
    description:
      'Komplexní návrh a realizace tepelněizolačních a spádových vrstev plochých střech a obvodových plášťů s důrazem na požární odolnost a součinitel prostupu tepla.',
    tags: [
      'Tepelné izolace',
      'Zateplení střech',
      'Minerální vata',
      'Minerální vlna (MW)',
      'Kamenná vata',
      'PIR desky',
      'Polystyren EPS',
      'Extrudovaný polystyren XPS',
      'Spádové klíny',
      'Izolace průmyslových objektů',
    ],
  },
  {
    title: 'Speciální hydroizolace, tunely a spodní stavba',
    subtitle: 'Tlaková voda, radon, systém Dualproof a HDPE',
    description:
      'Vysoce odolné izolační systémy pro základy budov, bílé a černé vany, podzemní garáže, ražené i hloubené tunely a inženýrská díla.',
    tags: [
      'Hydroizolace',
      'Tlaková voda',
      'Izolace proti tlakové vodě',
      'Izolace proti radonu',
      'Dualproof',
      'Izolace základů',
      'Tunelové izolace',
      'Tunel',
      'Izolace primárního ostění',
      'HDPE fólie',
      'PE-HD',
    ],
  },
  {
    title: 'Opláštění budov, trapézové plechy a ocelové výměny',
    subtitle: 'Obvodové pláště, sendvičové panely Kingspan a klempířství',
    description:
      'Dodávka a montáž nosných trapézových plechů, stěnových a střešních sendvičových panelů, pomocných ocelových konstrukcí a vlastních klempířských prvků.',
    tags: [
      'Montáž střešních plášťů',
      'Trapézové plechy',
      'Montáž trapézových plechů',
      'Obvodový plášť',
      'Opláštění (opláštenie)',
      'Sendvičový panel',
      'Stěnový panel',
      'Střešní panel',
      'Fasádní panely',
      'Montáž panelů',
      'Kingspan',
      'Ocelové konstrukce',
      'Montáž ocelových výměn',
      'Tenkostěnné výměny',
      'Klempířské prvky',
    ],
  },
];

export const seoFaqData: SeoFaqItem[] = [
  {
    question: 'Jaké hydroizolační systémy používáte pro ploché střechy průmyslových a komerčních objektů?',
    answer:
      'Realizujeme jak fóliové střechy z certifikovaných syntetických fólií mPVC (měkčené PVC, např. Fatrafol, Sika, Bauder) a polyolefinových fólií TPO / FPO, tak střechy z modifikovaných asfaltových pásů SBS a APP (včetně samolepicích asfaltových pásů). Součástí dodávky je kompletní montáž střešních plášťů od nosných trapézových plechů přes parotěs / parozábranu a tepelné izolace až po klempířské prvky a zelené střechy.',
  },
  {
    question: 'Jaké tepelné izolace volíte pro zateplení střech a obvodových plášťů?',
    answer:
      'Pro zateplení střech a průmyslových objektů navrhujeme tepelné izolace přesně podle požárních a tepelně-technických požadavků projektu: nehořlavou minerální vatu / minerální vlnu (MW, kamenná vata), vysoce účinné izolační desky PIR, pěnový polystyren EPS (včetně spádových klínů) a nenasákavý extrudovaný polystyren XPS pro inverzní střechy, terasy, sokly a izolace balkonů.',
  },
  {
    question: 'Provádíte izolace základů proti tlakové vodě, radonu a tunelové izolace?',
    answer:
      'Ano, specializujeme se na náročné hydroizolace spodní stavby, izolace základů, izolace proti tlakové vodě a izolace proti radonu. Aplikujeme špičkový spřažený systém Dualproof (mechanicky a chemicky spojený s čerstvým betonem), zemní fólie mPVC (Fatrafol), vysokohustotní polyetylen HDPE (PE-HD) a asfaltové pásy SBS. Máme rozsáhlé zkušenosti s realizací tunelových izolací a izolací primárního ostění (např. Tunel Blanka v Praze).',
  },
  {
    question: 'Zajišťujete kompletní opláštění hal, sendvičové panely Kingspan a montáž trapézových plechů?',
    answer:
      'Ano, provádíme kompletní montáž trapézových plechů (nosných střešních i fasádních profilů) a montáž panelů pro obvodový plášť budov. Dodáváme a montujeme stěnové panely, střešní panely a fasádní panely předních výrobců jako Kingspan, Ruukki a Brucha s izolačním jádrem PIR nebo minerální vata (MW).',
  },
  {
    question: 'Dodáváte také ocelové konstrukce, montáž ocelových výměn a klempířské prvky?',
    answer:
      'Ano. Součástí naší dodávky je výroba a montáž ocelových konstrukcí, montáž ocelových výměn pro střešní světlíky, RWA klapky a vzduchotechniku, stejně jako tenkostěnné výměny a paždíky (profily Z, C, U). Ve vlastní CNC klempířské dílně navíc vyrábíme veškeré klempířské prvky, oplechování atik a systémové lemování z poplastovaných plechů (PVC/TPO), lakovaného hliníku, pozinku, titanzinku i mědi.',
  },
];
