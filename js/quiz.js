// ============================================
// QUIZ/PROV LOGIK
// ============================================

const QuizManager = {
    questions: [],
    currentIndex: 0,
    answers: {},
    flagged: [],
    startTime: null,
    timerInterval: null,
    timeLimit: 90 * 60, // 90 minuter i sekunder
    mode: 'exam', // 'exam' eller 'practice'
    showExplanations: false,
    
    // Initiera prov
    init(options = {}) {
        this.mode = options.mode || 'exam';
        this.showExplanations = options.showExplanations || false;
        this.timeLimit = options.timeLimit || 90 * 60;
        this.currentIndex = 0;
        this.answers = {};
        this.flagged = [];
        
        if (options.chapterIds) {
            // Övningsläge - specifika kapitel
            const count = options.questionCount || 20;
            this.questions = getRandomQuestions(count, options.chapterIds);
        } else {
            // Provläge - simulerat prov
            this.questions = getExamQuestions();
        }
        
        this.startTime = new Date();
        this.render();
        
        if (this.mode === 'exam') {
            this.startTimer();
        }
    },
    
    // Starta timer
    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.updateTimerDisplay();
        }, 1000);
    },
    
    // Uppdatera timer-visning
    updateTimerDisplay() {
        const elapsed = Math.floor((new Date() - this.startTime) / 1000);
        const remaining = this.timeLimit - elapsed;
        
        const timerEl = document.getElementById('timer');
        if (!timerEl) return;
        
        if (remaining <= 0) {
            this.finishExam();
            return;
        }
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Varningar
        timerEl.classList.remove('warning', 'danger');
        if (remaining <= 300) { // 5 minuter
            timerEl.classList.add('danger');
        } else if (remaining <= 600) { // 10 minuter
            timerEl.classList.add('warning');
        }
    },
    
    // Rendera aktuell fråga
    render() {
        const question = this.questions[this.currentIndex];
        const chapter = getChapterById(question.chapterId);
        const container = document.getElementById('quizContainer');
        
        if (!container) return;
        
        const userAnswer = this.answers[question.id];
        const isAnswered = userAnswer !== undefined;
        const showResult = this.showExplanations && isAnswered;
        
        container.innerHTML = `
            <div class="quiz-header">
                <div class="quiz-info">
                    <div class="quiz-info-item">
                        <span class="quiz-info-label">Fråga</span>
                        <span class="quiz-info-value">${this.currentIndex + 1}/${this.questions.length}</span>
                    </div>
                    <div class="quiz-info-item">
                        <span class="quiz-info-label">Besvarade</span>
                        <span class="quiz-info-value">${Object.keys(this.answers).length}</span>
                    </div>
                </div>
                ${this.mode === 'exam' ? '<div class="timer" id="timer">90:00</div>' : ''}
            </div>
            
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">Fråga ${this.currentIndex + 1}</span>
                    <span class="question-category">${chapter.shortTitle}</span>
                </div>
                <div class="question-body">
                    <p class="question-text">${question.question}</p>
                    
                    <div class="answer-options">
                        ${question.options.map(opt => {
                            let classes = 'answer-option';
                            if (userAnswer === opt.id) classes += ' selected';
                            if (showResult) {
                                if (opt.id === question.correctAnswer) classes += ' correct';
                                else if (userAnswer === opt.id) classes += ' incorrect';
                                classes += ' disabled';
                            }
                            
                            return `
                                <div class="${classes}" onclick="QuizManager.selectAnswer('${opt.id}')">
                                    <div class="answer-marker">${opt.id.toUpperCase()}</div>
                                    <span class="answer-text">${opt.text}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    ${showResult ? `
                        <div class="explanation-box">
                            <h4>💡 Förklaring</h4>
                            <p>${question.explanation}</p>
                        </div>
                    ` : ''}
                </div>
                
                <div class="question-nav">
                    <button class="btn btn-secondary" onclick="QuizManager.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
                        ← Föregående
                    </button>
                    
                    <div class="question-dots">
                        ${this.questions.map((q, i) => {
                            let dotClass = 'question-dot';
                            if (i === this.currentIndex) dotClass += ' current';
                            else if (this.answers[q.id] !== undefined) {
                                if (this.showExplanations) {
                                    dotClass += this.answers[q.id] === q.correctAnswer ? ' correct' : ' incorrect';
                                } else {
                                    dotClass += ' answered';
                                }
                            }
                            if (this.flagged.includes(q.id)) dotClass += ' flagged';
                            
                            return `<div class="${dotClass}" onclick="QuizManager.goToQuestion(${i})">${i + 1}</div>`;
                        }).join('')}
                    </div>
                    
                    ${this.currentIndex === this.questions.length - 1 ? `
                        <button class="btn btn-success" onclick="QuizManager.finishExam()">
                            Avsluta Prov ✓
                        </button>
                    ` : `
                        <button class="btn btn-primary" onclick="QuizManager.nextQuestion()">
                            Nästa →
                        </button>
                    `}
                </div>
            </div>
            
            <div class="quiz-actions">
                <button class="btn btn-secondary" onclick="QuizManager.toggleFlag()">
                    ${this.flagged.includes(question.id) ? '🚩 Ta bort flagga' : '🏳️ Flagga fråga'}
                </button>
                ${this.mode === 'exam' ? `
                    <button class="btn btn-danger" onclick="QuizManager.confirmExit()">
                        Avbryt Prov
                    </button>
                ` : ''}
            </div>
        `;
        
        // Starta timer igen om det behövs
        if (this.mode === 'exam' && !this.timerInterval) {
            this.startTimer();
        }
    },
    
    // Välj svar
    selectAnswer(answerId) {
        const question = this.questions[this.currentIndex];
        
        // Om vi redan svarat i övningsläge, tillåt inte ändring
        if (this.showExplanations && this.answers[question.id] !== undefined) {
            return;
        }
        
        this.answers[question.id] = answerId;
        
        // Registrera i progress
        const isCorrect = answerId === question.correctAnswer;
        ProgressManager.recordAnswer(question.id, question.chapterId, isCorrect);
        
        this.render();
        
        // I övningsläge, gå automatiskt vidare efter en kort fördröjning
        if (this.showExplanations) {
            // Stanna kvar så användaren kan läsa förklaringen
        } else if (this.mode === 'exam') {
            // I provläge, gå vidare automatiskt
            setTimeout(() => {
                if (this.currentIndex < this.questions.length - 1) {
                    this.nextQuestion();
                }
            }, 300);
        }
    },
    
    // Navigering
    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.render();
        }
    },
    
    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.render();
        }
    },
    
    goToQuestion(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentIndex = index;
            this.render();
        }
    },
    
    // Flagga fråga
    toggleFlag() {
        const questionId = this.questions[this.currentIndex].id;
        const index = this.flagged.indexOf(questionId);
        
        if (index > -1) {
            this.flagged.splice(index, 1);
        } else {
            this.flagged.push(questionId);
        }
        
        this.render();
    },
    
    // Bekräfta avslut
    confirmExit() {
        if (confirm('Är du säker på att du vill avbryta provet? Dina svar kommer inte att sparas.')) {
            this.cleanup();
            window.location.href = '../../index.html';
        }
    },
    
    // Avsluta prov
    finishExam() {
        // Kontrollera obesvarade frågor
        const unanswered = this.questions.filter(q => this.answers[q.id] === undefined);
        
        if (unanswered.length > 0 && this.mode === 'exam') {
            if (!confirm(`Du har ${unanswered.length} obesvarade frågor. Vill du avsluta ändå?`)) {
                // Gå till första obesvarade
                const firstUnanswered = this.questions.findIndex(q => this.answers[q.id] === undefined);
                this.goToQuestion(firstUnanswered);
                return;
            }
        }
        
        this.cleanup();
        this.showResults();
    },
    
    // Städa upp
    cleanup() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },
    
    // Beräkna och visa resultat
    showResults() {
        const timeSpent = Math.floor((new Date() - this.startTime) / 1000);
        
        // Beräkna resultat per kapitel
        const chapterBreakdown = {};
        let totalCorrect = 0;
        
        for (const question of this.questions) {
            if (!chapterBreakdown[question.chapterId]) {
                chapterBreakdown[question.chapterId] = { total: 0, correct: 0 };
            }
            chapterBreakdown[question.chapterId].total++;
            
            if (this.answers[question.id] === question.correctAnswer) {
                chapterBreakdown[question.chapterId].correct++;
                totalCorrect++;
            }
        }
        
        const results = {
            totalQuestions: this.questions.length,
            correctAnswers: totalCorrect,
            timeSpent,
            chapterBreakdown
        };
        
        // Spara i progress
        const examRecord = ProgressManager.recordExam(results);
        
        // Spara resultat för resultatsidan
        sessionStorage.setItem('lastExamResults', JSON.stringify({
            ...results,
            examRecord,
            questions: this.questions,
            answers: this.answers
        }));
        
        // Gå till resultatsidan
        window.location.href = 'resultat.html';
    }
};

// Initiera prov när sidan laddas
function initExam() {
    QuizManager.init({ mode: 'exam' });
}

// Initiera övning
function initPractice(chapterIds, questionCount = 20) {
    QuizManager.init({ 
        mode: 'practice', 
        chapterIds, 
        questionCount,
        showExplanations: true 
    });
}
