// ============================================
// HUVUDLOGIK FÖR STARTSIDAN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeHomepage();
});

function initializeHomepage() {
    renderChapters();
    updateStatistics();
    renderKnowledgeBars();
}

// Rendera kapitelkort
function renderChapters() {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) return;
    
    grid.innerHTML = CHAPTERS.map(chapter => {
        const progress = ProgressManager.getChapterProgress(chapter.id);
        const knowledge = ProgressManager.getChapterKnowledge(chapter.id);
        
        let progressClass = '';
        if (knowledge >= 70) progressClass = 'good';
        else if (knowledge >= 40) progressClass = 'medium';
        else if (knowledge > 0) progressClass = 'low';
        
        return `
            <a href="pages/chapters/kapitel-${chapter.id}-${chapter.slug}.html" class="chapter-card">
                <div class="chapter-header">
                    <div class="chapter-number ${knowledge >= 70 ? 'completed' : ''}">${chapter.id}</div>
                    <div>
                        <div class="chapter-title">${chapter.title}</div>
                        <div class="chapter-meta-small">${chapter.estimatedTime} • ${chapter.questionCount} frågor</div>
                    </div>
                </div>
                <p class="chapter-description">${chapter.description}</p>
                <div class="chapter-progress">
                    <div class="progress-bar">
                        <div class="progress-fill ${progressClass}" style="width: ${knowledge}%"></div>
                    </div>
                    <span class="progress-text">${knowledge}%</span>
                </div>
            </a>
        `;
    }).join('');
}

// Uppdatera statistik på startsidan
function updateStatistics() {
    const stats = ProgressManager.getOverallStats();
    
    // Uppdatera stat-kort
    const chaptersCompleted = document.getElementById('chaptersCompleted');
    if (chaptersCompleted) {
        const completedCount = CHAPTERS.filter(ch => 
            ProgressManager.getChapterKnowledge(ch.id) >= 70
        ).length;
        chaptersCompleted.textContent = `${completedCount}/10`;
    }
    
    const questionsAnswered = document.getElementById('questionsAnswered');
    if (questionsAnswered) {
        questionsAnswered.textContent = stats.totalQuestionsAnswered;
    }
    
    const averageScore = document.getElementById('averageScore');
    if (averageScore) {
        averageScore.textContent = `${stats.averageScore}%`;
    }
    
    const examReady = document.getElementById('examReady');
    if (examReady) {
        if (stats.isExamReady) {
            examReady.textContent = 'Redo!';
            examReady.style.color = '#22c55e';
        } else if (stats.totalExams > 0) {
            examReady.textContent = 'Snart...';
            examReady.style.color = '#f59e0b';
        } else {
            examReady.textContent = 'Ej redo';
        }
    }
}

// Rendera kunskapsstaplar
function renderKnowledgeBars() {
    const container = document.getElementById('knowledgeBars');
    if (!container) return;
    
    container.innerHTML = CHAPTERS.map(chapter => {
        const knowledge = ProgressManager.getChapterKnowledge(chapter.id);
        
        let progressClass = '';
        if (knowledge >= 70) progressClass = 'good';
        else if (knowledge >= 40) progressClass = 'medium';
        else if (knowledge > 0) progressClass = 'low';
        
        return `
            <div class="knowledge-item">
                <div class="knowledge-header">
                    <span class="knowledge-label">${chapter.shortTitle}</span>
                    <span class="knowledge-value">${knowledge}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${progressClass}" style="width: ${knowledge}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Smooth scroll för ankarlänkar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Registrera Service Worker för offline-stöd
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registrerad'))
            .catch(err => console.log('Service Worker fel:', err));
    });
}
