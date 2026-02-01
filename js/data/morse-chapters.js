// js/data/morse-chapters.js
// Morse/CW-kapitel med övningsfrågor

const morseChapters = [
    {
        id: 'morse-1',
        title: 'Vad är morsekod?',
        file: 'cw-1-vad-ar-morsekod.html',
        time: 12,
        exercises: [
            {
                question: "Vem uppfann morsekod och vilket år presenterades den?",
                options: [
                    "Guglielmo Marconi, 1895",
                    "Samuel Morse (med Alfred Vail), 1838",
                    "Nikola Tesla, 1891",
                    "Alexander Graham Bell, 1876"
                ],
                correct: 1,
                explanation: "Samuel Morse och Alfred Vail presenterade morsekoden 1838."
            },
            {
                question: "Vad kallas den internationella nödsignalen i morse?",
                options: [
                    "MAYDAY",
                    "HELP",
                    "SOS",
                    "911"
                ],
                correct: 2,
                explanation: "SOS (· · · – – – · · ·) blev internationell nödsignal 1906."
            },
            {
                question: "Hur lång är en 'dah' jämfört med en 'dit'?",
                options: [
                    "2 gånger så lång",
                    "3 gånger så lång",
                    "4 gånger så lång",
                    "Lika långa"
                ],
                correct: 1,
                explanation: "En dah är exakt 3 gånger så lång som en dit."
            },
            {
                question: "Vad står CW för inom amatörradio?",
                options: [
                    "Code Words",
                    "Continuous Wave",
                    "Carrier Wave",
                    "Communication Wireless"
                ],
                correct: 1,
                explanation: "CW = Continuous Wave, radioamatörernas term för morsekod."
            },
            {
                question: "Varför når morsesignaler längre än röst vid samma effekt?",
                options: [
                    "Morse använder högre frekvenser",
                    "Morse har smalare bandbredd och hörs genom brus",
                    "Morse kräver speciella antenner",
                    "Det stämmer inte – röst når längre"
                ],
                correct: 1,
                explanation: "Morse har mycket smal bandbredd (~100 Hz) och kan höras även i kraftigt brus."
            }
        ]
    },
    {
        id: 'morse-2',
        title: 'Alfabetet A-Ö',
        file: 'cw-2-alfabetet-a-o.html',
        time: 20,
        exercises: [
            {
                question: "Vilken bokstav är kortast i morse?",
                options: [
                    "A (· –)",
                    "E (·)",
                    "T (–)",
                    "I (· ·)"
                ],
                correct: 1,
                explanation: "E är bara en dit (·) – den kortaste bokstaven."
            },
            {
                question: "Vad är morsekoden för bokstaven S?",
                options: [
                    "– – –",
                    "· · ·",
                    "– · –",
                    "· – ·"
                ],
                correct: 1,
                explanation: "S = · · · (tre korta signaler)"
            },
            {
                question: "Vilka två bokstäver är spegelbilder av varandra?",
                options: [
                    "E och T",
                    "A och N",
                    "S och O",
                    "M och W"
                ],
                correct: 1,
                explanation: "A = · – och N = – · (omvända av varandra)"
            },
            {
                question: "Vad är morsekoden för svenska bokstaven Ä?",
                options: [
                    "· – – · –",
                    "· – · –",
                    "– – – ·",
                    "· · – ·"
                ],
                correct: 1,
                explanation: "Ä = · – · – (dit-dah-dit-dah)"
            },
            {
                question: "Varför ska man INTE räkna prickar och streck när man lär sig morse?",
                options: [
                    "Det är förbjudet i tävlingar",
                    "Hjärnan måste känna igen ljudmönstret direkt",
                    "Det tar för lång tid att skriva",
                    "Prickarna och strecken kan variera"
                ],
                correct: 1,
                explanation: "Räkning skapar en flaskhals. Lär dig höra hela ljudmönstret!"
            }
        ]
    },
    {
        id: 'morse-3',
        title: 'Siffror och skiljetecken',
        file: 'cw-3-siffror-och-skiljetecken.html',
        time: 15,
        exercises: [
            {
                question: "Hur många element (dit/dah) har varje siffra i morse?",
                options: [
                    "3 element",
                    "4 element",
                    "5 element",
                    "Varierar"
                ],
                correct: 2,
                explanation: "Alla siffror har exakt 5 element i morse."
            },
            {
                question: "Vad är morsekoden för siffran 5?",
                options: [
                    "– – – – –",
                    "· · · · ·",
                    "· · · · –",
                    "– · · · ·"
                ],
                correct: 1,
                explanation: "5 = · · · · · (fem korta signaler)"
            },
            {
                question: "Vilket prosign betyder 'slut på meddelande'?",
                options: [
                    "SK",
                    "AR",
                    "BT",
                    "K"
                ],
                correct: 0,
                explanation: "SK (· · · – · –) betyder 'slut på kontakt'."
            },
            {
                question: "Hur rättar man ett fel i morse?",
                options: [
                    "Sänd 'ERROR' och börja om",
                    "Sänd 8 snabba dit:ar (HH) och börja om",
                    "Vänta 5 sekunder och fortsätt",
                    "Sänd 'QRS' och repetera"
                ],
                correct: 1,
                explanation: "HH (8 snabba dit:ar) = 'fel, jag börjar om'."
            },
            {
                question: "Vad är morsekoden för SOS?",
                options: [
                    "· · · · · · · · ·",
                    "· · · – – – · · ·",
                    "– – – · · · – – –",
                    "· – · – · – · – ·"
                ],
                correct: 1,
                explanation: "SOS = · · · – – – · · · (tre korta, tre långa, tre korta)"
            }
        ]
    },
    {
        id: 'morse-4',
        title: 'Lyssna och förstå',
        file: 'cw-4-lyssna-och-forsta.html',
        time: 18,
        exercises: [
            {
                question: "Vad innebär Koch-metoden?",
                options: [
                    "Lär dig alla tecken långsamt först, öka sedan hastigheten",
                    "Lär dig tecken vid full hastighet, lägg till ett i taget vid 90%",
                    "Fokusera på visuella tabeller och minnesknep",
                    "Träna endast på att skicka, inte ta emot"
                ],
                correct: 1,
                explanation: "Koch-metoden: full hastighet från start, lägg till tecken vid 90% träffsäkerhet."
            },
            {
                question: "Vad är Farnsworth-timing?",
                options: [
                    "En typ av morsenyckel",
                    "Tecken går snabbt, pauserna är långa",
                    "Alla tecken är lika långa",
                    "En metod för att räkna dit och dah"
                ],
                correct: 1,
                explanation: "Farnsworth: snabba tecken men långa pauser – hjälper hjärnan känna igen mönster."
            },
            {
                question: "Vilken hastighet bör nybörjare börja träna med enligt Koch?",
                options: [
                    "5 WPM",
                    "10 WPM",
                    "15-20 WPM",
                    "30 WPM"
                ],
                correct: 2,
                explanation: "15-20 WPM tvingar hjärnan att lära sig mönster istället för att räkna."
            },
            {
                question: "Vad är 'head copy'?",
                options: [
                    "Att kopiera morse med huvudet mot nyckeln",
                    "Att förstå morse utan att skriva ner",
                    "Att memorera morsetabellen",
                    "En typ av mikrofonteknik"
                ],
                correct: 1,
                explanation: "Head copy = förstå morse direkt i huvudet utan att skriva."
            },
            {
                question: "Vilket verktyg rekommenderas för morseträning online?",
                options: [
                    "Wikipedia",
                    "LCWO.net",
                    "YouTube",
                    "Facebook"
                ],
                correct: 1,
                explanation: "LCWO.net (Learn CW Online) är ett populärt träningsverktyg."
            }
        ]
    },
    {
        id: 'morse-5',
        title: 'Skicka morse',
        file: 'cw-5-skicka-morse.html',
        time: 16,
        exercises: [
            {
                question: "Vilken typ av nyckel rekommenderas för nybörjare?",
                options: [
                    "Paddle med keyer",
                    "Bug (semi-automatisk)",
                    "Straight key (handnyckel)",
                    "Datorprogram"
                ],
                correct: 2,
                explanation: "Straight key lär dig känslan för timing och rytm."
            },
            {
                question: "Vad kallas en operatörs personliga morsestil?",
                options: [
                    "Swing",
                    "Fist",
                    "Tone",
                    "Rhythm"
                ],
                correct: 1,
                explanation: "'Fist' är den personliga stilen – erfarna kan känna igen varandra!"
            },
            {
                question: "Var ska rörelsen komma från vid användning av straight key?",
                options: [
                    "Fingrarna",
                    "Armbågen",
                    "Handleden",
                    "Axeln"
                ],
                correct: 2,
                explanation: "Handleden ger bäst kontroll och undviker trötthet."
            },
            {
                question: "Vad gör en 'keyer' tillsammans med en paddle?",
                options: [
                    "Förstärker signalen",
                    "Genererar perfekt timing automatiskt",
                    "Översätter morse till text",
                    "Spelar in dina QSO:n"
                ],
                correct: 1,
                explanation: "En keyer genererar perfekta dit och dah med rätt timing."
            },
            {
                question: "Hur kan man öva CW-sändning utan radio?",
                options: [
                    "Det går inte",
                    "Med VBand eller MorseRunner på datorn",
                    "Genom att läsa morsetabeller",
                    "Genom att lyssna på radio"
                ],
                correct: 1,
                explanation: "VBand och MorseRunner låter dig öva CW-QSO online."
            }
        ]
    },
    {
        id: 'morse-6',
        title: 'Morse på luften',
        file: 'cw-6-morse-pa-luften.html',
        time: 20,
        exercises: [
            {
                question: "Vad betyder Q-koden QRS?",
                options: [
                    "Öka hastigheten",
                    "Sänk hastigheten",
                    "Störningar",
                    "Byt frekvens"
                ],
                correct: 1,
                explanation: "QRS = 'Sänk hastigheten' (QRQ = öka)"
            },
            {
                question: "Vad betyder förkortningen 73?",
                options: [
                    "God natt",
                    "Tack för kontakten",
                    "Bästa hälsningar",
                    "Vi hörs snart"
                ],
                correct: 2,
                explanation: "73 = 'Bästa hälsningar' – standard avslutning."
            },
            {
                question: "Vad sänder du för att avsluta ett QSO?",
                options: [
                    "AR",
                    "K",
                    "SK",
                    "BT"
                ],
                correct: 2,
                explanation: "SK = 'Silent Key' / slut på kontakt."
            },
            {
                question: "Vilket band är bäst för CW-nybörjare på dagtid?",
                options: [
                    "80m (3.5 MHz)",
                    "40m (7 MHz)",
                    "20m (14 MHz)",
                    "10m (28 MHz)"
                ],
                correct: 2,
                explanation: "20m har bra utbredning dagtid och många stationer."
            },
            {
                question: "Vad betyder QTH?",
                options: [
                    "Din signalrapport",
                    "Din antenn",
                    "Din position/ort",
                    "Din effekt"
                ],
                correct: 2,
                explanation: "QTH = 'Min position är...' (ort)"
            },
            {
                question: "Vad betyder 'CQ CQ DE SA0XXX K'?",
                options: [
                    "Jag söker en specifik station",
                    "Allmänt anrop från SA0XXX, kom",
                    "SA0XXX stänger ner",
                    "Nödanrop från SA0XXX"
                ],
                correct: 1,
                explanation: "CQ = allmänt anrop, DE = från, K = kom (din tur)."
            }
        ]
    }
];

// Gör tillgänglig globalt
if (typeof window !== 'undefined') {
    window.morseChapters = morseChapters;
}
