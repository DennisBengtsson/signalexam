// js/exercises.js
// Hanterar övningar för alla kapitel (intro, pmr, morse, cert)

let currentExercises = [];
let userAnswers = {};

function loadExercises(exercises) {
    currentExercises = exercises;
    userAnswers = {};
    
    const container = document.getElementById('exercisesContainer');
    if (!container) {
        console.error('exercisesContainer not found');
        return;
    }
    
    if (!exercises || exercises.length === 0) {
        container.innerHTML = '<p class="no-exercises">Inga övningar tillgängliga för detta kapitel ännu.</p>';
        return;
    }
    
    container.innerHTML = exercises.map((ex, index) => renderExercise(ex, index)).join('');
    
    // Initiera drag and drop om det finns sådana övningar
    initDragAndDrop();
}

function renderExercise(exercise, index) {
    const num = index + 1;
    const type = exercise.type || 'multiple-choice'; // Default till flerval
    
    switch(type) {
        case 'multiple-choice':
        case 'multiple':
            return renderMultipleChoice(exercise, index, num);
        case 'true-false':
            return renderTrueFalse(exercise, index, num);
        case 'fill-blank':
            return renderFillBlank(exercise, index, num);
        case 'matching':
            return renderMatching(exercise, index, num);
        case 'ordering':
            return renderOrdering(exercise, index, num);
        case 'calculation':
            return renderCalculation(exercise, index, num);
        case 'reflection':
            return renderReflection(exercise, index, num);
        case 'timeline':
            return renderTimeline(exercise, index, num);
        default:
            return renderMultipleChoice(exercise, index, num); // Fallback
    }
}

