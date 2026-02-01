Här är den kompletta uppdaterade mappstrukturen:

---

# Radioskola.se – Mappstruktur

Senast uppdaterad: 2026-02-01

## Översikt

```
radioamator-utbildning/
│
├── index.html                      # Startsida med statistik och kapitelöversikt
├── introduktion.html               # Startsida för förberedande kapitel
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
│   ├── pmr446/                     # PMR446-BOKEN (licensfri radio)
│   │   ├── pmr-1-vad-ar-pmr446.html
│   │   ├── pmr-2-kom-igang.html
│   │   ├── pmr-3-kanaler-koder.html
│   │   ├── pmr-4-rackvidd-tips.html
│   │   └── pmr-5-fran-pmr-till-amatorradio.html
│   │
│   ├── introduktion/               # FÖRBEREDANDE KAPITEL
│   │   ├── intro-1-vad-ar-radio.html
│   │   ├── intro-2-radiohistoria.html
│   │   ├── intro-3-nar-radio-raddade-liv.html
│   │   ├── intro-4-matematik-fysik.html
│   │   ├── intro-5-frekvensbanden.html
│   │   └── intro-6-vad-gor-radioamatorer.html
│   │
│   ├── chapters/                   # UTBILDNINGSKAPITEL (certifikatsinnehåll)
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

## Böcker/Sektioner

### Bok 0: PMR446 – Komradio för alla
För folk som är sugna på att börja NU. PMR kräver ingen licens – bara köpa och köra.
Målgrupp: Barn (8+), ungdomar, familjer, friluftsfolk, nyfikna nybörjare.

| # | Fil | Innehåll |
|---|-----|----------|
| 1 | pmr-1-vad-ar-pmr446.html | Introduktion till PMR446, regler, användningsområden |
| 2 | pmr-2-kom-igang.html | Praktisk guide: köpa, ladda, första QSO |
| 3 | pmr-3-kanaler-koder.html | Kanaler 1-16, CTCSS-koder, störningar |
| 4 | pmr-4-rackvidd-tips.html | Räckvidd, antennplacering, tips & tricks |
| 5 | pmr-5-fran-pmr-till-amatorradio.html | Bryggan till amatörradio, varför certifikat |

### Bok 1: Introduktion till radions värld
Syftet är att ge grundläggande förståelse INNAN man börjar med certifikatsmaterialet.
Målgrupp: Nybörjare, unga (10-15 år), de som känner sig osäkra på matte/teknik.

| # | Fil | Innehåll |
|---|-----|----------|
| 1 | intro-1-vad-ar-radio.html | Vad radiovågor är, sändare/mottagare, radio i vardagen |
| 2 | intro-2-radiohistoria.html | Hertz, Marconi, Titanic, radioamatörernas bidrag |
| 3 | intro-3-nar-radio-raddade-liv.html | Titanic, tsunamin 2004, orkaner, FRO i Sverige |
| 4 | intro-4-matematik-fysik.html | Prefix, enheter, Ohms lag, effekt, decibel |
| 5 | intro-5-frekvensbanden.html | Spektrumet, HF/VHF/UHF, amatörband, regler |
| 6 | intro-6-vad-gor-radioamatorer.html | DX, contest, bygga, satelliter, nödkom, digital |

### Bok 2: Förberedelsebok för radiocertifikatet
Det faktiska materialet som krävs för att klara certifikatsprovet.
Målgrupp: Certifikatssökande som vill klara PTS-provet.

| # | Fil | Innehåll |
|---|-----|----------|
| 1 | kapitel-1-grundlaggande-elektronik.html | Ström, spänning, resistans, komponenter |
| 2 | kapitel-2-radioteknik.html | Oscillatorer, modulering, mottagare, sändare |
| 3 | kapitel-3-antenner.html | Antenntyper, matning, SWR |
| 4 | kapitel-4-vagutbredning.html | Jonosfär, markvåg, rymdvåg, fading |
| 5 | kapitel-5-matinstrument.html | Multimeter, oscilloskop, SWR-mätare |
| 6 | kapitel-6-storningar.html | EMC, TVI, störningstyper, filter |
| 7 | kapitel-7-regler-bestammelser.html | Lag, PTS, ITU, bandplaner |
| 8 | kapitel-8-trafikmetoder.html | Anropssignaler, Q-koder, bokstaveringsalfabet |
| 9 | kapitel-9-sakerhet.html | Elsäkerhet, RF-strålning, blixtnedslag |
| 10 | kapitel-10-praktisk-trafik.html | QSO, contest, DX, repeatrar |

### PDF-nedladdningar
Utskriftsvänliga versioner för offline-läsning.

| Fil | Innehåll | Status |
|-----|----------|--------|
| index.html | Nedladdningssida med alla PDF:er | ✅ Klar |
| pmr446-bok.html | PMR446-boken komplett (utskriftsvänlig) | ✅ Klar |
| intro-bok.html | Introduktionsboken komplett | 🔜 Planerad |
| cert-sammanfattning.html | Certifikatssammanfattning | 🔜 Planerad |

## JavaScript-filer

| Fil | Syfte |
|-----|-------|
| main.js | Navigation, kapitelrendering, mobilmeny |
| quiz.js | Frågelogik, timer, resultatberäkning |
| exercises.js | Övningstyper för intro-kapitlen (fyll i, para ihop, etc.) |
| progress.js | Spara/läsa framsteg i localStorage |
| books.js | Hantering av bokexpandering på startsidan |
| chapters.js | Array med kapiteldata (titel, ikon, ämnen) |
| questions.js | Array med alla provfrågor |
| intro-chapters.js | Array med intro-kapitel och deras övningar |
| pmr-chapters.js | Array med PMR446-kapitel och övningar |

## Flöde för användaren

```
         ┌─────────────────┐
         │   index.html    │
         │   (startsida)   │
         └────────┬────────┘
                  │
    ┌─────────────┼─────────────┬─────────────┐
    ▼             ▼             ▼             ▼
