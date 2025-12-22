import { questions } from './questions.js';

class ExamTrainer {
    constructor() {
        this.questions = [...questions];
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.mode = 'quiz';
        this.timer = null;
        this.timeLeft = 0;
        this.times = [];
        this.startTime = 0;
        this.history = JSON.parse(localStorage.getItem('ml_trainer_history') || '[]');
        this.weakTopics = {};
        this.strongTopics = {};

        this.initElements();
        this.bindEvents();
        this.updateGlobalDashboard();
    }

    initElements() {
        this.screens = {
            home: document.getElementById('home-screen'),
            quiz: document.getElementById('quiz-screen'),
            report: document.getElementById('report-screen')
        };
        this.elements = {
            questionText: document.getElementById('question-text'),
            optionsGrid: document.getElementById('options-grid'),
            currentIndex: document.getElementById('current-index'),
            totalQuestions: document.getElementById('total-questions'),
            progressBar: document.getElementById('progress-bar'),
            timer: document.getElementById('timer'),
            feedbackPanel: document.getElementById('feedback-panel'),
            feedbackStatus: document.getElementById('feedback-status'),
            correctAnswerText: document.getElementById('correct-answer-text'),
            whyCorrect: document.getElementById('why-correct'),
            whyWrong: document.getElementById('why-wrong'),
            memoryHint: document.getElementById('memory-hint'),
            nextBtn: document.getElementById('next-btn'),
            finalScore: document.getElementById('final-score'),
            finalPercent: document.getElementById('final-percent'),
            trend: document.getElementById('trend'),
            avgTime: document.getElementById('avg-time'),
            weakTopicsList: document.getElementById('weak-topics'),
            strongTopicsList: document.getElementById('strong-topics'),
            totalAttempts: document.getElementById('total-attempts'),
            masteryLevel: document.getElementById('mastery-level')
        };
    }

    bindEvents() {
        document.querySelectorAll('.mode-card').forEach(card => {
            card.addEventListener('click', () => this.startQuiz(card.dataset.mode));
        });

        this.elements.nextBtn.addEventListener('click', () => this.nextQuestion());
        document.getElementById('exit-btn').addEventListener('click', () => this.showScreen('home'));
        document.getElementById('home-btn').addEventListener('click', () => this.showScreen('home'));
        document.getElementById('retry-weak-btn').addEventListener('click', () => this.retryWeak());
    }

    updateGlobalDashboard() {
        const total = this.history.reduce((acc, run) => acc + run.total, 0);
        this.elements.totalAttempts.textContent = total;

        if (this.history.length > 0) {
            const avgScore = this.history.reduce((acc, run) => acc + (run.score / run.total), 0) / this.history.length;
            this.elements.masteryLevel.textContent = Math.round(avgScore * 100) + '%';
        }
    }

    startQuiz(mode) {
        this.mode = mode;
        this.currentIndex = 0;
        this.score = 0;
        this.times = [];
        this.weakTopics = {};
        this.strongTopics = {};

        // Prepare questions
        this.currentQuestions = this.shuffle([...this.questions]);
        if (mode === 'midterm') this.currentQuestions = this.currentQuestions.slice(0, 15);
        if (mode === 'final') this.currentQuestions = this.currentQuestions.slice(0, 25);

        this.elements.totalQuestions.textContent = this.currentQuestions.length;
        this.showScreen('quiz');
        this.loadQuestion();
    }

