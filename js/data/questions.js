// ============================================
// FRÅGEDATABAS FÖR RADIOAMATÖR UTBILDNING
// ============================================

const QUESTIONS = [
    // ============================================
    // KAPITEL 1: GRUNDLÄGGANDE ELEKTRONIK
    // ============================================
    {
        id: 1,
        chapterId: 1,
        question: "Vad är enheten för elektrisk ström?",
        options: [
            { id: "a", text: "Volt (V)" },
            { id: "b", text: "Ampere (A)" },
            { id: "c", text: "Ohm (Ω)" },
            { id: "d", text: "Watt (W)" }
        ],
        correctAnswer: "b",
        explanation: "Elektrisk ström mäts i Ampere (A), uppkallat efter den franske fysikern André-Marie Ampère. Volt är enheten för spänning, Ohm för resistans och Watt för effekt.",
        difficulty: "easy"
    },
    {
        id: 2,
        chapterId: 1,
        question: "Enligt Ohms lag, om spänningen är 12V och resistansen är 4Ω, vad är strömmen?",
        options: [
            { id: "a", text: "48 A" },
            { id: "b", text: "3 A" },
            { id: "c", text: "8 A" },
            { id: "d", text: "0,33 A" }
        ],
        correctAnswer: "b",
        explanation: "Ohms lag: I = U/R = 12V / 4Ω = 3A. Strömmen är spänningen delat med resistansen.",
        difficulty: "easy"
    },
    {
        id: 3,
        chapterId: 1,
        question: "Vad händer med totalresistansen när två motstånd på vardera 100Ω kopplas parallellt?",
        options: [
            { id: "a", text: "200 Ω" },
            { id: "b", text: "100 Ω" },
            { id: "c", text: "50 Ω" },
            { id: "d", text: "25 Ω" }
        ],
        correctAnswer: "c",
        explanation: "Vid parallellkoppling av två lika stora motstånd blir totalresistansen hälften: R_total = R/2 = 100Ω/2 = 50Ω.",
        difficulty: "medium"
    },
    {
        id: 4,
        chapterId: 1,
        question: "Vilken formel beskriver elektrisk effekt?",
        options: [
            { id: "a", text: "P = U × I" },
            { id: "b", text: "P = U / I" },
            { id: "c", text: "P = I / U" },
            { id: "d", text: "P = U + I" }
        ],
        correctAnswer: "a",
        explanation: "Elektrisk effekt P (Watt) = Spänning U (Volt) × Ström I (Ampere).",
        difficulty: "easy"
    },
    {
        id: 5,
        chapterId: 1,
        question: "Vad är en kondensators huvudsakliga funktion?",
        options: [
            { id: "a", text: "Att begränsa strömmen" },
            { id: "b", text: "Att lagra elektrisk energi i ett elektriskt fält" },
            { id: "c", text: "Att omvandla växelström till likström" },
            { id: "d", text: "Att förstärka signaler" }
        ],
        correctAnswer: "b",
        explanation: "En kondensator lagrar elektrisk energi i ett elektriskt fält mellan två ledande plattor.",
        difficulty: "easy"
    },
    {
        id: 6,
        chapterId: 1,
        question: "Vad händer med kapacitansen när två kondensatorer på 10µF vardera seriekopplas?",
        options: [
            { id: "a", text: "20 µF" },
            { id: "b", text: "10 µF" },
            { id: "c", text: "5 µF" },
            { id: "d", text: "100 µF" }
        ],
        correctAnswer: "c",
        explanation: "Vid seriekoppling av två lika stora kondensatorer: C_total = C/2 = 10µF/2 = 5µF.",
        difficulty: "medium"
    },
    {
        id: 7,
        chapterId: 1,
        question: "Vad är induktansens enhet?",
        options: [
            { id: "a", text: "Farad (F)" },
            { id: "b", text: "Henry (H)" },
            { id: "c", text: "Hertz (Hz)" },
            { id: "d", text: "Tesla (T)" }
        ],
        correctAnswer: "b",
        explanation: "Induktans mäts i Henry (H), uppkallat efter Joseph Henry.",
        difficulty: "easy"
    },
    {
        id: 8,
        chapterId: 1,
        question: "Vad kännetecknar en ideal diod?",
        options: [
            { id: "a", text: "Den leder ström lika bra i båda riktningarna" },
            { id: "b", text: "Den leder endast ström i en riktning" },
            { id: "c", text: "Den har konstant resistans" },
            { id: "d", text: "Den förstärker signaler" }
        ],
        correctAnswer: "b",
        explanation: "En diod är en halvledarkomponent som endast leder ström i en riktning.",
        difficulty: "easy"
    },
    {
        id: 9,
        chapterId: 1,
        question: "Vilken typ av filter släpper igenom låga frekvenser och dämpar höga?",
        options: [
            { id: "a", text: "Högpassfilter" },
            { id: "b", text: "Lågpassfilter" },
            { id: "c", text: "Bandpassfilter" },
            { id: "d", text: "Bandspärrfilter" }
        ],
        correctAnswer: "b",
        explanation: "Ett lågpassfilter släpper igenom frekvenser under brytfrekvensen och dämpar högre frekvenser.",
        difficulty: "easy"
    },
    {
        id: 10,
        chapterId: 1,
        question: "Vad är reaktans?",
        options: [
            { id: "a", text: "Motstånd i en likströmskrets" },
            { id: "b", text: "Frekvensberoende motstånd i en växelströmskrets" },
            { id: "c", text: "Effektförlust i en ledare" },
            { id: "d", text: "Magnetisk fältstyrka" }
        ],
        correctAnswer: "b",
        explanation: "Reaktans är det frekvensberoende motståndet som kondensatorer och spolar uppvisar i växelströmskretsar. Mäts i Ohm.",
        difficulty: "medium"
    },

    // ============================================
    // KAPITEL 2: RADIOTEKNIK
    // ============================================
    {
        id: 11,
        chapterId: 2,
        question: "Vad är huvudfunktionen hos en oscillator i en radiosändare?",
        options: [
            { id: "a", text: "Att förstärka utgångssignalen" },
            { id: "b", text: "Att generera en stabil bärvågsfrekvens" },
            { id: "c", text: "Att modulera signalen" },
            { id: "d", text: "Att filtrera bort störningar" }
        ],
        correctAnswer: "b",
        explanation: "Oscillatorn genererar den grundläggande frekvens (bärvåg) som sändaren arbetar på.",
        difficulty: "easy"
    },
    {
        id: 12,
        chapterId: 2,
        question: "Vad innebär AM (Amplitudmodulation)?",
        options: [
            { id: "a", text: "Bärvågens frekvens varieras med modulationssignalen" },
            { id: "b", text: "Bärvågens amplitud varieras med modulationssignalen" },
            { id: "c", text: "Bärvågens fas varieras med modulationssignalen" },
            { id: "d", text: "Bärvågen slås av och på" }
        ],
        correctAnswer: "b",
        explanation: "Vid AM varieras bärvågens amplitud (styrka) i takt med modulationssignalen.",
        difficulty: "easy"
    },
    {
        id: 13,
        chapterId: 2,
        question: "Vad är fördelen med SSB jämfört med AM?",
        options: [
            { id: "a", text: "Enklare utrustning" },
            { id: "b", text: "Bättre ljudkvalitet" },
            { id: "c", text: "Högre effektivitet och smalare bandbredd" },
            { id: "d", text: "Lättare att ställa in" }
        ],
        correctAnswer: "c",
        explanation: "SSB använder endast ett sidband och ingen bärvåg, vilket ger bättre effektivitet och smalare bandbredd.",
        difficulty: "medium"
    },
    {
        id: 14,
        chapterId: 2,
        question: "Vad är FM-deviation?",
        options: [
            { id: "a", text: "Frekvensändringen från bärvågen vid modulering" },
            { id: "b", text: "Amplitudvariationen vid modulering" },
            { id: "c", text: "Fasvridningen vid modulering" },
            { id: "d", text: "Bandbredden på FM-signalen" }
        ],
        correctAnswer: "a",
        explanation: "FM-deviation är hur mycket frekvensen avviker från bärvågsfrekvensen när signalen moduleras.",
        difficulty: "medium"
    },
    {
        id: 15,
        chapterId: 2,
        question: "Vad är huvudprincipen bakom en superheterodynmottagare?",
        options: [
            { id: "a", text: "Direkt förstärkning av inkommande signal" },
            { id: "b", text: "Konvertering till en fast mellanfrekvens (MF)" },
            { id: "c", text: "Digital signalbehandling" },
            { id: "d", text: "Regenerativ förstärkning" }
        ],
        correctAnswer: "b",
        explanation: "Superheterodynprincipen innebär att signalen blandas med en lokal oscillator för att skapa en fast mellanfrekvens.",
        difficulty: "medium"
    },
    {
        id: 16,
        chapterId: 2,
        question: "Vad betyder förkortningen SDR?",
        options: [
            { id: "a", text: "Standard Digital Radio" },
            { id: "b", text: "Software Defined Radio" },
            { id: "c", text: "Single Data Rate" },
            { id: "d", text: "Selective Digital Receiver" }
        ],
        correctAnswer: "b",
        explanation: "SDR (Software Defined Radio) är en radiotyp där hårdvarukomponenter ersätts av mjukvara.",
        difficulty: "easy"
    },
    {
        id: 17,
        chapterId: 2,
        question: "Vad är syftet med en PA (Power Amplifier) i en sändare?",
        options: [
            { id: "a", text: "Att generera bärvågen" },
            { id: "b", text: "Att modulera signalen" },
            { id: "c", text: "Att förstärka signalen till önskad uteffekt" },
            { id: "d", text: "Att filtrera bort övertoner" }
        ],
        correctAnswer: "c",
        explanation: "PA (slutsteget) förstärker signalen till den slutliga uteffekten som matas till antennen.",
        difficulty: "easy"
    },
    {
        id: 18,
        chapterId: 2,
        question: "Vilken komponent i en sändare förhindrar att övertoner skickas ut?",
        options: [
            { id: "a", text: "Oscillatorn" },
            { id: "b", text: "Modulatorn" },
            { id: "c", text: "Lågpassfiltret" },
            { id: "d", text: "Mixern" }
        ],
        correctAnswer: "c",
        explanation: "Ett lågpassfilter efter slutsteget dämpar övertoner så att de inte strålas ut.",
        difficulty: "medium"
    },
    {
        id: 19,
        chapterId: 2,
        question: "Vad menas med selektivitet hos en mottagare?",
        options: [
            { id: "a", text: "Förmågan att ta emot svaga signaler" },
            { id: "b", text: "Förmågan att skilja mellan närliggande frekvenser" },
            { id: "c", text: "Förmågan att motstå störningar" },
            { id: "d", text: "Förmågan att återge ljud korrekt" }
        ],
        correctAnswer: "b",
        explanation: "Selektivitet är mottagarens förmåga att skilja ut önskad signal från närliggande frekvenser.",
        difficulty: "medium"
    },
    {
        id: 20,
        chapterId: 2,
        question: "Vad menas med känslighet hos en mottagare?",
        options: [
            { id: "a", text: "Förmågan att ta emot svaga signaler" },
            { id: "b", text: "Förmågan att skilja mellan närliggande frekvenser" },
            { id: "c", text: "Förmågan att motstå överbelastning" },
            { id: "d", text: "Förmågan att återge ljud korrekt" }
        ],
        correctAnswer: "a",
        explanation: "Känslighet anger den minsta signalnivå som mottagaren kan ta emot med godtagbar kvalitet.",
        difficulty: "easy"
    },

    // ============================================
    // KAPITEL 3: ANTENNER
    // ============================================
    {
        id: 21,
        chapterId: 3,
        question: "Hur lång är en halvvågsdipol för 7 MHz?",
        options: [
            { id: "a", text: "Cirka 10 meter" },
            { id: "b", text: "Cirka 20 meter" },
            { id: "c", text: "Cirka 40 meter" },
            { id: "d", text: "Cirka 5 meter" }
        ],
        correctAnswer: "b",
        explanation: "Halvvågsdipol längd ≈ 150/f(MHz) = 150/7 ≈ 21 meter (cirka 20 meter).",
        difficulty: "medium"
    },
    {
        id: 22,
        chapterId: 3,
        question: "Vad är impedansen hos en halvvågsdipol i fritt utrymme?",
        options: [
            { id: "a", text: "50 Ω" },
            { id: "b", text: "73 Ω" },
            { id: "c", text: "300 Ω" },
            { id: "d", text: "600 Ω" }
        ],
        correctAnswer: "b",
        explanation: "En halvvågsdipol i fritt utrymme har en impedans på cirka 73 Ω.",
        difficulty: "medium"
    },
    {
        id: 23,
        chapterId: 3,
        question: "Vad gör en Yagi-antenn?",
        options: [
            { id: "a", text: "Strålar lika i alla riktningar" },
            { id: "b", text: "Koncentrerar signalen i en riktning" },
            { id: "c", text: "Tar endast emot vertikalt polariserade signaler" },
            { id: "d", text: "Filtrerar bort störningar" }
        ],
        correctAnswer: "b",
        explanation: "En Yagi-antenn är en riktantenn som koncentrerar signalen i en riktning genom direktorer och reflektor.",
        difficulty: "easy"
    },
    {
        id: 24,
        chapterId: 3,
        question: "Vad är SWR?",
        options: [
            { id: "a", text: "Signal Width Ratio" },
            { id: "b", text: "Standing Wave Ratio" },
            { id: "c", text: "Signal Wave Response" },
            { id: "d", text: "Static Wave Resistance" }
        ],
        correctAnswer: "b",
        explanation: "SWR (Standing Wave Ratio) anger hur väl antennen är anpassad till matarledningen. SWR 1:1 är perfekt.",
        difficulty: "easy"
    },
    {
        id: 25,
        chapterId: 3,
        question: "Vilket SWR-värde anses vara acceptabelt för de flesta amatörtillämpningar?",
        options: [
            { id: "a", text: "Under 1,5:1" },
            { id: "b", text: "Under 3:1" },
            { id: "c", text: "Under 5:1" },
            { id: "d", text: "Under 10:1" }
        ],
        correctAnswer: "a",
        explanation: "SWR under 1,5:1 anses vara bra och innebär minimal effektförlust. Under 2:1 är acceptabelt.",
        difficulty: "easy"
    },
    {
        id: 26,
        chapterId: 3,
        question: "Vad är en balun?",
        options: [
            { id: "a", text: "En typ av antenn" },
            { id: "b", text: "En anordning som matchar balanserad och obalanserad ledning" },
            { id: "c", text: "Ett filter för övertoner" },
            { id: "d", text: "En förstärkare" }
        ],
        correctAnswer: "b",
        explanation: "En balun (balanced-unbalanced) matchar mellan balanserad last (dipol) och obalanserad kabel (koax).",
        difficulty: "medium"
    },
    {
        id: 27,
        chapterId: 3,
        question: "Vilken karakteristisk impedans har vanlig 50-ohms koaxialkabel?",
        options: [
            { id: "a", text: "50 Ω" },
            { id: "b", text: "75 Ω" },
            { id: "c", text: "300 Ω" },
            { id: "d", text: "600 Ω" }
        ],
        correctAnswer: "a",
        explanation: "Standard koaxialkabel för amatörradio (t.ex. RG-58, RG-213) har 50 Ω impedans.",
        difficulty: "easy"
    },
    {
        id: 28,
        chapterId: 3,
        question: "Vad händer med kabeldämpningen när frekvensen ökar?",
        options: [
            { id: "a", text: "Den minskar" },
            { id: "b", text: "Den ökar" },
            { id: "c", text: "Den förblir konstant" },
            { id: "d", text: "Den försvinner" }
        ],
        correctAnswer: "b",
        explanation: "Kabeldämpningen ökar med ökande frekvens. Därför används grövre kabel på VHF/UHF.",
        difficulty: "medium"
    },
    {
        id: 29,
        chapterId: 3,
        question: "Vad menas med antennvinst?",
        options: [
            { id: "a", text: "Antennen förstärker signalen aktivt" },
            { id: "b", text: "Antennen koncentrerar energin i viss riktning" },
            { id: "c", text: "Antennen tar emot mer brus" },
            { id: "d", text: "Antennen har lägre förluster" }
        ],
        correctAnswer: "b",
        explanation: "Antennvinst innebär att antennen koncentrerar energin i viss riktning. Den skapar inte energi.",
        difficulty: "medium"
    },
    {
        id: 30,
        chapterId: 3,
        question: "Vad är en groundplane-antenn?",
        options: [
            { id: "a", text: "En horisontell antenn" },
            { id: "b", text: "En vertikal antenn med radialer som jordplan" },
            { id: "c", text: "En riktantenn" },
            { id: "d", text: "En loopantenn" }
        ],
        correctAnswer: "b",
        explanation: "En groundplane är en vertikal kvartsvågsantenn med radialer som skapar ett artificiellt jordplan.",
        difficulty: "medium"
    },

    // ============================================
    // KAPITEL 4: VÅGUTBREDNING
    // ============================================
    {
        id: 31,
        chapterId: 4,
        question: "Vilken utbredningsform dominerar på kortvåg (HF) för långväga förbindelser?",
        options: [
            { id: "a", text: "Markvåg" },
            { id: "b", text: "Rymdvåg (jonosfärsreflektion)" },
            { id: "c", text: "Troposfärisk utbredning" },
            { id: "d", text: "Siktlinjeförbindelse" }
        ],
        correctAnswer: "b",
        explanation: "På HF reflekteras radiovågor av jonosfären vilket möjliggör förbindelser över stora avstånd.",
        difficulty: "easy"
    },
    {
        id: 32,
        chapterId: 4,
        question: "Vilket jonosfärsskikt är viktigast för HF-kommunikation på natten?",
        options: [
            { id: "a", text: "D-skiktet" },
            { id: "b", text: "E-skiktet" },
            { id: "c", text: "F-skiktet (F2)" },
            { id: "d", text: "A-skiktet" }
        ],
        correctAnswer: "c",
        explanation: "F-skiktet är det högsta och mest stabila, och är särskilt viktigt nattetid då D- och E-skikten försvinner.",
        difficulty: "medium"
    },
    {
        id: 33,
        chapterId: 4,
        question: "Vad menas med MUF (Maximum Usable Frequency)?",
        options: [
            { id: "a", text: "Den lägsta frekvens som kan användas" },
            { id: "b", text: "Den högsta frekvens som reflekteras av jonosfären" },
            { id: "c", text: "Den optimala frekvensen för kommunikation" },
            { id: "d", text: "Maximal sändarfrekvens" }
        ],
        correctAnswer: "b",
        explanation: "MUF är den högsta frekvens som reflekteras tillbaka av jonosfären vid given tidpunkt och riktning.",
        difficulty: "medium"
    },
    {
        id: 34,
        chapterId: 4,
        question: "Vad är en 'dead zone' (skip zone)?",
        options: [
            { id: "a", text: "Ett område där sändaren är trasig" },
            { id: "b", text: "Området mellan markvågens och rymdvågens räckvidd" },
            { id: "c", text: "Ett frekvensband utan aktivitet" },
            { id: "d", text: "En skärmad plats" }
        ],
        correctAnswer: "b",
        explanation: "Skip zone är området mellan markvågens räckvidd och där rymdvågen landar - här hörs inte signalen.",
        difficulty: "medium"
    },
    {
        id: 35,
        chapterId: 4,
        question: "Hur påverkar solfläckar HF-utbredningen?",
        options: [
            { id: "a", text: "Ingen påverkan" },
            { id: "b", text: "Fler solfläckar ger generellt bättre utbredning på högre frekvenser" },
            { id: "c", text: "Fler solfläckar försämrar alltid utbredningen" },
            { id: "d", text: "Endast påverkan på VHF" }
        ],
        correctAnswer: "b",
        explanation: "Hög solfläcksaktivitet joniserar jonosfären mer, vilket höjer MUF och möjliggör DX på högre band.",
        difficulty: "medium"
    },
    {
        id: 36,
        chapterId: 4,
        question: "Vilken utbredningsform används främst på VHF/UHF?",
        options: [
            { id: "a", text: "Jonosfärsreflektion" },
            { id: "b", text: "Markvåg" },
            { id: "c", text: "Siktlinje (line of sight)" },
            { id: "d", text: "Jordreflektion" }
        ],
        correctAnswer: "c",
        explanation: "VHF/UHF-signaler följer i huvudsak siktlinjen och passerar normalt genom jonosfären.",
        difficulty: "easy"
    },
    {
        id: 37,
        chapterId: 4,
        question: "Vad är sporadiskt E-skikt?",
        options: [
            { id: "a", text: "Ett permanent jonosfärsskikt" },
            { id: "b", text: "Tillfälliga joniserade områden som kan ge DX på VHF" },
            { id: "c", text: "Ett skikt som bara finns på vintern" },
            { id: "d", text: "Ett artificiellt skikt" }
        ],
        correctAnswer: "b",
        explanation: "Sporadiskt E är tillfälliga intensivt joniserade områden som kan möjliggöra långväga VHF-förbindelser.",
        difficulty: "hard"
    },
    {
        id: 38,
        chapterId: 4,
        question: "Vad är troposcatter?",
        options: [
            { id: "a", text: "Reflektion från jonosfären" },
            { id: "b", text: "Spridning av signaler i troposfären" },
            { id: "c", text: "Reflektion från markföremål" },
            { id: "d", text: "Absorption i atmosfären" }
        ],
        correctAnswer: "b",
        explanation: "Troposcatter innebär att VHF/UHF-signaler sprids av turbulens i troposfären.",
        difficulty: "hard"
    },
    {
        id: 39,
        chapterId: 4,
        question: "Hur påverkas radiovågor av hinder som byggnader?",
        options: [
            { id: "a", text: "De passerar obehindrat" },
            { id: "b", text: "De absorberas, reflekteras eller böjs" },
            { id: "c", text: "De förstärks" },
            { id: "d", text: "De ändrar frekvens" }
        ],
        correctAnswer: "b",
        explanation: "Radiovågor kan absorberas, reflekteras eller böjas (diffraktion) av hinder.",
        difficulty: "easy"
    },
    {
        id: 40,
        chapterId: 4,
        question: "Vad är grålinjen (grayline)?",
        options: [
            { id: "a", text: "En kabel för antenner" },
            { id: "b", text: "Övergångszonen mellan dag och natt som ger bra HF-utbredning" },
            { id: "c", text: "En störning på signalen" },
            { id: "d", text: "En typ av antenn" }
        ],
        correctAnswer: "b",
        explanation: "Grålinjen är gränsen mellan dag och natt. HF-utbredningen kan vara extra bra längs denna linje.",
        difficulty: "hard"
    },

    // ============================================
    // KAPITEL 5: MÄTINSTRUMENT
    // ============================================
    {
        id: 41,
        chapterId: 5,
        question: "Vad mäter en SWR-mätare?",
        options: [
            { id: "a", text: "Sändareffekt" },
            { id: "b", text: "Förhållandet mellan framåt- och reflekterad effekt" },
            { id: "c", text: "Frekvens" },
            { id: "d", text: "Modulationsgrad" }
        ],
        correctAnswer: "b",
        explanation: "SWR-mätaren visar förhållandet mellan framåtgående och reflekterad effekt, dvs hur bra antennen är anpassad.",
        difficulty: "easy"
    },
    {
        id: 42,
        chapterId: 5,
        question: "Vad är en dummyload?",
        options: [
            { id: "a", text: "En antenn för testning" },
            { id: "b", text: "En resistiv last för att testa sändare utan att stråla" },
            { id: "c", text: "En förstärkare" },
            { id: "d", text: "En typ av filter" }
        ],
        correctAnswer: "b",
        explanation: "En dummyload är ett motstånd (ofta 50Ω) som absorberar sändareffekten för tester utan att stråla ut.",
        difficulty: "easy"
    },
    {
        id: 43,
        chapterId: 5,
        question: "Hur ska en voltmeter kopplas för att mäta spänning?",
        options: [
            { id: "a", text: "I serie med lasten" },
            { id: "b", text: "Parallellt med lasten" },
            { id: "c", text: "Via en transformator" },
            { id: "d", text: "Via en kondensator" }
        ],
        correctAnswer: "b",
        explanation: "En voltmeter kopplas alltid parallellt med det som ska mätas.",
        difficulty: "easy"
    },
    {
        id: 44,
        chapterId: 5,
        question: "Hur ska en amperemeter kopplas för att mäta ström?",
        options: [
            { id: "a", text: "I serie med lasten" },
            { id: "b", text: "Parallellt med lasten" },
            { id: "c", text: "Via en transformator" },
            { id: "d", text: "Via en kondensator" }
        ],
        correctAnswer: "a",
        explanation: "En amperemeter kopplas alltid i serie så att strömmen passerar genom mätaren.",
        difficulty: "easy"
    },
    {
        id: 45,
        chapterId: 5,
        question: "Vad visar ett oscilloskop?",
        options: [
            { id: "a", text: "Endast spänning" },
            { id: "b", text: "Signalens form över tiden" },
            { id: "c", text: "Endast frekvens" },
            { id: "d", text: "Endast effekt" }
        ],
        correctAnswer: "b",
        explanation: "Ett oscilloskop visar hur en signal varierar över tiden, dvs signalens vågform.",
        difficulty: "easy"
    },
    {
        id: 46,
        chapterId: 5,
        question: "Vad är PEP (Peak Envelope Power)?",
        options: [
            { id: "a", text: "Medeleffekten" },
            { id: "b", text: "Toppeffekten i SSB-signalens kuvert" },
            { id: "c", text: "Effekten vid kontinuerlig bärvåg" },
            { id: "d", text: "Förlusteffekten" }
        ],
        correctAnswer: "b",
        explanation: "PEP är den maximala momentana effekten som uppnås vid topparna i en SSB-signal.",
        difficulty: "medium"
    },
    {
        id: 47,
        chapterId: 5,
        question: "Vilken enhet används för att ange effekt i dB relativt 1 milliwatt?",
        options: [
            { id: "a", text: "dBd" },
            { id: "b", text: "dBi" },
            { id: "c", text: "dBm" },
            { id: "d", text: "dBW" }
        ],
        correctAnswer: "c",
        explanation: "dBm är decibel relativt 1 milliwatt. 0 dBm = 1 mW, +30 dBm = 1 W.",
        difficulty: "medium"
    },
    {
        id: 48,
        chapterId: 5,
        question: "Hur många dB motsvarar en fördubbling av effekten?",
        options: [
            { id: "a", text: "1 dB" },
            { id: "b", text: "3 dB" },
            { id: "c", text: "6 dB" },
            { id: "d", text: "10 dB" }
        ],
        correctAnswer: "b",
        explanation: "3 dB motsvarar en fördubbling av effekten. 10 dB är 10 gånger, 6 dB är 4 gånger.",
        difficulty: "medium"
    },
    {
        id: 49,
        chapterId: 5,
        question: "Vad mäter en fältstyrkemätare?",
        options: [
            { id: "a", text: "Elektriskt fält från en radiosändare" },
            { id: "b", text: "Magnetfält" },
            { id: "c", text: "Jordresistans" },
            { id: "d", text: "Kabeldämpning" }
        ],
        correctAnswer: "a",
        explanation: "En fältstyrkemätare mäter styrkan på det elektromagnetiska fältet från en sändare.",
        difficulty: "easy"
    },
    {
        id: 50,
        chapterId: 5,
        question: "Vad är S-enheter på en S-meter?",
        options: [
            { id: "a", text: "Absoluta spänningsvärden" },
            { id: "b", text: "Relativa signalstyrkeenheter" },
            { id: "c", text: "Frekvensavvikelser" },
            { id: "d", text: "Effektvärden" }
        ],
        correctAnswer: "b",
        explanation: "S-enheter är relativa enheter för signalstyrka. Varje S-enhet motsvarar normalt 6 dB.",
        difficulty: "medium"
    },

    // ============================================
    // KAPITEL 6: STÖRNINGAR (EMC)
    // ============================================
    {
        id: 51,
        chapterId: 6,
        question: "Vad betyder EMC?",
        options: [
            { id: "a", text: "Electronic Machine Control" },
            { id: "b", text: "Electromagnetic Compatibility" },
            { id: "c", text: "Effective Modulation Control" },
            { id: "d", text: "Electronic Mode Converter" }
        ],
        correctAnswer: "b",
        explanation: "EMC = Electromagnetic Compatibility (elektromagnetisk kompatibilitet) - att utrustning fungerar utan att störa eller störas.",
        difficulty: "easy"
    },
    {
        id: 52,
        chapterId: 6,
        question: "Vad är en övertonstörning?",
        options: [
            { id: "a", text: "Störning från annan station på samma frekvens" },
            { id: "b", text: "Störning från harmoniska av sändarfrekvensen" },
            { id: "c", text: "Störning från blixtar" },
            { id: "d", text: "Störning från mobiltelefoner" }
        ],
        correctAnswer: "b",
        explanation: "Övertoner är harmoniska (multiplar) av grundfrekvensen. T.ex. kan 14 MHz ge övertoner på 28, 42, 56 MHz osv.",
        difficulty: "medium"
    },
    {
        id: 53,
        chapterId: 6,
        question: "Vad är TVI?",
        options: [
            { id: "a", text: "Television Video Input" },
            { id: "b", text: "Television Interference (TV-störning)" },
            { id: "c", text: "Total Voltage Increase" },
            { id: "d", text: "Transmitter Verification Index" }
        ],
        correctAnswer: "b",
        explanation: "TVI = Television Interference, störningar på TV-mottagning orsakade av radiosändare.",
        difficulty: "easy"
    },
    {
        id: 54,
        chapterId: 6,
        question: "Hur kan man minska risken för övertonstörningar?",
        options: [
            { id: "a", text: "Öka sändareffekten" },
            { id: "b", text: "Använda lågpassfilter efter sändaren" },
            { id: "c", text: "Använda längre antennkabel" },
            { id: "d", text: "Sända på högre frekvenser" }
        ],
        correctAnswer: "b",
        explanation: "Ett lågpassfilter efter slutsteget dämpar övertoner så att de inte strålas ut via antennen.",
        difficulty: "easy"
    },
    {
        id: 55,
        chapterId: 6,
        question: "Vad är intermodulation?",
        options: [
            { id: "a", text: "Korrekt modulering av signalen" },
            { id: "b", text: "Oönskade signaler som uppstår när två frekvenser blandas i olinjära kretsar" },
            { id: "c", text: "En typ av digital modulation" },
            { id: "d", text: "Störning från solaktivitet" }
        ],
        correctAnswer: "b",
        explanation: "Intermodulation uppstår när två eller fler signaler blandas i olinjära komponenter och skapar nya frekvenser.",
        difficulty: "hard"
    },
    {
        id: 56,
        chapterId: 6,
        question: "Vad är syftet med en ferritkärna (choke) på kablar?",
        options: [
            { id: "a", text: "Att förstärka signalen" },
            { id: "b", text: "Att dämpa RF-strömmar på kabelmanteln" },
            { id: "c", text: "Att öka bandbredden" },
            { id: "d", text: "Att mäta effekt" }
        ],
        correctAnswer: "b",
        explanation: "Ferritkärnor undertrycker oönskade RF-strömmar (mantelströmmar) som kan orsaka störningar.",
        difficulty: "medium"
    },
    {
        id: 57,
        chapterId: 6,
        question: "Vad orsakar BCI (Broadcast Interference)?",
        options: [
            { id: "a", text: "Störning på rundradiomottagare från amatörsändare" },
            { id: "b", text: "Störning från rundradiostationer" },
            { id: "c", text: "Störning på internet" },
            { id: "d", text: "Störning på mobiltelefonmaster" }
        ],
        correctAnswer: "a",
        explanation: "BCI är störning på kommersiella rundradiomottagare orsakad av närliggande amatörradiosändare.",
        difficulty: "medium"
    },
    {
        id: 58,
        chapterId: 6,
        question: "Vad är första steget vid felsökning av EMC-störningar?",
        options: [
            { id: "a", text: "Byta ut all utrustning" },
            { id: "b", text: "Kontakta grannen" },
            { id: "c", text: "Identifiera störkällan och den störda utrustningen" },
            { id: "d", text: "Öka effekten" }
        ],
        correctAnswer: "c",
        explanation: "Första steget är alltid att identifiera vad som stör och vad som störs för att kunna åtgärda rätt.",
        difficulty: "easy"
    },
    {
        id: 59,
        chapterId: 6,
        question: "Hur kan jordning hjälpa mot störningar?",
        options: [
            { id: "a", text: "Den har ingen effekt" },
            { id: "b", text: "Den kan avleda oönskade RF-strömmar" },
            { id: "c", text: "Den ökar sändareffekten" },
            { id: "d", text: "Den förbättrar modulationen" }
        ],
        correctAnswer: "b",
        explanation: "God jordning kan avleda oönskade RF-strömmar och minska störningar både till och från stationen.",
        difficulty: "medium"
    },
    {
        id: 60,
        chapterId: 6,
        question: "Vad är skärmning?",
        options: [
            { id: "a", text: "Att visa information på skärm" },
            { id: "b", text: "Att innesluta utrustning i ledande material för att stoppa RF-läckage" },
            { id: "c", text: "Att skydda mot regn" },
            { id: "d", text: "Att öka signalstyrkan" }
        ],
        correctAnswer: "b",
        explanation: "Skärmning med ledande material (metallhölje) förhindrar RF-signaler att läcka in eller ut.",
        difficulty: "easy"
    },

    // ============================================
    // KAPITEL 7: REGLER OCH BESTÄMMELSER
    // ============================================
    {
        id: 61,
        chapterId: 7,
        question: "Vilken myndighet utfärdar amatörradiolicenser i Sverige?",
        options: [
            { id: "a", text: "Trafikverket" },
            { id: "b", text: "Post- och telestyrelsen (PTS)" },
            { id: "c", text: "Försvarsmakten" },
            { id: "d", text: "Elsäkerhetsverket" }
        ],
        correctAnswer: "b",
        explanation: "PTS (Post- och telestyrelsen) är ansvarig myndighet för radiolicenser i Sverige.",
        difficulty: "easy"
    },
    {
        id: 62,
        chapterId: 7,
        question: "Vad är en anropssignal?",
        options: [
            { id: "a", text: "En signal som hörs vid inkommande samtal" },
            { id: "b", text: "En unik identifierare för varje radioamatör" },
            { id: "c", text: "En nödsignal" },
            { id: "d", text: "En testsignal" }
        ],
        correctAnswer: "b",
        explanation: "Anropssignalen (callsign) är den unika bokstavs-/sifferkombination som identifierar varje licensierad amatör.",
        difficulty: "easy"
    },
    {
        id: 63,
        chapterId: 7,
        question: "Vad betyder CEPT-licens för radioamatörer?",
        options: [
            { id: "a", text: "En permanent internationell licens" },
            { id: "b", text: "Tillstånd att operera i andra CEPT-länder med sin hemlicens" },
            { id: "c", text: "En begränsad nybörjarlicens" },
            { id: "d", text: "Tillstånd för kommersiell radiotrafik" }
        ],
        correctAnswer: "b",
        explanation: "CEPT-rekommendationen T/R 61-01 tillåter amatörer att använda sin licens i andra CEPT-länder vid tillfälliga besök.",
        difficulty: "medium"
    },
    {
        id: 64,
        chapterId: 7,
        question: "Hur ofta måste man identifiera sig med anropssignal under ett QSO?",
        options: [
            { id: "a", text: "Bara i början" },
            { id: "b", text: "Bara i slutet" },
            { id: "c", text: "I början, med jämna mellanrum och i slutet" },
            { id: "d", text: "Aldrig, det är frivilligt" }
        ],
        correctAnswer: "c",
        explanation: "Man ska identifiera sig i början och slutet av kontakten, samt regelbundet under långa QSO (normalt var 10:e minut).",
        difficulty: "easy"
    },
    {
        id: 65,
        chapterId: 7,
        question: "Får man sända krypterade meddelanden som radioamatör?",
        options: [
            { id: "a", text: "Ja, obegränsat" },
            { id: "b", text: "Nej, all trafik ska vara öppen och möjlig att avlyssna" },
            { id: "c", text: "Ja, men endast digitalt" },
            { id: "d", text: "Ja, men endast till andra amatörer" }
        ],
        correctAnswer: "b",
        explanation: "Amatörradiotrafik ska vara öppen. Kryptering som döljer meddelandets innehåll är inte tillåten.",
        difficulty: "easy"
    },
    {
        id: 66,
        chapterId: 7,
        question: "Vad är maximal effekt för svenska radioamatörer med högsta behörighetsklassen?",
        options: [
            { id: "a", text: "100 W" },
            { id: "b", text: "200 W" },
            { id: "c", text: "1000 W (1 kW) PEP" },
            { id: "d", text: "Obegränsad" }
        ],
        correctAnswer: "c",
        explanation: "I Sverige är maximal tillåten effekt 1000 W PEP för amatörer med HAREC-certifikat.",
        difficulty: "medium"
    },
    {
        id: 67,
        chapterId: 7,
        question: "Får man sända reklam eller kommersiella meddelanden som radioamatör?",
        options: [
            { id: "a", text: "Ja, obegränsat" },
            { id: "b", text: "Ja, mot betalning" },
            { id: "c", text: "Nej, det är förbjudet" },
            { id: "d", text: "Ja, men endast på vissa band" }
        ],
        correctAnswer: "c",
        explanation: "Amatörradio får inte användas för kommersiella syften eller reklam. Det ska vara för personligt intresse.",
        difficulty: "easy"
    },
    {
        id: 68,
        chapterId: 7,
        question: "Vad står ITU för?",
        options: [
            { id: "a", text: "International Technology Union" },
            { id: "b", text: "International Telecommunication Union" },
            { id: "c", text: "Internet Technology Users" },
            { id: "d", text: "Internal Transmitter Unit" }
        ],
        correctAnswer: "b",
        explanation: "ITU (International Telecommunication Union) är FN-organet som koordinerar global radiofrekvensanvändning.",
        difficulty: "easy"
    },
    {
        id: 69,
        chapterId: 7,
        question: "Vad menas med primär och sekundär status för frekvensband?",
        options: [
            { id: "a", text: "Första och andra val av frekvens" },
            { id: "b", text: "Primära användare har företräde, sekundära får inte störa" },
            { id: "c", text: "Olika effektnivåer" },
            { id: "d", text: "Dag- och nattfrekvenser" }
        ],
        correctAnswer: "b",
        explanation: "Primära tjänster har företräde. Sekundära användare får inte störa primära och måste acceptera störningar.",
        difficulty: "medium"
    },
    {
        id: 70,
        chapterId: 7,
        question: "Är det tillåtet att spela in och återutsända musik via amatörradio?",
        options: [
            { id: "a", text: "Ja, obegränsat" },
            { id: "b", text: "Ja, om det är copyright-fri musik" },
            { id: "c", text: "Nej, musikutsändningar är inte tillåtna" },
            { id: "d", text: "Ja, men endast på VHF" }
        ],
        correctAnswer: "c",
        explanation: "Amatörradio är avsedd för kommunikation, experiment och utbildning - inte för musikutsändningar.",
        difficulty: "easy"
    },

    // ============================================
    // KAPITEL 8: TRAFIKMETODER
    // ============================================
    {
        id: 71,
        chapterId: 8,
        question: "Vad betyder Q-koden 'QTH'?",
        options: [
            { id: "a", text: "Vilken tid är det?" },
            { id: "b", text: "Var befinner du dig?" },
            { id: "c", text: "Ska jag öka effekten?" },
            { id: "d", text: "Har du kontakt med...?" }
        ],
        correctAnswer: "b",
        explanation: "QTH = Position/plats. 'Mitt QTH är Stockholm' betyder 'Jag befinner mig i Stockholm'.",
        difficulty: "easy"
    },
    {
        id: 72,
        chapterId: 8,
        question: "Vad betyder 'CQ' i amatörradio?",
        options: [
            { id: "a", text: "Nödanrop" },
            { id: "b", text: "Allmänt anrop - söker kontakt med vem som helst" },
            { id: "c", text: "Tystnad på frekvensen" },
            { id: "d", text: "Slut på kontakten" }
        ],
        correctAnswer: "b",
        explanation: "CQ är ett allmänt anrop för att etablera kontakt med någon station.",
        difficulty: "easy"
    },
    {
        id: 73,
        chapterId: 8,
        question: "Vad står RST-systemet för?",
        options: [
            { id: "a", text: "Radio Signal Transmission" },
            { id: "b", text: "Readability, Strength, Tone" },
            { id: "c", text: "Receiver Sensitivity Test" },
            { id: "d", text: "Remote Station Transfer" }
        ],
        correctAnswer: "b",
        explanation: "RST = Readability (läsbarhet 1-5), Strength (signalstyrka 1-9), Tone (ton 1-9, för CW).",
        difficulty: "easy"
    },
    {
        id: 74,
        chapterId: 8,
        question: "Vad betyder 'QRZ'?",
        options: [
            { id: "a", text: "Ska jag öka effekten?" },
            { id: "b", text: "Vem anropar mig?" },
            { id: "c", text: "Var befinner du dig?" },
            { id: "d", text: "Vilken frekvens?" }
        ],
        correctAnswer: "b",
        explanation: "QRZ = 'Vem anropar mig?' Används när man hört ett anrop men inte uppfattat anropssignalen.",
        difficulty: "easy"
    },
    {
        id: 75,
        chapterId: 8,
        question: "Hur bokstaveras 'S' i det fonetiska alfabetet?",
        options: [
            { id: "a", text: "Sugar" },
            { id: "b", text: "Sierra" },
            { id: "c", text: "Samuel" },
            { id: "d", text: "Sigma" }
        ],
        correctAnswer: "b",
        explanation: "Enligt det internationella fonetiska alfabetet: S = Sierra.",
        difficulty: "easy"
    },
    {
        id: 76,
        chapterId: 8,
        question: "Vad är ett QSO?",
        options: [
            { id: "a", text: "En typ av antenn" },
            { id: "b", text: "En radiokontakt mellan två eller flera stationer" },
            { id: "c", text: "En effektenhet" },
            { id: "d", text: "En störning" }
        ],
        correctAnswer: "b",
        explanation: "QSO är en bekräftad tvåvägskontakt mellan radiostationer.",
        difficulty: "easy"
    },
    {
        id: 77,
        chapterId: 8,
        question: "Vad är den internationella nödfrekvensen på HF?",
        options: [
            { id: "a", text: "7,010 MHz" },
            { id: "b", text: "14,300 MHz" },
            { id: "c", text: "3,5 MHz" },
            { id: "d", text: "21,0 MHz" }
        ],
        correctAnswer: "b",
        explanation: "14,300 MHz är den internationella nödfrekvensen för amatörradio på 20m-bandet.",
        difficulty: "medium"
    },
    {
        id: 78,
        chapterId: 8,
        question: "Vad betyder 'MAYDAY' i radiosammanhang?",
        options: [
            { id: "a", text: "Godmorgon" },
            { id: "b", text: "Internationellt nödanrop vid livsfara" },
            { id: "c", text: "Testar radio" },
            { id: "d", text: "Slut på sändningen" }
        ],
        correctAnswer: "b",
        explanation: "MAYDAY är det internationella nödanropet vid omedelbar livsfara (från franskans 'm'aidez').",
        difficulty: "easy"
    },
    {
        id: 79,
        chapterId: 8,
        question: "Vad är en repeater (relä)?",
        options: [
            { id: "a", text: "En förstärkare i sändaren" },
            { id: "b", text: "En station som tar emot och återsänder signaler på annan frekvens" },
            { id: "c", text: "En typ av antenn" },
            { id: "d", text: "En digital kodare" }
        ],
        correctAnswer: "b",
        explanation: "En repeater tar emot på en frekvens och sänder ut samtidigt på en annan, vilket ökar räckvidden.",
        difficulty: "easy"
    },
    {
        id: 80,
        chapterId: 8,
        question: "Vad betyder '73' i amatörradio?",
        options: [
            { id: "a", text: "Nödanrop" },
            { id: "b", text: "Bästa hälsningar" },
            { id: "c", text: "Kom igen" },
            { id: "d", text: "Jag förstår" }
        ],
        correctAnswer: "b",
        explanation: "'73' är amatörkod för 'bästa hälsningar' och används ofta i slutet av ett QSO.",
        difficulty: "easy"
    },

    // ============================================
    // KAPITEL 9: ELSÄKERHET
    // ============================================
    {
        id: 81,
        chapterId: 9,
        question: "Vid vilken strömstyrka anses elektrisk ström bli farlig för människor?",
        options: [
            { id: "a", text: "Över 1 A" },
            { id: "b", text: "Redan vid några milliampere" },
            { id: "c", text: "Över 10 A" },
            { id: "d", text: "Ström är aldrig farlig" }
        ],
        correctAnswer: "b",
        explanation: "Strömmar från ca 10 mA kan ge muskelkramper, 30-50 mA kan vara livshotande. Spänning och väg genom kroppen spelar också roll.",
        difficulty: "easy"
    },
    {
        id: 82,
        chapterId: 9,
        question: "Varför är det viktigt med skyddsjord?",
        options: [
            { id: "a", text: "För bättre antennprestanda" },
            { id: "b", text: "För att leda bort felströmmar och förhindra elchock" },
            { id: "c", text: "För lägre SWR" },
            { id: "d", text: "För bättre ljudkvalitet" }
        ],
        correctAnswer: "b",
        explanation: "Skyddsjord säkerställer att felströmmar leds bort säkert och att säkringen löser ut vid fel.",
        difficulty: "easy"
    },
    {
        id: 83,
        chapterId: 9,
        question: "Vad ska man göra först om någon får en elektrisk stöt?",
        options: [
            { id: "a", text: "Ringa ambulans direkt" },
            { id: "b", text: "Bryta strömmen om möjligt" },
            { id: "c", text: "Ge hjärt-lungräddning" },
            { id: "d", text: "Kyla ned personen" }
        ],
        correctAnswer: "b",
        explanation: "Första åtgärden är att bryta strömmen för att avbryta fortsatt skada. Sedan tillkalla hjälp och ge första hjälpen.",
        difficulty: "easy"
    },
    {
        id: 84,
        chapterId: 9,
        question: "Var finns högspänning i en typisk HF-transceiver?",
        options: [
            { id: "a", text: "Ingenstans" },
            { id: "b", text: "I nätaggregat och möjligen i slutsteget" },
            { id: "c", text: "Endast i antennen" },
            { id: "d", text: "Endast i mikrofonen" }
        ],
        correctAnswer: "b",
        explanation: "Nätaggregatet innehåller livsfarliga spänningar. Rörslutsteg kan ha flera kilovolt. Öppna aldrig utrustning utan kunskap!",
        difficulty: "medium"
    },
    {
        id: 85,
        chapterId: 9,
        question: "Vad är SAR-värde?",
        options: [
            { id: "a", text: "Signal-to-Antenna Ratio" },
            { id: "b", text: "Specific Absorption Rate - mått på RF-absorption i kroppen" },
            { id: "c", text: "Static Antenna Resistance" },
            { id: "d", text: "Signal Amplitude Range" }
        ],
        correctAnswer: "b",
        explanation: "SAR (Specific Absorption Rate) mäter hur mycket RF-energi som absorberas i kroppsvävnad, uttryckt i W/kg.",
        difficulty: "medium"
    },
    {
        id: 86,
        chapterId: 9,
        question: "Hur skyddar man sig bäst mot åskskador på radioutrustning?",
        options: [
            { id: "a", text: "Stänga av radion" },
            { id: "b", text: "Koppla bort antenner och nätanslutning vid åskväder" },
            { id: "c", text: "Använda högre effekt" },
            { id: "d", text: "Sända kontinuerligt" }
        ],
        correctAnswer: "b",
        explanation: "Det säkraste är att fysiskt koppla bort antenner och nätanslutning. Åsköverspänningar kan förstöra utrustning även om den är avstängd.",
        difficulty: "easy"
    },
    {
        id: 87,
        chapterId: 9,
        question: "Vad är en säker avstånd från en HF-antenn vid sändning med hög effekt?",
        options: [
            { id: "a", text: "Man kan röra antennen" },
            { id: "b", text: "Minst några meter, beroende på effekt och frekvens" },
            { id: "c", text: "Endast 10 cm" },
            { id: "d", text: "Avstånd spelar ingen roll" }
        ],
        correctAnswer: "b",
        explanation: "RF-fält nära antennen kan vara starka. Säkerhetsavståndet beror på effekt, frekvens och antenntyp.",
        difficulty: "medium"
    },
    {
        id: 88,
        chapterId: 9,
        question: "Varför är kondensatorer farliga även efter att strömmen stängts av?",
        options: [
            { id: "a", text: "De är inte farliga" },
            { id: "b", text: "De kan behålla laddning och avge farlig stöt" },
            { id: "c", text: "De blir heta" },
            { id: "d", text: "De avger strålning" }
        ],
        correctAnswer: "b",
        explanation: "Stora kondensatorer, särskilt i nätaggregat, kan behålla livsfarlig laddning länge efter att strömmen brutits.",
        difficulty: "medium"
    },
    {
        id: 89,
        chapterId: 9,
        question: "Vad är syftet med en jordfelsbrytare?",
        options: [
            { id: "a", text: "Att bryta strömmen vid överbelastning" },
            { id: "b", text: "Att snabbt bryta strömmen om den läcker till jord" },
            { id: "c", text: "Att stabilisera spänningen" },
            { id: "d", text: "Att minska elförbrukningen" }
        ],
        correctAnswer: "b",
        explanation: "En jordfelsbrytare detekterar om ström läcker (t.ex. genom en människa) och bryter inom millisekunder.",
        difficulty: "easy"
    },
    {
        id: 90,
        chapterId: 9,
        question: "Vad bör man tänka på vid arbete på tak eller master för antenninstallation?",
        options: [
            { id: "a", text: "Inget speciellt" },
            { id: "b", text: "Fallskydd, avstånd till kraftledningar, väderförhållanden" },
            { id: "c", text: "Endast väder" },
            { id: "d", text: "Endast effekten på radion" }
        ],
        correctAnswer: "b",
        explanation: "Arbete på höjd kräver fallskydd, medvetenhet om kraftledningar, bra väder och helst en medhjälpare.",
        difficulty: "easy"
    },

    // ============================================
    // KAPITEL 10: PRAKTISK RADIOTRAFIK
    // ============================================
    {
        id: 91,
        chapterId: 10,
        question: "Vilket band är bäst för lokala kontakter (inom ca 50 km)?",
        options: [
            { id: "a", text: "80m (3,5 MHz)" },
            { id: "b", text: "20m (14 MHz)" },
            { id: "c", text: "2m (144 MHz)" },
            { id: "d", text: "10m (28 MHz)" }
        ],
        correctAnswer: "c",
        explanation: "2m-bandet (VHF) är utmärkt för lokal trafik, direktkontakt eller via repeatrar inom regionen.",
        difficulty: "easy"
    },
    {
        id: 92,
        chapterId: 10,
        question: "Vad är en lämplig första radio för en nybörjare?",
        options: [
            { id: "a", text: "En 1 kW HF-station" },
            { id: "b", text: "En enkel VHF/UHF handhållen eller mobil radio" },
            { id: "c", text: "Endast en SDR-mottagare" },
            { id: "d", text: "En 70 cm repeater" }
        ],
        correctAnswer: "b",
        explanation: "En VHF/UHF-radio är prisvärd, enkel att använda och ger direkt tillgång till lokala repeatrar och aktivitet.",
        difficulty: "easy"
    },
    {
        id: 93,
        chapterId: 10,
        question: "Vad är CTCSS (subtoner) vid repeatertrafik?",
        options: [
            { id: "a", text: "En digital kodning" },
            { id: "b", text: "Låga toner som öppnar repeaterns squelch" },
            { id: "c", text: "En typ av modulation" },
            { id: "d", text: "En störning" }
        ],
        correctAnswer: "b",
        explanation: "CTCSS (Continuous Tone-Coded Squelch System) är subtoner som krävs för att aktivera vissa repeatrar.",
        difficulty: "medium"
    },
    {
        id: 94,
        chapterId: 10,
        question: "Vad är FT8?",
        options: [
            { id: "a", text: "En antenntyp" },
            { id: "b", text: "Ett digitalt trafiksätt för svaga signaler" },
            { id: "c", text: "Ett frekvensBand" },
            { id: "d", text: "En effektenhet" }
        ],
        correctAnswer: "b",
        explanation: "FT8 är ett populärt digitalt trafiksätt designat för svaga signaler, utvecklat av K1JT (Joe Taylor).",
        difficulty: "easy"
    },
    {
        id: 95,
        chapterId: 10,
        question: "Vad är ett QSL-kort?",
        options: [
            { id: "a", text: "Ett identitetskort för amatörer" },
            { id: "b", text: "Ett kort som bekräftar en genomförd radiokontakt" },
            { id: "c", text: "Ett medlemskort" },
            { id: "d", text: "Ett licenskort" }
        ],
        correctAnswer: "b",
        explanation: "QSL-kort skickas mellan amatörer för att bekräfta QSO:n. Samlas ofta och krävs för diplom.",
        difficulty: "easy"
    },
    {
        id: 96,
        chapterId: 10,
        question: "Vad är DXCC?",
        options: [
            { id: "a", text: "En typ av antenn" },
            { id: "b", text: "Ett diplom för kontakt med 100+ länder" },
            { id: "c", text: "En modulationstyp" },
            { id: "d", text: "En effektbegränsning" }
        ],
        correctAnswer: "b",
        explanation: "DXCC (DX Century Club) är ett prestigefyllt diplom som kräver bekräftade kontakter med minst 100 DXCC-entiteter.",
        difficulty: "medium"
    },
    {
        id: 97,
        chapterId: 10,
        question: "Vad är APRS?",
        options: [
            { id: "a", text: "Amateur Power Rating System" },
            { id: "b", text: "Automatic Packet Reporting System" },
            { id: "c", text: "Advanced Phone Radio Service" },
            { id: "d", text: "Antenna Propagation Research System" }
        ],
        correctAnswer: "b",
        explanation: "APRS är ett digitalt system för att dela position, väder och meddelanden via amatörradio.",
        difficulty: "medium"
    },
    {
        id: 98,
        chapterId: 10,
        question: "Vilket band är populärast för DX (långdistans) på HF?",
        options: [
            { id: "a", text: "80m" },
            { id: "b", text: "20m" },
            { id: "c", text: "2m" },
            { id: "d", text: "70cm" }
        ],
        correctAnswer: "b",
        explanation: "20m-bandet (14 MHz) är det mest populära DX-bandet, ofta öppet dygnet runt till någon del av världen.",
        difficulty: "easy"
    },
    {
        id: 99,
        chapterId: 10,
        question: "Vad innebär portabel radiotrafik (/P)?",
        options: [
            { id: "a", text: "Trafik från en båt" },
            { id: "b", text: "Tillfällig trafik från annan plats än hemstationen" },
            { id: "c", text: "Trafik med låg effekt" },
            { id: "d", text: "Digital trafik" }
        ],
        correctAnswer: "b",
        explanation: "Portabel (/P) innebär att man sänder från en tillfällig plats. Signaleras med '/P' efter anropssignalen.",
        difficulty: "easy"
    },
    {
        id: 100,
        chapterId: 10,
        question: "Vad är SOTA?",
        options: [
            { id: "a", text: "Summits On The Air - diplomprogram för bergsaktivering" },
            { id: "b", text: "System Of Transmission Analysis" },
            { id: "c", text: "Swedish Organization for Technical Amateurs" },
            { id: "d", text: "Signal Optimization Through Antennas" }
        ],
        correctAnswer: "a",
        explanation: "SOTA (Summits On The Air) är ett populärt diplom- och aktivitetsprogram för portabel radiotrafik från bergstoppar.",
        difficulty: "medium"
    }
];

