# Radioskola.se – Mappstruktur

Senast uppdaterad: 2026-02-04

## Översikt

```
radioamator-utbildning/
│
├── index.html                      # Startsida med statistik och kapitelöversikt
├── MAPPSTRUKTUR.md                 # Denna fil
│
├── css/
│   └── style.css                   # Huvudstilmall (inkl. alla böcker)
│
├── js/
│   ├── main.js                     # Huvudlogik, navigation, dynamiskt innehåll
│   ├── quiz.js                     # Testlogik för prov och övningar
│   ├── exercises.js                # Logik för intro-kapitlens övningar
│   ├── progress.js                 # Statistik & framstegshantering (localStorage)
│   ├── books.js                    # Hantering av bokexpandering på startsidan
│   │
│   └── data/
│       ├── chapters.js             # Data för utbildningskapitel 1-10
│       ├── questions.js            # Alla provfrågor för kapitel 1-10
│       ├── intro-chapters.js       # Data för introduktionskapitel 1-6
│       └── pmr-chapters.js         # Data för PMR446-kapitel 1-5
│
├── pages/
│   │
│   ├── introduktion/               # BOK 1: FÖRBEREDANDE KAPITEL
│   │   ├── intro-1-vad-ar-radio.html
│   │   ├── intro-2-radiohistoria.html
│   │   ├── intro-3-nar-radio-raddade-liv.html
│   │   ├── intro-4-matematik-fysik.html
│   │   ├── intro-5-frekvensbanden.html
│   │   └── intro-6-vad-gor-radioamatorer.html
│   │
│   ├── chapters/                   # BOK 2: UTBILDNINGSKAPITEL (certifikatsinnehåll)
│   │   ├── kapitel-1-grundlaggande-elektronik.html
│   │   ├── kapitel-2-radioteknik.html
│   │   ├── kapitel-3-antenner.html
│   │   ├── kapitel-4-vagutbredning.html
│   │   ├── kapitel-5-matinstrument.html
│   │   ├── kapitel-6-storningar.html
│   │   ├── kapitel-7-regler-bestammelser.html
│   │   ├── kapitel-8-trafikmetoder.html
│   │   ├── kapitel-9-sakerhet.html
│   │   └── kapitel-10-praktisk-trafik.html
│   │
│   ├── pmr446/                     # BONUSMATERIAL 1: PMR446-BOKEN (licensfri radio)
│   │   ├── pmr-1-vad-ar-pmr446.html
│   │   ├── pmr-2-kom-igang.html
│   │   ├── pmr-3-kanaler-koder.html
│   │   ├── pmr-4-rackvidd-tips.html
│   │   └── pmr-5-fran-pmr-till-amatorradio.html
│   │
│   ├── cw/                         # BONUSMATERIAL 2: CW-BOKEN (morsekodning)
│   │   ├── cw-1-vad-ar-morsekod.html
│   │   ├── cw-2-alfabetet.html
│   │   ├── cw-3-siffror-skiljetecken.html
│   │   ├── cw-4-lyssna.html
│   │   ├── cw-5-skicka.html
│   │   └── cw-6-qso.html
│   │
│   ├── test/                       # PROV OCH ÖVNINGAR
│   │   ├── prov.html               # Simulerat certifikatsprov (60 frågor, 90 min)
│   │   ├── ovning.html             # Övningsläge per kapitel
│   │   └── resultat.html           # Detaljerad resultatvisning
│   │
│   ├── pdf/                        # PDF-NEDLADDNINGAR
│   │   ├── index.html              # Nedladdningssida med alla PDF:er
│   │   └── pmr446-bok.html         # PMR446-boken i utskriftsvänligt format
│   │
│   └── profil/
│       └── statistik.html          # Personlig statistik & framsteg
│
└── assets/
    ├── images/
    │   ├── diagrams/               # Kretsscheman, blockscheman, antennbilder
    │   └── icons/                  # Ikoner och grafik
    │
    └── audio/
        └── morse/                  # Morsekod-övningar (valfritt)
```

## Innehållsstruktur enligt index.html

### Bok 1: Introduktion till radions värld
**Syfte:** Grundläggande förståelse INNAN certifikatsmaterialet  
**Målgrupp:** Nybörjare, unga (10-15 år), de som känner sig osäkra på matte/teknik  
**Läsningstid:** Ca 2 timmar totalt  

| # | Fil | Innehåll | Tid |
|---|-----|----------|-----|
| 1 | intro-1-vad-ar-radio.html | Vad radiovågor är, sändare/mottagare, radio i vardagen | 15 min |
| 2 | intro-2-radiohistoria.html | Hertz, Marconi, Titanic, radioamatörernas bidrag | 20 min |
| 3 | intro-3-nar-radio-raddade-liv.html | Titanic, tsunamin 2004, orkaner, FRO i Sverige | 25 min |
| 4 | intro-4-matematik-fysik.html | Prefix, enheter, Ohms lag, effekt, decibel | 35 min |
| 5 | intro-5-frekvensbanden.html | Spektrumet, HF/VHF/UHF, amatörband, regler | 30 min |
| 6 | intro-6-vad-gor-radioamatorer.html | DX, contest, bygga, satelliter, nödkom, digital | 25 min |

