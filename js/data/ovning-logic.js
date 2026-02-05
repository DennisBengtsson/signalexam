// ============================================
// ÖVNINGSLOGIK - ALLA FRÅGETYPER
// ============================================

// Global state
let currentChapterId = null;
let currentSubchapterId = null;
let currentExercises = [];
let currentQuestionIndex = 0;
let answers = [];
let correctAnswers = 0;

// State för matching-frågor
let matchingState = {
    selected: null,
    pairs: []
};

// State för ordering-frågor
let orderingState = {
    currentOrder: []
};

// ============================================
// INITIERING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadChapterOptions();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('chapterSelect').addEventListener('change', function() {
        const chapterId = parseInt(this.value);
        if (chapterId) {
            selectChapter(chapterId);
        } else {
            document.getElementById('stepSubchapter').style.display = 'none';
        }
    });
}

// ============================================
// STEG 1: LADDA KAPITEL
// ============================================
function loadChapterOptions() {
    const select = document.getElementById('chapterSelect');
    
    certChapters.forEach(chapter => {
        if (chapter.subchapters && chapter.subchapters.length > 0) {
            const hasExercises = chapter.subchapters.some(sub => 
                sub.exercises && sub.exercises.length > 0
            );
            
            if (hasExercises) {
                const option = document.createElement('option');
                option.value = chapter.id;
                option.textContent = `${chapter.icon} Kapitel ${chapter.number}: ${chapter.title}`;
                select.appendChild(option);
            }
        }
    });
}