// Hjälpfunktioner för frågehantering
function getQuestionsByChapter(chapterId) {
    return QUESTIONS.filter(q => q.chapterId === chapterId);
}

function getRandomQuestions(count, chapterIds = null) {
    let pool = chapterIds 
        ? QUESTIONS.filter(q => chapterIds.includes(q.chapterId))
        : [...QUESTIONS];
    
    // Blanda frågorna
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    
    return pool.slice(0, count);
}

function getQuestionById(id) {
    return QUESTIONS.find(q => q.id === id);
}

// Hämta frågor för ett simulerat prov (60 frågor, viktade per kapitel)
function getExamQuestions() {
    const questionsPerChapter = {
        1: 8,   // Elektronik
        2: 8,   // Radioteknik
        3: 6,   // Antenner
        4: 5,   // Vågutbredning
        5: 5,   // Mätinstrument
        6: 5,   // Störningar
        7: 8,   // Regler
        8: 6,   // Trafikmetoder
        9: 5,   // Säkerhet
        10: 4   // Praktisk trafik
    };
    
    let examQuestions = [];
    
    for (const [chapterId, count] of Object.entries(questionsPerChapter)) {
        const chapterQuestions = getRandomQuestions(count, [parseInt(chapterId)]);
        examQuestions = examQuestions.concat(chapterQuestions);
    }
    
    // Blanda alla frågor
    for (let i = examQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [examQuestions[i], examQuestions[j]] = [examQuestions[j], examQuestions[i]];
    }
    
    return examQuestions;
}

// Exportera för ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        QUESTIONS, 
        getQuestionsByChapter, 
        getRandomQuestions, 
        getQuestionById,
        getExamQuestions 
    };
}
