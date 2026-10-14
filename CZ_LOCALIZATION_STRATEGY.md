# 🚀 Strategie & Návrh Nového Moderního Webu pro Český Trh (CZ)

Tento dokument definuje konkrétní plán, architekturu, obsahové směřování a technologický návrh nového webu zaměřeného na **český stavební a developerský trh** s přímou vazbou na slovenskou mateřskou společnost **NOVADACH s.r.o.**

---

## 1. Strategické pilíře pro vstup na CZ trh

Český trh průmyslových, komerčních a rezidenčních staveb je vysoce konkurenční (velcí generální dodavatelé jako Metrostav, Skanska, Strabag, Porr, Hochtief a specializovaní subdodavatelé). 

Aby nový web okamžitě vybudoval **důvěru (trust factor)** u českých investorů, developerů (např. CTP, Prologis, P3, CPI, Penta, J&T) a projekčních kanceláří, musí komunikovat:

1. **České reference v popředí:**
   - Hned na úvodní stránce a v referencích akcentovat projekty realizované v ČR: **Tunel Blanka Praha**, **Logistický park Kunice u Prahy**, **Logistický park Zdiby**, **OC Černý Most Praha**, **OC Valašské Meziříčí**.
2. **Síla slovenské centrály (30+ let tradice):**
   - Pozicovat firmu nikoliv jako „začínající CZ subjekt“, ale jako etablovanou mezinárodní stavební skupinu působící od roku **1993** s obrovským zázemím, vlastním strojním i lidským parkem a referencemi kalibru **Volkswagen, Volvo Cars, Jaderná elektrárna Mochovce, Eurovea a Nivy**.
3. **Plynulé provázání se slovenským webem (Cross-linking & Language switcher):**
   - V záhlaví a zápatí mít přepínač regionu/jazyka `🇨🇿 CZ | 🇸🇰 SK` (odkaz na mateřskou centrálu na Slovensku `novadach.sk`).
   - Přehledné rozdělení: *"Projekty v ČR"* a *"Vybrané mezinárodní megaprojekty na Slovensku"*.
4. **Česká odborná terminologie & legislativa:**
   - Překlad do přirozené češtiny v souladu s českou stavební terminologií (např. *střešní pláště*, *skládané fasády*, *klempířské konstrukce*, *projektová dokumentace DSP/DPS*, *hydroizolační a tepelněizolační souvrství*, *normy ČSN*).
5. **Certifikace ISO (9001, 14001, 45001):**
   - V ČR jsou tyto certifikace povinnou podmínkou pro účast ve větších výběrových řízeních a tendrech. Budou výrazně prezentovány s možností náhledu i stažení.

---

## 2. Navržená struktura webu (Informační architektura)

Nový web bude mít čistou, moderní a přímočarou strukturu s důrazem na rychlé nalezení referencí a odeslání poptávky:

```
├── 1. Úvodní stránka (Homepage)
│    ├── Hero sekce: Velkoformátové video/fotografie + Headline (Specialisté na střechy, fasády a izolace)
│    ├── Klíčové metriky: 30+ let zkušeností | 200+ velkých realizací | 3 ISO certifikáty | Působnost CZ & SK
│    ├── Interaktivní přehled služeb (Střechy, Fasády, Izolace, Ocelové konstrukce, Klempířství, Projekce)
│    ├── Výběr klíčových referencí (Filtr CZ / SK / Typ stavby)
│    ├── Garance & Certifikace (ISO 9001, 14001, 45001)
│    ├── Tým a zázemí firmy (Zkušení projektoví manažeři a inženýři)
│    └── Konverzní poptávkový box (Nahrání projektu / výkazu výměr do tendru)
│
├── 2. O nás (Profil společnosti & Historie)
│    ├── Příběh od roku 1993 (Založení, růst, členství v profesních ceších)
│    ├── Vedení a odborný tým (Klíčoví lidé s jejich referenčními stavbami)
│    ├── Certifikace kvality a bezpečnosti (Ke stažení v PDF)
│    └── Propojení se slovenskou mateřskou centrálou
│
├── 3. Služby & Technologie (S detailními podstránkami či interaktivními taby)
│    ├── Střešní pláště (Ploché střechy novostaveb, rekonstrukce, trapézové plechy, zelené střechy)
│    ├── Fasádní systémy (Skládané fasády, sendvičové panely PIR/minerál, C kazety)
│    ├── Architektonické obklady (Kompozitní panely BOND, lamely, dřevoplast)
│    ├── Hydroizolace a speciální izolace (Spodní stavby, tunely, mosty, bazény, terasy)
│    ├── Ocelové a klempířské konstrukce (Vlastní dílenská výroba klempířských prvků)
│    └── Inženýring & Projekční činnost (Od studie po realizační dokumentaci)
│
├── 4. Reference (Portfolio projektů)
│    ├── Interaktivní filtrování:
│    │    ├── Lokace: Vše | Česká republika | Slovensko
│    │    └── Segment: Průmyslové haly | Obchodní centra | Dopravní & Inženýrské stavby | Rezidence
│    ├── Detailní karty staveb s fotkami v plném rozlišení, popisem dodávky a technickým řešením
│    └── Mapa realizací CZ / SK
│
├── 5. Kariéra / Nabídka spolupráce (B2B subdodávky & stavební profese)
│    └── Výzva pro montážní party, klempíře, mistry a projektanty
│
└── 6. Kontakt & Poptávka
     ├── Kontaktní údaje pro Českou republiku & Slovenskou centrálu
     ├── Přímé kontakty na obchodní a výrobní ředitele
     └── Rychlý poptávkový formulář s možností přiložit soubor (výkresy / rozpočet / zadání tendru)
```

---

## 3. UI/UX Design a Vizuální Směr (Estetika & WOW Efekt)

Starý web trpěl neuspořádaným obsahem, nevzhlednými snímky z PowerPointu a těžkopádnou šablonou Avada.

Nový web navrhneme v prémiovém technicko-architektonickém stylu:
- **Barevná paleta:**
  - *Hlavní barvy:* Tmavě grafitová až břidlicová (`#181c20`, `#0f1215`) a čistá bílá (`#ffffff`).
  - *Akcentní barva:* Prémiová industriální žluto-oranžová (`#f59e0b` / `#fbaa29`), která vychází z původního loga Novadach, evokuje stavební preciznost a dynamiku.
  - *Doplňkové tóny:* Světle šedé pozadí modulů (`#f8fafc`, `#f1f5f9`), jemné linky (`#e2e8f0`).
- **Typografie:**
  - Moderní, technický bezpatkový font (např. **Outfit** nebo **Plus Jakarta Sans** pro nadpisy, **Inter** pro čitelný body text).
- **Interaktivní prvky a mikro-animace:**
  - Jemný zoom efekt na fotografiích realizovaných staveb při hoveru.
  - Plynulé přepínání referencí bez reloadu stránky (Filtry CZ/SK, typ stavby).
  - Moderní lightbox pro prohlížení fotografií v plném 4K rozlišení.
  - Plně responzivní layout pro mobilní telefony, tablety i velké monitory.

---

## 4. Doporučený Technologický Stack

Pro maximální rychlost, SEO a moderní vzhled:
1. **Moderní Frontend:**
   - **Vite + React** nebo **Next.js** (výborné SSR/SSG pro SEO, okamžité načtení, žádné pomalé PHP/WordPress načítání).
2. **Styling:**
   - Čistý moderní CSS / Tailwind CSS s precizními komponenty.
3. **Média:**
   - WebP / AVIF optimalizace všech 800+ stažených fotografií pro bleskové načtení i na mobilních datech.