// ============================================
// STEG 2: VISA DELKAPITEL
// ============================================
function selectChapter(chapterId) {
    currentChapterId = chapterId;
    const chapter = certChapters.find(ch => ch.id === chapterId);
    
    if (!chapter) return;
    
    const grid = document.getElementById('subchapterGrid');
    grid.innerHTML = '';
    
    chapter.subchapters.forEach(subchapter => {
        const hasExercises = subchapter.exercises && subchapter.exercises.length > 0;
        const progress = ProgressManager.getSubchapterProgress(chapterId, subchapter.id);
        
        const card = document.createElement('div');
        card.className = 'subchapter-card';
        
        if (!hasExercises) {
            card.classList.add('disabled');
        } else if (progress.completed) {
            card.classList.add('completed');
        }
        
        let statusBadge = '';
        if (!hasExercises) {
            statusBadge = '<span class="progress-badge" style="background: #94a3b8;">Kommer snart</span>';
        } else if (progress.completed) {
            statusBadge = `<span class="progress-badge completed">✓ Klarat ${progress.bestScore}%</span>`;
        } else if (progress.attempts > 0) {
            statusBadge = `<span class="progress-badge in-progress">${progress.bestScore}%</span>`;
        }
        
        card.innerHTML = `
            <div class="subchapter-title">
                ${subchapter.id} - ${subchapter.title}
            </div>
            <div class="subchapter-meta">
                <div>⏱️ ${subchapter.estimatedTime} min</div>
                ${hasExercises ? `<div>📝 ${subchapter.exercises.length} övningar</div>` : ''}
                ${statusBadge}
            </div>
        `;
        
        if (hasExercises) {
            card.onclick = () => startSubchapter(subchapter.id);
        }
        
        grid.appendChild(card);
    });
    
    document.getElementById('stepSubchapter').style.display = 'block';
    document.getElementById('stepSubchapter').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// STEG 3: STARTA ÖVNING
// ============================================
function startSubchapter(subchapterId) {
    currentSubchapterId = subchapterId;
    const chapter = certChapters.find(ch => ch.id === currentChapterId);
    const subchapter = chapter.subchapters.find(sub => sub.id === subchapterId);
    
    // Använd ALLA övningar (inte bara multiple-choice)
    currentExercises = [...subchapter.exercises];
    
    if (currentExercises.length === 0) {
        alert('Detta delkapitel har inga övningar tillgängliga än.');
        return;
    }
    
    currentQuestionIndex = 0;
    answers = [];
    correctAnswers = 0;
    
    document.getElementById('exerciseTitle').textContent = 
        `${subchapter.id} - ${subchapter.title}`;
    
    // Visa övningsvyn
    document.getElementById('stepChapter').style.display = 'none';
    document.getElementById('stepSubchapter').style.display = 'none';
    document.getElementById('stepExercise').style.display = 'block';
    
    renderProgressDots();
    showQuestion();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// VISA FRÅGA (ROUTER)
// ============================================
function showQuestion() {
    if (currentQuestionIndex >= currentExercises.length) {
        showResults();
        return;
    }
    
    const question = currentExercises[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    // Uppdatera progress
    document.getElementById('progressText').textContent = 
        `${currentQuestionIndex + 1}/${currentExercises.length}`;
    
    // Rendera rätt frågetyp
    const type = question.type || 'multiple-choice';
    
    switch(type) {
        case 'multiple-choice':
            renderMultipleChoice(question, container);
            break;
        case 'true-false':
            renderTrueFalse(question, container);
            break;
        case 'fill-blank':
            renderFillBlank(question, container);
            break;
        case 'calculation':
            renderCalculation(question, container);
            break;
        case 'matching':
            renderMatching(question, container);
            break;
        case 'ordering':
            renderOrdering(question, container);
            break;
        default:
            renderMultipleChoice(question, container);
    }
}

// ============================================
// MULTIPLE CHOICE
// ============================================
function renderMultipleChoice(question, container) {
    if (!question.options || question.options.length === 0) {
        console.error('Multiple-choice fråga saknar alternativ:', question);
        currentQuestionIndex++;
        showQuestion();
        return;
    }
    
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="options-list" id="optionsList">
    `;
    
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    question.options.forEach((option, index) => {
        html += `
            <button class="option-button" onclick="selectMultipleChoice(${index})" id="option-${index}">
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${option}</span>
            </button>
        `;
    });
    
    html += `
            </div>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

function selectMultipleChoice(selectedIndex) {
    const question = currentExercises[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås alla knappar
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, idx) => {
        btn.classList.add('disabled');
        btn.onclick = null;
        
        if (idx === selectedIndex) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (idx === question.correct && !isCorrect) {
            btn.classList.add('correct');
        }
    });
    
    setTimeout(nextQuestion, 2000);
}

// ============================================
// TRUE/FALSE
// ============================================
function renderTrueFalse(question, container) {
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="true-false-container">
                <button class="tf-button" onclick="selectTrueFalse(true)">
                    ✓ Sant
                </button>
                <button class="tf-button" onclick="selectTrueFalse(false)">
                    ✗ Falskt
                </button>
            </div>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

function selectTrueFalse(selectedValue) {
    const question = currentExercises[currentQuestionIndex];
    const isCorrect = selectedValue === question.correct;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Markera knappar
    const buttons = document.querySelectorAll('.tf-button');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        btn.onclick = null;
        
        const btnValue = btn.textContent.includes('Sant');
        if (btnValue === selectedValue) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (btnValue === question.correct && !isCorrect) {
            btn.classList.add('correct');
        }
    });
    
    setTimeout(nextQuestion, 2000);
}

// ============================================
// FILL BLANK
// ============================================
function renderFillBlank(question, container) {
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <input type="text" 
                   class="fill-blank-input" 
                   id="fillBlankInput" 
                   placeholder="Skriv ditt svar här...">
            <button class="submit-button" onclick="submitFillBlank()">Kontrollera svar</button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Enter-tangent för att skicka
    document.getElementById('fillBlankInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitFillBlank();
        }
    });
}

function submitFillBlank() {
    const question = currentExercises[currentQuestionIndex];
    const input = document.getElementById('fillBlankInput');
    const userAnswer = input.value.trim().toLowerCase();
    
    // Kolla både answer och alternatives
    const correctAnswers = [question.answer.toLowerCase()];
    if (question.alternatives) {
        correctAnswers.push(...question.alternatives.map(a => a.toLowerCase()));
    }
    
    const isCorrect = correctAnswers.includes(userAnswer);
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås input
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    document.querySelector('.submit-button').disabled = true;
    
    setTimeout(nextQuestion, 2000);
}