function renderMultipleChoice(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const correctIndex = ex.correct;
    
    const optionsHTML = ex.options.map((opt, i) => `
        <label class="exercise-option" data-option="${i}">
            <input type="radio" name="exercise-${index}" value="${i}" 
                   onchange="handleMultipleChoice('${exerciseId}', ${index}, ${i}, ${correctIndex})">
            <span class="option-marker">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${opt}</span>
        </label>
    `).join('');
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}" data-correct="${correctIndex}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="exercise-options">
                ${optionsHTML}
            </div>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderTrueFalse(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}" data-correct="${ex.correct}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="exercise-options true-false-options">
                <label class="exercise-option" data-option="true">
                    <input type="radio" name="exercise-${index}" value="true" 
                           onchange="handleTrueFalse('${exerciseId}', ${index}, true, ${ex.correct})">
                    <span class="option-marker">✓</span>
                    <span class="option-text">Sant</span>
                </label>
                <label class="exercise-option" data-option="false">
                    <input type="radio" name="exercise-${index}" value="false" 
                           onchange="handleTrueFalse('${exerciseId}', ${index}, false, ${ex.correct})">
                    <span class="option-marker">✗</span>
                    <span class="option-text">Falskt</span>
                </label>
            </div>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderFillBlank(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            ${ex.hint ? `<p class="exercise-hint">💡 Ledtråd: ${ex.hint}</p>` : ''}
            <div class="fill-blank-container">
                <input type="text" id="input-${exerciseId}" class="fill-blank-input" placeholder="Skriv ditt svar...">
                <button class="btn btn-small" onclick="handleFillBlank('${exerciseId}', ${index})">Kontrollera</button>
            </div>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderCalculation(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            ${ex.hint ? `<p class="exercise-hint">💡 Ledtråd: ${ex.hint}</p>` : ''}
            <div class="calculation-container">
                <input type="number" id="input-${exerciseId}" class="calculation-input" placeholder="Svar" step="any">
                <span class="unit-label">${ex.unit || ''}</span>
                <button class="btn btn-small" onclick="handleCalculation('${exerciseId}', ${index})">Kontrollera</button>
            </div>
            ${ex.steps ? `
                <button class="btn btn-link" onclick="toggleSteps('${exerciseId}')">Visa lösningssteg</button>
                <div class="steps-container" id="steps-${exerciseId}" style="display: none;">
                    <h5>Lösningssteg:</h5>
                    <ol>${ex.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                </div>
            ` : ''}
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderMatching(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const shuffledRight = [...ex.pairs].sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="matching-container">
                <div class="matching-column left-column">
                    ${ex.pairs.map((pair, i) => `
                        <div class="matching-item" data-index="${i}">${pair.left}</div>
                    `).join('')}
                </div>
                <div class="matching-column right-column">
                    ${ex.pairs.map((pair, i) => `
                        <select class="matching-select" data-pair="${i}">
                            <option value="">Välj...</option>
                            ${shuffledRight.map((p) => `<option value="${ex.pairs.indexOf(p)}">${p.right}</option>`).join('')}
                        </select>
                    `).join('')}
                </div>
            </div>
            <button class="btn btn-small" onclick="handleMatching('${exerciseId}', ${index})">Kontrollera</button>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderOrdering(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const shuffledItems = [...ex.items].sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="ordering-container" id="ordering-${exerciseId}">
                ${shuffledItems.map((item) => `
                    <div class="ordering-item" draggable="true" data-original="${ex.items.indexOf(item)}">
                        <span class="drag-handle">⋮⋮</span>
                        <span class="item-text">${item}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="handleOrdering('${exerciseId}', ${index})">Kontrollera</button>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderTimeline(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const shuffledItems = [...ex.items].sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="timeline-container" id="timeline-${exerciseId}">
                ${shuffledItems.map((item) => `
                    <div class="timeline-item" draggable="true" data-original="${ex.items.indexOf(item)}">
                        <span class="drag-handle">⋮⋮</span>
                        <span class="item-text">${item}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="handleTimeline('${exerciseId}', ${index})">Kontrollera</button>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderReflection(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    let content = `
        <div class="exercise-item reflection-card" id="exercise-${exerciseId}" data-index="${index}" data-type="reflection">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">🤔 ${ex.question}</span>
            </div>
    `;
    
    if (ex.hints) {
        content += `
            <div class="reflection-hints">
                <h5>Tänk på:</h5>
                <ul>${ex.hints.map(h => `<li>${h}</li>`).join('')}</ul>
            </div>
        `;
    }
    
    content += `
            <textarea class="reflection-textarea" placeholder="Skriv dina tankar här (valfritt)..."></textarea>
            <p class="reflection-note">Detta är en reflektionsuppgift utan rätt eller fel svar.</p>
        </div>
    `;
    
    return content;
}

// === HANDLERS ===

function handleMultipleChoice(exerciseId, index, selected, correct) {
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    const options = exerciseEl.querySelectorAll('.exercise-option');
    const exercise = currentExercises[index];
    
    // Inaktivera alla alternativ
    exerciseEl.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
    });
    
    // Markera rätt och fel
    options.forEach((option, i) => {
        option.classList.remove('correct', 'incorrect');
        if (i === correct) {
            option.classList.add('correct');
        } else if (i === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    // Visa feedback
    const isCorrect = selected === correct;
    userAnswers[index] = isCorrect;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
        exerciseEl.classList.add('answered-correct');
    } else {
        feedbackText.textContent = '❌ Fel!';
        feedbackText.className = 'feedback-text incorrect';
        exerciseEl.classList.add('answered-wrong');
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleTrueFalse(exerciseId, index, selected, correct) {
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    const options = exerciseEl.querySelectorAll('.exercise-option');
    
    // Inaktivera alla alternativ
    exerciseEl.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
    });
    
    // Markera rätt och fel
    options.forEach((option) => {
        const optionValue = option.dataset.option === 'true';
        option.classList.remove('correct', 'incorrect');
        if (optionValue === correct) {
            option.classList.add('correct');
        } else if (optionValue === selected && selected !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    const isCorrect = selected === correct;
    userAnswers[index] = isCorrect;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = '❌ Fel!';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleFillBlank(exerciseId, index) {
    const input = document.getElementById(`input-${exerciseId}`);
    const exercise = currentExercises[index];
    const userAnswer = input.value.trim().toLowerCase();
    
    let isCorrect = userAnswer === exercise.answer.toLowerCase();
    
    // Kolla alternativa svar
    if (!isCorrect && exercise.alternatives) {
        isCorrect = exercise.alternatives.some(alt => alt.toLowerCase() === userAnswer);
    }
    
    userAnswers[index] = isCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    input.disabled = true;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
        input.classList.add('correct-input');
    } else {
        feedbackText.textContent = `❌ Fel! Rätt svar: ${exercise.answer}`;
        feedbackText.className = 'feedback-text incorrect';
        input.classList.add('incorrect-input');
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleCalculation(exerciseId, index) {
    const input = document.getElementById(`input-${exerciseId}`);
    const exercise = currentExercises[index];
    const userAnswer = parseFloat(input.value);
    
    const tolerance = exercise.tolerance || 0.01;
    const isCorrect = Math.abs(userAnswer - exercise.answer) <= tolerance;
    
    userAnswers[index] = isCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    input.disabled = true;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = `❌ Fel! Rätt svar: ${exercise.answer} ${exercise.unit || ''}`;
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleMatching(exerciseId, index) {
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const selects = exerciseEl.querySelectorAll('.matching-select');
    
    let allCorrect = true;
    selects.forEach((select, i) => {
        if (parseInt(select.value) !== i) {
            allCorrect = false;
            select.classList.add('incorrect-select');
        } else {
            select.classList.add('correct-select');
        }
        select.disabled = true;
    });
    
    userAnswers[index] = allCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    if (allCorrect) {
        feedbackText.textContent = '✅ Alla rätt!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = '❌ Några fel. Gröna är rätt, röda är fel.';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleOrdering(exerciseId, index) {
    const container = document.getElementById(`ordering-${exerciseId}`);
    const items = container.querySelectorAll('.ordering-item');
    
    let isCorrect = true;
    items.forEach((item, i) => {
        if (parseInt(item.dataset.original) !== i) {
            isCorrect = false;
            item.classList.add('incorrect-order');
        } else {
            item.classList.add('correct-order');
        }
    });
    
    userAnswers[index] = isCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt ordning!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = '❌ Fel ordning. Gröna är på rätt plats.';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleTimeline(exerciseId, index) {
    handleOrdering(exerciseId, index); // Samma logik
}

function toggleSteps(exerciseId) {
    const stepsEl = document.getElementById(`steps-${exerciseId}`);
    stepsEl.style.display = stepsEl.style.display === 'none' ? 'block' : 'none';
}

function updateResults() {
    const totalGradable = currentExercises.filter(ex => 
        (ex.type || 'multiple-choice') !== 'reflection'
    ).length;
    
    const answered = Object.keys(userAnswers).length;
    const correct = Object.values(userAnswers).filter(v => v).length;
    
    const resultsEl = document.getElementById('exerciseResults');
    if (resultsEl && answered >= totalGradable && totalGradable > 0) {
        document.getElementById('correctCount').textContent = correct;
        document.getElementById('totalCount').textContent = totalGradable;
        resultsEl.style.display = 'block';
    }
}

function resetExercises() {
    userAnswers = {};
    loadExercises(currentExercises);
    const resultsEl = document.getElementById('exerciseResults');
    if (resultsEl) {
        resultsEl.style.display = 'none';
    }
}

// === DRAG AND DROP ===

let draggedItem = null;

function initDragAndDrop() {
    const containers = document.querySelectorAll('.ordering-container, .timeline-container');
    
    containers.forEach(container => {
        const items = container.querySelectorAll('.ordering-item, .timeline-item');
        
        items.forEach(item => {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('drop', handleDrop);
            item.addEventListener('dragend', handleDragEnd);
        });
    });
}

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const container = this.parentNode;
    const afterElement = getDragAfterElement(container, e.clientY);
    
    if (afterElement == null) {
        container.appendChild(draggedItem);
    } else {
        container.insertBefore(draggedItem, afterElement);
    }
}

function handleDrop(e) {
    e.preventDefault();
}

function handleDragEnd() {
    this.classList.remove('dragging');
    draggedItem = null;
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.ordering-item:not(.dragging), .timeline-item:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Global export
window.loadExercises = loadExercises;
window.resetExercises = resetExercises;
window.handleMultipleChoice = handleMultipleChoice;
window.handleTrueFalse = handleTrueFalse;
window.handleFillBlank = handleFillBlank;
window.handleCalculation = handleCalculation;
window.handleMatching = handleMatching;
window.handleOrdering = handleOrdering;
window.handleTimeline = handleTimeline;
window.toggleSteps = toggleSteps;
