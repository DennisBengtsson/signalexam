// ============================================
// CERTIFIKATSKAPITEL MED DELKAPITEL OCH ÖVNINGAR
// ============================================
// Varje kapitel har delkapitel med 10 övningsfrågor vardera
// Måste ha 80% rätt för att "klara" ett delkapitel

const certChapters = [
    {
        id: 1,
        number: 1,
        title: 'Grundläggande Elektronik',
        slug: 'kapitel-1-grundlaggande-elektronik',
        icon: '⚡',
        subchapters: [
            {
                id: '1.1',
                title: 'Elektrisk ström och spänning',
                slug: 'strom-spanning',
                description: 'Lär dig om ström, spänning, enheter och grundläggande begrepp',
                estimatedTime: 15,
                exercises: [
                    {
                        id: 'c1-1-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts elektrisk ström i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
                        correct: 1,
                        explanation: 'Elektrisk ström mäts i Ampere (A), uppkallat efter André-Marie Ampère.'
                    },
                    {
                        id: 'c1-1-e2',
                        type: 'multiple-choice',
                        question: 'Vad är enheten för elektrisk spänning?',
                        options: ['Ampere (A)', 'Ohm (Ω)', 'Volt (V)', 'Watt (W)'],
                        correct: 2,
                        explanation: 'Spänning mäts i Volt (V), uppkallat efter Alessandro Volta.'
                    },
                    {
                        id: 'c1-1-e3',
                        type: 'calculation',
                        question: 'Hur många milliampere (mA) är 2,5 A?',
                        answer: 2500,
                        unit: 'mA',
                        hint: '1 A = 1000 mA',
                        explanation: '1 A = 1000 mA, så 2,5 A = 2,5 × 1000 = 2500 mA'
                    },
                    {
                        id: 'c1-1-e4',
                        type: 'true-false',
                        question: 'Likström (DC) ändrar riktning periodiskt.',
                        correct: false,
                        explanation: 'Falskt. Likström flyter alltid i samma riktning. Det är växelström (AC) som ändrar riktning.'
                    },
                    {
                        id: 'c1-1-e5',
                        type: 'multiple-choice',
                        question: 'Vilken är den typiska matningsspänningen för amatörradioutrustning?',
                        options: ['9 V', '12 V', '13,8 V', '24 V'],
                        correct: 2,
                        explanation: '13,8 V är standardspänningen för amatörradioutrustning, vilket motsvarar ett fulladdat 12V bilbatteri.'
                    },
                    {
                        id: 'c1-1-e6',
                        type: 'fill-blank',
                        question: 'Växelström förkortas _____ på engelska.',
                        answer: 'AC',
                        alternatives: ['ac'],
                        explanation: 'AC står för Alternating Current (växelström). DC står för Direct Current (likström).'
                    },
                    {
                        id: 'c1-1-e7',
                        type: 'multiple-choice',
                        question: 'Vad är 500 µA i milliampere?',
                        options: ['0,5 mA', '5 mA', '50 mA', '500 mA'],
                        correct: 0,
                        explanation: '1 mA = 1000 µA, så 500 µA = 500/1000 = 0,5 mA'
                    },
                    {
                        id: 'c1-1-e8',
                        type: 'true-false',
                        question: 'Spänningar över 50V kan vara livsfarliga.',
                        correct: true,
                        explanation: 'Sant. Spänningar över 50V AC eller 120V DC anses vara potentiellt livsfarliga.'
                    },
                    {
                        id: 'c1-1-e9',
                        type: 'multiple-choice',
                        question: 'Vilken frekvens har nätspänningen i Sverige?',
                        options: ['50 Hz', '60 Hz', '100 Hz', '230 Hz'],
                        correct: 0,
                        explanation: 'Nätspänningen i Sverige är 230V, 50 Hz. I USA är det 110V, 60 Hz.'
                    },
                    {
                        id: 'c1-1-e10',
                        type: 'matching',
                        question: 'Para ihop spänningen med användningsområdet:',
                        pairs: [
                            { left: '1,5 V', right: 'AA-batteri' },
                            { left: '9 V', right: 'Transistorbatteri' },
                            { left: '12 V', right: 'Bilbatteri' },
                            { left: '230 V', right: 'Hushållsel' }
                        ]
                    }
                ]
            },
            {
                id: '1.2',
                title: 'Resistans och Ohms lag',
                slug: 'ohms-lag',
                description: 'Förstå resistans och den viktigaste formeln inom elektronik',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-2-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts resistans i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
                        correct: 2,
                        explanation: 'Resistans mäts i Ohm (Ω), uppkallat efter Georg Ohm.'
                    },
                    {
                        id: 'c1-2-e2',
                        type: 'calculation',
                        question: 'Om spänningen är 12V och resistansen är 4Ω, vad är strömmen?',
                        answer: 3,
                        unit: 'A',
                        hint: 'Använd Ohms lag: I = U / R',
                        steps: [
                            'Ohms lag: I = U / R',
                            'I = 12V / 4Ω',
                            'I = 3A'
                        ],
                        explanation: 'Med Ohms lag: I = U/R = 12V/4Ω = 3A'
                    },
                    {
                        id: 'c1-2-e3',
                        type: 'calculation',
                        question: 'En resistor på 470Ω har 20 mA genom sig. Vilken spänning ligger över resistorn?',
                        answer: 9.4,
                        unit: 'V',
                        tolerance: 0.1,
                        hint: 'U = R × I. Kom ihåg att omvandla mA till A',
                        steps: [
                            '20 mA = 0,020 A',
                            'U = R × I',
                            'U = 470Ω × 0,020A = 9,4V'
                        ],
                        explanation: 'U = R × I = 470Ω × 0,020A = 9,4V'
                    },
                    {
                        id: 'c1-2-e4',
                        type: 'fill-blank',
                        question: 'Enligt Ohms lag är spänning (U) lika med resistans (R) multiplicerat med _______.',
                        answer: 'ström',
                        alternatives: ['strömmen', 'I'],
                        explanation: 'Ohms lag: U = R × I (spänning = resistans × ström)'
                    },
                    {
                        id: 'c1-2-e5',
                        type: 'multiple-choice',
                        question: 'Vilken formel används för att beräkna resistans när spänning och ström är kända?',
                        options: ['R = U × I', 'R = U / I', 'R = I / U', 'R = U + I'],
                        correct: 1,
                        explanation: 'R = U / I (resistans = spänning delat med ström)'
                    },
                    {
                        id: 'c1-2-e6',
                        type: 'calculation',
                        question: 'En krets har 9V och strömmen är 45 mA. Vad är resistansen?',
                        answer: 200,
                        unit: 'Ω',
                        hint: 'R = U / I',
                        steps: [
                            '45 mA = 0,045 A',
                            'R = U / I',
                            'R = 9V / 0,045A = 200Ω'
                        ],
                        explanation: 'R = U/I = 9V/0,045A = 200Ω'
                    },
                    {
                        id: 'c1-2-e7',
                        type: 'true-false',
                        question: 'Om resistansen ökar i en krets med konstant spänning, ökar också strömmen.',
                        correct: false,
                        explanation: 'Falskt. Om resistansen ökar medan spänningen är konstant, MINSKAR strömmen (I = U/R).'
                    },
                    {
                        id: 'c1-2-e8',
                        type: 'multiple-choice',
                        question: 'Vad är 2,2 kΩ i ohm?',
                        options: ['220 Ω', '2200 Ω', '22000 Ω', '220000 Ω'],
                        correct: 1,
                        explanation: '1 kΩ = 1000 Ω, så 2,2 kΩ = 2200 Ω'
                    },
                    {
                        id: 'c1-2-e9',
                        type: 'multiple-choice',
                        question: 'I URI-triangeln, om du täcker över R, vilken formel ser du?',
                        options: ['R = U × I', 'I = U / R', 'U = I / R', 'U = R × I'],
                        correct: 1,
                        explanation: 'Om du täcker R i triangeln ser du U över I, vilket betyder I = U/R'
                    },
                    {
                        id: 'c1-2-e10',
                        type: 'calculation',
                        question: 'En LED-lampa har resistansen 100Ω och ansluts till 12V. Hur stor blir strömmen i mA?',
                        answer: 120,
                        unit: 'mA',
                        hint: 'I = U / R, och omvandla sedan till mA',
                        steps: [
                            'I = U / R',
                            'I = 12V / 100Ω = 0,12A',
                            '0,12A = 120 mA'
                        ],
                        explanation: 'I = 12V/100Ω = 0,12A = 120 mA'
                    }
                ]
            },
            {
                id: '1.3',
                title: 'Effekt och energi',
                slug: 'effekt',
                description: 'Lär dig om elektrisk effekt, watt och decibel',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-3-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts elektrisk effekt i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
                        correct: 3,
                        explanation: 'Effekt mäts i Watt (W), uppkallat efter James Watt.'
                    },
                    {
                        id: 'c1-3-e2',
                        type: 'calculation',
                        question: 'En transceiver drar 20A vid 13,8V. Vilken effekt förbrukar den?',
                        answer: 276,
                        unit: 'W',
                        hint: 'P = U × I',
                        steps: [
                            'P = U × I',
                            'P = 13,8V × 20A',
                            'P = 276W'
                        ],
                        explanation: 'P = U × I = 13,8V × 20A = 276W'
                    },
                    {
                        id: 'c1-3-e3',
                        type: 'fill-blank',
                        question: 'Formeln för elektrisk effekt är P = U × _____',
                        answer: 'I',
                        alternatives: ['ström', 'strömmen'],
                        explanation: 'P = U × I (effekt = spänning × ström)'
                    },
                    {
                        id: 'c1-3-e4',
                        type: 'multiple-choice',
                        question: 'Hur många dB motsvarar en fördubbling av effekten?',
                        options: ['1 dB', '3 dB', '6 dB', '10 dB'],
                        correct: 1,
                        explanation: '+3 dB = dubbel effekt, -3 dB = halva effekten'
                    },
                    {
                        id: 'c1-3-e5',
                        type: 'multiple-choice',
                        question: 'Hur många dB är 10 gånger effekten?',
                        options: ['3 dB', '6 dB', '10 dB', '20 dB'],
                        correct: 2,
                        explanation: '+10 dB = 10 gånger effekten, +20 dB = 100 gånger effekten'
                    },
                    {
                        id: 'c1-3-e6',
                        type: 'calculation',
                        question: 'Om du har 100W och ökar med 3 dB, vilken effekt har du nu?',
                        answer: 200,
                        unit: 'W',
                        hint: '+3 dB = dubbel effekt',
                        explanation: '+3 dB betyder dubbel effekt, så 100W × 2 = 200W'
                    },
                    {
                        id: 'c1-3-e7',
                        type: 'true-false',
                        question: 'QRP betyder max 5W uteffekt.',
                        correct: true,
                        explanation: 'Sant. QRP är en stil inom amatörradio som använder max 5W effekt.'
                    },
                    {
                        id: 'c1-3-e8',
                        type: 'multiple-choice',
                        question: 'Vilken är maximal tillåten effekt i Sverige för de flesta amatörband?',
                        options: ['100 W', '500 W', '1000 W', '1500 W'],
                        correct: 2,
                        explanation: '1000W (1 kW) är maximal tillåten effekt i Sverige för amatörer med HAREC-certifikat.'
                    },
                    {
                        id: 'c1-3-e9',
                        type: 'calculation',
                        question: 'En resistor med 50Ω har 2A genom sig. Hur stor effekt utvecklas? (P = I² × R)',
                        answer: 200,
                        unit: 'W',
                        hint: 'P = I² × R',
                        steps: [
                            'P = I² × R',
                            'P = 2² × 50',
                            'P = 4 × 50 = 200W'
                        ],
                        explanation: 'P = I² × R = 2² × 50Ω = 4 × 50 = 200W'
                    },
                    {
                        id: 'c1-3-e10',
                        type: 'multiple-choice',
                        question: 'Om du minskar effekten från 1000W till 100W, hur många dB har du minskat?',
                        options: ['-3 dB', '-6 dB', '-10 dB', '-20 dB'],
                        correct: 2,
                        explanation: '100W är 1/10 av 1000W. -10 dB = en tiondel av effekten.'
                    }
                ]
            },
            {
                id: '1.4',
                title: 'Kondensatorer',
                slug: 'kondensatorer',
                description: 'Förstå hur kondensatorer fungerar och används',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-4-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts kapacitans i?',
                        options: ['Henry (H)', 'Farad (F)', 'Ohm (Ω)', 'Hertz (Hz)'],
                        correct: 1,
                        explanation: 'Kapacitans mäts i Farad (F), uppkallat efter Michael Faraday.'
                    },
                    {
                        id: 'c1-4-e2',
                        type: 'true-false',
                        question: 'En kondensator blockerar likström (efter uppladdning).',
                        correct: true,
                        explanation: 'Sant. Efter uppladdning fungerar kondensatorn som ett avbrott för likström.'
                    },
                    {
                        id: 'c1-4-e3',
                        type: 'multiple-choice',
                        question: 'Vad händer med en kondensators reaktans när frekvensen ökar?',
                        options: ['Den ökar', 'Den minskar', 'Den är konstant', 'Den försvinner'],
                        correct: 1,
                        explanation: 'Reaktansen MINSKAR när frekvensen ökar. Kondensatorer "gillar" höga frekvenser.'
                    },
                    {
                        id: 'c1-4-e4',
                        type: 'fill-blank',
                        question: 'Kondensatorer lagrar energi i ett _______ fält.',
                        answer: 'elektriskt',
                        alternatives: ['elektrisk'],
                        explanation: 'Kondensatorer lagrar energi i ett elektriskt fält mellan plattorna.'
                    },
                    {
                        id: 'c1-4-e5',
                        type: 'multiple-choice',
                        question: 'Hur många nanofarad är 0,001 µF?',
                        options: ['1 nF', '10 nF', '100 nF', '1000 nF'],
                        correct: 0,
                        explanation: '1 µF = 1000 nF, så 0,001 µF = 1 nF'
                    },
                    {
                        id: 'c1-4-e6',
                        type: 'true-false',
                        question: 'Elektrolytkondensatorer har polaritet och måste anslutas rätt.',
                        correct: true,
                        explanation: 'Sant. Elektrolytkondensatorer har + och - och kan explodera om de kopplas fel.'
                    },
                    {
                        id: 'c1-4-e7',
                        type: 'multiple-choice',
                        question: 'Vilken kondensatortyp används vanligen i RF-kretsar?',
                        options: ['Elektrolytkondensatorer', 'Keramiska kondensatorer', 'Film-kondensatorer', 'Variabla kondensatorer'],
                        correct: 1,
                        explanation: 'Keramiska kondensatorer är stabila och har små värden (pF-nF) lämpliga för RF.'
                    },
                    {
                        id: 'c1-4-e8',
                        type: 'multiple-choice',
                        question: 'Vad händer med totalkapacitansen när två kondensatorer på 10µF vardera kopplas parallellt?',
                        options: ['5 µF', '10 µF', '20 µF', '100 µF'],
                        correct: 2,
                        explanation: 'Vid parallellkoppling ADDERAS kapacitansen: 10µF + 10µF = 20µF'
                    },
                    {
                        id: 'c1-4-e9',
                        type: 'multiple-choice',
                        question: 'Vad händer med totalkapacitansen när två kondensatorer på 10µF vardera kopplas i serie?',
                        options: ['5 µF', '10 µF', '20 µF', '100 µF'],
                        correct: 0,
                        explanation: 'Vid seriekoppling: 1/C_tot = 1/C₁ + 1/C₂. För lika kondensatorer: C_tot = C/2 = 5µF'
                    },
                    {
                        id: 'c1-4-e10',
                        type: 'matching',
                        question: 'Para ihop kondensatortypen med användningsområdet:',
                        pairs: [
                            { left: 'Keramisk', right: 'RF-kretsar, små värden' },
                            { left: 'Elektrolyt', right: 'Nätaggregat, stora värden' },
                            { left: 'Film', right: 'Precision, låga förluster' },
                            { left: 'Variabel', right: 'Avstämning' }
                        ]
                    }
                ]
            },
            {
                id: '1.5',
                title: 'Spolar och induktans',
                slug: 'spolar',
                description: 'Lär dig om spolar, induktans och magnetiska fält',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-5-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts induktans i?',
                        options: ['Farad (F)', 'Henry (H)', 'Ohm (Ω)', 'Hertz (Hz)'],
                        correct: 1,
                        explanation: 'Induktans mäts i Henry (H), uppkallat efter Joseph Henry.'
                    },
                    {
                        id: 'c1-5-e2',
                        type: 'true-false',
                        question: 'En spole släpper igenom likström (efter uppstart).',
                        correct: true,
                        explanation: 'Sant. Efter att magnetfältet byggts upp fungerar spolen som en ledare för likström.'
                    },
                    {
                        id: 'c1-5-e3',
                        type: 'multiple-choice',
                        question: 'Vad händer med en spoles reaktans när frekvensen ökar?',
                        options: ['Den ökar', 'Den minskar', 'Den är konstant', 'Den försvinner'],
                        correct: 0,
                        explanation: 'Reaktansen ÖKAR när frekvensen ökar. Spolar "ogillar" höga frekvenser.'
                    },
                    {
                        id: 'c1-5-e4',
                        type: 'fill-blank',
                        question: 'Spolar lagrar energi i ett _______ fält.',
                        answer: 'magnetiskt',
                        alternatives: ['magnetisk'],
                        explanation: 'Spolar lagrar energi i ett magnetiskt fält runt ledaren.'
                    },
                    {
                        id: 'c1-5-e5',
                        type: 'multiple-choice',
                        question: 'Hur många mikrohenry är 0,001 mH?',
                        options: ['1 µH', '10 µH', '100 µH', '1000 µH'],
                        correct: 0,
                        explanation: '1 mH = 1000 µH, så 0,001 mH = 1 µH'
                    },
                    {
                        id: 'c1-5-e6',
                        type: 'true-false',
                        question: 'Kondensatorer och spolar är varandras motsatser vad gäller frekvensberoende.',
                        correct: true,
                        explanation: 'Sant. Kondensatorer har låg reaktans vid hög frekvens, spolar har hög reaktans vid hög frekvens.'
                    },
                    {
                        id: 'c1-5-e7',
                        type: 'multiple-choice',
                        question: 'Vad ökar induktansen hos en spole?',
                        options: ['Färre varv', 'Mer avstånd mellan varven', 'Fler varv', 'Mindre diameter'],
                        correct: 2,
                        explanation: 'Fler varv ger högre induktans. Järnkärna ökar också induktansen kraftigt.'
                    },
                    {
                        id: 'c1-5-e8',
                        type: 'multiple-choice',
                        question: 'Vad händer med totalinduktansen när två spolar på 10µH vardera kopplas i serie?',
                        options: ['5 µH', '10 µH', '20 µH', '100 µH'],
                        correct: 2,
                        explanation: 'Vid seriekoppling ADDERAS induktansen: 10µH + 10µH = 20µH'
                    },
                    {
                        id: 'c1-5-e9',
                        type: 'multiple-choice',
                        question: 'Formeln för induktiv reaktans är:',
                        options: ['X_L = 2πfL', 'X_L = 1/(2πfL)', 'X_L = 2πf/L', 'X_L = L/(2πf)'],
                        correct: 0,
                        explanation: 'X_L = 2πfL (induktiv reaktans ökar med frekvensen)'
                    },
                    {
                        id: 'c1-5-e10',
                        type: 'matching',
                        question: 'Para ihop komponenten med dess beteende vid hög frekvens:',
                        pairs: [
                            { left: 'Kondensator', right: 'Låg reaktans (släpper igenom)' },
                            { left: 'Spole', right: 'Hög reaktans (blockerar)' },
                            { left: 'Resistor', right: 'Konstant resistans' },
                            { left: 'Ledare', right: 'Låg impedans' }
                        ]
                    }
                ]
            },
            {
                id: '1.6',
                title: 'Serie- och parallellkoppling',
                slug: 'serie-parallell',
                description: 'Lär dig räkna med komponenter i serie och parallellt',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c1-6-e1',
                        type: 'calculation',
                        question: 'Tre resistorer på 100Ω, 220Ω och 330Ω kopplas i serie. Vad blir totalresistansen?',
                        answer: 650,
                        unit: 'Ω',
                        hint: 'I serie: R_tot = R₁ + R₂ + R₃',
                        steps: [
                            'R_tot = R₁ + R₂ + R₃',
                            'R_tot = 100 + 220 + 330',
                            'R_tot = 650Ω'
                        ],
                        explanation: 'Vid seriekoppling adderas resistanserna: 100 + 220 + 330 = 650Ω'
                    },
                    {
                        id: 'c1-6-e2',
                        type: 'calculation',
                        question: 'Två resistorer på 100Ω vardera kopplas parallellt. Vad blir totalresistansen?',
                        answer: 50,
                        unit: 'Ω',
                        hint: 'För lika resistorer: R_tot = R/2',
                        steps: [
                            'För två lika resistorer parallellt: R_tot = R/2',
                            'R_tot = 100Ω / 2',
                            'R_tot = 50Ω'
                        ],
                        explanation: 'Två lika resistorer parallellt ger hälften: 100Ω/2 = 50Ω'
                    },
                    {
                        id: 'c1-6-e3',
                        type: 'true-false',
                        question: 'Kondensatorer beter sig "tvärtom" mot resistorer vid serie/parallellkoppling.',
                        correct: true,
                        explanation: 'Sant. Kondensatorer ökar i parallellt men minskar i serie - motsatsen till resistorer.'
                    },
                    {
                        id: 'c1-6-e4',
                        type: 'multiple-choice',
                        question: 'Två kondensatorer på 10µF vardera kopplas parallellt. Vad blir totalkapacitansen?',
                        options: ['5 µF', '10 µF', '20 µF', '100 µF'],
                        correct: 2,
                        explanation: 'Kondensatorer parallellt: C_tot = C₁ + C₂ = 10 + 10 = 20µF'
                    },
                    {
                        id: 'c1-6-e5',
                        type: 'multiple-choice',
                        question: 'Två spolar på 10µH vardera kopplas parallellt. Vad blir totalinduktansen?',
                        options: ['5 µH', '10 µH', '20 µH', '100 µH'],
                        correct: 0,
                        explanation: 'Spolar parallellt: 1/L_tot = 1/L₁ + 1/L₂. För lika spolar: L_tot = L/2 = 5µH'
                    },
                    {
                        id: 'c1-6-e6',
                        type: 'fill-blank',
                        question: 'I en seriekoppling är _______ samma genom alla komponenter.',
                        answer: 'strömmen',
                        alternatives: ['ström', 'strömstyrkan', 'I'],
                        explanation: 'I serie är strömmen densamma genom alla komponenter, men spänningen fördelas.'
                    },
                    {
                        id: 'c1-6-e7',
                        type: 'fill-blank',
                        question: 'I en parallellkoppling är _______ samma över alla komponenter.',
                        answer: 'spänningen',
                        alternatives: ['spänning', 'U'],
                        explanation: 'I parallellt är spänningen densamma över alla komponenter, men strömmen fördelas.'
                    },
                    {
                        id: 'c1-6-e8',
                        type: 'multiple-choice',
                        question: 'Tre kondensatorer på 30µF, 60µF och 90µF kopplas i serie. Vad blir totalkapacitansen (närmevärde)?',
                        options: ['16 µF', '20 µF', '60 µF', '180 µF'],
                        correct: 0,
                        explanation: '1/C_tot = 1/30 + 1/60 + 1/90 ≈ 0,0611. C_tot ≈ 16,4µF'
                    },
                    {
                        id: 'c1-6-e9',
                        type: 'true-false',
                        question: 'När resistorer kopplas parallellt blir totalresistansen alltid lägre än den minsta enskilda resistorn.',
                        correct: true,
                        explanation: 'Sant. Parallellkoppling ger alltid lägre total resistans än den minsta komponenten.'
                    },
                    {
                        id: 'c1-6-e10',
                        type: 'matching',
                        question: 'Para ihop kopplingstypen med vad som är konstant:',
                        pairs: [
                            { left: 'Serie', right: 'Strömmen är samma' },
                            { left: 'Parallell', right: 'Spänningen är samma' },
                            { left: 'Serie-resistorer', right: 'Adderas direkt' },
                            { left: 'Parallell-resistorer', right: 'Inverteras och adderas' }
                        ]
                    }
                ]
            },
            {
                id: '1.7',
                title: 'Växelström och impedans',
                slug: 'vaxelstrom',
                description: 'Förstå växelström, fas och impedans',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c1-7-e1',
                        type: 'multiple-choice',
                        question: 'Vad mäts frekvens i?',
                        options: ['Volt (V)', 'Ampere (A)', 'Hertz (Hz)', 'Ohm (Ω)'],
                        correct: 2,
                        explanation: 'Frekvens mäts i Hertz (Hz) - antal svängningar per sekund.'
                    },
                    {
                        id: 'c1-7-e2',
                        type: 'calculation',
                        question: 'Nätspänningen är 230V (effektivvärde). Vad är toppvärdet? (U_topp = U_eff × 1,414)',
                        answer: 325,
                        unit: 'V',
                        tolerance: 5,
                        hint: 'U_topp = U_eff × √2 ≈ U_eff × 1,414',
                        steps: [
                            'U_topp = U_eff × 1,414',
                            'U_topp = 230 × 1,414',
                            'U_topp ≈ 325V'
                        ],
                        explanation: 'U_topp = 230V × 1,414 ≈ 325V'
                    },
                    {
                        id: 'c1-7-e3',
                        type: 'multiple-choice',
                        question: 'Vilken frekvens har nätspänningen i Sverige?',
                        options: ['50 Hz', '60 Hz', '100 Hz', '230 Hz'],
                        correct: 0,
                        explanation: 'Nätspänningen i Sverige är 230V, 50Hz.'
                    },
                    {
                        id: 'c1-7-e4',
                        type: 'true-false',
                        question: 'I en kondensator släpar strömmen efter spänningen.',
                        correct: false,
                        explanation: 'Falskt. I en kondensator FÖREGÅR strömmen spänningen med 90°. Minnesregel: "ICE".'
                    },
                    {
                        id: 'c1-7-e5',
                        type: 'true-false',
                        question: 'I en spole släpar strömmen efter spänningen.',
                        correct: true,
                        explanation: 'Sant. I en spole släpar strömmen efter spänningen med 90°. Minnesregel: "ELI".'
                    },
                    {
                        id: 'c1-7-e6',
                        type: 'fill-blank',
                        question: 'Impedans betecknas med bokstaven _____ och mäts i ohm.',
                        answer: 'Z',
                        alternatives: ['z'],
                        explanation: 'Impedans betecknas Z och är det totala "motståndet" i en växelströmskrets.'
                    },
                    {
                        id: 'c1-7-e7',
                        type: 'multiple-choice',
                        question: 'Minnesregeln "ELI the ICE man" hjälper oss komma ihåg:',
                        options: [
                            'Vilka komponenter som används i en krets',
                            'Fasförhållandet mellan ström och spänning',
                            'Hur man räknar ut impedans',
                            'Skillnaden mellan AC och DC'
                        ],
                        correct: 1,
                        explanation: 'ELI: E (spänning) före I (ström) i L (spole). ICE: I (ström) före E (spänning) i C (kondensator).'
                    },
                    {
                        id: 'c1-7-e8',
                        type: 'multiple-choice',
                        question: 'Vad är perioden (T) om frekvensen är 50 Hz?',
                        options: ['0,02 s', '0,05 s', '0,5 s', '5 s'],
                        correct: 0,
                        explanation: 'T = 1/f = 1/50 = 0,02 sekunder = 20 millisekunder'
                    },
                    {
                        id: 'c1-7-e9',
                        type: 'true-false',
                        question: 'Effektivvärdet (RMS) är lägre än toppvärdet för en sinusvåg.',
                        correct: true,
                        explanation: 'Sant. U_eff = U_topp / √2 ≈ U_topp × 0,707'
                    },
                    {
                        id: 'c1-7-e10',
                        type: 'multiple-choice',
                        question: 'I en resistor är fasförskjutningen mellan ström och spänning:',
                        options: ['0°', '45°', '90°', '180°'],
                        correct: 0,
                        explanation: 'I en resistor är det ingen fasförskjutning - ström och spänning är i fas (0°).'
                    }
                ]
            },
            {
                id: '1.8',
                title: 'Filter och resonanskretsar',
                slug: 'filter',
                description: 'Lär dig om filter, resonans och Q-värde',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c1-8-e1',
                        type: 'multiple-choice',
                        question: 'Vad händer vid resonans i en LC-krets?',
                        options: [
                            'X_L och X_C är lika stora',
                            'Impedansen blir oändlig',
                            'Strömmen blir noll',
                            'Spänningen blir noll'
                        ],
                        correct: 0,
                        explanation: 'Vid resonans är X_L = X_C, och reaktanserna tar ut varandra.'
                    },
                    {
                        id: 'c1-8-e2',
                        type: 'multiple-choice',
                        question: 'Vilket filter släpper igenom låga frekvenser och dämpar höga?',
                        options: ['Högpassfilter', 'Lågpassfilter', 'Bandpassfilter', 'Bandspärrfilter'],
                        correct: 1,
                        explanation: 'Ett lågpassfilter släpper igenom låga frekvenser och dämpar höga.'
                    },
                    {
                        id: 'c1-8-e3',
                        type: 'multiple-choice',
                        question: 'Varför används lågpassfilter efter en radiosändare?',
                        options: [
                            'För att öka effekten',
                            'För att dämpa övertoner',
                            'För att förbättra modulationen',
                            'För att sänka frekvensen'
                        ],
                        correct: 1,
                        explanation: 'Lågpassfilter dämpar övertoner (harmoniska) för att undvika störningar.'
                    },
                    {
                        id: 'c1-8-e4',
                        type: 'true-false',
                        question: 'Ett högpassfilter blockerar likström och släpper igenom växelström.',
                        correct: true,
                        explanation: 'Sant. Ett högpassfilter (t.ex. en kondensator i serie) blockerar DC men släpper igenom AC.'
                    },
                    {
                        id: 'c1-8-e5',
                        type: 'multiple-choice',
                        question: 'I en seriekrets vid resonans är impedansen:',
                        options: ['Maximal', 'Minimal', 'Noll', 'Oändlig'],
                        correct: 1,
                        explanation: 'I en seriekrets vid resonans är impedansen MINIMAL (endast R kvarstår).'
                    },
                    {
                        id: 'c1-8-e6',
                        type: 'multiple-choice',
                        question: 'I en parallellkrets vid resonans är impedansen:',
                        options: ['Maximal', 'Minimal', 'Noll', 'Lika som R'],
                        correct: 0,
                        explanation: 'I en parallellkrets vid resonans är impedansen MAXIMAL.'
                    },
                    {
                        id: 'c1-8-e7',
                        type: 'fill-blank',
                        question: 'Q-värdet anger hur _______ resonansen är.',
                        answer: 'skarp',
                        alternatives: ['smal', 'spetsig', 'selektiv'],
                        explanation: 'Q-värdet (kvalitetsfaktor) anger hur skarp/smal resonansen är. Högt Q = smal bandbredd.'
                    },
                    {
                        id: 'c1-8-e8',
                        type: 'multiple-choice',
                        question: 'Vad betyder ett högt Q-värde?',
                        options: [
                            'Bred resonans, stor bandbredd',
                            'Skarp resonans, smal bandbredd',
                            'Låg frekvens',
                            'Hög effekt'
                        ],
                        correct: 1,
                        explanation: 'Högt Q = skarp resonans med smal bandbredd. Bra selektivitet!'
                    },
                    {
                        id: 'c1-8-e9',
                        type: 'multiple-choice',
                        question: 'Vilket filter väljer ut ett smalt frekvensband och dämpar allt annat?',
                        options: ['Högpassfilter', 'Lågpassfilter', 'Bandpassfilter', 'Bandspärrfilter'],
                        correct: 2,
                        explanation: 'Ett bandpassfilter släpper endast igenom ett visst frekvensband.'
                    },
                    {
                        id: 'c1-8-e10',
                        type: 'matching',
                        question: 'Para ihop filtertypen med användningen:',
                        pairs: [
                            { left: 'Lågpass', right: 'Dämpa övertoner efter sändare' },
                            { left: 'Högpass', right: 'Blockera DC, släppa AC' },
                            { left: 'Bandpass', right: 'Välja önskad signal i mottagare' },
                            { left: 'Bandspärr', right: 'Eliminera en störande frekvens' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        number: 2,
        title: 'Radioteknik',
        slug: 'kapitel-2-radioteknik',
        icon: '📻',
        subchapters: [
            {
                id: '2.1',
                title: 'Signaler och modulation',
                slug: 'signaler',
                description: 'Förstå olika modulationstyper och deras användning',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-1-e1',
                        type: 'multiple-choice',
                        question: 'Vad innebär AM (Amplitudmodulation)?',
                        options: [
                            'Bärvågens frekvens varieras',
                            'Bärvågens amplitud varieras',
                            'Bärvågens fas varieras',
                            'Bärvågen slås på och av'
                        ],
                        correct: 1,
                        explanation: 'Vid AM varieras bärvågens styrka (amplitud) i takt med modulationssignalen.'
                    },
                    {
                        id: 'c2-1-e2',
                        type: 'multiple-choice',
                        question: 'Vilken modulationstyp används för FM-rundradio?',
                        options: ['AM', 'SSB', 'FM', 'CW'],
                        correct: 2,
                        explanation: 'FM (Frekvensmodulation) används för FM-rundradio på 88-108 MHz.'
                    },
                    {
                        id: 'c2-1-e3',
                        type: 'true-false',
                        question: 'SSB är mer effektivt än AM när det gäller effektanvändning.',
                        correct: true,
                        explanation: 'Sant. SSB använder effekten mer effektivt genom att ta bort bärvågen och ett sidband.'
                    },
                    {
                        id: 'c2-1-e4',
                        type: 'multiple-choice',
                        question: 'På HF-banden, vilket sidband används normalt under 10 MHz?',
                        options: ['USB', 'LSB', 'DSB', 'ISB'],
                        correct: 1,
                        explanation: 'LSB (Lower Sideband) används under 10 MHz, USB (Upper Sideband) används på 10 MHz och högre.'
                    },
                    {
                        id: 'c2-1-e5',
                        type: 'multiple-choice',
                        question: 'Vilket trafiksätt har smalast bandbredd?',
                        options: ['AM', 'SSB', 'FM', 'CW'],
                        correct: 3,
                        explanation: 'CW (morsekod) har smalast bandbredd, typiskt 100-500 Hz.'
                    },
                    {
                        id: 'c2-1-e6',
                        type: 'fill-blank',
                        question: 'FT8 är ett populärt _______ trafiksätt för DX.',
                        answer: 'digitalt',
                        alternatives: ['digital'],
                        explanation: 'FT8 är ett digitalt trafiksätt designat för svaga signaler och DX-trafik.'
                    },
                    {
                        id: 'c2-1-e7',
                        type: 'matching',
                        question: 'Para ihop trafiksättet med typisk bandbredd:',
                        pairs: [
                            { left: 'CW', right: '100-500 Hz' },
                            { left: 'SSB', right: '2,4-3 kHz' },
                            { left: 'AM', right: '6-9 kHz' },
                            { left: 'FM (smalband)', right: '12-16 kHz' }
                        ]
                    },
                    {
                        id: 'c2-1-e8',
                        type: 'true-false',
                        question: 'FM är mer störningstålig än AM.',
                        correct: true,
                        explanation: 'Sant. FM är mindre känslig för amplitudstörningar (brus, atmosfäriska störningar).'
                    },
                    {
                        id: 'c2-1-e9',
                        type: 'multiple-choice',
                        question: 'Vad är en fördel med SSB jämfört med AM?',
                        options: [
                            'Enklare utrustning',
                            'Bättre ljudkvalitet vid svaga signaler',
                            'Större bandbredd',
                            'Klarar inte svaga signaler'
                        ],
                        correct: 1,
                        explanation: 'SSB ger bättre prestanda vid svaga signaler och använder mindre bandbredd.'
                    },
                    {
                        id: 'c2-1-e10',
                        type: 'multiple-choice',
                        question: 'Vilket trafiksätt kräver kunskap i morsekod?',
                        options: ['AM', 'SSB', 'FM', 'CW'],
                        correct: 3,
                        explanation: 'CW (Continuous Wave) är morsetelegrafi och kräver kunskap i morsekod.'
                    }
                ]
            },
            {
                id: '2.2',
                title: 'Sändarens uppbyggnad',
                slug: 'sandare',
                description: 'Lär dig hur en sändare fungerar',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-2-e1',
                        type: 'ordering',
                        question: 'Ordna sändarens huvudblock i rätt ordning (från signal till antenn):',
                        items: [
                            'Oscillator (genererar bärvåg)',
                            'Modulator (lägger på information)',
                            'Drivsteg (förstärker till mellannivå)',
                            'Slutsteg (PA - förstärker till full effekt)',
                            'Lågpassfilter (tar bort övertoner)',
                            'Antenn'
                        ],
                        correctOrder: [0, 1, 2, 3, 4, 5]
                    },
                    {
                        id: 'c2-2-e2',
                        type: 'multiple-choice',
                        question: 'Vad är slutstegets (PA) huvudsakliga funktion?',
                        options: [
                            'Generera bärvågen',
                            'Modulera signalen',
                            'Förstärka till önskad uteffekt',
                            'Filtrera bort övertoner'
                        ],
                        correct: 2,
                        explanation: 'Slutsteget (Power Amplifier) förstärker signalen till önskad uteffekt.'
                    },
                    {
                        id: 'c2-2-e3',
                        type: 'true-false',
                        question: 'En sändare ska alltid vara ansluten till antenn eller dummyload när den sänder.',
                        correct: true,
                        explanation: 'Sant. Att sända utan last kan skada slutsteget på grund av reflekterad effekt.'
                    },
                    {
                        id: 'c2-2-e4',
                        type: 'multiple-choice',
                        question: 'Varför används lågpassfilter efter slutsteget?',
                        options: [
                            'För att öka effekten',
                            'För att dämpa övertoner',
                            'För att modulera signalen',
                            'För att matcha antennen'
                        ],
                        correct: 1,
                        explanation: 'Lågpassfiltret dämpar oönskade övertoner (harmoniska) för att undvika störningar.'
                    },
                    {
                        id: 'c2-2-e5',
                        type: 'fill-blank',
                        question: 'PLL står för _______-Locked Loop.',
                        answer: 'Phase',
                        alternatives: ['phase'],
                        explanation: 'PLL = Phase-Locked Loop, används för frekvensstabilisering.'
                    },
                    {
                        id: 'c2-2-e6',
                        type: 'multiple-choice',
                        question: 'Vad är en VFO?',
                        options: [
                            'Variable Frequency Oscillator',
                            'Very Fast Operation',
                            'Voltage Frequency Output',
                            'Virtual Filter Option'
                        ],
                        correct: 0,
                        explanation: 'VFO = Variable Frequency Oscillator, en oscillator med justerbar frekvens.'
                    },
                    {
                        id: 'c2-2-e7',
                        type: 'true-false',
                        question: 'Alla sändare genererar oönskade övertoner.',
                        correct: true,
                        explanation: 'Sant. Alla sändare genererar övertoner (2×, 3×, 4× grundfrekvensen) som måste dämpas.'
                    },
                    {
                        id: 'c2-2-e8',
                        type: 'multiple-choice',
                        question: 'Vad är en dummyload?',
                        options: [
                            'En typ av antenn',
                            'En resistiv last för att testa sändare utan att stråla',
                            'Ett filter',
                            'En förstärkare'
                        ],
                        correct: 1,
                        explanation: 'En dummyload är ett motstånd (ofta 50Ω) som absorberar sändareffekten för tester.'
                    },
                    {
                        id: 'c2-2-e9',
                        type: 'multiple-choice',
                        question: 'Vad används DDS för?',
                        options: [
                            'Digital detektering',
                            'Direct Digital Synthesis - generera exakta frekvenser',
                            'Dual Display System',
                            'Digital Data Storage'
                        ],
                        correct: 1,
                        explanation: 'DDS (Direct Digital Synthesis) genererar frekvenser digitalt med hög precision.'
                    },
                    {
                        id: 'c2-2-e10',
                        type: 'matching',
                        question: 'Para ihop komponenten med funktionen:',
                        pairs: [
                            { left: 'Oscillator', right: 'Genererar bärvåg' },
                            { left: 'Modulator', right: 'Lägger på information' },
                            { left: 'PA (slutsteg)', right: 'Förstärker till full effekt' },
                            { left: 'Lågpassfilter', right: 'Dämpar övertoner' }
                        ]
                    }
                ]
            },
            {
                id: '2.3',
                title: 'Mottagarens uppbyggnad',
                slug: 'mottagare',
                description: 'Förstå hur en superheterodynmottagare fungerar',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c2-3-e1',
                        type: 'multiple-choice',
                        question: 'Vad är grundprincipen i en superheterodynmottagare?',
                        options: [
                            'Direkt förstärkning av RF-signal',
                            'Omvandling till fast mellanfrekvens (MF/IF)',
                            'Digital sampling av signalen',
                            'Direkt demodulation'
                        ],
                        correct: 1,
                        explanation: 'Superheterodynprincipen omvandlar signalen till en fast mellanfrekvens för filtrering och förstärkning.'
                    },
                    {
                        id: 'c2-3-e2',
                        type: 'ordering',
                        question: 'Ordna mottagarens block i rätt ordning (från antenn till högtalare):',
                        items: [
                            'Antennfilter',
                            'RF-förstärkare',
                            'Blandare',
                            'MF-filter och förstärkare',
                            'Demodulator',
                            'LF-förstärkare och högtalare'
                        ],
                        correctOrder: [0, 1, 2, 3, 4, 5]
                    },
                    {
                        id: 'c2-3-e3',
                        type: 'multiple-choice',
                        question: 'Vad betyder känslighet hos en mottagare?',
                        options: [
                            'Förmågan att ta emot svaga signaler',
                            'Förmågan att skilja närliggande frekvenser',
                            'Förmågan att motstå överbelastning',
                            'Ljudkvaliteten'
                        ],
                        correct: 0,
                        explanation: 'Känslighet anger den minsta signalnivå som mottagaren kan ta emot med godtagbar kvalitet.'
                    },
                    {
                        id: 'c2-3-e4',
                        type: 'multiple-choice',
                        question: 'Vad betyder selektivitet hos en mottagare?',
                        options: [
                            'Förmågan att ta emot svaga signaler',
                            'Förmågan att skilja mellan närliggande frekvenser',
                            'Förmågan att förstärka signaler',
                            'Förmågan att modulera signaler'
                        ],
                        correct: 1,
                        explanation: 'Selektivitet är mottagarens förmåga att skilja ut önskad signal från närliggande.'
                    },
                    {
                        id: 'c2-3-e5',
                        type: 'fill-blank',
                        question: 'MF står för _______frekvens.',
                        answer: 'mellan',
                        alternatives: ['Mellan', 'intermediär'],
                        explanation: 'MF = Mellanfrekvens (på engelska IF = Intermediate Frequency).'
                    },
                    {
                        id: 'c2-3-e6',
                        type: 'multiple-choice',
                        question: 'Vilken är en vanlig mellanfrekvens för HF-transceivrar?',
                        options: ['455 kHz', '9 MHz', '10,7 MHz', '21,4 MHz'],
                        correct: 1,
                        explanation: '9 MHz är en vanlig mellanfrekvens i HF-transceivrar. 10,7 MHz är vanligt för FM-mottagare.'
                    },
                    {
                        id: 'c2-3-e7',
                        type: 'true-false',
                        question: 'AGC står för Automatic Gain Control och håller ljudnivån jämn.',
                        correct: true,
                        explanation: 'Sant. AGC justerar förstärkningen automatiskt för att hålla jämn utsignal trots varierande insignal.'
                    },
                    {
                        id: 'c2-3-e8',
                        type: 'multiple-choice',
                        question: 'Vad är spegelfrekvensproblemet?',
                        options: [
                            'Mottagaren svarar på två frekvenser',
                            'Signalen reflekteras i antennen',
                            'Mottagaren blir överbelastad',
                            'Ljudet ekar'
                        ],
                        correct: 0,
                        explanation: 'En blandare svarar på både önskad frekvens och spegelfrekvensen (f_LO ± f_MF).'
                    },
                    {
                        id: 'c2-3-e9',
                        type: 'multiple-choice',
                        question: 'Vad bestämmer främst mottagarens selektivitet?',
                        options: [
                            'RF-förstärkaren',
                            'Antennen',
                            'MF-filtret',
                            'Lokaloscillatorn'
                        ],
                        correct: 2,
                        explanation: 'MF-filtret bestämmer främst selektiviteten - hur bra mottagaren kan skilja närliggande signaler.'
                    },
                    {
                        id: 'c2-3-e10',
                        type: 'matching',
                        question: 'Para ihop komponenten med dess funktion:',
                        pairs: [
                            { left: 'RF-förstärkare', right: 'Förstärker svaga signaler från antennen' },
                            { left: 'Blandare', right: 'Omvandlar till mellanfrekvens' },
                            { left: 'MF-filter', right: 'Bestämmer selektivitet' },
                            { left: 'Demodulator', right: 'Tar ut informationen' }
                        ]
                    }
                ]
            },
            {
                id: '2.4',
                title: 'Transceiver',
                slug: 'transceiver',
                description: 'Kombinerad sändare och mottagare',
                estimatedTime: 15,
                exercises: [
                    {
                        id: 'c2-4-e1',
                        type: 'fill-blank',
                        question: 'Transceiver är en kombination av sändare (________) och mottagare (receiver).',
                        answer: 'transmitter',
                        alternatives: ['Transmitter', 'sändare'],
                        explanation: 'Transceiver = Transmitter + Receiver'
                    },
                    {
                        id: 'c2-4-e2',
                        type: 'true-false',
                        question: 'I en transceiver delar sändare och mottagare många komponenter.',
                        correct: true,
                        explanation: 'Sant. VFO, filter, display och nätaggregat delas ofta mellan sändare och mottagare.'
                    },
                    {
                        id: 'c2-4-e3',
                        type: 'multiple-choice',
                        question: 'Vad händer när du trycker på PTT (Push-To-Talk)?',
                        options: [
                            'Endast sändaren startar',
                            'Mottagaren tystas och sändaren aktiveras',
                            'Bara ljudet stängs av',
                            'Inget händer'
                        ],
                        correct: 1,
                        explanation: 'PTT tystnar mottagaren, kopplar antennen till sändaren och aktiverar sändningen.'
                    },
                    {
                        id: 'c2-4-e4',
                        type: 'multiple-choice',
                        question: 'Vad är RIT (Receiver Incremental Tuning)?',
                        options: [
                            'Finjusterar mottagarfrekvensen utan att ändra sändningsfrekvensen',
                            'Ändrar effekten',
                            'Justerar volymen',
                            'Aktiverar nödsignal'
                        ],
                        correct: 0,
                        explanation: 'RIT finjusterar mottagarfrekvensen oberoende av sändningsfrekvensen.'
                    },
                    {
                        id: 'c2-4-e5',
                        type: 'multiple-choice',
                        question: 'Vad är VOX?',
                        options: [
                            'Voice-Operated Switch - automatisk sändning vid tal',
                            'Very Old Xmitter',
                            'Volume Output eXtension',
                            'Variable Output X-mission'
                        ],
                        correct: 0,
                        explanation: 'VOX = Voice-Operated Switch, aktiverar sändning automatiskt när du pratar.'
                    },
                    {
                        id: 'c2-4-e6',
                        type: 'fill-blank',
                        question: 'ATU står för Automatic _______ Unit.',
                        answer: 'Tuning',
                        alternatives: ['tuning', 'Antenna Tuning'],
                        explanation: 'ATU = Automatic Tuning Unit (eller Antenna Tuning Unit), automatisk antennanpassning.'
                    },
                    {
                        id: 'c2-4-e7',
                        type: 'true-false',
                        question: 'Split-funktion betyder att man sänder och tar emot på olika frekvenser.',
                        correct: true,
                        explanation: 'Sant. Split används t.ex. vid DX-trafik där DX-stationen sänder på en frekvens och lyssnar på en annan.'
                    },
                    {
                        id: 'c2-4-e8',
                        type: 'multiple-choice',
                        question: 'Vad gör en Noise Blanker (NB)?',
                        options: [
                            'Dämpar pulsstörningar',
                            'Ökar ljudnivån',
                            'Filtrerar bort alla ljud',
                            'Stänger av mottagaren'
                        ],
                        correct: 0,
                        explanation: 'NB (Noise Blanker) dämpar korta pulsstörningar från t.ex. tändgnistor.'
                    },
                    {
                        id: 'c2-4-e9',
                        type: 'multiple-choice',
                        question: 'Vad är NR (Noise Reduction)?',
                        options: [
                            'Naturlig Radio',
                            'Digital brusreducering',
                            'Nödutrustning',
                            'Normalresistans'
                        ],
                        correct: 1,
                        explanation: 'NR (Noise Reduction) är digital signalbehandling som minskar bakgrundsbrus.'
                    },
                    {
                        id: 'c2-4-e10',
                        type: 'matching',
                        question: 'Para ihop funktionen med beskrivningen:',
                        pairs: [
                            { left: 'PTT', right: 'Aktiverar sändning' },
                            { left: 'VOX', right: 'Automatisk sändning vid tal' },
                            { left: 'RIT', right: 'Finjustera mottagarfrekvens' },
                            { left: 'Split', right: 'Sända och ta emot på olika frekvenser' }
                        ]
                    }
                ]
            },
            {
                id: '2.5',
                title: 'Halvledare och komponenter',
                slug: 'halvledare',
                description: 'Dioder, transistorer och integrerade kretsar',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-5-e1',
                        type: 'true-false',
                        question: 'En diod släpper igenom ström i båda riktningarna.',
                        correct: false,
                        explanation: 'Falskt. En diod släpper endast igenom ström i en riktning.'
                    },
                    {
                        id: 'c2-5-e2',
                        type: 'multiple-choice',
                        question: 'Vilken diodtyp används för att få en konstant spänning?',
                        options: ['Likriktardiod', 'Signaldiod', 'Zenerdiod', 'LED'],
                        correct: 2,
                        explanation: 'Zenerdioder används för spänningsreglering och ger en konstant spänning.'
                    },
                    {
                        id: 'c2-5-e3',
                        type: 'multiple-choice',
                        question: 'Hur många anslutningar har en bipolär transistor?',
                        options: ['2', '3', '4', '5'],
                        correct: 1,
                        explanation: 'En bipolär transistor har 3 anslutningar: Bas, Kollektor och Emitter.'
                    },
                    {
                        id: 'c2-5-e4',
                        type: 'fill-blank',
                        question: 'BJT står för Bipolar _______ Transistor.',
                        answer: 'Junction',
                        alternatives: ['junction'],
                        explanation: 'BJT = Bipolar Junction Transistor'
                    },
                    {
                        id: 'c2-5-e5',
                        type: 'multiple-choice',
                        question: 'Vilken transistortyp styrs av spänning istället för ström?',
                        options: ['BJT', 'NPN', 'PNP', 'FET'],
                        correct: 3,
                        explanation: 'FET (Field Effect Transistor) styrs av spänning, BJT styrs av ström.'
                    },
                    {
                        id: 'c2-5-e6',
                        type: 'matching',
                        question: 'Para ihop diodtypen med användningen:',
                        pairs: [
                            { left: 'Likriktardiod', right: 'Omvandla AC till DC' },
                            { left: 'Zenerdiod', right: 'Spänningsreglering' },
                            { left: 'LED', right: 'Lysindikator' },
                            { left: 'Varicap', right: 'Elektronisk avstämning' }
                        ]
                    },
                    {
                        id: 'c2-5-e7',
                        type: 'true-false',
                        question: 'MOSFET har högre ingångsimpedans än BJT.',
                        correct: true,
                        explanation: 'Sant. MOSFET (Metal-Oxide-Semiconductor FET) har mycket hög ingångsimpedans.'
                    },
                    {
                        id: 'c2-5-e8',
                        type: 'multiple-choice',
                        question: 'Vad kallas de tre anslutningarna på en FET?',
                        options: [
                            'Bas, Kollektor, Emitter',
                            'Gate, Drain, Source',
                            'Plus, Minus, Jord',
                            'In, Out, Ground'
                        ],
                        correct: 1,
                        explanation: 'FET har Gate, Drain och Source (jämför med BJT: Bas, Kollektor, Emitter).'
                    },
                    {
                        id: 'c2-5-e9',
                        type: 'multiple-choice',
                        question: 'Vad är en integrerad krets (IC)?',
                        options: [
                            'En enskild transistor',
                            'Många komponenter i ett chip',
                            'En typ av kabel',
                            'Ett filter'
                        ],
                        correct: 1,
                        explanation: 'En IC (Integrated Circuit) innehåller många komponenter (transistorer, resistorer etc.) i ett chip.'
                    },
                    {
                        id: 'c2-5-e10',
                        type: 'multiple-choice',
                        question: '78xx-serien är exempel på:',
                        options: [
                            'Förstärkare',
                            'Spänningsregulatorer',
                            'Oscillatorer',
                            'Blandare'
                        ],
                        correct: 1,
                        explanation: '78xx-serien (t.ex. 7805, 7812) är populära spänningsregulatorer.'
                    }
                ]
            },
            {
                id: '2.6',
                title: 'Oscillatorer',
                slug: 'oscillatorer',
                description: 'Hur oscillatorer genererar signaler',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-6-e1',
                        type: 'multiple-choice',
                        question: 'Vad är en oscillators huvudsakliga funktion?',
                        options: [
                            'Förstärka signaler',
                            'Generera en periodisk signal utan extern insignal',
                            'Filtrera signaler',
                            'Modulera signaler'
                        ],
                        correct: 1,
                        explanation: 'En oscillator genererar en periodisk signal (svängning) utan att behöva en insignal.'
                    },
                    {
                        id: 'c2-6-e2',
                        type: 'true-false',
                        question: 'För att en oscillator ska fungera krävs positiv återkoppling.',
                        correct: true,
                        explanation: 'Sant. Positiv återkoppling (signalen återförs i fas) krävs för att upprätthålla svängning.'
                    },
                    {
                        id: 'c2-6-e3',
                        type: 'multiple-choice',
                        question: 'Vilken oscillatortyp ger högst frekvensstabilitet?',
                        options: ['LC-oscillator', 'RC-oscillator', 'Kristalloscillator', 'VCO'],
                        correct: 2,
                        explanation: 'Kristalloscillatorer med kvartskristall har mycket hög frekvensstabilitet.'
                    },
                    {
                        id: 'c2-6-e4',
                        type: 'fill-blank',
                        question: 'VFO står för _______ Frequency Oscillator.',
                        answer: 'Variable',
                        alternatives: ['variable'],
                        explanation: 'VFO = Variable Frequency Oscillator, en oscillator med justerbar frekvens.'
                    },
                    {
                        id: 'c2-6-e5',
                        type: 'fill-blank',
                        question: 'VCO står för Voltage _______ Oscillator.',
                        answer: 'Controlled',
                        alternatives: ['controlled'],
                        explanation: 'VCO = Voltage Controlled Oscillator, frekvensen styrs av en spänning.'
                    },
                    {
                        id: 'c2-6-e6',
                        type: 'multiple-choice',
                        question: 'Vad är PLL?',
                        options: [
                            'Power Level Lock',
                            'Phase-Locked Loop',
                            'Programmable Logic Line',
                            'Parallel Line Link'
                        ],
                        correct: 1,
                        explanation: 'PLL (Phase-Locked Loop) kombinerar en VCO med en kristallreferens för stabilitet.'
                    },
                    {
                        id: 'c2-6-e7',
                        type: 'true-false',
                        question: 'DDS står för Direct Digital Synthesis.',
                        correct: true,
                        explanation: 'Sant. DDS genererar frekvenser digitalt med mycket hög precision och upplösning.'
                    },
                    {
                        id: 'c2-6-e8',
                        type: 'multiple-choice',
                        question: 'Colpitts och Hartley är exempel på:',
                        options: ['Filter', 'LC-oscillatorer', 'Förstärkare', 'Modulatorer'],
                        correct: 1,
                        explanation: 'Colpitts och Hartley är klassiska LC-oscillatorkonstruktioner.'
                    },
                    {
                        id: 'c2-6-e9',
                        type: 'multiple-choice',
                        question: 'Enligt Barkhausens kriterium, vad krävs för svängning?',
                        options: [
                            'Förstärkning × Återkoppling < 1',
                            'Förstärkning × Återkoppling ≥ 1',
                            'Förstärkning = 0',
                            'Återkoppling = 0'
                        ],
                        correct: 1,
                        explanation: 'För svängning krävs att förstärkning × återkoppling ≥ 1 och rätt fas.'
                    },
                    {
                        id: 'c2-6-e10',
                        type: 'matching',
                        question: 'Para ihop oscillatortypen med egenskapen:',
                        pairs: [
                            { left: 'Kristalloscillator', right: 'Högsta stabiliteten' },
                            { left: 'VFO', right: 'Justerbar frekvens' },
                            { left: 'VCO', right: 'Spänningsstyrd' },
                            { left: 'DDS', right: 'Digital frekvensgenering' }
                        ]
                    }
                ]
            },
            {
                id: '2.7',
                title: 'Blandare och frekvensomvandling',
                slug: 'blandare',
                description: 'Hur blandare används för frekvensomvandling',
                estimatedTime: 20,
                exercises: [
                    {
                        id: 'c2-7-e1',
                        type: 'multiple-choice',
                        question: 'Vad gör en blandare?',
                        options: [
                            'Förstärker signalen',
                            'Tar två signaler och producerar summa- och skillnadsfrekvenser',
                            'Filtrerar signalen',
                            'Modulerar signalen'
                        ],
                        correct: 1,
                        explanation: 'En blandare tar två signaler (f₁ och f₂) och producerar f₁+f₂ och f₁-f₂.'
                    },
                    {
                        id: 'c2-7-e2',
                        type: 'calculation',
                        question: 'En signal på 14,200 MHz blandas med en lokaloscillator på 14,209 MHz. Vad blir skillnadsfrekvensen (MF)?',
                        answer: 9,
                        unit: 'kHz',
                        hint: 'f_MF = f_LO - f_signal',
                        steps: [
                            'f_MF = 14,209 MHz - 14,200 MHz',
                            'f_MF = 0,009 MHz',
                            'f_MF = 9 kHz'
                        ],
                        explanation: 'Skillnadsfrekvensen: 14,209 - 14,200 = 0,009 MHz = 9 kHz'
                    },
                    {
                        id: 'c2-7-e3',
                        type: 'true-false',
                        question: 'Blandning används både i sändare och mottagare.',
                        correct: true,
                        explanation: 'Sant. Mottagare använder nedblandning (RF→MF), sändare använder uppblandning (MF→RF).'
                    },
                    {
                        id: 'c2-7-e4',
                        type: 'multiple-choice',
                        question: 'Om du blandar 7 MHz och 9 MHz, vilka frekvenser får du ut (förutom originalen)?',
                        options: [
                            '2 MHz och 16 MHz',
                            '7 MHz och 9 MHz',
                            '63 MHz',
                            '1 MHz och 8 MHz'
                        ],
                        correct: 0,
                        explanation: 'Summa: 7+9=16 MHz. Skillnad: 9-7=2 MHz.'
                    },
                    {
                        id: 'c2-7-e5',
                        type: 'fill-blank',
                        question: 'I en superheterodynmottagare omvandlas RF-signalen till en fast _______frekvens.',
                        answer: 'mellan',
                        alternatives: ['MF', 'intermediär', 'IF'],
                        explanation: 'RF omvandlas till en fast mellanfrekvens (MF/IF) via blandning.'
                    },
                    {
                        id: 'c2-7-e6',
                        type: 'multiple-choice',
                        question: 'Vilken blandare är passiv och kräver högre LO-nivå?',
                        options: ['Gilbertcell', 'Diodringblandare', 'Transistorblandare', 'Op-amp blandare'],
                        correct: 1,
                        explanation: 'Diodringblandaren är passiv (ingen förstärkning) och kräver högre LO-drivnivå.'
                    },
                    {
                        id: 'c2-7-e7',
                        type: 'true-false',
                        question: 'En blandare kan ge förstärkning om den är aktivt uppbyggd.',
                        correct: true,
                        explanation: 'Sant. Aktiva blandare (t.ex. Gilbertcell) kan ge förstärkning.'
                    },
                    {
                        id: 'c2-7-e8',
                        type: 'multiple-choice',
                        question: 'Vad är lokaloscillatorn (LO) i en mottagare?',
                        options: [
                            'Den signal som kommer från antennen',
                            'Oscillatorn som används för att blanda ned till MF',
                            'Slutstegets oscillator',
                            'Ett filter'
                        ],
                        correct: 1,
                        explanation: 'LO (Local Oscillator) är den interna oscillatorn som används för blandning.'
                    },
                    {
                        id: 'c2-7-e9',
                        type: 'calculation',
                        question: 'Du vill ta emot 145 MHz och använder MF på 10,7 MHz. Vilken frekvens ska lokaloscillatorn ha för nedblandning?',
                        answer: 155.7,
                        unit: 'MHz',
                        tolerance: 0.1,
                        hint: 'f_LO = f_RF + f_MF (eller f_RF - f_MF)',
                        explanation: 'f_LO = 145 + 10,7 = 155,7 MHz (alternativt 145 - 10,7 = 134,3 MHz)'
                    },
                    {
                        id: 'c2-7-e10',
                        type: 'matching',
                        question: 'Para ihop blandningstypen med användningen:',
                        pairs: [
                            { left: 'Nedblandning', right: 'Mottagare (RF→MF)' },
                            { left: 'Uppblandning', right: 'Sändare (MF→RF)' },
                            { left: 'Summafrekvens', right: 'f₁ + f₂' },
                            { left: 'Skillnadsfrekvens', right: 'f₁ - f₂' }
                        ]
                    }
                ]
            },
            {
                id: '2.8',
                title: 'Förstärkare',
                slug: 'forstarkare',
                description: 'Förstärkarklasser och tillämpningar',
                estimatedTime: 25,
                exercises: [
                    {
                        id: 'c2-8-e1',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass har bäst linjäritet?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 0,
                        explanation: 'Klass A har bäst linjäritet men lägst verkningsgrad (~25-30%).'
                    },
                    {
                        id: 'c2-8-e2',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass har högst verkningsgrad?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 3,
                        explanation: 'Klass C har högst verkningsgrad (~70-80%) men dålig linjäritet.'
                    },
                    {
                        id: 'c2-8-e3',
                        type: 'true-false',
                        question: 'SSB kräver linjär förstärkning.',
                        correct: true,
                        explanation: 'Sant. SSB måste använda linjära förstärkare (klass A, AB) för att undvika distorsion.'
                    },
                    {
                        id: 'c2-8-e4',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass används vanligen för FM/CW-slutsteg?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 3,
                        explanation: 'Klass C kan användas för FM/CW då linjäritet inte är lika kritisk, och ger högre verkningsgrad.'
                    },
                    {
                        id: 'c2-8-e5',
                        type: 'fill-blank',
                        question: 'AGC står för Automatic _______ Control.',
                        answer: 'Gain',
                        alternatives: ['gain'],
                        explanation: 'AGC = Automatic Gain Control, automatisk förstärkningsreglering.'
                    },
                    {
                        id: 'c2-8-e6',
                        type: 'multiple-choice',
                        question: 'Vad är PA?',
                        options: [
                            'Pre Amplifier',
                            'Power Amplifier',
                            'Phase Adjuster',
                            'Passive Antenna'
                        ],
                        correct: 1,
                        explanation: 'PA = Power Amplifier, slutsteget som förstärker till full sändareffekt.'
                    },
                    {
                        id: 'c2-8-e7',
                        type: 'true-false',
                        question: 'Högre verkningsgrad i ett slutsteg betyder mindre värmeutveckling.',
                        correct: true,
                        explanation: 'Sant. Högre verkningsgrad = mer av ineffekten blir RF-signal och mindre blir värme.'
                    },
                    {
                        id: 'c2-8-e8',
                        type: 'multiple-choice',
                        question: 'Vad kan hända om SWR blir mycket högt (över 2:1) på en sändare?',
                        options: [
                            'Bättre prestanda',
                            'Inget särskilt',
                            'Slutsteget kan skadas',
                            'Lägre effekt'
                        ],
                        correct: 2,
                        explanation: 'Högt SWR innebär reflekterad effekt som kan skada slutsteget (PA).'
                    },
                    {
                        id: 'c2-8-e9',
                        type: 'multiple-choice',
                        question: 'Vilken förstärkarklass används vanligen i SSB-slutsteg?',
                        options: ['Klass A', 'Klass B', 'Klass AB', 'Klass C'],
                        correct: 2,
                        explanation: 'Klass AB ger bra balans mellan linjäritet (för SSB) och verkningsgrad.'
                    },
                    {
                        id: 'c2-8-e10',
                        type: 'matching',
                        question: 'Para ihop förstärkarklassen med egenskapen:',
                        pairs: [
                            { left: 'Klass A', right: 'Bästa linjäritet, lägst verkningsgrad' },
                            { left: 'Klass AB', right: 'Bra för SSB-slutsteg' },
                            { left: 'Klass C', right: 'Högsta verkningsgrad, för FM/CW' },
                            { left: 'RF-förstärkare', right: 'Förstärker radiosignaler' }
                        ]
                    }
                ]
            }
        ]
    },
 {
        id: 3,
        number: 3,
        title: 'Antenner och Matarledningar',
        slug: 'kapitel-3-antenner',
        icon: '📡',
        subchapters: [
            {
                id: '3.1',
                title: 'Grundprinciper',
                slug: 'grundprinciper',
                description: 'Våglängd, impedans, resonans och antennvinst',
                estimatedTime: 20,
                exercises: []
            },
            {
                id: '3.2',
                title: 'Dipolantenner',
                slug: 'dipol',
                description: 'Halvvågsdipol, inverterad-V och flerbandsdipoler',
                estimatedTime: 20,
                exercises: []
            },
            {
                id: '3.3',
                title: 'Vertikala antenner',
                slug: 'vertikal',
                description: 'Kvartsvågsvertikal, jordplan och ground plane',
                estimatedTime: 20,
                exercises: []
            },
            {
                id: '3.4',
                title: 'Riktantenner',
                slug: 'riktantenner',
                description: 'Yagi, Quad och log-periodisk',
                estimatedTime: 20,
                exercises: []
            },
            {
                id: '3.5',
                title: 'Matarledningar',
                slug: 'matarledningar',
                description: 'Koaxialkabel, förluster och kontakter',
                estimatedTime: 20,
                exercises: []
            },
            {
                id: '3.6',
                title: 'Anpassning och SWR',
                slug: 'anpassning',
                description: 'SWR, anpassningsenheter och impedanstransformation',
                estimatedTime: 25,
                exercises: []
            },
            {
                id: '3.7',
                title: 'Balun och mantelströmmar',
                slug: 'balun',
                description: 'Baluner, ununs och RFI-problem',
                estimatedTime: 20,
                exercises: []
            },
            {
                id: '3.8',
                title: 'Praktiska antenner',
                slug: 'praktiska',
                description: 'Random wire, G5RV, magnetiska loopar och portabla antenner',
                estimatedTime: 20,
                exercises: []
            }
        ]
    },
    {
        id: 4,
        number: 4,
        title: 'Vågutbredning',
        slug: 'kapitel-4-vagutbredning',
        icon: '🌊',
        subchapters: []
    },
    {
        id: 5,
        number: 5,
        title: 'Mätinstrument och Mätmetoder',
        slug: 'kapitel-5-matinstrument',
        icon: '📊',
        subchapters: []
    },
    {
        id: 6,
        number: 6,
        title: 'Störningar (EMC)',
        slug: 'kapitel-6-storningar',
        icon: '🔇',
        subchapters: []
    },
    {
        id: 7,
        number: 7,
        title: 'Regler och Bestämmelser',
        slug: 'kapitel-7-regler-bestammelser',
        icon: '📜',
        subchapters: []
    },
    {
        id: 8,
        number: 8,
        title: 'Trafikmetoder och Operatörsteknik',
        slug: 'kapitel-8-trafikmetoder',
        icon: '🎙️',
        subchapters: []
    },
    {
        id: 9,
        number: 9,
        title: 'Elsäkerhet',
        slug: 'kapitel-9-sakerhet',
        icon: '⚠️',
        subchapters: []
    },
    {
        id: 10,
        number: 10,
        title: 'Praktisk Radiotrafik',
        slug: 'kapitel-10-praktisk-trafik',
        icon: '🎯',
        subchapters: []
    }
];

// Hjälpfunktioner
function getCertChapter(chapterId) {
    return certChapters.find(ch => ch.id === chapterId);
}

function getSubchapter(chapterId, subchapterId) {
    const chapter = getCertChapter(chapterId);
    if (!chapter) return null;
    return chapter.subchapters.find(sub => sub.id === subchapterId);
}

function getAvailableSubchapters(chapterId) {
    const chapter = getCertChapter(chapterId);
    if (!chapter) return [];
    return chapter.subchapters;
}

function getSubchapterExercises(chapterId, subchapterId) {
    const subchapter = getSubchapter(chapterId, subchapterId);
    return subchapter ? subchapter.exercises : [];
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        certChapters,
        getCertChapter,
        getSubchapter,
        getSubchapterExercises,  // <-- Lägg till denna rad
        getAvailableSubchapters
    };
}