// ============================================
// CALCULATION
// ============================================
function renderCalculation(question, container) {
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="calculation-input-group">
                <input type="number" 
                       class="calculation-input" 
                       id="calculationInput" 
                       placeholder="Ange ditt svar"
                       step="any">
                <span class="calculation-unit">${question.unit || ''}</span>
            </div>
            <button class="submit-button" onclick="submitCalculation()">Kontrollera svar</button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    document.getElementById('calculationInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitCalculation();
        }
    });
}

function submitCalculation() {
    const question = currentExercises[currentQuestionIndex];
    const input = document.getElementById('calculationInput');
    const userAnswer = parseFloat(input.value);
    
    if (isNaN(userAnswer)) {
        alert('Vänligen ange ett numeriskt svar');
        return;
    }
    
    // Kolla med tolerans om angiven
    const tolerance = question.tolerance || 0;
    const isCorrect = Math.abs(userAnswer - question.answer) <= tolerance;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås input
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    document.querySelector('.submit-button').disabled = true;
    
    setTimeout(nextQuestion, 2000);
}

// ============================================
// MATCHING
// ============================================
function renderMatching(question, container) {
    matchingState = {
        selected: null,
        pairs: []
    };
    
    // Blanda höger sida
    const rightItems = [...question.pairs.map(p => p.right)].sort(() => Math.random() - 0.5);
    
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="matching-container">
                <div class="matching-left" id="matchingLeft">
    `;
    
    question.pairs.forEach((pair, index) => {
        html += `
            <div class="matching-item" onclick="selectMatchingLeft(${index})" data-index="${index}">
                ${pair.left}
            </div>
        `;
    });
    
    html += `
                </div>
                <div class="matching-lines">
                    <div style="color: #94a3b8;">↔</div>
                    <div style="color: #94a3b8;">↔</div>
                    <div style="color: #94a3b8;">↔</div>
                    <div style="color: #94a3b8;">↔</div>
                </div>
                <div class="matching-right" id="matchingRight">
    `;
    
    rightItems.forEach((right, index) => {
        html += `
            <div class="matching-item" onclick="selectMatchingRight('${right}')" data-value="${right}">
                ${right}
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
            <button class="submit-button" style="margin-top: 1rem;" onclick="submitMatching()" id="submitMatching" disabled>
                Kontrollera svar
            </button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

function selectMatchingLeft(index) {
    const item = document.querySelector(`.matching-left .matching-item[data-index="${index}"]`);
    
    if (item.classList.contains('matched')) return;
    
    // Avmarkera tidigare valt
    document.querySelectorAll('.matching-left .matching-item').forEach(el => {
        el.classList.remove('selected');
    });
    
    item.classList.add('selected');
    matchingState.selected = index;
}

function selectMatchingRight(value) {
    if (matchingState.selected === null) {
        alert('Välj först ett alternativ från vänster sida');
        return;
    }
    
    const item = document.querySelector(`.matching-right .matching-item[data-value="${value}"]`);
    
    if (item.classList.contains('matched')) return;
    
    // Spara par
    matchingState.pairs.push({
        left: matchingState.selected,
        right: value
    });
    
    // Markera som matchade
    const leftItem = document.querySelector(`.matching-left .matching-item[data-index="${matchingState.selected}"]`);
    leftItem.classList.add('matched');
    leftItem.classList.remove('selected');
    item.classList.add('matched');
    
    matchingState.selected = null;
    
    // Aktivera submit-knapp om alla är matchade
    const question = currentExercises[currentQuestionIndex];
    if (matchingState.pairs.length === question.pairs.length) {
        document.getElementById('submitMatching').disabled = false;
    }
}

function submitMatching() {
    const question = currentExercises[currentQuestionIndex];
    
    // Räkna rätt matchningar
    let correct = 0;
    matchingState.pairs.forEach(pair => {
        const expectedRight = question.pairs[pair.left].right;
        if (pair.right === expectedRight) {
            correct++;
        }
    });
    
    const isCorrect = correct === question.pairs.length;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås allt
    document.querySelectorAll('.matching-item').forEach(item => {
        item.classList.add('disabled');
        item.onclick = null;
    });
    document.getElementById('submitMatching').disabled = true;
    
    setTimeout(nextQuestion, 2500);
}

// ============================================
// ORDERING
// ============================================
function renderOrdering(question, container) {
    // Blanda items
    orderingState.currentOrder = question.items.map((item, index) => ({
        text: item,
        originalIndex: index
    })).sort(() => Math.random() - 0.5);
    
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="ordering-container" id="orderingContainer">
    `;
    
    orderingState.currentOrder.forEach((item, index) => {
        html += `
            <div class="ordering-item" draggable="true" data-index="${index}">
                <span class="drag-handle">☰</span>
                <span>${item.text}</span>
            </div>
        `;
    });
    
    html += `
            </div>
            <button class="submit-button" style="margin-top: 1rem;" onclick="submitOrdering()">
                Kontrollera svar
            </button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Setup drag and drop
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const items = document.querySelectorAll('.ordering-item');
    let draggedElement = null;
    
    items.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            draggedElement = this;
            this.style.opacity = '0.5';
        });
        
        item.addEventListener('dragend', function(e) {
            this.style.opacity = '';
        });
        
        item.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        item.addEventListener('drop', function(e) {
            e.preventDefault();
            if (draggedElement !== this) {
                // Byt plats
                const container = document.getElementById('orderingContainer');
                const allItems = [...container.children];
                const draggedIndex = allItems.indexOf(draggedElement);
                const targetIndex = allItems.indexOf(this);
                
                if (draggedIndex < targetIndex) {
                    container.insertBefore(draggedElement, this.nextSibling);
                } else {
                    container.insertBefore(draggedElement, this);
                }
                
                // Uppdatera state
                updateOrderingState();
            }
        });
    });
}