┌────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐
│PMR446  │  │Intro-    │  │Certifi-  │  │PDF:er   │
│Bok 0   │  │duktion   │  │katsbok   │  │(ladda   │
│        │  │Bok 1     │  │Bok 2     │  │ner)     │
└───┬────┘  └────┬─────┘  └────┬─────┘  └─────────┘
    │            │             │
    ▼            ▼             ▼
┌────────┐  ┌──────────┐  ┌──────────────┐
│Kapitel │  │Kapitel   │  │  Provträning │
│ 1-5    │  │ 1-6      │  │  & Övningar  │
└───┬────┘  └────┬─────┘  └──────┬───────┘
    │            │               │
    └────────────┴───────┬───────┘
                         ▼
                  ┌──────────────┐
                  │  Statistik   │
                  └──────────────┘
```

## Navigationsstruktur

```
Huvudnavigation:
├── Hem (index.html)
├── Böcker (#bocker)
│   ├── PMR446 (pages/pmr446/)
│   ├── Introduktion (pages/introduktion/)
│   └── Certifikatsbok (pages/chapters/)
├── Gör prov (pages/test/prov.html)
├── PDF-böcker (pages/pdf/index.html)
└── Min statistik (pages/profil/statistik.html)
```

## Filstorlekar och status

| Sektion | Antal filer | Status |
|---------|-------------|--------|
| PMR446-boken | 5 kapitel + 1 PDF | ✅ Komplett |
| Introduktionsboken | 6 kapitel | ✅ Komplett |
| Certifikatsboken | 10 kapitel | 🔄 Pågående |
| Provsystem | 3 sidor | ✅ Komplett |
| PDF-system | 2 sidor | ✅ Grund klar |
| Statistik | 1 sida | ✅ Komplett |

## Framtida tillägg (planerade)

| Bok/Sektion | Beskrivning | Prioritet |
|-------------|-------------|-----------|
| Morsekodsboken | Lär dig CW från grunden | Hög |
| Antennbygge | DIY-antenner steg för steg | Medel |
| Digital radio | FT8, DMR, D-STAR, APRS | Medel |
| Nödkommunikation | FRO, prepping, krisradio | Låg |
| Kontestguide | Tävla i amatörradio | Låg |

---

