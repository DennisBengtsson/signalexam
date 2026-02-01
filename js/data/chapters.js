// ============================================
// KAPITELDATA FÖR RADIOAMATÖR UTBILDNING
// ============================================

const chapters = [
    {
        number: 1,
        id: 1,
        slug: "kapitel-1-grundlaggande-elektronik",
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
        estimatedTime: 45,
        questionCount: 45
    },
    {
        number: 2,
        id: 2,
        slug: "kapitel-2-radioteknik",
        title: "Radioteknik och Radiosystem",
        shortTitle: "Radioteknik",
        description: "Förstå hur sändare och mottagare fungerar, modulationstyper och transceiveruppbyggnad.",
        icon: "📻",
        topics: [
            "Oscillatorer",
            "Modulationstyper (AM, FM, SSB)",
            "Sändaruppbyggnad",
            "Mottagaruppbyggnad",
            "Superheterodynprincipen",
            "Transceivrar",
            "Digitala modulationsformer",
            "SDR - Software Defined Radio"
        ],
        estimatedTime: 50,
        questionCount: 50
    },
    {
        number: 3,
        id: 3,
        slug: "kapitel-3-antenner",
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
        estimatedTime: 40,
        questionCount: 40
    },
    {
        number: 4,
        id: 4,
        slug: "kapitel-4-vagutbredning",
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
        estimatedTime: 35,
        questionCount: 35
    },
    {
        number: 5,
        id: 5,
        slug: "kapitel-5-matinstrument",
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
            "Fältstyrkemätare",
            "Spektrumanalysator"
        ],
        estimatedTime: 30,
        questionCount: 30
    },
    {
        number: 6,
        id: 6,
        slug: "kapitel-6-storningar",
        title: "Störningar (EMC)",
        shortTitle: "EMC/Störningar",
        description: "Förstå hur störningar uppkommer och hur de kan förebyggas och åtgärdas.",
        icon: "🔇",
        topics: [
            "EMC-grundbegrepp",
            "Störningskällor",
            "Störningsmottaglighet",
            "Övertonsstörningar",
            "Intermodulation",
            "Filtertekniker",
            "Jordning och skärmning",
            "Felsökning av störningar"
        ],
        estimatedTime: 35,
        questionCount: 35
    },
    {
        number: 7,
        id: 7,
        slug: "kapitel-7-regler-bestammelser",
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
        estimatedTime: 45,
        questionCount: 45
    },
    {
        number: 8,
        id: 8,
        slug: "kapitel-8-trafikmetoder",
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
        estimatedTime: 40,
        questionCount: 40
    },
    {
        number: 9,
        id: 9,
        slug: "kapitel-9-sakerhet",
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
        estimatedTime: 25,
        questionCount: 30
    },
    {
        number: 10,
        id: 10,
        slug: "kapitel-10-praktisk-trafik",
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
        estimatedTime: 50,
        questionCount: 35
    }
];

// Alias för bakåtkompatibilitet (om något script använder CHAPTERS)
const CHAPTERS = chapters;

// Hjälpfunktioner
function getChapterById(id) {
    return chapters.find(ch => ch.id === id);
}

function getChapterBySlug(slug) {
    return chapters.find(ch => ch.slug === slug);
}

function getChapterByNumber(number) {
    return chapters.find(ch => ch.number === number);
}

// Exportera för Node.js (om det används)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chapters, CHAPTERS, getChapterById, getChapterBySlug, getChapterByNumber };
}
