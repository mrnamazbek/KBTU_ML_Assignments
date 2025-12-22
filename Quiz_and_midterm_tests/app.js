import { quizDatabase } from './midterm_data.js';

class CoachHub {
    constructor() {
        this.user = JSON.parse(localStorage.getItem('ml_coach_user') || 'null');
        this.leaderboard = JSON.parse(localStorage.getItem('ml_coach_leaderboard') || '[]');
        this.currentModule = null;
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.timer = null;
        this.startTime = 0;
        this.times = [];
        this.weakTopics = {};

        this.initElements();
        this.bindEvents();
        this.checkAuth();
        this.updateLeaderboardDisplay();
    }

    initElements() {
        this.elements = {
            app: document.getElementById('app'),
            regScreen: document.getElementById('registration-screen'),
            homeScreen: document.getElementById('home-screen'),
            quizScreen: document.getElementById('quiz-screen'),
            reportScreen: document.getElementById('report-screen'),
            regForm: document.getElementById('registration-form'),
            welcomeText: document.getElementById('welcome-text'),
            leaderboard: document.getElementById('leaderboard'),
            moduleCards: document.querySelectorAll('.module-card'),

            // Quiz UI
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            progressBar: document.getElementById('progress-bar'),
            timer: document.getElementById('timer'),
            moduleNameDisplay: document.getElementById('module-name'),
            currentCount: document.getElementById('current-count'),

            // Feedback
            feedbackPanel: document.getElementById('feedback-panel'),
            feedbackStatus: document.getElementById('feedback-status'),
            feedbackEn: document.getElementById('feedback-en'),
            feedbackRu: document.getElementById('feedback-ru'),
            feedbackHint: document.getElementById('feedback-hint'),
            nextBtn: document.getElementById('next-btn'),

            // Report
            reportScore: document.getElementById('report-score'),
            reportPercent: document.getElementById('report-percent'),
            reportTime: document.getElementById('report-time'),
            weakTopicsList: document.getElementById('weak-topics-list'),
            retryWeakBtn: document.getElementById('retry-weak-btn'),
            homeBtn: document.getElementById('home-btn'),
            exitBtn: document.getElementById('exit-btn')
        };
    }

