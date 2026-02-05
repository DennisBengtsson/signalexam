// ============================================
// PROGRESS & STATISTIK HANTERING - UPPDATERAD VERSION
// ============================================
// Hanterar tre olika provtyper:
// 1. Övningar (delkapitel) - kräver 80%
// 2. Övningsprov (kapitel) - kräver 80%
// 3. Certifikatsprov (slutprov) - kräver 70%

const ProgressManager = {
    STORAGE_KEY: 'radioamator_progress',
    
    // Tröskel för olika provtyper
    SUBCHAPTER_PASS: 80,      // Övningar (delkapitel)
    PRACTICE_EXAM_PASS: 80,   // Övningsprov (kapitel)
    CERT_EXAM_PASS: 70,       // Certifikatsprov (slutprov)
    
    // För provredo-status
    EXAM_READY_THRESHOLD: 75,
    MIN_EXAMS_FOR_READY: 3,
    
    // Hämta all sparad data
    getData() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (!stored) {
            return this.getDefaultData();
        }
        
        try {
            const data = JSON.parse(stored);
            
            // Migrera gammal data eller lägg till saknade fält
            if (!data.subchaptersProgress) data.subchaptersProgress = {};
            if (!data.chaptersProgress) data.chaptersProgress = {};
            if (!data.certExamHistory) data.certExamHistory = [];
            if (!data.practiceExamHistory) data.practiceExamHistory = [];
            if (!data.questionStats) data.questionStats = {};
            if (!data.achievements) data.achievements = [];
            if (typeof data.totalQuestionsAnswered === 'undefined') data.totalQuestionsAnswered = 0;
            if (typeof data.totalCorrect === 'undefined') data.totalCorrect = 0;
            if (typeof data.hasSeenExamReadyMessage === 'undefined') data.hasSeenExamReadyMessage = false;
            if (typeof data.wasExamReady === 'undefined') data.wasExamReady = false;
            
            // Om det finns gammal examHistory, migrera inte (för att undvika förvirring)
            // Användare får börja om med nya provtyper
            
            return data;
        } catch (e) {
            console.error('Fel vid läsning av sparad data:', e);
            return this.getDefaultData();
        }
    },
    
    // Standarddata för ny användare
    getDefaultData() {
        const defaultData = {
            // Delkapitel-progress (övningar)
            subchaptersProgress: {},
            
            // Kapitel-progress (övningsprov)
            chaptersProgress: {},
            
            // Certifikatsprov-historik (slutprov)
            certExamHistory: [],
            
            // Övningsprov-historik (kapitel)
            practiceExamHistory: [],
            
            // Frågestatistik
            questionStats: {},
            
            // Totaler
            totalQuestionsAnswered: 0,
            totalCorrect: 0,
            studyTime: 0,
            lastActivity: null,
            
            // Achievements och meddelanden
            achievements: [],
            hasSeenExamReadyMessage: false,
            wasExamReady: false
        };
        
        // Spara defaultdata första gången
        this.saveData(defaultData);
        return defaultData;
    },
    
    // Spara data
    saveData(data) {
        data.lastActivity = new Date().toISOString();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },
    
    // ============================================
    // DELKAPITEL-FUNKTIONER (ÖVNINGAR)
    // ============================================
    
    // Registrera resultat för ett delkapitel (övning)
    recordSubchapterResult(chapterId, subchapterId, results) {
        const data = this.getData();
        const key = `${chapterId}-${subchapterId}`;
        
        if (!data.subchaptersProgress[key]) {
            data.subchaptersProgress[key] = {
                attempts: 0,
                scores: [],
                bestScore: 0,
                lastAttempt: null,
                completed: false,
                totalQuestions: results.totalQuestions || 10,
                correctAnswers: 0
            };
        }
        
        const subProgress = data.subchaptersProgress[key];
        subProgress.attempts++;
        subProgress.scores.push(results.percentage);
        subProgress.lastAttempt = new Date().toISOString();
        subProgress.correctAnswers = results.correctAnswers;
        
        // Uppdatera bästa resultat
        if (results.percentage > subProgress.bestScore) {
            subProgress.bestScore = results.percentage;
        }
        
        // Markera som klarat om ≥80%
        if (results.percentage >= this.SUBCHAPTER_PASS) {
            subProgress.completed = true;
        }
        
        // Uppdatera totaler
        data.totalQuestionsAnswered += results.totalQuestions;
        data.totalCorrect += results.correctAnswers;
        
        this.saveData(data);
        this.checkAchievements(data);
        
        return subProgress;
    },
    
    // Hämta progress för ett delkapitel
    getSubchapterProgress(chapterId, subchapterId) {
        const data = this.getData();
        const key = `${chapterId}-${subchapterId}`;
        return data.subchaptersProgress[key] || {
            attempts: 0,
            scores: [],
            bestScore: 0,
            lastAttempt: null,
            completed: false,
            totalQuestions: 10,
            correctAnswers: 0
        };
    },
    
    // Kolla om ett delkapitel är klarat
    isSubchapterCompleted(chapterId, subchapterId) {
        const progress = this.getSubchapterProgress(chapterId, subchapterId);
        return progress.completed;
    },
    
    // Hämta alla klarade delkapitel för ett kapitel
    getCompletedSubchapters(chapterId) {
        const data = this.getData();
        const completed = [];
        
        for (const [key, progress] of Object.entries(data.subchaptersProgress)) {
            if (key.startsWith(`${chapterId}-`) && progress.completed) {
                const parts = key.split('-');
                const subchapterId = parts.slice(1).join('-');
                completed.push(subchapterId);
            }
        }
        
        return completed;
    },
    
    // ============================================
    // ÖVNINGSPROV-FUNKTIONER (KAPITEL)
    // ============================================
    
    // Registrera ett övningsprov (kapitel)
    recordPracticeExam(chapterId, results) {
        const data = this.getData();
        
        const examRecord = {
            date: new Date().toISOString(),
            chapterId: chapterId,
            totalQuestions: results.totalQuestions,
            correctAnswers: results.correctAnswers,
            percentage: Math.round((results.correctAnswers / results.totalQuestions) * 100),
            passed: results.correctAnswers >= results.totalQuestions * (this.PRACTICE_EXAM_PASS / 100),
            timeSpent: results.timeSpent
        };
        
        // Lägg till i övningsprov-historik
        data.practiceExamHistory.unshift(examRecord);
        if (data.practiceExamHistory.length > 50) {
            data.practiceExamHistory = data.practiceExamHistory.slice(0, 50);
        }
        
        // Uppdatera kapitelstatistik
        if (!data.chaptersProgress[chapterId]) {
            data.chaptersProgress[chapterId] = {
                attempts: 0,
                bestScore: 0,
                completed: false,
                lastAttempt: null
            };
        }
        
        const chapterProgress = data.chaptersProgress[chapterId];
        chapterProgress.attempts++;
        chapterProgress.lastAttempt = new Date().toISOString();
        
        if (examRecord.percentage > chapterProgress.bestScore) {
            chapterProgress.bestScore = examRecord.percentage;
        }
        
        if (examRecord.passed) {
            chapterProgress.completed = true;
        }
        
        // Uppdatera totaler
        data.totalQuestionsAnswered += results.totalQuestions;
        data.totalCorrect += results.correctAnswers;
        
        this.saveData(data);
        this.checkAchievements(data);
        
        return examRecord;
    },
    
    // Hämta kapitelstatistik (från övningsprov)
    getChapterProgress(chapterId) {
        const data = this.getData();
        return data.chaptersProgress[chapterId] || {
            attempts: 0,
            bestScore: 0,
            completed: false,
            lastAttempt: null
        };
    },
    
    // ============================================
    // CERTIFIKATSPROV-FUNKTIONER (SLUTPROV)
    // ============================================
    
    // Registrera ett certifikatsprov (slutprov)
    recordCertExam(results) {
        const data = this.getData();
        
        const examRecord = {
            date: new Date().toISOString(),
            totalQuestions: results.totalQuestions,
            correctAnswers: results.correctAnswers,
            percentage: Math.round((results.correctAnswers / results.totalQuestions) * 100),
            passed: results.correctAnswers >= results.totalQuestions * (this.CERT_EXAM_PASS / 100),
            timeSpent: results.timeSpent,
            chapterBreakdown: results.chapterBreakdown
        };
        
        data.certExamHistory.unshift(examRecord);
        
        // Behåll endast de senaste 50 proven
        if (data.certExamHistory.length > 50) {
            data.certExamHistory = data.certExamHistory.slice(0, 50);
        }
        
        // Uppdatera totaler
        data.totalQuestionsAnswered += results.totalQuestions;
        data.totalCorrect += results.correctAnswers;
        
        this.saveData(data);
        this.checkAchievements(data);
        
        // Kontrollera om användaren nu är provredo
        this.checkExamReadyStatus();
        
        return examRecord;
    },
    
    // ============================================
    // FRÅGESTATISTIK
    // ============================================
    
    // Registrera svar på en fråga (används i alla lägen)
    recordAnswer(questionId, chapterId, isCorrect) {
        const data = this.getData();
        
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
        
        this.saveData(data);
        
        return data;
    },
    
    // ============================================
    // ÖVERGRIPANDE STATISTIK
    // ============================================
    
    // Hämta övergripande statistik
    getOverallStats() {
        const data = this.getData();
        
        const avgScore = data.totalQuestionsAnswered > 0 
            ? Math.round((data.totalCorrect / data.totalQuestionsAnswered) * 100)
            : 0;
        
        // Statistik för CERTIFIKATSPROV (slutprov)
        const certExamHistory = data.certExamHistory || [];
        const passedCertExams = certExamHistory.filter(e => e.passed).length;
        const totalCertExams = certExamHistory.length;
        
        const recentCertExams = certExamHistory.slice(0, 5);
        const recentCertAvg = recentCertExams.length > 0
            ? Math.round(recentCertExams.reduce((sum, e) => sum + e.percentage, 0) / recentCertExams.length)
            : 0;
        
        // Beräkna trend (certifikatsprov)
        let trend = 0;
        if (certExamHistory.length >= 2) {
            const recent = certExamHistory.slice(0, 3).reduce((sum, e) => sum + e.percentage, 0) / Math.min(3, certExamHistory.length);
            const older = certExamHistory.slice(3, 6).reduce((sum, e) => sum + e.percentage, 0) / Math.min(3, certExamHistory.length - 3);
            if (older > 0) {
                trend = Math.round(recent - older);
            }
        }
        
        // Statistik för ÖVNINGSPROV (kapitel)
        const practiceExamHistory = data.practiceExamHistory || [];
        const totalPracticeExams = practiceExamHistory.length;
        const passedPracticeExams = practiceExamHistory.filter(e => e.passed).length;
        
        // Statistik för ÖVNINGAR (delkapitel)
        const subchaptersProgress = data.subchaptersProgress || {};
        const totalSubchapters = Object.keys(subchaptersProgress).length;
        const completedSubchapters = Object.values(subchaptersProgress).filter(p => p.completed).length;
        
        const isExamReady = recentCertAvg >= this.EXAM_READY_THRESHOLD && totalCertExams >= this.MIN_EXAMS_FOR_READY;
        
        return {
            // Totaler
            totalQuestionsAnswered: data.totalQuestionsAnswered || 0,
            totalCorrect: data.totalCorrect || 0,
            averageScore: avgScore,
            
            // Certifikatsprov (slutprov)
            certExams: {
                total: totalCertExams,
                passed: passedCertExams,
                passRate: totalCertExams > 0 ? Math.round((passedCertExams / totalCertExams) * 100) : 0,
                recentAverage: recentCertAvg,
                trend: trend
            },
            
            // Övningsprov (kapitel)
            practiceExams: {
                total: totalPracticeExams,
                passed: passedPracticeExams,
                passRate: totalPracticeExams > 0 ? Math.round((passedPracticeExams / totalPracticeExams) * 100) : 0
            },
            
            // Övningar (delkapitel)
            subchapters: {
                total: totalSubchapters,
                completed: completedSubchapters,
                completionRate: totalSubchapters > 0 ? Math.round((completedSubchapters / totalSubchapters) * 100) : 0
            },
            
            // Provredo-status (baserat på certifikatsprov)
            isExamReady,
            achievements: data.achievements || []
        };
    },
    
    // Beräkna kapitel-progress baserat på delkapitel
    getChapterProgressFromSubchapters(chapterId, totalSubchapters) {
        const completed = this.getCompletedSubchapters(chapterId);
        if (totalSubchapters === 0) return 0;
        return Math.round((completed.length / totalSubchapters) * 100);
    },
    
    // ============================================
    // PROVREDO-FUNKTIONALITET
    // ============================================
    
    // Kontrollera om användaren är redo för provet
    isExamReady() {
        const stats = this.getOverallStats();
        return stats.isExamReady;
    },
    
    // Kontrollera provredo-status och visa modal vid behov
    checkExamReadyStatus() {
        const data = this.getData();
        const isReady = this.isExamReady();
        
        // Visa modal endast första gången användaren blir redo
        if (isReady && !data.wasExamReady && !data.hasSeenExamReadyMessage) {
            data.hasSeenExamReadyMessage = true;
            data.wasExamReady = true;
            this.saveData(data);
            
            // Visa modal med liten fördröjning
            setTimeout(() => {
                this.showExamReadyModal();
            }, 500);
        }
        
        // Uppdatera UI
        this.updateExamReadyUI(isReady);
    },
    
    // Visa provredo-modal
    showExamReadyModal() {
        // Skapa modal om den inte finns
        let modal = document.getElementById('examReadyModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'examReadyModal';
            modal.className = 'exam-ready-modal';
            modal.innerHTML = `
                <div class="exam-ready-content">
                    <div class="exam-ready-icon">🎉</div>
                    <h2>Grattis! Du är redo för provet!</h2>
                    <p>
                        Baserat på dina resultat verkar du vara väl förberedd för att ta 
                        det riktiga certifikatsprovet hos PTS.
                    </p>
                    <p>
                        <strong>Nästa steg:</strong> Hitta en provförrättare nära dig och 
                        boka en tid för att skriva provet.
                    </p>
                    <div class="exam-ready-buttons">
                        <a href="https://www.ssa.se/ssa/funktionarer/provforrattare/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="btn btn-primary btn-ssa">
                            🔗 Hitta provförrättare (SSA)
                        </a>
                        <button type="button" class="btn btn-secondary btn-stay">
                            Stanna kvar och öva mer
                        </button>
                    </div>
                    <p class="exam-ready-note">
                        💡 Tips: Du kan fortsätta öva för att bli ännu säkrare!
                    </p>
                </div>
            `;
            document.body.appendChild(modal);
            
            // Lägg till eventlistener för stäng-knappen
            modal.querySelector('.btn-stay').addEventListener('click', () => {
                this.closeExamReadyModal();
            });
            
            // Stäng modal vid klick utanför innehållet
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeExamReadyModal();
                }
            });
            
            // Stäng modal med Escape-tangenten
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeExamReadyModal();
                }
            });
        }
        
        modal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    },
    
    // Stäng provredo-modal
    closeExamReadyModal() {
        const modal = document.getElementById('examReadyModal');
        if (modal) {
            modal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    },
    
    // Uppdatera provredo-UI på startsidan
    updateExamReadyUI(isReady) {
        const examReadyEl = document.getElementById('examReady');
        if (examReadyEl) {
            if (isReady) {
                examReadyEl.textContent = 'Redo!';
                examReadyEl.classList.add('ready');
            } else {
                examReadyEl.textContent = 'Ej redo';
                examReadyEl.classList.remove('ready');
            }
        }
    },
    
    // Återställ provredo-meddelande (för testning)
    resetExamReadyMessage() {
        const data = this.getData();
        data.hasSeenExamReadyMessage = false;
        data.wasExamReady = false;
        this.saveData(data);
        console.log('Provredo-meddelande återställt. Ladda om sidan för att testa.');
    },
    
    // ============================================
    // STATISTIK-FUNKTIONER
    // ============================================
    
    // Hämta svagaste kapitel
    getWeakestChapters(count = 3) {
        const data = this.getData();
        const chapterScores = [];
        
        for (const [chapterId, progress] of Object.entries(data.chaptersProgress)) {
            if (progress.attempts >= 1) {
                chapterScores.push({
                    chapterId: parseInt(chapterId),
                    score: progress.bestScore,
                    attempts: progress.attempts
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
    
    // ============================================
    // ACHIEVEMENTS
    // ============================================
    
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
                id: 'first_subchapter',
                name: 'Delkapitel Klarat',
                description: 'Klara ditt första delkapitel med 80%',
                icon: '✅',
                condition: () => {
                    return Object.values(data.subchaptersProgress).some(p => p.completed);
                }
            },
            {
                id: 'first_practice_exam',
                name: 'Övningsprov',
                description: 'Genomför ditt första övningsprov',
                icon: '📝',
                condition: () => data.practiceExamHistory.length >= 1
            },
            {
                id: 'first_cert_exam',
                name: 'Slutprov',
                description: 'Genomför ditt första certifikatsprov',
                icon: '🎓',
                condition: () => data.certExamHistory.length >= 1
            },
            {
                id: 'first_cert_pass',
                name: 'Godkänd!',
                description: 'Klara ett certifikatsprov med minst 70%',
                icon: '✅',
                condition: () => data.certExamHistory.some(e => e.passed)
            },
            {
                id: 'perfect_exam',
                name: 'Perfektionist',
                description: 'Få 100% på ett certifikatsprov',
                icon: '🏆',
                condition: () => data.certExamHistory.some(e => e.percentage === 100)
            },
            {
                id: 'five_passed',
                name: 'Konsekvent',
                description: 'Klara 5 certifikatsprov i rad',
                icon: '🔥',
                condition: () => {
                    const recent = data.certExamHistory.slice(0, 5);
                    return recent.length >= 5 && recent.every(e => e.passed);
                }
            },
            {
                id: 'all_chapters_practiced',
                name: 'Allround',
                description: 'Genomför övningsprov på alla 10 kapitel',
                icon: '🎓',
                condition: () => Object.keys(data.chaptersProgress).length >= 10
            },
            {
                id: 'speed_demon',
                name: 'Snabbtänkt',
                description: 'Klara ett certifikatsprov på under 30 minuter',
                icon: '⚡',
                condition: () => data.certExamHistory.some(e => e.passed && e.timeSpent < 1800)
            },
            {
                id: 'veteran',
                name: 'Veteran',
                description: 'Svara på 500 frågor',
                icon: '🏅',
                condition: () => data.totalQuestionsAnswered >= 500
            },
            {
                id: 'exam_ready',
                name: 'Provredo',
                description: 'Nå provredo-status',
                icon: '🎖️',
                condition: () => this.isExamReady()
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
    
    // ============================================
    // UI-UPPDATERINGAR
    // ============================================
    
    // Uppdatera all statistik på startsidan
    updateHomePageStats() {
        const stats = this.getOverallStats();
        
        // Uppdatera statistik-element
        const chaptersEl = document.getElementById('chaptersCompleted');
        const questionsEl = document.getElementById('questionsAnswered');
        const averageEl = document.getElementById('averageScore');
        
        if (chaptersEl) {
            chaptersEl.textContent = `${stats.subchapters.completed}/${stats.subchapters.total}`;
        }
        if (questionsEl) {
            questionsEl.textContent = stats.totalQuestionsAnswered;
        }
        if (averageEl) {
            averageEl.textContent = `${stats.averageScore}%`;
        }
        
        // Uppdatera provredo-status
        this.updateExamReadyUI(stats.isExamReady);
        
        // Uppdatera kunskapsbars om de finns
        this.updateKnowledgeBars();
    },
    
    // Uppdatera kunskapsnivå-staplar
    updateKnowledgeBars() {
        const container = document.getElementById('knowledgeBars');
        if (!container) return;
        
        // Kräver att certChapters är definierat
        if (typeof certChapters === 'undefined') return;
        
        let html = '';
        certChapters.forEach(chapter => {
            const progress = this.getChapterProgress(chapter.id);
            const score = progress.bestScore || 0;
            const barClass = score >= 80 ? 'high' : score >= 50 ? 'medium' : 'low';
            
            html += `
                <div class="knowledge-bar-item">
                    <div class="knowledge-bar-header">
                        <span class="knowledge-bar-icon">${chapter.icon}</span>
                        <span class="knowledge-bar-title">${chapter.title}</span>
                        <span class="knowledge-bar-score">${score}%</span>
                    </div>
                    <div class="knowledge-bar-track">
                        <div class="knowledge-bar-fill ${barClass}" style="width: ${score}%"></div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    },
    
    // ============================================
    // DATA-HANTERING
    // ============================================
    
    // Rensa localStorage och börja om (för debugging)
    clearAndReset() {
        localStorage.removeItem(this.STORAGE_KEY);
        const newData = this.getDefaultData();
        console.log('localStorage rensad. Ny data skapad:', newData);
        return newData;
    },
    
    // Återställ all data
    resetAllData() {
        if (confirm('Är du säker på att du vill radera all din progress? Detta kan inte ångras.')) {
            this.clearAndReset();
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
    },
    
    // ============================================
    // INITIERING
    // ============================================
    
    init() {
        // Uppdatera startsidans statistik om vi är på startsidan
        if (document.getElementById('quickStats')) {
            this.updateHomePageStats();
        }
        
        // Kontrollera provredo-status
        this.checkExamReadyStatus();
    }
};

// ============================================
// STILAR
// ============================================

const progressStyles = document.createElement('style');
progressStyles.textContent = `
    /* Achievement notification */
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
    
    /* Provredo modal */
    .exam-ready-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        padding: 1rem;
    }
    
    .exam-ready-modal.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .exam-ready-content {
        background: white;
        border-radius: 20px;
        padding: 2.5rem;
        max-width: 500px;
        width: 100%;
        text-align: center;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    
    .exam-ready-modal.visible .exam-ready-content {
        transform: scale(1);
    }
    
    .exam-ready-content .exam-ready-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        animation: bounce 0.6s ease infinite alternate;
    }
    
    @keyframes bounce {
        from { transform: translateY(0); }
        to { transform: translateY(-10px); }
    }
    
    .exam-ready-content h2 {
        color: #1a202c;
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }
    
    .exam-ready-content p {
        color: #4a5568;
        line-height: 1.7;
        margin: 0 0 1rem 0;
    }
    
    .exam-ready-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 1.5rem 0;
    }
    
    .exam-ready-buttons .btn {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        text-decoration: none;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        font-weight: 600;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .exam-ready-buttons .btn-primary {
        background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        color: white;
    }
    
    .exam-ready-buttons .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(17, 153, 142, 0.4);
    }
    
    .exam-ready-buttons .btn-secondary {
        background: #f1f5f9;
        color: #475569;
    }
    
    .exam-ready-buttons .btn-secondary:hover {
        background: #e2e8f0;
    }
    
    .exam-ready-note {
        font-size: 0.9rem;
        color: #718096;
        background: #f8fafc;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
    }
    
    /* Provstatus "Redo!" styling */
    #examReady.ready {
        color: #10b981 !important;
        font-weight: 700;
    }
    
    /* Kunskapsbars */
    .knowledge-bar-item {
        margin-bottom: 1rem;
    }
    
    .knowledge-bar-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
    }
    
    .knowledge-bar-icon {
        font-size: 1.2rem;
    }
    
    .knowledge-bar-title {
        flex: 1;
        font-weight: 500;
        color: #374151;
    }
    
    .knowledge-bar-score {
        font-weight: 600;
        color: #6b7280;
    }
    
    .knowledge-bar-track {
        height: 8px;
        background: #e5e7eb;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .knowledge-bar-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.5s ease;
    }
    
    .knowledge-bar-fill.low {
        background: linear-gradient(90deg, #ef4444, #f87171);
    }
    
    .knowledge-bar-fill.medium {
        background: linear-gradient(90deg, #f59e0b, #fbbf24);
    }
    
    .knowledge-bar-fill.high {
        background: linear-gradient(90deg, #10b981, #34d399);
    }
    
    /* Responsiv modal */
    @media (max-width: 500px) {
        .exam-ready-content {
            padding: 1.5rem;
        }
        
        .exam-ready-content .exam-ready-icon {
            font-size: 3rem;
        }
        
        .exam-ready-content h2 {
            font-size: 1.25rem;
        }
    }
`;
document.head.appendChild(progressStyles);

// ============================================
// INITIERING VID SIDLADDNING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    ProgressManager.init();
});

// Exportera för global användning
window.ProgressManager = ProgressManager;