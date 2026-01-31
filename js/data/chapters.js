// ============================================
// KAPITELDATA FÖR RADIOAMATÖR UTBILDNING
// ============================================

const CHAPTERS = [
    {
        id: 1,
        slug: "grundlaggande-elektronik",
        title: "Grundläggande Elektronik",
        shortTitle: "Elektronik",
        description: "Lär dig om ström, spänning, resistans, kondensatorer, spolar och grundläggande kretsteori.",
        icon: "⚡",
        topics: [
            "Elektrisk ström och spänning",
            "Resistans och Ohms lag",
            "Effekt och energi",
            "Kondensatorer",
            "Spolar och induktans",
            "Serie- och parallellkoppling",
            "Växelström och impedans",
            "Filter och resonanskretsar"
        ],
        estimatedTime: "3-4 timmar",
        questionCount: 45
    },
    {
        id: 2,
        slug: "radioteknik",
        title: "Radioteknik och Radiosystem",
        shortTitle: "Radioteknik",
        description: "Förstå hur sändare och mottagare fungerar, modulationstyper och transceiveruppbyggnad.",
        icon: "📻",
        topics: [
            "Oscillatorer",
            "Modulationstyper (AM, FM, SSB)",
            "Sändaruppbyggnad",
            "Motttagaruppbyggnad",
            "Superheterodynprincipen",
            "Transceivrar",
            "Digitala modulationsformer",
            "SDR - Software Defined Radio"
        ],
        estimatedTime: "4-5 timmar",
        questionCount: 50
    },
    {
        id: 3,
        slug: "antenner",
        title: "Antenner och Matarledningar",
        shortTitle: "Antenner",
        description: "Lär dig om olika antenntyper, deras egenskaper och hur de ansluts till radion.",
        icon: "📡",
        topics: [
            "Antennens grundprinciper",
            "Dipolantenner",
            "Vertikala antenner",
            "Yagi-antenner",
            "Loopantenner",
            "Koaxialkablar",
            "SWR och impedansanpassning",
            "Balun och anpassningsenheter"
        ],
        estimatedTime: "3-4 timmar",
        questionCount: 40
    },
    {
        id: 4,
        slug: "vagutbredning",
        title: "Vågutbredning",
        shortTitle: "Vågutbredning",
        description: "Förstå hur radiovågor breder ut sig och vilka faktorer som påverkar kommunikation.",
        icon: "🌊",
        topics: [
            "Elektromagnetiska vågor",
            "Frekvensspektrum",
            "Markvåg",
            "Rymdvåg och jonosfären",
            "Tropposfärisk utbredning",
            "Solens påverkan",
            "Skip och dead zones",
            "VHF/UHF-utbredning"
        ],
        estimatedTime: "2-3 timmar",
        questionCount: 35
    },
    {
        id: 5,
        slug: "matinstrument",
        title: "Mätinstrument och Mätmetoder",
        shortTitle: "Mätning",
        description: "Lär dig använda multimeter, SWR-mätare och andra mätinstrument.",
        icon: "📊",
        topics: [
            "Multimeter",
            "SWR-mätare",
            "Effektmätning",
            "Frekvensmätning",
            "Oscilloskop grundläggande",
            "Dummyload",
            "Fältsstyrkemätare",
            "Spektrumanalysator"
        ],
        estimatedTime: "2-3 timmar",
        questionCount: 30
    },
    {
        id: 6,
        slug: "storningar",
        title: "Störningar (EMC)",
        shortTitle: "EMC/Störningar",
        description: "Förstå hur störningar uppkommer och hur de kan förebyggas och åtgärdas.",
        icon: "🔇",
        topics: [
            "EMC-grundbegrepp",
            "Störningskällor",
            "Störningsmottaglighet",
            "Övertonsströrningar",
            "Intermodulation",
            "Filtertekniker",
            "Jordning och skärmning",
            "Felsökning av störningar"
        ],
        estimatedTime: "2-3 timmar",
        questionCount: 35
    },
    {
        id: 7,
        slug: "regler-bestammelser",
        title: "Regler och Bestämmelser",
        shortTitle: "Regler",
        description: "Lär dig de lagar och förordningar som gäller för radioamatörer i Sverige.",
        icon: "📜",
        topics: [
            "PTS och tillståndskrav",
            "CEPT-licens",
            "Amatörradiobanden",
            "Sändningsklasser",
            "Effektbegränsningar",
            "Identifiering och anropssignaler",
            "Loggbokskrav",
            "Internationella regler (ITU)"
        ],
        estimatedTime: "3-4 timmar",
        questionCount: 45
    },
    {
        id: 8,
        slug: "trafikmetoder",
        title: "Trafikmetoder och Operatörsteknik",
        shortTitle: "Trafik",
        description: "Lär dig hur man genomför radiosamtal, Q-koder och fonetiska alfabetet.",
        icon: "🎙️",
        topics: [
            "Upprättande av radioförbindelse",
            "RST-systemet",
            "Q-koder",
            "Fonetiska alfabetet",
            "Nödtrafik",
            "Contest och diplom",
            "DX-trafik",
            "Digitala trafiksätt"
        ],
        estimatedTime: "2-3 timmar",
        questionCount: 40
    },
    {
        id: 9,
        slug: "sakerhet",
        title: "Elsäkerhet",
        shortTitle: "Säkerhet",
        description: "Viktiga säkerhetsaspekter vid arbete med radioutrustning och antenner.",
        icon: "⚠️",
        topics: [
            "Elsäkerhet grunderna",
            "Skyddsjordning",
            "Högspänning i sändare",
            "Säkringar och skydd",
            "RF-exponering",
            "Antennsäkerhet",
            "Åskskydd",
            "Första hjälpen vid elolycka"
        ],
        estimatedTime: "2 timmar",
        questionCount: 30
    },
    {
        id: 10,
        slug: "praktisk-trafik",
        title: "Praktisk Radiotrafik",
        shortTitle: "Praktik",
        description: "Praktiska tips och övningar för att komma igång som radioamatör.",
        icon: "🎯",
        topics: [
            "Val av utrustning",
            "Stationsuppbyggnad",
            "Första QSO",
            "Bandplanering",
            "Repeatertrafik",
            "APRS och digital",
            "Portabel och mobil trafik",
            "Satellittrafik"
        ],
        estimatedTime: "3-4 timmar",
        questionCount: 35
    }
];

// Funktion för att hämta kapitel via ID
function getChapterById(id) {
    return CHAPTERS.find(ch => ch.id === id);
}

// Funktion för att hämta kapitel via slug
function getChapterBySlug(slug) {
    return CHAPTERS.find(ch => ch.slug === slug);
}

// Exportera för användning i moduler (om du använder ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHAPTERS, getChapterById, getChapterBySlug };
}