    loadQuestion() {
        const q = this.currentQuestions[this.currentIndex];
        this.elements.questionText.textContent = q.question;
        this.elements.currentIndex.textContent = this.currentIndex + 1;
        this.elements.optionsGrid.innerHTML = '';
        this.elements.feedbackPanel.classList.add('hidden');

        const progress = ((this.currentIndex) / this.currentQuestions.length) * 100;
        this.elements.progressBar.style.width = `${progress}%`;

        Object.entries(q.options).forEach(([key, text]) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="label">${key}</span> <span class="text">${text}</span>`;
            btn.addEventListener('click', () => this.checkAnswer(key));
            this.elements.optionsGrid.appendChild(btn);
        });

        this.startTimer();
        this.startTime = Date.now();
    }

    startTimer() {
        clearInterval(this.timer);
        if (this.mode === 'quiz') {
            this.elements.timer.textContent = '--:--';
            return;
        }

        this.timeLeft = this.mode === 'midterm' ? 45 : 75;
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.checkAnswer(null); // Timeout
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const mins = Math.floor(this.timeLeft / 60);
        const secs = this.timeLeft % 60;
        this.elements.timer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        if (this.timeLeft < 10) this.elements.timer.style.color = 'var(--accent-red)';
        else this.elements.timer.style.color = 'var(--accent-blue)';
    }

    checkAnswer(selectedKey) {
        clearInterval(this.timer);
        const q = this.currentQuestions[this.currentIndex];
        const duration = (Date.now() - this.startTime) / 1000;
        this.times.push(duration);

        const isCorrect = selectedKey === q.answer;
        if (isCorrect) this.score++;

        // Tracking topics
        if (!this.weakTopics[q.topic]) this.weakTopics[q.topic] = { count: 0, failed: 0 };
        this.weakTopics[q.topic].count++;
        if (!isCorrect) this.weakTopics[q.topic].failed++;

        // Reveal answers visually
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            const key = btn.querySelector('.label').textContent;
            if (key === q.answer) btn.classList.add('correct');
            if (key === selectedKey && !isCorrect) btn.classList.add('wrong');
        });

        // Show feedback
        this.elements.feedbackStatus.textContent = isCorrect ? 'Correct! ✓' : (selectedKey === null ? 'Time Out! ✗' : 'Incorrect ✗');
        this.elements.feedbackStatus.style.color = isCorrect ? 'var(--accent-green)' : 'var(--accent-red)';

        this.elements.correctAnswerText.textContent = `${q.answer}) ${q.options[q.answer]}`;
        this.elements.whyCorrect.textContent = `${q.explanation_en} ${q.explanation_ru}`;
        this.elements.whyWrong.textContent = isCorrect ? 'N/A' : `${q.wrong_en} ${q.wrong_ru}`;
        this.elements.memoryHint.textContent = q.hint;

        this.elements.feedbackPanel.classList.remove('hidden');
    }

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex < this.currentQuestions.length) {
            this.loadQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        this.showScreen('report');
        const percent = Math.round((this.score / this.currentQuestions.length) * 100);
        this.elements.finalScore.textContent = `${this.score}/${this.currentQuestions.length}`;
        this.elements.finalPercent.textContent = `${percent}%`;

        const avgTime = Math.round(this.times.reduce((a, b) => a + b, 0) / this.times.length);
        this.elements.avgTime.textContent = `${avgTime}s`;

        // Topic Analysis
        this.elements.weakTopicsList.innerHTML = '';
        this.elements.strongTopicsList.innerHTML = '';

        Object.entries(this.weakTopics).forEach(([topic, stats]) => {
            const failRate = Math.round((stats.failed / stats.count) * 100);
            const li = document.createElement('li');
            li.innerHTML = `<span>${topic}</span> <span>${100 - failRate}% Accuracy</span>`;

            if (failRate > 30) {
                this.elements.weakTopicsList.appendChild(li);
            } else if (failRate === 0) {
                this.elements.strongTopicsList.appendChild(li);
            }
        });

        // Save history
        const run = {
            date: new Date().toISOString(),
            score: this.score,
            total: this.currentQuestions.length,
            mode: this.mode
        };
        this.history.push(run);
        localStorage.setItem('ml_trainer_history', JSON.stringify(this.history));

        this.updateGlobalDashboard();
        this.calculateTrend();
    }

    calculateTrend() {
        if (this.history.length < 2) {
            this.elements.trend.textContent = 'Stable';
            return;
        }
        const last = this.history[this.history.length - 1];
        const prev = this.history[this.history.length - 2];
        const diff = (last.score / last.total) - (prev.score / prev.total);

        if (diff > 0.05) this.elements.trend.textContent = 'Improving';
        else if (diff < -0.05) this.elements.trend.textContent = 'Declining';
        else this.elements.trend.textContent = 'Stable';
    }

    retryWeak() {
        const weakQuestionIds = this.currentQuestions
            .filter(q => this.weakTopics[q.topic].failed > 0)
            .map(q => q.id);

        if (weakQuestionIds.length === 0) {
            alert("No weak topics found! Great job.");
            return;
        }

        this.currentIndex = 0;
        this.score = 0;
        this.currentQuestions = this.questions.filter(q => weakQuestionIds.includes(q.id));
        this.elements.totalQuestions.textContent = this.currentQuestions.length;
        this.showScreen('quiz');
        this.loadQuestion();
    }

    showScreen(screenId) {
        Object.values(this.screens).forEach(s => s.classList.add('hidden'));
        this.screens[screenId].classList.remove('hidden');
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

new ExamTrainer();