### Bok 2: Förberedelsebok för radiocertifikatet
**Syfte:** Det faktiska materialet som krävs för att klara certifikatsprovet  
**Målgrupp:** Certifikatssökande som vill klara PTS-provet  
**Läsningstid:** Ca 15-20 timmar totalt  

| # | Fil | Innehåll | Tid |
|---|-----|----------|-----|
| 1 | kapitel-1-grundlaggande-elektronik.html | Ström, spänning, resistans, komponenter | 3-4 h |
| 2 | kapitel-2-radioteknik.html | Oscillatorer, modulering, mottagare, sändare | 2-3 h |
| 3 | kapitel-3-antenner.html | Antenntyper, matning, SWR | 2-3 h |
| 4 | kapitel-4-vagutbredning.html | Jonosfär, markvåg, rymdvåg, fading | 1-2 h |
| 5 | kapitel-5-matinstrument.html | Multimeter, oscilloskop, SWR-mätare | 1-2 h |
| 6 | kapitel-6-storningar.html | EMC, TVI, störningstyper, filter | 1-2 h |
| 7 | kapitel-7-regler-bestammelser.html | Lag, PTS, ITU, bandplaner | 2 h |
| 8 | kapitel-8-trafikmetoder.html | Anropssignaler, Q-koder, bokstaveringsalfabet | 1 h |
| 9 | kapitel-9-sakerhet.html | Elsäkerhet, RF-strålning, blixtnedslag | 1-2 h |
| 10 | kapitel-10-praktisk-trafik.html | QSO, contest, DX, repeatrar | 1-2 h |

### Bonusmaterial 1: PMR446 – Komradio för alla
**Syfte:** Licensfri radio för nybörjare som vill börja NU  
**Målgrupp:** Barn (8+), ungdomar, familjer, friluftsfolk  
**Läsningstid:** Ca 1 timme  

| # | Fil | Innehåll |
|---|-----|----------|
| 1 | pmr-1-vad-ar-pmr446.html | Introduktion till PMR446, regler, användningsområden |
| 2 | pmr-2-kom-igang.html | Praktisk guide: köpa, ladda, första QSO |
| 3 | pmr-3-kanaler-koder.html | Kanaler 1-16, CTCSS-koder, störningar |
| 4 | pmr-4-rackvidd-tips.html | Räckvidd, antennplacering, tips & tricks |
| 5 | pmr-5-fran-pmr-till-amatorradio.html | Bryggan till amatörradio, varför certifikat |

### Bonusmaterial 2: Morsekodsboken
**Syfte:** Lära sig CW från grunden  
**Målgrupp:** Intresserade av morsekod (frivilligt för certifikatet)  
**Läsningstid:** Ca 2 timmar  

| # | Fil | Innehåll |
|---|-----|----------|
| 1 | cw-1-vad-ar-morsekod.html | Vad är morsekod? Historia och användning |
| 2 | cw-2-alfabetet.html | Bokstäverna A-Z i morsekod |
| 3 | cw-3-siffror-skiljetecken.html | Siffror 0-9 och vanliga tecken |
| 4 | cw-4-lyssna.html | Träna gehör och igenkänning |
| 5 | cw-5-skicka.html | Lära sig skicka med nyckel |
| 6 | cw-6-qso.html | Genomföra ett QSO med CW |

### PDF-nedladdningar
Utskriftsvänliga versioner för offline-läsning.

| Fil | Innehåll | Status |
|-----|----------|--------|
| index.html | Nedladdningssida med alla PDF:er | ✅ Klar |
| pmr446-bok.html | PMR446-boken komplett (utskriftsvänlig) | ✅ Klar |

## JavaScript-filer

| Fil | Syfte |
|-----|-------|
| main.js | Navigation, kapitelrendering, mobilmeny |
| quiz.js | Frågelogik, timer, resultatberäkning |
| exercises.js | Övningstyper för intro-kapitlen (fyll i, para ihop, etc.) |
| progress.js | Spara/läsa framsteg i localStorage |
| books.js | Hantering av bokexpandering på startsidan |
| data/chapters.js | Array med kapiteldata (titel, ikon, ämnen) |
| data/questions.js | Array med alla provfrågor |
| data/intro-chapters.js | Array med intro-kapitel och deras övningar |
| data/pmr-chapters.js | Array med PMR446-kapitel och övningar |

## Navigationsflöde

```
index.html (Startsida)
│
├─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│                 │                 │                 │                 │
▼                 ▼                 ▼                 ▼                 ▼
BOK 1:            BOK 2:            BONUS 1:          BONUS 2:          PROV
Introduktion      Certifikats-      PMR446            Morsekod          
(6 kapitel)       förberedelse      (5 kapitel)       (6 kapitel)       
                  (10 kapitel)                                          
│                 │                 │                 │                 │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
                                    │
                                    ▼
                            Statistik & Framsteg
                            (progress.js)
```

## Huvudnavigationsstruktur

