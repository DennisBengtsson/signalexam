
// PMR446-kapitel data
const pmrChapters = [
    {
        id: 'pmr-1',
        number: 1,
        title: 'Vad är PMR446?',
        icon: '📻',
        description: 'Lär dig vad PMR446 är, varför det är gratis att använda och vem som använder det.',
        readTime: '10 min',
        difficulty: 'Alla åldrar',
        topics: [
            'PMR446 förklarat enkelt',
            'Varför behövs inget certifikat?',
            'Vem använder PMR-radio?',
            'Reglerna du måste följa'
        ],
        exercises: [
            {
                type: 'multiple-choice',
                question: 'Vad betyder PMR i PMR446?',
                options: [
                    'Private Mobile Radio',
                    'Personal Music Radio', 
                    'Public Message Radio',
                    'Private Message Receiver'
                ],
                correct: 0,
                explanation: 'PMR står för Private Mobile Radio – personlig mobilradio på svenska.'
            },
            {
                type: 'multiple-choice',
                question: 'Vilken effekt får en PMR446-radio ha?',
                options: [
                    '5 watt',
                    '0,5 watt (500 milliwatt)',
                    '10 watt',
                    '1 watt'
                ],
                correct: 1,
                explanation: 'PMR446-radior är begränsade till max 0,5 watt (500 mW) effekt.'
            },
            {
                type: 'true-false',
                question: 'Du behöver certifikat för att använda PMR446-radio i Sverige.',
                correct: false,
                explanation: 'Nej! PMR446 är licensfritt och får användas av alla utan certifikat.'
            },
            {
                type: 'multiple-choice',
                question: 'Hur många kanaler finns på PMR446?',
                options: [
                    '8 kanaler',
                    '16 kanaler',
                    '22 kanaler',
                    '40 kanaler'
                ],
                correct: 1,
                explanation: 'PMR446 har 16 kanaler, numrerade 1-16.'
            }
        ]
    },
    {
        id: 'pmr-2',
        number: 2,
        title: 'Kom igång med din PMR-radio',
        icon: '🚀',
        description: 'Praktisk guide för att köpa din första radio och göra din första sändning.',
        readTime: '15 min',
        difficulty: 'Alla åldrar',
        topics: [
            'Vilken radio ska du köpa?',
            'Ladda batterierna rätt',
            'Din första sändning',
            'Radiovettig – så pratar du i radio'
        ],
        exercises: [
            {
                type: 'multiple-choice',
                question: 'Vad ska du göra INNAN du trycker på sändknappen?',
                options: [
                    'Bara börja prata direkt',
                    'Lyssna om kanalen är ledig',
                    'Höja volymen till max',
                    'Stänga av radion och slå på igen'
                ],
                correct: 1,
                explanation: 'Lyssna alltid först! Avbryt aldrig någon annan som pratar.'
            },
            {
                type: 'true-false',
                question: 'Du kan använda vilken laddare som helst till din PMR-radio.',
                correct: false,
                explanation: 'Använd alltid den medföljande laddaren eller en som är godkänd för din radio. Fel laddare kan skada batteriet.'
            },
            {
                type: 'multiple-choice',
                question: 'Vad är PTT-knappen?',
                options: [
                    'Knappen som byter kanal',
                    'Knappen du håller in när du pratar',
                    'Knappen som stänger av radion',
                    'Knappen som höjer volymen'
                ],
                correct: 1,
                explanation: 'PTT står för Push-To-Talk. Håll in den när du pratar, släpp när du lyssnar!'
            }
        ]
    },
    {
        id: 'pmr-3',
        number: 3,
        title: 'Kanaler och koder',
        icon: '🔢',
        description: 'Förstå hur kanaler, CTCSS-koder och DCS fungerar på din radio.',
        readTime: '12 min',
        difficulty: 'Alla åldrar',
        topics: [
            'De 16 kanalerna',
            'Vad är CTCSS-koder?',
            'Vad är DCS-koder?',
            'Vilken kanal ska du välja?'
        ],
        exercises: [
            {
                type: 'multiple-choice',
                question: 'Varför använder man CTCSS-koder?',
                options: [
                    'För att öka räckvidden',
                    'För att filtrera bort andra som pratar på samma kanal',
                    'För att ladda batterierna snabbare',
                    'För att kryptera samtalet'
                ],
                correct: 1,
                explanation: 'CTCSS-koder gör att du bara hör de som använder samma kod. Men alla kan fortfarande höra dig!'
            },
            {
                type: 'true-false',
                question: 'CTCSS-koder gör ditt samtal hemligt så ingen annan kan höra.',
                correct: false,
                explanation: 'Nej! CTCSS filtrerar bara vad DU hör. Alla med en radio kan fortfarande höra dig.'
            },
            {
                type: 'multiple-choice',
                question: 'Vilken kanal brukar användas som "anropskanal" i Sverige?',
                options: [
                    'Kanal 1',
                    'Kanal 7',
                    'Kanal 8',
                    'Kanal 16'
                ],
                correct: 2,
                explanation: 'Kanal 8 används ofta som anropskanal. Men det finns ingen officiell regel.'
            }
        ]
    },
    {
        id: 'pmr-4',
        number: 4,
        title: 'Räckvidd och tips',
        icon: '📡',
        description: 'Lär dig hur långt radion når och hur du kan förbättra räckvidden.',
        readTime: '15 min',
        difficulty: 'Alla åldrar',
        topics: [
            'Hur långt når PMR446 egentligen?',
            'Terrängens påverkan',
            'Tips för bättre räckvidd',
            'Vanliga problem och lösningar'
        ],
        exercises: [
            {
                type: 'multiple-choice',
                question: 'Hur långt når en PMR446-radio vanligtvis i stadsmiljö?',
                options: [
                    '5-10 kilometer',
                    '500 meter till 2 kilometer',
                    '20 kilometer',
                    '50 kilometer'
                ],
                correct: 1,
                explanation: 'I stad med byggnader når PMR446 oftast bara 500m-2km. Fri sikt ger längre räckvidd.'
            },
            {
                type: 'true-false',
                question: 'Ju högre upp du står, desto längre räckvidd får du.',
                correct: true,
                explanation: 'Ja! Höjd är bästa sättet att öka räckvidden. Från ett berg kan du nå flera mil!'
            },
            {
                type: 'multiple-choice',
                question: 'Vad blockerar radiosignaler mest?',
                options: [
                    'Träd',
                    'Vatten',
                    'Berg och byggnader',
                    'Moln'
                ],
                correct: 2,
                explanation: 'Berg och byggnader blockerar UHF-signaler effektivt. Radiovågor går i rak linje.'
            }
        ]
    },
    {
        id: 'pmr-5',
        number: 5,
        title: 'Från PMR till amatörradio',
        icon: '🎓',
        description: 'Nyfiken på mer? Lär dig skillnaden mellan PMR och amatörradio.',
        readTime: '12 min',
        difficulty: 'Alla åldrar',
        topics: [
            'Skillnaden mellan PMR och amatörradio',
            'Varför ta certifikat?',
            'Vad kan amatörer göra som PMR inte kan?',
            'Hur blir man radioamatör?'
        ],
        exercises: [
            {
                type: 'multiple-choice',
                question: 'Vad får en radioamatör göra som en PMR-användare inte får?',
                options: [
                    'Prata i radio',
                    'Bygga egna antenner och använda högre effekt',
                    'Använda batteridriven radio',
                    'Prata med vänner'
                ],
                correct: 1,
                explanation: 'Radioamatörer får bygga egen utrustning, använda mycket högre effekt och sända på många fler frekvenser!'
            },
            {
                type: 'true-false',
                question: 'Radioamatörer kan prata med hela världen.',
                correct: true,
                explanation: 'Ja! Med rätt utrustning och frekvens kan radioamatörer kommunicera över hela jorden.'
            },
            {
                type: 'multiple-choice',
                question: 'Hur gammal måste du vara för att ta radioamatörcertifikat i Sverige?',
                options: [
                    '18 år',
                    '15 år',
                    'Det finns ingen åldersgräns',
                    '12 år'
                ],
                correct: 2,
                explanation: 'Det finns ingen åldersgräns! Även barn kan ta certifikat om de klarar provet.'
            }
        ]
    }
];

// Exportera för användning
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pmrChapters };
}
