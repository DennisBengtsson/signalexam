// ============================================
// PROGRESS & STATISTIK HANTERING
// ============================================

const ProgressManager = {
    STORAGE_KEY: 'radioamator_progress',
    
    // Hämta all sparad data
    getData() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        if (!data) {
            return this.getDefaultData();
        }
        return JSON.parse(data);
    },
    
    // Standarddata för ny användare
    getDefaultData() {
        return {
            chaptersProgress: {},
            examHistory: [],
            questionStats: {},
            totalQuestionsAnswered: 0,
            totalCorrect: 0,
            studyTime: 0,
            lastActivity: null,
            achievements: []
        };
    },
    
    // Spara data
    saveData(data) {
        data.lastActivity = new Date().toISOString();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },
    
    // Registrera svar på en fråga
    recordAnswer(questionId, chapterId, isCorrect) {
        const data = this.getData();
        
        // Uppdatera totaler
        data.totalQuestionsAnswered++;
        if (isCorrect) data.totalCorrect++;
        
        // Uppdatera frågestatistik
        if (!data.questionStats[questionId]) {
            data.questionStats[questionId] = {
                attempts: 0,
                correct: 0,
                lastAttempt: null
            };
        }
        data.questionStats[questionId].attempts++;
        if (isCorrect) data.questionStats[questionId].correct++;
        data.questionStats[questionId].lastAttempt = new Date().toISOString();
        
        // Uppdatera kapitelstatistik
        if (!data.chaptersProgress[chapterId]) {
            data.chaptersProgress[chapterId] = {
                questionsAnswered: 0,
                correctAnswers: 0,
                completed: false,
                lastStudied: null
            };
        }
        data.chaptersProgress[chapterId].questionsAnswered++;
        if (isCorrect) data.chaptersProgress[chapterId].correctAnswers++;
        data.chaptersProgress[chapterId].lastStudied = new Date().toISOString();
        
        this.saveData(data);
        this.checkAchievements(data);
        
        return data;
    },
    
    // Registrera ett avslutat prov
    recordExam(results) {
        const data = this.getData();
        
        const examRecord = {
            date: new Date().toISOString(),
            totalQuestions: results.totalQuestions,
            correctAnswers: results.correctAnswers,
            percentage: Math.round((results.correctAnswers / results.totalQuestions) * 100),
            passed: results.correctAnswers >= results.totalQuestions * 0.7,
            timeSpent: results.timeSpent,
            chapterBreakdown: results.chapterBreakdown
        };
        
        data.examHistory.unshift(examRecord);
        
        // Behåll endast de senaste 50 proven
        if (data.examHistory.length > 50) {
            data.examHistory = data.examHistory.slice(0, 50);
        }
        
        this.saveData(data);
        this.checkAchievements(data);
        
        return examRecord;
    },
    
    // Hämta kapitelstatistik
    getChapterProgress(chapterId) {
        const data = this.getData();
        return data.chaptersProgress[chapterId] || {
            questionsAnswered: 0,
            correctAnswers: 0,
            completed: false,
            lastStudied: null
        };
    },
    
    // Beräkna procentuell kunskap per kapitel
    getChapterKnowledge(chapterId) {
        const progress = this.getChapterProgress(chapterId);
        if (progress.questionsAnswered === 0) return 0;
        return Math.round((progress.correctAnswers / progress.questionsAnswered) * 100);
    },
    
    // Hämta övergripande statistik
    getOverallStats() {
        const data = this.getData();
        
        const avgScore = data.totalQuestionsAnswered > 0 
            ? Math.round((data.totalCorrect / data.totalQuestionsAnswered) * 100)
            : 0;
        
        const passedExams = data.examHistory.filter(e => e.passed).length;
        const totalExams = data.examHistory.length;
        
        const recentExams = data.examHistory.slice(0, 5);
        const recentAvg = recentExams.length > 0
            ? Math.round(recentExams.reduce((sum, e) => sum + e.percentage, 0) / recentExams.length)
            : 0;
        
        // Beräkna trend
        let trend = 0;
        if (data.examHistory.length >= 2) {
            const recent = data.examHistory.slice(0, 3).reduce((sum, e) => sum + e.percentage, 0) / Math.min(3, data.examHistory.length);
            const older = data.examHistory.slice(3, 6).reduce((sum, e) => sum + e.percentage, 0) / Math.min(3, data.examHistory.length - 3);
            if (older > 0) {
                trend = Math.round(recent - older);
            }
        }
        
        return {
            totalQuestionsAnswered: data.totalQuestionsAnswered,
            totalCorrect: data.totalCorrect,
            averageScore: avgScore,
            passedExams,
            totalExams,
            passRate: totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0,
            recentAverage: recentAvg,
            trend,
            isExamReady: recentAvg >= 75 && totalExams >= 3,
            achievements: data.achievements
        };
    },
    
    // Hämta svagaste kapitel
    getWeakestChapters(count = 3) {
        const data = this.getData();
        const chapterScores = [];
        
        for (let i = 1; i <= 10; i++) {
            const progress = data.chaptersProgress[i];
            if (progress && progress.questionsAnswered >= 5) {
                chapterScores.push({
                    chapterId: i,
                    score: Math.round((progress.correctAnswers / progress.questionsAnswered) * 100),
                    questionsAnswered: progress.questionsAnswered
                });
            }
        }
        
        chapterScores.sort((a, b) => a.score - b.score);
        return chapterScores.slice(0, count);
    },
    
    // Hämta frågor som användaren ofta svarar fel på
    getProblematicQuestions(count = 10) {
        const data = this.getData();
        const problematic = [];
        
        for (const [questionId, stats] of Object.entries(data.questionStats)) {
            if (stats.attempts >= 2) {
                const correctRate = stats.correct / stats.attempts;
                if (correctRate < 0.5) {
                    problematic.push({
                        questionId: parseInt(questionId),
                        attempts: stats.attempts,
                        correct: stats.correct,
                        correctRate: Math.round(correctRate * 100)
                    });
                }
            }
        }
        
        problematic.sort((a, b) => a.correctRate - b.correctRate);
        return problematic.slice(0, count);
    },
    
    // Kontrollera och tilldela achievements
    checkAchievements(data) {
        const newAchievements = [];
        
        const achievements = [
            {
                id: 'first_question',
                name: 'Första Steget',
                description: 'Svara på din första fråga',
                icon: '🎯',
                condition: () => data.totalQuestionsAnswered >= 1
            },
            {
                id: 'ten_correct',
                name: 'Bra Start',
                description: 'Svara rätt på 10 frågor',
                icon: '⭐',
                condition: () => data.totalCorrect >= 10
            },
            {
                id: 'hundred_questions',
                name: 'Dedikerad Student',
                description: 'Svara på 100 frågor',
                icon: '📚',
                condition: () => data.totalQuestionsAnswered >= 100
            },
            {
                id: 'first_exam',
                name: 'Provtagare',
                description: 'Genomför ditt första prov',
                icon: '📝',
                condition: () => data.examHistory.length >= 1
            },
            {
                id: 'first_pass',
                name: 'Godkänd!',
                description: 'Klara ett prov med minst 70%',
                icon: '✅',
                condition: () => data.examHistory.some(e => e.passed)
            },
            {
                id: 'perfect_exam',
                name: 'Perfektionist',
                description: 'Få 100% på ett prov',
                icon: '🏆',
                condition: () => data.examHistory.some(e => e.percentage === 100)
            },
            {
                id: 'five_passed',
                name: 'Konsekvent',
                description: 'Klara 5 prov i rad',
                icon: '🔥',
                condition: () => {
                    const recent = data.examHistory.slice(0, 5);
                    return recent.length >= 5 && recent.every(e => e.passed);
                }
            },
            {
                id: 'all_chapters',
                name: 'Allround',
                description: 'Studera alla 10 kapitel',
                icon: '🎓',
                condition: () => Object.keys(data.chaptersProgress).length >= 10
            },
            {
                id: 'speed_demon',
                name: 'Snabbtänkt',
                description: 'Klara ett prov på under 30 minuter',
                icon: '⚡',
                condition: () => data.examHistory.some(e => e.passed && e.timeSpent < 1800)
            },
            {
                id: 'veteran',
                name: 'Veteran',
                description: 'Svara på 500 frågor',
                icon: '🏅',
                condition: () => data.totalQuestionsAnswered >= 500
            }
        ];
        
        for (const achievement of achievements) {
            if (!data.achievements.includes(achievement.id) && achievement.condition()) {
                data.achievements.push(achievement.id);
                newAchievements.push(achievement);
            }
        }
                if (newAchievements.length > 0) {
            this.saveData(data);
            this.showAchievementNotification(newAchievements);
        }
        
        return newAchievements;
    },
    
    // Visa achievement-notifikation
    showAchievementNotification(achievements) {
        for (const achievement of achievements) {
            const notification = document.createElement('div');
            notification.className = 'achievement-notification';
            notification.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-title">Ny Utmärkelse!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => notification.classList.add('show'), 100);
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 4000);
        }
    },
    
    // Återställ all data
    resetAllData() {
        if (confirm('Är du säker på att du vill radera all din progress? Detta kan inte ångras.')) {
            localStorage.removeItem(this.STORAGE_KEY);
            location.reload();
        }
    },
    
    // Exportera data
    exportData() {
        const data = this.getData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `radioamator_progress_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },
    
    // Importera data
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.saveData(data);
                alert('Data importerad!');
                location.reload();
            } catch (err) {
                alert('Kunde inte läsa filen. Kontrollera att det är en giltig backup-fil.');
            }
        };
        reader.readAsText(file);
    }
};

// Achievement notification styles
const achievementStyles = document.createElement('style');
achievementStyles.textContent = `
    .achievement-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 10000;
    }
    
    .achievement-notification.show {
        transform: translateX(0);
    }
    
    .achievement-icon {
        font-size: 2.5rem;
    }
    
    .achievement-title {
        font-size: 0.75rem;
        text-transform: uppercase;
        opacity: 0.9;
    }
    
    .achievement-name {
        font-size: 1.25rem;
        font-weight: 700;
    }
    
    .achievement-desc {
        font-size: 0.875rem;
        opacity: 0.9;
    }
`;
document.head.appendChild(achievementStyles);