**Toppnavigation (alla sidor):**
- Hem (index.html)
- Studera (#studera)
- Gör prov (pages/test/prov.html)
- PDF-böcker (pages/pdf/index.html)
- Min statistik (pages/profil/statistik.html)

**Studiesektionen på startsidan:**
1. **SSA Rekommendation** - Länk till SSA Hamshop för fysiska böcker
2. **Bok 1: Introduktion** (expanderbar)
   - 6 kapitel med övningar
3. **Bok 2: Certifikatsförberedelse** (expanderbar)
   - 10 kapitel med provfrågor

**Provträningssektionen:**
- Övningsprov (per kapitel)
- Simulerat prov (60 frågor, 90 min)
- Se statistik

**Bonusmaterial (längst ner):**
- PMR446-boken (licensfri radio)
- Morsekodsboken (CW)

## Statistikspårning

**LocalStorage-nycklar:**
- `chapterProgress` - Framsteg per kapitel
- `testResults` - Resultat från genomförda prov
- `questionsAnswered` - Antal besvarade frågor
- `bookProgress` - Vilka böcker som påbörjats/slutförts

**Synliga statistik:**
- Kapitel klara (0/16 totalt: 6 intro + 10 certifikat)
- Frågor besvarade
- Genomsnittlig poäng
- Provstatus (redo/ej redo för PTS-prov)

## Filstorlekar och status

| Sektion | Antal filer | Status | Prioritet |
|---------|-------------|--------|-----------|
| Introduktionsboken | 6 kapitel | ✅ Komplett | ⭐⭐⭐ |
| Certifikatsboken | 10 kapitel | 🔄 Pågående | ⭐⭐⭐ |
| PMR446-boken | 5 kapitel | ✅ Komplett | ⭐⭐ |
| Morsekodsboken | 6 kapitel | ✅ Komplett | ⭐ |
| Provsystem | 3 sidor | ✅ Komplett | ⭐⭐⭐ |
| PDF-system | 2+ sidor | 🔄 Pågående | ⭐⭐ |
| Statistik | 1 sida | ✅ Komplett | ⭐⭐⭐ |

**Status-symboler:**
- ✅ Komplett och fungerande
- 🔄 Pågående utveckling
- 🔜 Planerad
- ❌ Pausad/avbruten

## Pedagogisk progressionsplan

**Nybörjare (dag 1-3):**
1. Läs PMR446-boken (1h) → Börja experimentera med PMR
2. Läs Introduktionsboken kap 1-3 (1h)
3. Genomför intro-övningar

**Grundläggande studier (vecka 1-2):**
1. Slutför Introduktionsboken (kap 4-6)
2. Börja Certifikatsboken kap 1-3
3. Träna övningsprov efter varje kapitel

**Fördjupning (vecka 3-4):**
1. Certifikatsboken kap 4-7
2. Simulerade prov regelbundet
3. Förstärk svaga områden

**Provförberedelse (vecka 5-6):**
1. Certifikatsboken kap 8-10
2. Genomför minst 5 fullständiga simulerade prov
3. Måste ha 75%+ genomsnittligt resultat

**Frivilligt/Extra:**
- Morsekodsboken (när som helst)
- Fördjupningsartiklar
- Besök radioklubbar

## Framtida tillägg (planerade)

| Funktion/Innehåll | Beskrivning | Prioritet | Status |
|-------------------|-------------|-----------|--------|
| Antennbygge-sektion | DIY-antenner steg för steg | Medel | 🔜 |
| Digital radio-bok | FT8, DMR, D-STAR, APRS | Medel | 🔜 |
| Interaktiva kretssimulatorer | Experimentera med kretsar i webbläsaren | Hög | 🔜 |
| Video-genomgångar | YouTube-integrering för vissa kapitel | Låg | 🔜 |
| Nödkommunikationsguide | FRO, prepping, krisradio | Låg | 🔜 |
| Kontestguide | Tävla i amatörradio | Låg | 🔜 |
| Mobil app | PWA för offline-läsning | Medel | 🔜 |
| Community-forum | Diskussioner och frågor | Låg | 🔜 |

## Teknisk information

**Webbläsarkompatibilitet:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (responsive design)

**LocalStorage-användning:**
- Ingen server-kommunikation
- All data lagras lokalt i användarens webbläsare
- Ingen datainsamling eller tracking
- GDPR-kompatibel (ingen persondata samlas in)

**Responsiv design:**
- Mobil-first approach
- Breakpoints: 768px, 1024px, 1440px
- Touch-optimerad navigation
- Läsbar typografi på alla skärmstorlekar

---

**Kontakt & Feedback:**  
Denna plattform är skapad som ett gratis komplement till SSA:s officiella utbildningsmaterial. För feedback eller frågor, använd GitHub Issues eller kontakta skaparen.

**Disclaimer:**  
Radioskola.se är inte officiellt kopplad till PTS (Post- och telestyrelsen) eller SSA (Sveriges Sändareamatörer). Materialet är baserat på offentligt tillgängliga läromedel och är skapat för utbildningsändamål.

---

*Senast uppdaterad: 2026-02-04*  
*Version: 2.1*