    bindEvents() {
        this.elements.regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.register();
        });


        this.elements.moduleCards.forEach(card => {
            card.addEventListener('click', () => {
                this.startModule(card.dataset.module);
            });
        });

        this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.elements.homeBtn.addEventListener('click', () => this.showScreen('home'));
        this.elements.exitBtn.addEventListener('click', () => this.showScreen('home'));
    }

    checkAuth() {
        if (this.user) {
            this.showScreen('home');
            this.elements.welcomeText.innerHTML = `Hello, <span class="highlight">${this.user.name}</span>`;
            this.updateUserStats();
        } else {
            this.showScreen('reg');
        }
    }

    register() {
        const name = document.getElementById('user-name').value;
        const surname = document.getElementById('user-surname').value;
        this.user = { name, surname, attempts: 0, totalScore: 0, bestAccuracy: 0 };
        localStorage.setItem('ml_coach_user', JSON.stringify(this.user));
        this.checkAuth();
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    showScreen(screen) {
        this.elements.regScreen.classList.add('hidden');
        this.elements.homeScreen.classList.add('hidden');
        this.elements.quizScreen.classList.add('hidden');
        this.elements.reportScreen.classList.add('hidden');

        if (screen === 'reg') this.elements.regScreen.classList.remove('hidden');
        if (screen === 'home') this.elements.homeScreen.classList.remove('hidden');
        if (screen === 'quiz') this.elements.quizScreen.classList.remove('hidden');
        if (screen === 'report') this.elements.reportScreen.classList.remove('hidden');
    }

    startModule(moduleId) {
        this.currentModule = moduleId;
        this.currentQuestions = this.shuffle([...quizDatabase[moduleId]]);
        this.currentIndex = 0;
        this.score = 0;
        this.times = [];
        this.weakTopics = {};

        this.elements.moduleNameDisplay.textContent = moduleId.toUpperCase();
        this.showScreen('quiz');
        this.loadQuestion();
    }

    loadQuestion() {
        const q = this.currentQuestions[this.currentIndex];
        this.elements.currentCount.textContent = this.currentIndex + 1;
        this.elements.questionText.textContent = q.question;
        this.elements.progressBar.style.width = `${((this.currentIndex) / this.currentQuestions.length) * 100}%`;

        this.elements.optionsContainer.innerHTML = '';
        Object.entries(q.options).forEach(([key, text]) => {
            const btn = document.createElement('button');
            btn.className = 'secondary-btn option-btn';
            btn.innerHTML = `<span class="opt-key">${key}</span> ${text}`;
            btn.onclick = () => this.checkAnswer(key);
            this.elements.optionsContainer.appendChild(btn);
        });

        this.elements.feedbackPanel.classList.add('hidden');
        this.startTimer(this.currentModule === 'midterm' ? 60 : 45);
        this.startTime = Date.now();
    }

    startTimer(seconds) {
        clearInterval(this.timer);
        let timeLeft = seconds;
        const updateDisplay = () => {
            const m = Math.floor(timeLeft / 60);
            const s = timeLeft % 60;
            this.elements.timer.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        };
        updateDisplay();
        this.timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(this.timer);
                this.checkAnswer(null);
            }
        }, 1000);
    }

    checkAnswer(selected) {
        clearInterval(this.timer);
        const q = this.currentQuestions[this.currentIndex];
        const isCorrect = selected === q.answer;
        const duration = (Date.now() - this.startTime) / 1000;
        this.times.push(duration);

        if (isCorrect) this.score++;

        // Track weak topics
        if (!isCorrect) {
            this.weakTopics[q.topic] = (this.weakTopics[q.topic] || 0) + 1;
        }

        // Reveal Correct/Wrong
        const btns = this.elements.optionsContainer.querySelectorAll('.option-btn');
        btns.forEach(btn => {
            btn.disabled = true;
            const key = btn.querySelector('.opt-key').textContent;
            if (key === q.answer) btn.classList.add('correct');
            if (key === selected && !isCorrect) btn.classList.add('wrong');
        });

        // Deep Bilingual Feedback
        this.elements.feedbackStatus.textContent = isCorrect ? 'Mastery Verified ✓' : 'Conceptual Gap Detected ✗';
        this.elements.feedbackStatus.style.color = isCorrect ? '#10B981' : '#EF4444';

        // Use specifically drafted feedback for the selected option if available
        this.elements.feedbackEn.textContent = q.explanations[selected] || q.explanations[q.answer];
        this.elements.feedbackRu.textContent = q.explanations_ru[selected] || q.explanations_ru[q.answer];
        this.elements.feedbackHint.textContent = q.hint;

        this.elements.feedbackPanel.classList.remove('hidden');
    }

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex < this.currentQuestions.length) {
            this.loadQuestion();
        } else {
            this.finishModule();
        }
    }

    finishModule() {
        this.showScreen('report');
        const total = this.currentQuestions.length;
        const percent = Math.round((this.score / total) * 100);

        this.elements.reportScore.textContent = `${this.score}/${total}`;
        this.elements.reportPercent.textContent = `${percent}%`;
        const avgTime = Math.round(this.times.reduce((a, b) => a + b, 0) / this.times.length);
        this.elements.reportTime.textContent = `${avgTime}s avg`;

        // Update Leaderboard
        this.updateLeaderboard(percent);

        // Update User History
        this.user.attempts++;
        if (percent > this.user.bestAccuracy) this.user.bestAccuracy = percent;
        localStorage.setItem('ml_coach_user', JSON.stringify(this.user));
        this.updateUserStats();

        // Weak Topics
        this.elements.weakTopicsList.innerHTML = '';
        Object.entries(this.weakTopics).forEach(([topic, count]) => {
            const li = document.createElement('li');
            li.textContent = `${topic} (${count} errors)`;
            this.elements.weakTopicsList.appendChild(li);
        });
    }

    updateLeaderboard(score) {
        const entry = { name: this.user.name, score, date: new Date().toLocaleDateString() };
        this.leaderboard.push(entry);
        this.leaderboard.sort((a, b) => b.score - a.score);
        this.leaderboard = this.leaderboard.slice(0, 5);
        localStorage.setItem('ml_coach_leaderboard', JSON.stringify(this.leaderboard));
        this.updateLeaderboardDisplay();
    }

    updateLeaderboardDisplay() {
        this.elements.leaderboard.innerHTML = this.leaderboard.map((e, i) => `
            <li>
                <span class="rank">#${i + 1}</span>
                <span class="name">${e.name}</span>
                <span class="score highlight">${e.score}%</span>
            </li>
        `).join('') || '<li class="empty">No ranks data yet.</li>';
    }

    updateUserStats() {
        document.getElementById('user-attempts').textContent = this.user.attempts;
        document.getElementById('user-accuracy').textContent = `${this.user.bestAccuracy}%`;
    }

    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.coach = new CoachHub();
});
