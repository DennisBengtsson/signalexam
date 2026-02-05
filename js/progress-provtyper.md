# Progress.js - Förklaring av Provtyper

## Tre Separata Provtyper

Systemet har nu tre **separata** typer av prov/övningar:

### 1. 🎯 Övningar (Delkapitel)
- **Vad**: Övningar på enskilda delkapitel (10 frågor vardera)
- **Krav**: 80% för att "klara" ett delkapitel
- **Progress**: Sparas i `subchaptersProgress`
- **Funktion**: `recordSubchapterResult(chapterId, subchapterId, results)`
- **Exempel**: 1.1, 1.2, 2.1, etc.

### 2. 📚 Övningsprov (Kapitel)
- **Vad**: Träningsprov för ett helt kapitel
- **Krav**: 80% för att "klara" ett kapitel
- **Progress**: Sparas i `chaptersProgress` och `practiceExamHistory`
- **Funktion**: `recordPracticeExam(chapterId, results)`
- **Exempel**: Hela Kapitel 1, Hela Kapitel 2, etc.

### 3. 🎓 Certifikatsprov (Slutprov)
- **Vad**: Det riktiga slutprovet (simulerar PTS-provet)
- **Krav**: 70% för att vara godkänd (samma som riktiga provet)
- **Progress**: Sparas i `certExamHistory`
- **Funktion**: `recordCertExam(results)`
- **Exempel**: 100 blandade frågor från alla kapitel

## Hur de hänger ihop

```
Övningar (delkapitel)
    ↓
    Visar progress PER delkapitel
    80% krävs för att klara varje delkapitel
    
Övningsprov (kapitel)
    ↓
    Visar progress PER kapitel
    80% krävs för att klara varje kapitel
    
Certifikatsprov (slutprov)
    ↓
    Visar TOTAL progress mot riktiga provet
    70% krävs för godkänt
    Används för att avgöra "provredo"-status
```

## Exempel på användning

### I ovning.html (Övningsläge):
```javascript
// När användaren har svarat på alla frågor i ett delkapitel
ProgressManager.recordSubchapterResult(1, '1.1', {
    totalQuestions: 10,
    correctAnswers: 8,
    percentage: 80
});
```

### I ett framtida övningsprov.html:
```javascript
// När användaren har klarat ett helt kapitel-prov
ProgressManager.recordPracticeExam(1, {
    totalQuestions: 50,
    correctAnswers: 42,
    percentage: 84,
    timeSpent: 1800
});
```

### I prov.html (Certifikatsprov):
```javascript
// När användaren har klarat slutprovet
ProgressManager.recordCertExam({
    totalQuestions: 100,
    correctAnswers: 75,
    percentage: 75,
    timeSpent: 2400,
    chapterBreakdown: {...}
});
```

## Statistik på startsidan

`getOverallStats()` returnerar nu:

```javascript
{
    // Totaler (alla prov)
    totalQuestionsAnswered: 250,
    totalCorrect: 200,
    averageScore: 80,
    
    // Certifikatsprov (slutprov) - VIKTIGT!
    certExams: {
        total: 5,
        passed: 4,
        passRate: 80,
        recentAverage: 78,
        trend: +5
    },
    
    // Övningsprov (kapitel)
    practiceExams: {
        total: 10,
        passed: 8,
        passRate: 80
    },
    
    // Övningar (delkapitel)
    subchapters: {
        total: 15,
        completed: 12,
        completionRate: 80
    },
    
    // Provredo baseras ENDAST på certifikatsprov
    isExamReady: true
}
```

## Provredo-Status

"Provredo" baseras **endast** på certifikatsprov:
- Snitt ≥75% på de senaste 5 certifikatsproven
- Minst 3 certifikatsprov genomförda

Detta är logiskt eftersom certifikatsprovet är det som simulerar riktiga PTS-provet.

## Viktiga ändringar från gammal version

### FÖRE (gammal progress.js):
- Blandade ihop övningar och prov
- Använde `examHistory` för allt
- `chaptersProgress` hade både questions och exam-data

### EFTER (ny progress.js):
- Tre separata historiker:
  - `subchaptersProgress` - övningar
  - `practiceExamHistory` - övningsprov
  - `certExamHistory` - certifikatsprov
- `chaptersProgress` är nu ENDAST för övningsprov
- Tydliga gränser mellan de tre typerna

## Migrations-anteckning

Om du har gammal data i localStorage kommer den **inte** att gå sönder, men:
- Gamla `examHistory` kommer att ignoreras
- Nya prov kommer att sparas i rätt historik
- Eventuellt vill du lägga till en migrationsfunktion om du har många testanvändare