function updateOrderingState() {
    const items = document.querySelectorAll('.ordering-item');
    const newOrder = [];
    
    items.forEach((item, index) => {
        const originalIndex = parseInt(item.dataset.index);
        newOrder.push(orderingState.currentOrder[originalIndex]);
    });
    
    orderingState.currentOrder = newOrder;
}

function submitOrdering() {
    const question = currentExercises[currentQuestionIndex];
    
    // Kolla om ordningen är korrekt
    const isCorrect = orderingState.currentOrder.every((item, index) => {
        return item.originalIndex === question.correctOrder[index];
    });
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Markera rätt/fel
    const items = document.querySelectorAll('.ordering-item');
    items.forEach((item, index) => {
        const originalIndex = orderingState.currentOrder[index].originalIndex;
        const correctOriginalIndex = question.correctOrder[index];
        
        item.draggable = false;
        item.classList.add('disabled');
        
        if (originalIndex === correctOriginalIndex) {
            item.classList.add('correct-position');
        } else {
            item.classList.add('incorrect-position');
        }
    });
    
    document.querySelector('.submit-button').disabled = true;
    
    setTimeout(nextQuestion, 2500);
}

// ============================================
// GEMENSAMMA FUNKTIONER
// ============================================
function saveAnswer(isCorrect) {
    answers[currentQuestionIndex] = {
        isCorrect: isCorrect
    };
    
    if (isCorrect) {
        correctAnswers++;
    }
    
    renderProgressDots();
}

