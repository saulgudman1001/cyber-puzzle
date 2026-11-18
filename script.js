const riddles = [
    {
        question: "Aku punya kepala, aku punya ekor, tapi aku tidak punya tubuh. Siapakah aku?",
        answer: "koin"
    },
    {
        question: "Bahasa pemrograman apa yang namanya diambil dari nama kelompok pelawak legendaris asal Inggris?",
        answer: "python"
    },
    {
        question: "Jika 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4, maka 6 = ?",
        answer: "3" // jumlah huruf dari kata 'enam' atau hitungan karakter (e-n-a-m = 4, tapi 'six' = 3 huruf) -> atau kita buat jawaban pasti: "tiga"
    },
    {
        question: "Kecil di HP, besar di laptop. Bisa dibagikan tapi tidak bisa disentuh fisik. Apakah itu?",
        answer: "file"
    },
    {
        question: "Ketik angka terakhir dari urutan ini: 2, 4, 8, 16, 32, ...",
        answer: "64"
    }
];

// Perbaikan khusus riddle ke-3 agar pasti jawabannya 'tiga' atau angka 3
riddles[2].answer = "tiga";

let currentIdx = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const winScreen = document.getElementById('win-screen');

const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

const questionEl = document.getElementById('riddle-question');
const answerInput = document.getElementById('answer-input');
const feedbackEl = document.getElementById('feedback');
const currentLevelEl = document.getElementById('current-level');
const scoreEl = document.getElementById('score');
const finalScoreEl = document.getElementById('final-score');

function startGame() {
    currentIdx = 0;
    score = 0;
    startScreen.classList.add('hidden');
    winScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    loadRiddle();
}

function loadRiddle() {
    answerInput.value = "";
    feedbackEl.innerText = "";
    if (currentIdx < riddles.length) {
        currentLevelEl.innerText = currentIdx + 1;
        questionEl.innerText = `[Teka-Teki #${currentIdx + 1}]\n\n` + riddles[currentIdx].question;
        scoreEl.innerText = score;
    } else {
        showWinScreen();
    }
}

function checkAnswer() {
    const userAns = answerInput.value.trim().toLowerCase();
    const correctAns = riddles[currentIdx].answer.toLowerCase();

    if (userAns === correctAns) {
        score += 20;
        feedbackEl.style.color = "#00ffcc";
        feedbackEl.innerText = ">> DEKRIPSI BERHASIL! Lanjut ke blok berikutnya...";
        currentIdx++;
        setTimeout(loadRiddle, 1200);
    } else {
        feedbackEl.style.color = "#ff3b5c";
        feedbackEl.innerText = ">> AKSES DITOLAK! Jawaban salah.";
    }
}

function showWinScreen() {
    quizScreen.classList.add('hidden');
    winScreen.classList.remove('hidden');
    finalScoreEl.innerText = score;
}

startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkAnswer);
restartBtn.addEventListener('click', startGame);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});