function showFeedback(isCorrect, question) {
    const container = document.getElementById('feedbackContainer');
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const icon = isCorrect ? '✓' : '✗';
    const title = isCorrect ? 'Rätt!' : 'Fel svar';
    
    container.innerHTML = `
        <div class="feedback-box ${feedbackClass}">
            <div class="feedback-icon">${icon}</div>
            <div class="feedback-text">
                <strong>${title}</strong><br>
                ${question.explanation || ''}
            </div>
        </div>
    `;
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function renderProgressDots() {
    const container = document.getElementById('progressDots');
    let html = '';
    
    for (let i = 0; i < currentExercises.length; i++) {
        let className = 'progress-dot';
        if (answers[i]) {
            className += answers[i].isCorrect ? ' correct' : ' incorrect';
        } else if (i < currentQuestionIndex) {
            className += ' answered';
        }
        html += `<div class="${className}"></div>`;
    }
    
    container.innerHTML = html;
}

// ============================================
// VISA RESULTAT
// ============================================
function showResults() {
    const total = currentExercises.length;
    const percentage = Math.round((correctAnswers / total) * 100);
    const passed = percentage >= 80;
    
    // Spara resultat
    ProgressManager.recordSubchapterResult(currentChapterId, currentSubchapterId, {
        totalQuestions: total,
        correctAnswers: correctAnswers,
        percentage: percentage
    });
    
    // Visa resultat
    document.getElementById('stepExercise').style.display = 'none';
    document.getElementById('stepResults').style.display = 'block';
    
    // Uppdatera värden
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('percentageValue').textContent = percentage + '%';
    document.getElementById('percentageValue').className = 'result-value ' + (passed ? 'pass' : 'fail');
    document.getElementById('statusValue').textContent = passed ? '✅ Godkänd' : '❌ Ej godkänd';
    document.getElementById('statusValue').className = 'result-value ' + (passed ? 'pass' : 'fail');
    
    // Resultatikon och meddelande
    if (passed) {
        document.getElementById('resultsIcon').textContent = '🎉';
        document.getElementById('resultsTitle').textContent = 'Grattis!';
        document.getElementById('resultsSubtitle').textContent = 'Du har klarat detta delkapitel!';
        document.getElementById('resultMessage').className = 'result-message pass';
        document.getElementById('resultMessage').innerHTML = `
            <strong>Bra jobbat!</strong><br>
            Du fick ${percentage}% rätt och har nu klarat detta delkapitel.
            Du kan fortsätta till nästa delkapitel eller öva mer för att bli ännu säkrare.
        `;
    } else {
        document.getElementById('resultsIcon').textContent = '📚';
        document.getElementById('resultsTitle').textContent = 'Inte godkänd än';
        document.getElementById('resultsSubtitle').textContent = 'Men du är på rätt väg!';
        document.getElementById('resultMessage').className = 'result-message fail';
        document.getElementById('resultMessage').innerHTML = `
            <strong>Fortsätt öva!</strong><br>
            Du fick ${percentage}% rätt, men behöver minst 80% för att klara delkapitlet.
            ${getRecommendation(percentage)}
        `;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getRecommendation(percentage) {
    if (percentage < 50) {
        return 'Rekommendation: Läs igenom teorin igen innan du gör om övningen.';
    } else if (percentage < 70) {
        return 'Rekommendation: Fokusera på de områden du svarade fel på och försök igen.';
    } else {
        return 'Du är nästan där! Försök igen så når du säkert 80%.';
    }
}

// ============================================
// NAVIGERINGSFUNKTIONER
// ============================================
function tryAgain() {
    startSubchapter(currentSubchapterId);
}

function nextSubchapter() {
    const chapter = certChapters.find(ch => ch.id === currentChapterId);
    const currentIndex = chapter.subchapters.findIndex(sub => sub.id === currentSubchapterId);
    
    // Hitta nästa delkapitel med övningar
    let nextSubchapter = null;
    for (let i = currentIndex + 1; i < chapter.subchapters.length; i++) {
        if (chapter.subchapters[i].exercises && chapter.subchapters[i].exercises.length > 0) {
            nextSubchapter = chapter.subchapters[i];
            break;
        }
    }
    
    if (nextSubchapter) {
        startSubchapter(nextSubchapter.id);
    } else {
        alert('Grattis! Du har kommit till slutet av detta kapitel. Välj ett nytt kapitel för att fortsätta.');
        backToChapters();
    }
}

function backToChapters() {
    document.getElementById('stepResults').style.display = 'none';
    document.getElementById('stepExercise').style.display = 'none';
    document.getElementById('stepChapter').style.display = 'block';
    document.getElementById('stepSubchapter').style.display = 'block';
    
    // Uppdatera delkapitelvyn
    if (currentChapterId) {
        selectChapter(currentChapterId);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}